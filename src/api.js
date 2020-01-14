import axios from 'axios'

export const getAllTopics = () => {
    return axios
    .get("https://sm-ncnews.herokuapp.com/api/topics")
    .then(({data})=> {
        return data.topics
    })
}

export const getAllArticles = (topic) => {
    return axios
    .get("https://sm-ncnews.herokuapp.com/api/articles",
    {params : {
        topic : topic
    }})
    .then(({data})=> {
        return data.articles
    })
}

export const getArticle = (article_id) => {
    return axios 
    .get(`https://sm-ncnews.herokuapp.com/api/articles/${article_id}`)
    .then(({data}) => {
        return data.article
    })
} 