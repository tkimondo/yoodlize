var yoodlizeApp = {}
let createAccount = require('../testAssets/accountCreation.js')
let userData = require('../testAssets/userData.js')

var clickByText = (browser, text) => {
    browser
        .useXpath()
        .click(`//*[text()="${text}"]`)
        .useCss()
}
module.exports = {
    beforeEach: browser => {
        yoodlizeApp = browser.page.yoodlizePage()
        yoodlizeApp.navigate()
            .expect.element('@graphicText').text.to.equal('Find your thing.')
    },
    after: browser => {
        browser.end()
    },
    'Create a user account': browser => {
    // open Sign Up modal
    yoodlizeApp.click('@popUp')
          .click('@signUp')
            .waitForElementPresent('@signUpModal', 5000)
            .clickByText('Sign up with Email')

    // enter user info
        createAccount(yoodlizeApp, userData.firstName, userData.lastName, userData.email, userData.password)
        yoodlizeApp.click('@ageVerification') // check age verification selection box
            .clickByText('Sign Up')
    },
    'Log In/Logout of created account': browser => {
    // user Log In
        yoodlizeApp.userLogIn('test@test.com', 'test@App')

    // user log out
        yoodlizeApp.click('@profileDropDown')
        yoodlizeApp.click('@logOut')
        yoodlizeApp.waitForElementPresent('@logIn', 5000)

    },
        
}
