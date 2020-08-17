describe("Test plotly chart", function () {
  it("test visibility and length", function () {
    cy.visit("/");
    cy.get(".js-plotly-plot")
      .should("be.visible")
      .and((chart) => {
        expect(chart.height()).to.be.greaterThan(200);
      })

      .find("g.point")
      .should("have.length", 4);
  });
});
