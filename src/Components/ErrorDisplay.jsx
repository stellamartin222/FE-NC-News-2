import React from 'react'

export default function ErrorDisplay({status, msg}) {
    console.log(msg)
    return (
        <div>
            <h2>{status || 500}</h2>
            <h3>{msg || "idk fam"}</h3>
        </div>
    )
}
