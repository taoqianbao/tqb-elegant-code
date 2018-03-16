function getCollectionWeight(collection) {
    let collectionValues;
    if (collection instanceof Array) {
        collectionValues = collection;
    } else if (collection instanceof Map) {
        collectionValues = [...collection.values()];
    } else {
        collectionValues = Object.keys(collection).map(function (key) {
            return collection[key];
        });
    }
    return collectionValues.reduce(function (sum, item) {
        if (item == null) {
            return sum + 1;
        }
        if (typeof item === 'object' || typeof item === 'function') {
            return sum + 4;
        }
        return sum + 2;
    }, 0);
}

let myArray = [null, {}, 15];
let myMap = new Map([['functionKey', function () { }]]);
let myObject = { 'stringKey': 'Hello world' };
getCollectionWeight(myArray);  // => 7 (1 + 4 + 2)  
getCollectionWeight(myMap);    // => 4  
getCollectionWeight(myObject); // => 2