/**
 * 创建一个独立的函数  
 * 使用 if/else 语句区分集合中的类型
 * @param {*} collection 
 */
function getCollectionValues(collection) {
    if (collection instanceof Array) {
        return collection;
    }
    if (collection instanceof Map) {
        return getMapValues(collection);
    }
    return getPlainObjectValues(collection);
}
