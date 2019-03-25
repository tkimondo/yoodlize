var yoodlizeApp = {}

let browseCategories = require('../functions/browseCategories')
let categoriesList = require('../testAssets/categories')

module.exports = {
    beforeEach: browser => {
        yoodlizeApp = browser.page.yoodlizePage()
        yoodlizeApp.navigate()    
            .expect.element('@graphicText').text.to.equal('Find your thing.')
    },
    after: browser => {
        browser.end()
    },
    'Search': browser => {
        yoodlizeApp.click('@popUp')
        yoodlizeApp.search('item test', 'item Test 1')
    },
    'Search for an unavailable listing': browser => {
        yoodlizeApp.searchUnavailable('zzzzz', 'No Results')
    },
    'Search by category': browser => {
        categoriesList.forEach(category =>{
            browseCategories(yoodlizeApp, category)
        })

    }
/*    'Search By City': browser => {
        yoodlizeApp.searchByCity('AZ', 'item Test 1')
   },
*/}