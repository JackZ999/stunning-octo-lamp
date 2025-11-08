'use client'

import { useState } from 'react'

export default function Counter() {

    const [n, setN] = useState(0)

    return (
        <div style={{ marginTop: 16 }}>

            <p>计数器：{n}</p>

            <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
                <button onClick={() => setN(n + 1)}>+1</button>
                <button onClick={() => setN(n - 1)}>-1</button>
                <button onClick={() => setN(0)}>重置</button>
            </div>

        </div>
    )
}
