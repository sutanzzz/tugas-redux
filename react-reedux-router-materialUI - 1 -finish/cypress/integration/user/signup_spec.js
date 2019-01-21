describe('Sign up', () => {
    beforeEach(() => {
        cy.visit('/signup')
    })

    it('Sign up', () => {
        cy.contains('h1', 'Sign Up')
    })

    it('Become A Host', () => {
        cy.get('button').contains('Become A Host').click()
        cy.visit('/becomeahost')
    })

    it('Help', () => {
      cy.get('button').contains('Help').click()
      cy.visit('/help')
    })

    it('Login', () => {
      cy.get('button').contains('Log In').click()
      cy.visit('/login')
    })
    
    it('link to Sign In', () => {
        cy.contains('Sign In Instead')
        .should('have.attr', 'href', '/login')
    })

    it('requires email', () => {
        cy.get('button').contains('sign up').click()
        cy.get('.MuiPaper-root-20 > :nth-child(5)')
        .should('contain','The email address is badly formatted')
    })

    it('input sign up form', () => {
        cy.get('input[name=firstName').type('sutanto')
        cy.get('input[name=lastName').type('otnat')
        cy.get('input[name=email').type('sutanto@pmb.com')
        cy.get('input[name=password').type('123')
        cy.get('input[name=city').type('Kota Batam')
        cy.get('input[name=state').type('Kepulauan Riau')
        cy.get('input[name=zip').type('29432')
        cy.get('input[name=country').type('Indonesia')

        cy.url('/becomeahost')
    })

    it('register/signup', () => {
        cy.get('input[name=firstName').type('sutanto')
        cy.get('input[name=lastName').type('otnat')
        cy.get('input[name=email').type('sutanto4@pmb.com')
        cy.get('input[name=password').type('123456')
        cy.get('input[name=city').type('Kota Batam')
        cy.get('input[name=state').type('Kepulauan Riau')
        cy.get('input[name=zip').type('29432')
        cy.get('input[name=country').type('Indonesia{enter}')
        cy.get('.MuiPaper-root-20 > .MuiButton-root-77').click()
    })

})