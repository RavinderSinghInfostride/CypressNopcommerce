let newsCommentData
before(() => {
    cy.fixture('CommentOnNewsData').then((testData) => {
        newsCommentData = testData
    })
})

class NewsDescriptionPage {
    commentTitleInputBox = "//input[@class='enter-comment-title']"
    commentInputBox = "//textarea[@class='enter-comment-text']"
    submitCommentButton = "//button[contains(@class,'news-item-add-comment-button')]"
    commentAddedVerify = "//div[contains(text(),'News comment is successfully added.')]"

    commentOnNews() {
        cy.xpath(this.commentTitleInputBox).type(newsCommentData.title)
        cy.xpath(this.commentInputBox).type(newsCommentData.comment)
        cy.xpath(this.submitCommentButton).click()
        cy.xpath(this.commentAddedVerify).should('have.text', 'News comment is successfully added.')
        cy.screenshot()
    }
}
export default NewsDescriptionPage