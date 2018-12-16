const simpleCache = function( store={} ) {
    this.store = store;
}

simpleCache.prototype.stash = function(key, data) {
    if(!this.store[key]){
        this.store[key] = [];
    }
    
    this.store[key].push(data);
}

simpleCache.prototype.get = function(key) {
    if(!key && !this.store[key]){
        return undefined;
    }

    return this.store[key];
}

module.exports = {
    simpleCache
}