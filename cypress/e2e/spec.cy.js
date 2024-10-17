describe('Input nome', () => {
  it('Exibir nome na tela', () => {
    cy.visit('http://localhost:5173/');
    cy.get('#nome').type('João');
    cy.contains('Olá, João');
  });
});
