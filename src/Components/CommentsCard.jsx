import React from 'react'
import {deleteComment} from '../api'
import moment from "moment"
import Votes from './Votes'

export default function CommentsList({comment}) {
    const removeComment = () => {
        if (comment.author === "jessjelly") {
            deleteComment(comment.comment_id)
        }
    }

    return (
        <div className="commentBox">
            <h3>Created by: {comment.author}</h3>
            <p>{moment(comment.created_at).calendar()}</p>
            <p>{comment.body}</p>
            <Votes comment_id={comment.comment_id} votes={comment.votes}/>
            <button onClick={() => removeComment() }>Delete Comment</button>
        </div>
    )
}
