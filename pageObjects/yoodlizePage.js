var yoodlizeCommands = {
    //Click by text
    clickByText: function (text) {
        this.api.useXpath()
        this.click(`//*[text()="${text}"]`)
        this.api.useCss()

        return this
    },

    // create a user account
    accountSignUp: function (userSignUp) {

        this
            .clickText('Sign up')
            .waitForElementPresent('@signUpModal', 5000)
            .clickText('Sign up with Email')
            .waitForElementPresent('@firstName', 5000)

    // enter user credentials 
            .setValue('@firstName', 'Test')
            .setValue('@lastName', 'App')
            .setValue('@email', 'test@test.com')
            .setValue('@password', 'test@App')
            .setValue('@month', '1')
            .click('@ageVerification')
            .click('@login')
            .waitForElementPresent('@profileImage', 5000)


        return this
    },
    userLogIn: function (logInEmail, logInPassword) {
    // enter user Log In info
        this
            .waitForElementPresent('@logIn', 5000)
            .click('@logIn')
            .waitForElementPresent('@logInButton', 5000)
            .setValue('@email', logInEmail)
            .setValue('@password', logInPassword)
            .click('@logInButton')
            .waitForElementPresent('@profileImage', 5000)
        return this
    },
    userLogOut: function (userLogOut) {
    // Logout from user account
        this
            .waitForElementPresent('@profileImage')
            .click('@profileImage')
            .waitForElementPresent('@profileDropDown')
            .click('@logOut')
            .waitForElementNotPresent('@profileImage')
        return this
    },

    search: function (searchListing, searchResults) {
    // search for an existing listing
        this
        .setValue('@searchField', searchListing) 
        .click('@searchIcon')
        .expect.element('@listingItem').text.to.equal(searchResults).before(5000)
        return this
    },
    searchUnavailable: function (searchListing, noListing) {
    // search for a non existing listing
        this
        .setValue('@searchField', searchListing) 
        .click('@searchIcon')
        .expect.element('@noResults').text.to.equal(noListing).before(5000)
        return this
    },
    searchByCategory: function (searchCategory, categoryResults) {
    // search listing by category
        this
        .click('@searchLink')
        .waitForElementPresent('@enterCity', 5000)
        .setValue('@enterCity', searchCity)
        .waitForElementPresent('@cityOption', 5000)
        .click('@cityOption')
        .click('@searchButton')
        .expect.element('@listingItem').text.to.equal(searchResults).before(5000)
        return this
    },
    searchByCity: function (cityInfo, cityResults) {
    // search listing by City
        this
        .click('@searchLink')
        .waitForElementPresent('@enterCity', 5000)
        .setValue('@enterCity', cityInfo)
        .waitForElementPresent('@cityOption', 5000)
        .click('@cityOption')
        .click('@searchButton')
        .expect.element('@listingItem').text.to.equal(cityResults).before(5000)
        return this
    },
}

module.exports = {
    url: 'https://alpha.yoodlize.com/',
    commands: [yoodlizeCommands],
    elements: {
        signUpModal: '.SignupModal-root-3YXgm',
        logInModal: 'LoginModal-logInModalBody-1DMVi',
        ageVerification: 'i[class="fal fa-square primaryDark fa-2x"]',
        popUp: 'button[class="sc-uJMKN jtUFi sc-ifAKCX kvYMhQ"]',
        nextButton: 'button[class="m-mxx sc-uJMKN jtUFi sc-ifAKCX kvYMhQ"]',
        titleText: 'img[src="/images/logo/blueRaw.png"]',
        graphicText: 'div[class="sc-jqCOkK jrdbSa sc-gqjmRU dpJuAi"]',
        searchField: 'input[placeholder="Search for an item"]',
        enterCity: 'input[class="geosuggest__input"]',
        searchIcon: 'button[class="sc-uJMKN fpBmEu sc-ifAKCX kvYMhQ"]',
        searchButton: 'button[class="sc-uJMKN clrdLJ sc-ifAKCX kvYMhQ"]',
        listingImage: 'div[class="ListingPhotos-imageContent-1WAWo"]',
        listingItem: 'div[class="ListingItem-textEllipsis-2J6OR ListingItem-infoTitle-11IQO ListingItem-infoText-3hOq8 col-md-12 col-sm-12 col-xs-12"]',
        dashboardListing: 'div[class="sc-jqCOkK iZLUwS sc-gqjmRU dsbCNO"]',
        cityOption: '[class="geosuggest__item__matched-text"]',
        email: 'input[name="email"]',
        password: 'input[name="password"]',
        firstName: 'input[name="firstName"]',
        lastName: 'input[name="lastName"]',
        dashboard: '//div[text()="Dashboard"]',
        profileDropDown: '#basic-nav-dropdown',
        inbox: '//div[text()="Inbox"]',
        myListings: '//div[text()="myListings"]',
        categoryResults: 'div[class="sc-kaNhvL kwEqLx"]',
        listYourItem: {
            selector: '//span[text()="List an Item"]',
            locateStrategy: 'xpath'
        },
        noResults: {
            selector: '//span[text()="No Results"]',
            locateStrategy: 'xpath'
        },
        searchLink: {
            selector: '//span[text()="Search"]',
            locateStrategy: 'xpath'
        },
        messages: {
            selector: '//span[text()="Messages"]',
            locateStrategy: 'xpath'
        },
        listStuff: {
            selector: '//span[text()="List Your Stuff"]',
            locateStrategy: 'xpath'
        },
        profileImage: 'img[class="sc-hrWEMg dGaker"]', //'.dropdown-toggle'
        logIn: {
            selector: '//*[contains(text(), "Log in")]',
            locateStrategy: 'xpath'
        },
        signUp: {
            selector: '//span[text()="Sign up"]',
            locateStrategy: 'xpath'
        },
        dashboardProfile: {
            selector: '//span[text()="Dashboard"]',
            locateStrategy: 'xpath'
        },
        myListingsProfile: {
            selector: '//*[contains(text(), "My Listings")]',
            locateStrategy: 'xpath'
        },
        reviews: {
            selector: '//*[contains(text(), "Reviews")]',
            locateStrategy: 'xpath'
        },
        reservations: {
            selector: '//*[contains(text(), "Reservations")]',
            locateStrategy: 'xpath'
        },
        editProfile: {
            selector: '//*[contains(text(), "Edit Profile")]',
            locateStrategy: 'xpath'
        },
        accountSettings: {
            selector: '//*[contains(text(), "Account Settings")]',
            locateStrategy: 'xpath'
        },
        logOut: {
            selector: '(//button[@class="btn btn-link"])[2]',
            locateStrategy: 'xpath'
        },
        logInButton: 'button[type="submit"]',
        notifications: {
            selector: '//*[contains(text(), "Notifications")]',
            locateStrategy: 'xpath'
        },
        tools: {
            selector: '(//div[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[1]',
            locateStrategy: 'xpath'
        },
        outdoorGear: {
            selector: '(//div[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[2]',
            locateStrategy: 'xpath'
        },
        electronics: {
            selector: '(//div[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[3]',
            locateStrategy: 'xpath'
        },
        partyEquipment: {
            selector: '(//div[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[4]',
            locateStrategy: 'xpath'
        },
        recreationalVehicles: {
            selector: '(//div[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[5]',
            locateStrategy: 'xpath'
        },
        clothing: {
            selector: '(//div[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[6]',
            locateStrategy: 'xpath'
        },
        homeKitchen: {
            selector: '(//div[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[7]',
            locateStrategy: 'xpath'
        },
        toysGames: {
            selector: '(//div[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[8]',
            locateStrategy: 'xpath'
        },
        lawnGarden: {
            selector: '(//div[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[9]',
            locateStrategy: 'xpath'
        },
        sportingGoods: {
            selector: '(//div[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[10]',
            locateStrategy: 'xpath'
        },
        businessEquipment: {
            selector: '(//div[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[11]',
            locateStrategy: 'xpath'
        },
        venues: {
            selector: '(//div[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[12]',
            locateStrategy: 'xpath'
        },
        localExperts: {
            selector: '(//div[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[13]',
            locateStrategy: 'xpath'
        },
        experiences: {
            selector: '(//div[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[14]',
            locateStrategy: 'xpath'
        },
        misc: {
            selector: '(//div[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[15]',
            locateStrategy: 'xpath'
        },
    }
}