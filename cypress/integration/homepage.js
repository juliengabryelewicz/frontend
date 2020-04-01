import { footerShouldExist, linkToTargetExist, titleLevelShouldBeVisible } from '../common';

describe(`The home page`, () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it(`should show up title`, () => {
    cy.get('h1').contains(/développeur web habitant à Arques dans le Pas-de-Calais./i)
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
    cy.get('#blog a.post-link').click({ multiple: true });
		cy.url().should('include', '/post');
  });

	it(`should click on each category link and redirect to a category`, () => {
		cy.get('#blog a.category-link').click({ multiple: true });
		cy.url().should('include', '/category');
	});

});
