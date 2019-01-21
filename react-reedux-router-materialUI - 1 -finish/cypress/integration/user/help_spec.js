describe('Help', () => {
    beforeEach(() => {
        cy.visit('/help')
    })

    it('Become A Host', () => {
        cy.get('button').contains('Become A Host').click()
        cy.visit('/becomeahost')
    })

    it('Sign Up', () => {
      cy.get('button').contains('Sign Up').click()
      cy.visit('/signup')
    })

    it('Login', () => {
      cy.get('button').contains('Log In').click()
      cy.visit('/login')
    })

    it('Sign In', () => {
        cy.contains('h1', 'Help')
    })

    it('For Login', () => {
        cy.get('.MuiPaper-root-20 > :nth-child(5)').contains('log in').click()
        cy.visit('/login')
    })

    it('For Signup', () => {
        cy.get('.MuiPaper-root-20 > :nth-child(9)').contains('sign up').click()
        cy.visit('/signup')
    })

})