import React, { Component } from 'react'
import {postComment} from '../api'

export default class CommentForm extends Component {
    state = {
        commentInput : ''
    }
    render() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <label> Add a Comment : 
                    
                <input className="commentInputBox" onChange={this.handleChange} type="text" placeholder="Write here...."/>
                </label>
                <button>Post</button>
            </form>
        )
    }

    handleChange = (event) => {
        this.setState({commentInput : event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        postComment(this.props.article_id, this.state.commentInput)
    }
}
