const articlesCounter = (articles) => {
    let codingCounter = 0
    let footballCounter = 0
    let cookingCounter = 0

    for (let index = 0; index < articles.length; index++) {
        if (articles[index].topic === "coding") {
            codingCounter++
        } else if (articles[index].topic === "football") {
            footballCounter++
        } else {
            cookingCounter++
        }
    }

    return [codingCounter, footballCounter, cookingCounter]
}

const mostRecentArticle = (articles) => {
    let recentArticle = articles[0]

    for (let index = 0; index < articles.length; index++) {
        if(articles[index].created_at>recentArticle.created_at) {
            recentArticle = articles[index]
        }
    }

    return recentArticle
}

const mostCommentedArticle = (articles) => {
    let mostComment = articles[0]

    for (let index = 0; index < articles.length; index++) {
        if(articles[index].comment_count>mostComment.comment_count) {
            mostComment = articles[index]
        }
    }
    return mostComment
}

module.exports = {
    articlesCounter,
    mostRecentArticle,
    mostCommentedArticle
}