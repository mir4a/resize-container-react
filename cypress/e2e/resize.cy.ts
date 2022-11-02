describe("Test resize", () => {
  it("resize in both dimensions", () => {
    cy.visit(
      "http://localhost:61000/?story=resize-container--with-initial-size"
    );

    cy.get("[data-testid='resize-container']")
      .then((el) => {
        const width = el.width();
        const height = el.height();

        return { width, height, el };
      })
      .as("resizeContainer");

    cy.get("[data-testid='resize-both-handle']")
      .then(($handle) => {
        const left = $handle[0].getBoundingClientRect().left;
        const top = $handle[0].getBoundingClientRect().top;

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
      // @ts-expect-error-next-line
      const { width, height, el } = container;
      const neWidth = el.width();
      const newHeight = el.height();
      expect(neWidth).to.equal(+width + 100);
      expect(newHeight).to.equal(+height + 100);
    });
  });
});
