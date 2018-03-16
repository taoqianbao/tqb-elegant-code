/**
 * 
 * 
 */



function getWeightByType(value) {
    const WEIGHT_NULL_UNDEFINED = 1;
    const WEIGHT_PRIMITIVE = 2;
    const WEIGHT_OBJECT_FUNCTION = 4;
    if (value == null) {
        return WEIGHT_NULL_UNDEFINED;
    }
    if (typeof value === 'object' || typeof value === 'function') {
        return WEIGHT_OBJECT_FUNCTION;
    }
    return WEIGHT_PRIMITIVE;
}
// Code extracted into getMapValues()
function getMapValues(map) {
    return [...map.values()];
}
// Code extracted into getPlainObjectValues()
function getPlainObjectValues(object) {
    return Object.keys(object).map(function (key) {
        return object[key];
    });
}
function getCollectionWeight(collection) {
    let collectionValues;
    if (collection instanceof Array) {
        collectionValues = collection;
    } else if (collection instanceof Map) {
        collectionValues = getMapValues(collection);
    } else {
        collectionValues = getPlainObjectValues(collection);
    }
    return collectionValues.reduce(function (sum, item) {
        return sum + getWeightByType(item);
    }, 0);
}
let myArray = [null, {}, 15];
let myMap = new Map([['functionKey', function () { }]]);
let myObject = { 'stringKey': 'Hello world' };
getCollectionWeight(myArray);  // => 7 (1 + 4 + 2)  
getCollectionWeight(myMap);    // => 4  
getCollectionWeight(myObject); // => 2