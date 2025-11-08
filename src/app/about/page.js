// src/app/about/page.js

export default async function AboutPage() {

    const serverTime = new Date().toLocaleString()

    return (
        <main style={{ padding: 24 }}>
            <h1>关于页面（/about）</h1>
            <p>本页为服务器端渲染，下面的时钟由客户端组件实时更新。</p>
            <p>当前服务器时间：{serverTime}</p>
        </main>
    )
}
