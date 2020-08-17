describe("test frappe chart", function () {
  it("shows bar chart", () => {
    cy.visit("http://localhost:3002/");
    // cy.wait(2000);
    cy.get(".frappe-chart")
      .should("be.visible")
      .and((chart) => {
        // we can assert anything about the chart really
        expect(chart.height()).to.be.greaterThan(200);
      })

      .find("g.dataset-0 rect")
      .should("have.length", 8);
  });
});
