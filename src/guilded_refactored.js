/**
 * Class Item
 */
class Item {
    constructor(name, sell_in, quality) {
        this.name = name;
        this.sell_in = sell_in;
        this.quality = quality;
    }
}

/**
 * Class Products
 */
class Products {
    /**
     * items {Array[Item]}
     * @param items
     */
    constructor(items=[]) {
        this.items = items;
    }

    /**
     * Update quality main function
     * @param  items {Array[Item]}
     * @return items
     */
    update_quality = () => {
        for (let i = 0; i < this.items.length; i++) {
            switch (this.items[i].name) {
                case 'Sulfuras, Hand of Ragnaros':
                    if(this.items[i].quality < 50 && this.items[i].quality > 0) {
                        this.items[i].sell_in = this.items[i].sell_in - 1;
                        this.items[i].quality = this.items[i].quality + 1
                    }break;
                case 'Aged Brie':
                    if(this.items[i].quality < 50 && this.items[i].quality >= 0) {
                        this.items[i].sell_in = this.items[i].sell_in - 1;
                        this.items[i].quality = this.items[i].quality + 1
                    }
                    break;
                case 'Backstage passes to a TAFKAL80ETC concert':
                    if(this.items[i].quality < 50 && this.items[i].quality > 0) {
                        this.items[i].sell_in = this.items[i].sell_in - 1;
                        this.items[i].quality = this.items[i].quality + 1
                        if (this.items[i].sell_in < 11) {
                            this.items[i].quality = this.items[i].quality + 1
                        }
                        if (this.items[i].sell_in < 6) {
                            this.items[i].quality = this.items[i].quality + 1
                        }
                    }
                    break;
            }
        }

        return this.items;
    }
}