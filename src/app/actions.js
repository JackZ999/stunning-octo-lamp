'use server'

export async function likeOnServer(id) {
  console.log('💾 服务器收到点赞请求：', id)
  // 模拟一些服务器逻辑（比如写数据库）
  return { success: true, message: `已在服务器记录点赞：${id}` }
}
