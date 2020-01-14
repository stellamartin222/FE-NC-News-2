import React, { Component } from 'react'

export default class Comments extends Component {
    state = {
        comments : [],
        isLoading : true
    }

    render() {
        return (
            <div>
                Here are some comments
            </div>
        )
    }

    componentDidMount() {

    }
}
