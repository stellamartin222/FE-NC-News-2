const { expect } = require('chai');
const {articlesCounter, mostRecentArticle, mostCommentedArticle} = require('../Utils/utilFunctions')

describe('articlesCounter', () => {
    it('will return an array of [1,0,0] when given 1 coding article', () => {
        expect(articlesCounter([{topic: "coding"}])).to.eql([1, 0, 0])
    });
    it('will return an array of [1,1,0] when given 1 coding article and 1 football article', () => {
        expect(articlesCounter([{topic: "coding"}, {topic: "football"}])).to.eql([1, 1, 0])
    })
    it('will return an array of [1,1,1] when given 1 coding article and 1 football article and 1 cooking article', () => {
        expect(articlesCounter([{topic: "coding"}, {topic: "football"}, {topic: "cooking"}])).to.eql([1, 1, 1])
    })
    it('will return an array of [1, 2, 3]', () => {
        expect(articlesCounter([
            {topic: "coding"}, 
            {topic: "football"},
            {topic: "football"}, 
            {topic: "cooking"}, 
            {topic: "cooking"}, 
            {topic: "cooking"}
        ])).to.eql([1, 2, 3])
    })
});

describe('mostRecentArticle', () => {
    it('will return the most recent article in a list of 2', () => {
        expect(mostRecentArticle([{created_at :"2018-05-30T16:59:13.341+01:00"}, {created_at :"2017-05-30T16:59:13.341+01:00"}])).to.eql({created_at : "2018-05-30T16:59:13.341+01:00"})
    });
    it('will return the most recent article in a list of multiple', () => {
        expect(mostRecentArticle([{created_at :"2018-05-30T16:59:13.341+01:00"}, {created_at :"2017-05-30T16:59:13.341+01:00"}, {created_at :"2019-05-30T16:59:13.341+01:00"}])).to.eql({created_at : "2019-05-30T16:59:13.341+01:00"})
    });
});

describe.only('mostCommentedArticle', () => {
    it('will return the most recent article in a list of 2', () => {
        expect(mostCommentedArticle([{comment_count : '4'}, {comment_count : '5'}])).to.eql({comment_count : '5'})
    });
    it('will return the most recent article in a list of multiple', () => {
        expect(mostCommentedArticle([{comment_count : '8'}, {comment_count : '2'}, {comment_count : '4'}])).to.eql({comment_count : '8'})
    });
});