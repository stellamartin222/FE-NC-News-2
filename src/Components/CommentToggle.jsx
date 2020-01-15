import React, { Component } from 'react'

export default class CommentToggle extends Component {
    state = {
        onDisplay : false
    }
     
    toggleDisplay = () => {
        this.setState((currentState) => {
            return {onDisplay : !currentState.onDisplay}
        })
    }

    render() {
        const {onDisplay} = this.state
        const {children, hideMessage, showMessage} = this.props
        return (
            <div>
            <button onClick={this.toggleDisplay}>
                {onDisplay? `${hideMessage}` : `${showMessage}`}
            </button>
                {onDisplay && children}
            </div>
        )
    }
}
