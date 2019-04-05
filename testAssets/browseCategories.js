module.exports = (yoodlizePage, categorySelector, categoryName) => {
    yoodlizePage.click('@titleText')
        .waitForElementPresent('@browseCategories', 5000)
    yoodlizePage.click(categorySelector)
        .waitForElementPresent('@categoryResults', 1000)
        .expect.element('@categoryResults').text.to.contain(categoryName, 5000)
}