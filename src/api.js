import axios from 'axios'

const baseUrl = "https://sm-ncnews.herokuapp.com/api"

export const getAllTopics = () => {
    return axios
    .get(`${baseUrl}/topics`)
    .then(({data})=> {
        return data.topics
    })
}

export const getAllArticles = (topic, sortBy) => {
    return axios
    .get(`${baseUrl}/articles`,
    {params : {
        topic : topic,
        sort_by:sortBy
    }})
    .then(({data})=> {
        return data.articles
    })
}

export const getArticle = (article_id) => {
    return axios 
    .get(`${baseUrl}/articles/${article_id}`)
    .then(({data}) => {
        return data.article
    })
} 

export const getAllComments = (article_id) => {
    return axios
        .get(`${baseUrl}/articles/${article_id}/comments`)
        .then(({data}) => {
            return data.comments
        })
}

export const updateArticleVotes = (article, vote) => {
    return axios
    .patch(`${baseUrl}/articles/${article}`, 
    {inc_votes: vote})
    .then(() => {
        console.log('updated')
    })
}

export const postComment = (article, comment) => {
    return axios
    .post(`${baseUrl}/articles/${article}/comments`, 
    {username: 'jessjelly', body: comment})
    .then(() => {
        console.log('complete')
    })
}