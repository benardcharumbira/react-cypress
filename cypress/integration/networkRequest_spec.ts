describe("Test network requests", function () {
  it("GET request", function () {
    cy.visit("http://localhost:3001");
    // cy.request("https://jsonplaceholder.cypress.io/todos/1").as("todo");
    cy.request("https://jsonplaceholder.cypress.io/comments").as("comments");

    cy.get("@comments")
      .should((response) => {
        expect(response.body).to.have.length(500);
        expect(response).to.have.property("headers");
        expect(response).to.have.property("duration");
        expect(response.status).to.eq(200);
      })
      .then(console.log);
  });

  it("POST request", function () {
    cy.visit("http://localhost:3001");
    cy.request("POST", "https://jsonplaceholder.typicode.com/posts", {
      id: 1,
      title: "Title",
      body: "Lorem ipsum",
      userId: 1,
    }).then((response) => {
      // response.body is automatically serialized into JSON
      expect(response.body).to.have.property("title", "Title"); // true
    });
    cy.wait(2000);
  });

  it("GET posted content request", function () {
    cy.visit("http://localhost:3001");
    cy.request("https://jsonplaceholder.typicode.com/posts/1").then(
      console.log
    );
  });
});
