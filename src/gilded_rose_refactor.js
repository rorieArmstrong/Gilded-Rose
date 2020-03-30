class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      let obj = this.items[i];
      if (obj.name == 'Sulfuras, Hand of Ragnaros') {
        sulfuras(obj);
      }else if(obj.name == 'Aged Brie') {
        agedBrie(obj);
      }else if(obj.name == 'Backstage passes to a TAFKAL80ETC concert'){
        concertTicket(obj);
      }else{
        normal(obj);
      }
      this.items[i] = obj
    };

    function agedBrie(item){
      if (item.quality < 50) {
        item.quality += 1;
      }
      if (item.sellIn < 0 && item.quality < 50) {
        item.quality += 1;
      }
      item.sellIn -= 1;
    };

    function concertTicket(item){
      if (item.sellIn < 0){
        item.quality = 0;
      }else{
        if (item.quality < 48 && item.sellIn < 6) {
          item.quality += 1;
        }
        if (item.sellIn < 11 && item.quality < 49) {
          item.quality += 1;
        }
        if (item.quality < 50) {
          item.quality += 1;
        }}
      item.sellIn -= 1;
    };

    function sulfuras(item){

    };

    function normal(item){
      if(item.quality>0){
        item.quality -= 1;}
      if (item.sellIn < 0 && item.quality>0) {
        item.quality -= 1;}
      item.sellIn -= 1;
    };
    return this.items
  };
};

module.exports = {
  Item,
  Shop
}
