interface Item {
    name: string;
    quality: number;
    sellIn: number;
}﻿

// //Non Regular Items
const isLegendary = (item: Item): boolean => {
    return item.name === 'Sulfuras, Hand of Ragnaros';
}
const isAgedBrie = (item: Item): boolean => {
    return item.name === 'Aged Brie';
}
const isBackstagePass = (item: Item): boolean => {
    return item.name === 'Backstage passes to a TAFKAL80ETC concert';
}
const isConjuredItem = (item: Item): boolean => {
    return item.name === "Conjured Item";
}
// //If item isLegendary return the number else return number -1
const getUpdatedSellIn = (item: Item): number => {
    if (isLegendary(item)) {
        return item.sellIn;
    }
    return item.sellIn - 1;
}

// const expiredItem = (item: Item): number => {
//     let newQuality = item.quality -1;
//     if (item.sellIn <= 0)
// }

// //If item quality is more than 0 take 1 or return 0 as quality is not expected to go below 0
const getUpdatedRegularItemQuality = (item: Item): number => {
    let newQuality = item.quality - 1;
    if(item.sellIn <= 0){
        newQuality --;
    }
    if(newQuality <= 0){
        newQuality = 0
    }
    return newQuality;
}
// //Update special item Backstage passes 
const getUpdatedBackstagePassQuality = (item: Item): number => {
    let newQuality = item.quality + 1;
    if (item.sellIn< 11) {
        newQuality ++;
    }
    if (item.sellIn< 6) {
        newQuality ++;
    }
    if (item.sellIn <= 0){
        newQuality = 0;
    }
    if (newQuality >= 50) {
        newQuality = 50;
    }
    return newQuality;
}
// // Update special item Aged Brie
const getUpdatedAgedBrieQuality = (item: Item): number => {
    let newQuality = item.quality + 1;
    if (item.sellIn <= 0) {
        newQuality++;
    }
    if (newQuality >= 50) {
        newQuality = 50;
    }
    return newQuality;
}


///Update Conjured Item
const getUpdatedConjuredItemQuality = (item: Item) : number => {
    let newQuality = item.quality - 2;
    if(item.sellIn <= 0){
        newQuality = newQuality -2;
    }
    if (newQuality < 0){
        newQuality = 0;
    }
    return newQuality;
}

// //Get updated quality 
// //if Item is regular -1 off your item (call getUpdatedRegularItemQuality)
const getUpdatedQuality = (item: Item): number => {
    
    if (isLegendary(item)) {
        return item.quality;
    }

    if (isAgedBrie(item)) {
        return getUpdatedAgedBrieQuality(item);
    }

    if (isBackstagePass(item)) {
        return getUpdatedBackstagePassQuality(item);
    }
    if (isConjuredItem(item)){
        return getUpdatedConjuredItemQuality(item);
    }

    return getUpdatedRegularItemQuality(item);
}
// //This is if things have already expired.
export const updateQuality = (items: Item[]): Item[] => {
    items.forEach((item: Item) => {
        item.quality = getUpdatedQuality(item);
        item.sellIn = getUpdatedSellIn(item);
    });

    return items;
}