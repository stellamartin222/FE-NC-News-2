import React, { Component } from 'react'
import {getAllArticles} from "../api"

export default class Home extends Component {
    state = {
        articles : []
    }

    render() {
        console.log(this.state.articles)
        return (
            <div>
                Home
            </div>
        )
    }

    componentDidMount() {
        return getAllArticles()
        .then((data)=> {
            this.setState({
                articles : data
            })
        })
    }
}
