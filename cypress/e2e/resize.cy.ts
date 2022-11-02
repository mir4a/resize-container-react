describe("Test resize", () => {
  it("resize in both dimensions", () => {
    cy.visit(
      "http://localhost:61000/?story=resize-container--with-initial-size"
    );

    cy.get("[data-testid='resize-container']")
      .then((el) => {
        const width = el.width();
        const height = el.height();
        console.log("width", width);
        console.log(el[0].getBoundingClientRect());
        return { width, height, el };
      })
      .as("resizeContainer");

    cy.get("[data-testid='resize-both-handle']")
      .then(($handle) => {
        const left = $handle[0].getBoundingClientRect().left;
        const top = $handle[0].getBoundingClientRect().top;

        console.log("left", left);
        console.log("top", top);
        return cy
          .get("[data-testid='resize-both-handle']")
          .trigger("mousedown", { which: 1, pageX: left, pageY: top })
          .trigger("mousemove", {
            which: 1,
            pageX: 100 + left,
            pageY: 100 + top,
          })
          .trigger("mouseup");
      })
      .as("resizeBothHandle");

    cy.get("@resizeContainer").should((container) => {
      const { width, height, el } = container;
      const neWidth = el.width();
      const newHeight = el.height();
      expect(neWidth).to.equal(+width + 100);
      expect(newHeight).to.equal(+height + 100);
    });
  });
});
