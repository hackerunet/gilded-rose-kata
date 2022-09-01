/**
 * Unit tests evaluation
 * Subjects: "Aged Brie", "Sulfuras, Hand of Ragnaros", "Backstage passes to a TAFKAL80ETC concert"
 * Results: 3 specs 0 failures at Aug 31 2022.
 */
describe("Tests result", function() {
  it("must return the right result - Aged Brie: 1, 1", () => {
    // The original items passed to the method
    const items = [
      new Item("Aged Brie", 2, 0),
    ];
    // The result the code returned
    const expectedResult = [
      new Item("Aged Brie", 1, 1),
    ];
    const gildedRose = new Products(items);
    const test = gildedRose.update_quality();

    expect(test).toEqual(expectedResult);
  });

  it("must return the right result: Sulfuras, Hand of Ragnaros - 0,80", () => {
    // The original items passed to the method
    const items = [
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
    ];
    // The result the code returned
    const expectedResult = [
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
    ];
    const gildedRose = new Products(items);
    const test = gildedRose.update_quality();

    expect(test).toEqual(expectedResult);
  });

  it("must return the right result: Backstage passes - 14, 21", () => {
    // The original items passed to the method
    const items = [
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    ];
    // The result the code returned
    const expectedResult = [
      new Item("Backstage passes to a TAFKAL80ETC concert", 14, 21),
    ];
    const gildedRose = new Products(items);
    const test = gildedRose.update_quality();

    expect(test).toEqual(expectedResult);
  });

});
