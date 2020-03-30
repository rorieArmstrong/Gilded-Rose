var {expect} = require('chai');
var {Shop, Item} = require('../src/gilded_rose_refactor.js');
describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
  });

  it("sulfuras", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Sulfuras, Hand of Ragnaros");
    expect(items[0].quality).to.equal(80)
  });

  it("Aged Brie", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 15, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Aged Brie");
    expect(items[0].quality).to.equal(21)
  });

  it("Concert Soon", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].quality).to.equal(22)
  });

  it("Concert Very Soon", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 2, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].quality).to.equal(23)
  });

  it("Concert Yesterday", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", -1, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].quality).to.equal(0)
  });

  it("Multiple Items", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) , new Item("Fire", 10, 10 )]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[1].name).to.equal("Fire");
    expect(items[1].quality).to.equal(9);
  });
});
