import PostList from './components/PostList.jsx'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Server Component ：在服务器端执行
export default async function HomePage() {

  const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
    .then(r => r.json())
  const messages = await fetchMessages()

  return (
    <main style={{ padding: 24 }}>
      <h1>首页（含 Server + Client 组合）</h1>
      <PostList posts={posts} />

      <hr style={{ margin: '24px 0' }} />

      <h2>留言区（表单示例）</h2>
      <form action={submitMessage} style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input
          name="author"
          placeholder="昵称"
          style={{ padding: 8, width: 100 }}
        />
        <input
          name="message"
          placeholder="请输入留言"
          style={{ padding: 8, width: 240 }}
        />
        <button type="submit">提交</button>
      </form>

      {/* 留言显示 */}
      <ul style={{ marginTop: 16 }}>
        {messages.length === 0 ? (
          <p>暂无留言</p>
        ) : (
          messages.map(m => (
            <li key={m.id} style={{ marginBottom: 8 }}>
              <strong>{m.author || '匿名'}</strong>：🗨️ {m.text}
              <small style={{ color: '#666' }}>（{new Date(m.createdAt).toLocaleString()}）</small>
            </li>
          ))
        )}
      </ul>

    </main>
  )
}

async function fetchMessages() {
  return prisma.message.findMany({
    take: 2,
    orderBy: { id: 'desc' },
  })
}


export async function submitMessage(formData) {
  'use server'
  const text = formData.get('message')
  const author = formData.get('author')
  if (!text) return
  await prisma.message.create({ data: { text, author } })
  console.log('💬 写入数据库留言：', { author, text })
  revalidatePath('/')
}