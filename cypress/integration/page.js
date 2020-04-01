import { footerShouldExist, linkToTargetExist, titleLevelShouldBeVisible } from '../common';

describe(`The home page`, () => {

  beforeEach(() => {
    cy.visit('/page/cv');
  });

  it(`should show up title`, () => {
    cy.get('h1').contains(/Mon Curriculum Vitae/i)
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
