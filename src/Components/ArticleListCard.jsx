import React from 'react'
import { Link } from '@reach/router'

export default function ArticleListCard({article}) {
    return (
        <li key={article.article_id} className="articleCards">
            <h2>{article.title}</h2>
            <p>{article.created_at}</p>
            <p>{article.author}</p>
            <Link to={`/articles/${article.article_id}`}>
            <button className="topicCardButtons">View full article</button>
            </Link>
        </li>
    )
}
