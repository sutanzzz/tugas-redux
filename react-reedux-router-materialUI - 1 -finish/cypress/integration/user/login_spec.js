describe('Log In', () => {
    beforeEach(() => {
        cy.visit('/login')
    })

    it('Sign In', () => {
        cy.contains('h1', 'Sign in')
    })

    it('Become A Host', () => {
        cy.get('button').contains('Become A Host').click()
        cy.visit('/becomeahost')
    })

    it('Help', () => {
      cy.get('button').contains('Help').click()
      cy.visit('/help')
    })

    it('Sign Up', () => {
      cy.get('button').contains('Sign Up').click()
      cy.visit('/signup')
    })
    
    it('link to Sign Up', () => {
        cy.contains('Sign Up Instead')
        .should('have.attr', 'href', '/signup')
    })

    it('requires email', () => {
        cy.get('form').contains('Sign in').click()
        cy.get('.SignIn-form-113')
        .should('contain','The email address is badly formatted')
    })

    it('navigates to / on successful login', () => {
        cy.get('input[name=email]').type('sutanz@ginting.com')
        cy.get('input[name=password]').type('123456{enter}')

        cy.url('/becomeahost')
    })

})