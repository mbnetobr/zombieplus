module.exports = {
'@disabled': false,

'email não informado': (browser) => {
        let login = browser.page.login()

        login
            .with('', 'pwd123')
            .expectAlertInfo('Opps. Cadê o email?')
    }
}