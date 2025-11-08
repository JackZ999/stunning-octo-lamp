// src/app/layout.js
import './globals.css'

export const metadata = {
  title: '我的 Next.js 学习',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>

        <header style={{ padding: 16, borderBottom: '1px solid #ddd' }}>
          <a href="/" style={{ marginRight: 12 }}>首页</a>
          <a href="/about">关于</a>
        </header>

        <div style={{ padding: 24 }}>
          {children}
        </div>

        <footer style={{ padding: 16, borderTop: '1px solid #ddd', marginTop: 24 }}>
          <small>全站共享的页脚（来自 src/app/layout.js）</small>
        </footer>

      </body>
    </html>
  )
}
