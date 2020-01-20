import React from 'react'
import {deleteComment} from '../api'
import moment from "moment"
import Votes from './Votes'

export default function CommentsList({comment, hideComment}) {
    const removeComment = () => {
        if (comment.author === "jessjelly") {
            deleteComment(comment.comment_id)
            hideComment(comment.comment_id)
        }
    }

    return (
        <div className="commentBox">
            <div className="commentsBoxLeft">
            <h3>Created by: {comment.author}</h3>
            <p>{moment(comment.created_at).calendar()}</p>
            <p>{comment.body}</p>
            </div>
            <div className="commentsBoxRight">
            <Votes comment_id={comment.comment_id} votes={comment.votes} className="commentFloatRight"/>
            <button onClick={() => removeComment()} className="commentFloatRight">Delete Comment</button>
            </div>
        </div>
    )
}
