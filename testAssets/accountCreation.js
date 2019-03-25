module.exports = (yoodlizePage, firstName, lastName, email, password) => {
    yoodlizePage

// enter user info to create an account
        .setValue('@firstName', firstName)
        .setValue('@lastName', lastName)
        .setValue('@email', email) 
        .setValue('@password', password)
}