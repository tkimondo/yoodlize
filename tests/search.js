var yoodlizeApp = {}

let browseByCategory = require('../testAssets/browseCategories.js')
let categoriesList = require('../testAssets/category.js')

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
    // type in keyword for available item
        yoodlizeApp.click('@popUp')
        yoodlizeApp.search('item test', 'item Test 1')
    },
    'Search for an unavailable listing': browser => {
    // type in keyword for unavailable item 
        yoodlizeApp.searchUnavailable('zzzzz', 'No Results')
    },
  'Search by category': browser => {
    // click each category  
        categoriesList.forEach(category =>{
            browseByCategory(yoodlizeApp, category.selector, category.name)
        })
    },
    'Search By City': browser => {
    // type in keyword for city
        yoodlizeApp.searchByCity('AZ', 'item Test 1')
    },
}