describe('The Home Page', function() {
    it('successfully loads', function() {
      cy.visit('http://localhost:3000')
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

      it('Login', () => {
        cy.get('button').contains('Log In').click()
        cy.visit('/login')
      })

  })