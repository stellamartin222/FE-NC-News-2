import React from 'react'

export default function CommentsList({comment}) {
    return (
        <div className="commentBox">
            <h3>Created by: {comment.author}</h3>
            <p>{comment.body}</p>
        </div>
    )
}
