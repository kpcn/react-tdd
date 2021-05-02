describe("Adding a restaurant", () => {
  it("display the restaurant name in the list", () => {
    const name = "Yummy Yummy";

    cy.visit("http://localhost:1234");

    cy.get('[data-test="newRestaurantName"]').should("not.be.visible");

    cy.get('[data-test="addRestaurantButton"]').click();

    cy.get('[data-test="newRestaurantName"]').type(name);

    cy.get('[data-test="saveNewRestaurantButton"]').click();

    cy.get('[data-test="newRestaurantName"]').should("not.be.visible");

    cy.contains(name);
  });
});
