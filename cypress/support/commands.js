Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){

    cy.get('#firstName').type('Uilton')
    cy.get('#lastName').type('Duarte')
    cy.get('#email').type('uilton@gmail.com')
    cy.get('#open-text-area').type('Teste', {delay: 0})
    // cy.get('button[type=submit]').click()
    cy.contains('button', 'Enviar').click()

})