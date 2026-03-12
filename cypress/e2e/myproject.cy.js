describe('Portfolio Interactivity Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173');
    });

    it('should toggle Dark Mode and check background color', () => {
        cy.get('nav').contains(/Dark Mode|Karanlık Mod/i).parent().find('button').as('darkModeBtn');

        cy.get('@darkModeBtn').click();
        cy.get('html').should('have.class', 'dark');

        cy.wait(500);

        cy.get('@darkModeBtn').click({ force: true });
    });

    it('should switch language and update content', () => {
        cy.get('button').contains(/TÜRKÇE'YE GEÇ/i).click();
        cy.contains('Yetenekler').should('be.visible');

        cy.get('button').contains(/SWITCH TO ENGLISH/i).click();
        cy.contains('Skills').should('be.visible');
    });

    it('should trigger Axios post request when Hire Me button is clicked', () => {
        cy.intercept('POST', 'https://jsonplaceholder.typicode.com/posts').as('postHireMe');

        cy.get('section').find('button').contains(/Hire Me|Beni İşe Al/i).click();

        cy.wait('@postHireMe').its('response.statusCode').should('eq', 201);
        cy.get('.Toastify__toast--success', { timeout: 10000 }).should('be.visible');
    });
});