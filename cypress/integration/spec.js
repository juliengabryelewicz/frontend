describe('Main event', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('navigates to /blog', () => {
		cy.get('nav a').contains('Blog').click();
		cy.url().should('include', '/blog');
	});

	it('navigates to /blog from button view more articles', () => {
		cy.get('section#blog a').contains("Voir plus d'articles").click();
		cy.url().should('include', '/blog');
	});

	it('navigates to /page/cv from button', () => {
		cy.get('section#a-propos a').contains("En savoir plus").click();
		cy.url().should('include', '/page/cv');
	});

	it('navigates to a category', () => {
		cy.get('nav a').contains('Blog').click();
		cy.get('ul a:first').click();
		cy.url().should('match', /category/i);
	});

	it('navigates to a post from homepage', () => {
		cy.get('section#blog a:first').click();
		cy.url().should('match', /post/i);
	});

	it('navigates to a post from category', () => {
		cy.get('nav a').contains('Blog').click();
		cy.get('div.leading-normal:first a:first').click();
		cy.url().should('match', /post/i);
	});

	/*it('navigates to /page/cv', () => {
		cy.get('nav a').contains('Mon CV').click();
		cy.url().should('include', '/page/cv');
	});

	it('has the good title for page/cv', () => {
		cy.get('nav a').contains('Mon CV').click();
		cy.get('h1').should(($h1) => {
			expect($h1).to.contain('Mon Curriculum Vitae')
		});
	});*/
});
