var userAcionts = {
    expectLoggedUser: function (name){
        return this
            .waitForElementVisible('@userInfo', 3000)
            .assert.containsText('@userInfo', name)

    }
}

module.exports = {
    commands: [userAcionts],
    elements: {
        userInfo: '.user .info span'
    }
}