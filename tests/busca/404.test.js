


module.exports = {
    '@tags':['smoke','404'],

    before: function (browser){
        let login = browser.page.login();
        let sidebar = browser.page.sidebar();

        login.with('zumbi@dospalmares.com.br', 'pwd123')
        sidebar.expectLoggedUser('Quilombo')
    },

    'quando eu busco um título não cadastrado': function (browser) {
        let movie = browser.page.movie()

        movie
            .setValue('@searchInput','Não é mais um besteirol americano')
            .click('@searchIcon')
    },

    'então devo ver uma mensagem de alerta': function (browser) {
        let movie = browser.page.movie() 
        
        movie
            .waitForElementVisible('@alertDanger',1000)
            .assert.containsText('@alertDanger','Puxa! não encontramos nada aqui :(')
    }
}