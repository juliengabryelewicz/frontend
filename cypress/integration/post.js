import { footerShouldExist, linkToTargetExist, titleLevelShouldBeVisible } from '../common';

describe(`The home page`, () => {

  beforeEach(() => {
    cy.visit('/blog/post/test');
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

  it(`should go on category page`, () => {
    cy.get('a.category-list-link').click({ multiple: true });
		cy.url().should('include', '/category');
  });

});
