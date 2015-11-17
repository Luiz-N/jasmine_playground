function Set () {
	this._collection = {};
}

Set.prototype.has = function(element) {
	return !!this._collection[JSON.stringify(element)];
};

Set.prototype.add = function(element) {
	var stringified = JSON.stringify(element);
	this._collection[stringified] = true;
	return this;
};

Set.prototype.remove = function(element) {
	if (this.has(element)) {
		return delete this._collection[element];
	}
	else {
		return false;
	}
};

Set.prototype.get = function(element) {
	return this.has(element) ? element : false;
};

Set.prototype.size = function() {
	return Object.keys(this._collection).length;
};

Set.prototype.elements = function() {
	result = [];
	for (var elem in this._collection) {
		elem = JSON.parse(elem);
		result.push(elem);
	}
	return result;
};


module.exports = Set;