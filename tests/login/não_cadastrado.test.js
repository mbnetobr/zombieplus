module.exports = {
    'não cadastrado': (browser) => {
        let login = browser.page.login()

        login
            .with('user@dospalmares.com.br', 'pwd123')
            .expectAlertDanger('Usuário e/ou senha inválidos')
    }
}