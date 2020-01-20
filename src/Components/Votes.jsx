import React, { Component } from 'react'
import {updateArticleVotes, updateCommentVotes} from '../api'
// import ErrorDisplay from './ErrorDisplay'

export default class Votes extends Component {
    state = {
        voted : false,
        newVote : 0,
        err : null,
        errMsg : false
    }

    render() {
        const {voted} = this.state
        return (
            <div className="votesButton">
                <button disabled={voted} onClick={() => this.changeVotes(1)}>▲</button>
                    <p className="votesText">{this.props.votes + this.state.newVote}</p>
                <button disabled={voted} onClick={() => this.changeVotes(-1)}>▼</button>
                {this.state.errMsg && (<p>Like Failed</p>)}
            </div>
        )
    }

    changeVotes = (num) => {
        const {article_id, comment_id} = this.props
        this.setState((currentState) => {
           return {
               newVote: currentState.newVote + +num,
                voted: true
            }
        })
        if(article_id) {
        updateArticleVotes(article_id, num)
        } else {
        updateCommentVotes(comment_id, num)
        }
    }
}
