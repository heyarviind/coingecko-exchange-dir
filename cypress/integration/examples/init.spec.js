describe("Cypress", () => {
  it("visit app", () => {
    cy.visit("http://localhost:8000/");
    cy.get(".p-6:nth-child(1) > .hidden .inline-flex").click();
    cy.get(".w-6").click();
    cy.get(".text-center > .inline-flex").click();
    cy.get(".items-center:nth-child(2)").click();
    cy.get(".p-6:nth-child(5) > .hidden .inline-flex").click();
  });
});
