var yoodlizeApp = {}

module.exports = {
    beforeEach: browser => {
        yoodlizeApp = browser.page.yoodlizePage()
        yoodlizeApp.navigate()    
            .expect.element('@graphicText').text.to.equal('Find your thing.')
    },
    after: browser => {
        browser.end()
    },
    'Search for available listing ': browser => {
        yoodlizeApp.click('@popUp')
        yoodlizeApp.search('item test', 'item Test 1')
    },
    'Search for an unavailable listing': browser => {
        yoodlizeApp.searchUnavailable('zzzzz', 'No Results')
    },
    'Search by category': browser => {
/*        categoriesList.forEach(category =>{
            browseCategories(yoodlizeApp, category)
        })
*/
        yoodlizeApp.click('@tools')
            .waitForElementPresent('@categoryResults', 5000)
            .expect.element('@categoryResults').text.to.contain(' Tools ', 5000)
        yoodlizeApp.click('@titleText')
        yoodlizeApp.click('@outdoorGear')
            .waitForElementPresent('@categoryResults', 5000)
            .expect.element('@categoryResults').text.to.contain('Outdoor Gear', 1000)
        yoodlizeApp.click('@titleText')
        yoodlizeApp.click('@electronics')
            .waitForElementPresent('@categoryResults', 5000)
            .expect.element('@categoryResults').text.to.contain('Electronics', 1000)
        yoodlizeApp.click('@titleText')
        yoodlizeApp.click('@partyEquipment')
            .waitForElementPresent('@categoryResults', 5000)
            .expect.element('@categoryResults').text.to.contain('Party Equipment', 1000)
        yoodlizeApp.click('@titleText')
        yoodlizeApp.click('@recreationalVehicles')
            .waitForElementPresent('@categoryResults', 5000)
            .expect.element('@categoryResults').text.to.contain('Recreational Vehicles', 1000)
        yoodlizeApp.click('@titleText')
        yoodlizeApp.click('@clothing')
            .waitForElementPresent('@categoryResults', 5000)
            .expect.element('@categoryResults').text.to.contain('Clothing', 1000)
        yoodlizeApp.click('@titleText')
        yoodlizeApp.click('@homeKitchen')
            .waitForElementPresent('@categoryResults', 5000)
            .expect.element('@categoryResults').text.to.contain('Home and Kitchen', 1000)
        yoodlizeApp.click('@titleText')
        yoodlizeApp.click('@toysGames')
            .waitForElementPresent('@categoryResults', 5000)
            .expect.element('@categoryResults').text.to.contain('Toys and Games', 1000)
        yoodlizeApp.click('@titleText')
        yoodlizeApp.click('@lawnGarden')
            .waitForElementPresent('@categoryResults', 5000)
            .expect.element('@categoryResults').text.to.contain('Lawn and Garden', 1000)
        yoodlizeApp.click('@titleText')
        yoodlizeApp.click('@sportingGoods')
            .waitForElementPresent('@categoryResults', 5000)
            .expect.element('@categoryResults').text.to.contain('Sporting Goods', 1000)
        yoodlizeApp.click('@titleText') 
        yoodlizeApp.click('@businessEquipment')
            .waitForElementPresent('@categoryResults', 5000)
            .expect.element('@categoryResults').text.to.contain('Business Equipment', 1000)
        yoodlizeApp.click('@titleText')
        yoodlizeApp.click('@venues')
            .waitForElementPresent('@categoryResults', 5000)
            .expect.element('@categoryResults').text.to.contain('Venues', 1000)
        yoodlizeApp.click('@titleText')
        yoodlizeApp.click('@localExperts')
            .waitForElementPresent('@categoryResults', 5000)
            .expect.element('@categoryResults').text.to.contain('Local Experts', 1000)
        yoodlizeApp.click('@titleText')
        yoodlizeApp.click('@experiences')
            .waitForElementPresent('@categoryResults', 5000)
            .expect.element('@categoryResults').text.to.contain('Experiences', 1000)
        yoodlizeApp.click('@titleText')
        yoodlizeApp.click('@misc')
            .waitForElementPresent('@categoryResults', 5000)
            .expect.element('@categoryResults').text.to.contain('Misc', 1000)


    },
    'Search By City': browser => {
        yoodlizeApp.searchByCity('AZ', 'item Test 1')
    },
}