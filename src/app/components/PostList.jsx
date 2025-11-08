'use client'

import { useState } from 'react'
import { likeOnServer } from '../actions.js'

export default function PostList({ posts }) {
    const [likes, setLikes] = useState(Array(posts.length).fill(0))

    async function handleLike(index, id) {
        const newLikes = [...likes]
        const newLikesNum = Math.floor(Math.random() * 6)
        newLikes[index] += newLikesNum
        setLikes(newLikes)

        // // 在浏览器端发 POST 请求到 /api/like
        // try {
        //     const res = await fetch('/api/like', {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({ id, likes: newLikesNum }),
        //     })
        //     const data = await res.json()
        //     console.log('服务器返回：', data)
        // } catch (err) {
        //     console.error('点赞请求失败：', err)
        // }

        try {
            // 直接调用服务器函数（Next.js 会自动发送请求）
            const result = await likeOnServer(id)
            console.log('服务器返回：', result)
        } catch (err) {
            console.error('调用服务器动作失败：', err)
        }
    }

    return (
        <div>
            <h2>文章列表（Client + API 示例）</h2>
            <ul>
                {posts.map((p, i) => (
                    <li key={p.id} style={{ marginBottom: 12 }}>
                        <strong>{p.title}</strong>
                        <p>{(p.body || '').slice(0, 60)}...</p>
                        <button onClick={() => handleLike(i, p.id)}>
                            👍 {likes[i]} 赞
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
