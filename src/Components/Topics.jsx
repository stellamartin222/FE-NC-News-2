import React, { Component } from 'react'
import TopicsCards from "./TopicsCards"
import {getAllTopics} from "../api.js"

export default class Topics extends Component {
    state ={
        topics : [],
        isLoading : true
    }

    render() {
        const {topics, isLoading} = this.state
        if (isLoading) return <p>Loading Topics...</p>
        return (
            <ul className="topicsBox">
                {topics.map((topic) => {
                    return <TopicsCards topic={topic}/>
                })}
        </ul>
        )
    }

    componentDidMount() {
       return getAllTopics()
        .then((data) => {
            this.setState({
                topics : data,
                isLoading :false
            })
        })
    }
}
