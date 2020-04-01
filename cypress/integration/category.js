import { footerShouldExist, linkToTargetExist, titleLevelShouldBeVisible } from '../common';

describe(`The home page`, () => {

  beforeEach(() => {
    cy.visit('/blog/category/test');
  });

  it(`should show up title`, () => {
    cy.get('h1').contains(/test/i)
  });

  it(`should have the "built with" footer`, () => {
    footerShouldExist();
  });

  it(`should have a back link to home`, () => {
    linkToTargetExist('/');
  });

  it(`should have a title`, () => {
    titleLevelShouldBeVisible('h1');
  });

  it(`should click on each post link and redirect to a post`, () => {
    cy.get('a.post-link').click({ multiple: true });
		cy.url().should('include', '/post');
  });

	it(`should click on each category link and redirect to a category`, () => {
		cy.get('a.category-link').click({ multiple: true });
		cy.url().should('include', '/category');
	});

	it(`should go on category page when clicking oh the categories list`, () => {
    cy.get('a.category-list-link').click({ multiple: true });
		cy.url().should('include', '/category');
  });

});
