import React, { Component } from 'react'
import {updateVotes} from '../api'
// import ErrorDisplay from './ErrorDisplay'

export default class Votes extends Component {
    state = {
        voted : false,
        newVote : 0
        // err : null,
        // errMsg : false
    }

    render() {
        return (
            <div className="votesButton">
                <button onClick={() => this.changeVotes(1)}>▲</button>
                    <p className="votesText">{this.props.votes + this.state.newVote}</p>
                <button onClick={() => this.changeVotes(-1)}>▼</button>
                {/* {this.state.errMsg && (<p>Like Failed :(</p>)} */}
            </div>
        )
    }

    changeVotes = (num) => {
        const {article_id, comment_id} = this.props
        this.setState((currentState) => {
           return {
               newVote: currentState.newVote + num,
                voted: true
            }
        })
        updateVotes(article_id, comment_id, num)
        .catch((err) => {
            console.dir(err)
        })
    }
}
