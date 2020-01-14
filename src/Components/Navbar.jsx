import React from 'react'
import {Link} from '@reach/router'

export default function Navbar() {
    return (
        <nav className="navBar">
            <Link className="navLink" to="/">Home</Link>{"|"}
            <Link className="navLink" to="/topics">Topics</Link> {"|"}
            <Link className="navLink" to="/articles">Articles</Link>
        </nav>
    )
}
