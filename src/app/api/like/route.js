// src/app/api/like/route.js

export async function POST(request) {

    const body = await request.json()
    const { id, likes } = body

    console.log('📩 收到点赞请求：', { id, likes })

    // await new Promise(resolve => setTimeout(resolve, 1000))

    // 这里我们只是模拟返回一个成功结果
    return new Response(
        JSON.stringify({ success: true, message: `已记录点赞：${id}`, serverTime: new Date().toLocaleString() }),
        {
            headers: { 'Content-Type': 'application/json' },
            status: 200,
        }
    )
}
