import React, { Component } from 'react'
import {getAllArticles} from "../api"

export default class Home extends Component {
    state = {
        articles : []
    }

    render() {
        return (
            <div>
                <h2>WHATEVER THE HECK I WANT</h2>
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
