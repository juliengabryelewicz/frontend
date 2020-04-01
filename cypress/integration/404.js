import { footerShouldExist, linkToTargetExist, titleLevelShouldBeVisible } from '../common';

describe(`The 404 page`, () => {

  beforeEach(() => {
    cy.visit('/404', {"failOnStatusCode": false});
  });

  it(`should show up 404 title for unknown links`, () => {
    cy.get('h1').contains(/404/i)
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

});
