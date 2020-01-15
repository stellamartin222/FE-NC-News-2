import React, { Component } from 'react'
import {updateArticleVotes} from '../api'
import ErrorDisplay from './ErrorDisplay'

export default class Votes extends Component {
    state = {
        voted : false,
        newVote : 0,
        err : null,
        errMsg : false
    }

    render() {
        if (this.state.err) return <ErrorDisplay err={this.state.err}/>
        return (
            <div className="votesButton">
                <button onClick={() => this.changeVotes(1)}>▲</button>
                <p>votes : </p>
                    {this.props.votes + this.state.newVote}
                <button onClick={() => this.changeVotes(-1)}>▼</button>
                {this.state.errMsg && (<p>Like Failed :(</p>)}
            </div>
        )
    }

    changeVotes = (num) => {
        this.setState((prevState) => {
           return {
               newVote: prevState.newVote + num,
                voted: true
            }
        })
        updateArticleVotes(this.props.article_id, this.state.newVote)
        // .catch((err) => {
        //     this.setState({
        //         newVote : 0,
        //         err : err,
        //         errMsg : true
        //     })
        // })
    }
}
