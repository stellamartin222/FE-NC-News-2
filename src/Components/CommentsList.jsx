import React, { Component } from 'react'
import { getAllComments } from '../api'
import CommentsCard from './CommentsCard'
import CommentForm from './CommentForm'

export default class Comments extends Component {
    state = {
        comments : [],
        isLoading : true
    }

    render() {
        const {comments, isLoading} = this.state
        if (isLoading) return <p>Loading...</p>
        return (
            <div>
                <ul>
                <CommentForm article_id={this.props.article_id} addNewComment={this.addNewComment}/>
                {comments.map((comment) => {
                    return <li key={comment.comment_id} className="noBulletPointsPlease">
                        <CommentsCard comment={comment} hideComment={this.removeComment}/>
                    </li>
                })}
                </ul>
            </div>
        )
    }

    removeComment = (comment_id) => {
        this.setState(currentState => ({
            comments : currentState.comments.filter(comment => comment.comment_id !== comment_id )
        }));
    }

    addNewComment = (comment) => {
        this.setState((currentState) => {
            return {
                comments : [comment, ...currentState.comments]
            }
        })
    }

    fetchComments() {
        return getAllComments(this.props.article_id)
            .then((comments) => {
                this.setState({
                    comments : comments,
                    isLoading : false
                })
            })
    }

    componentDidMount() {
        this.fetchComments()
    }
}
