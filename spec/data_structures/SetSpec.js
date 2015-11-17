describe('Set', function() {
	var Set = require('../../lib/data_structures/Set');

	var set;

	beforeEach(function () {
		set = new Set();
	});

	it("should be able to add a new element", function() {
		var element = 3;

		expect(set.add(element)).toEqual(set);
	});

	it("should be able to get an element", function() {
		var stringElem = 'elem';
		var numElem = 14.23;
		set.add(stringElem);
		set.add(numElem);

		expect(set.get(stringElem)).toEqual(stringElem);
		expect(set.get(numElem)).toEqual(numElem);
	});

	it("should be able to check if element already has elem", function() {
		var element = 'elem';
		set.add(element);

		expect(set.has(element)).toBeTruthy();
		expect(set.has('unAddedElem')).toBeFalsy();
	});

	it("should return true when element is removed", function() {
		var element = 'elem';
		set.add(element);
		
		expect(set.remove(element)).toBeTruthy();
	});

	it("should return false when removed element isn't in set", function() {
		var elem = 24;

		expect(set.remove(elem)).toBeFalsy();
	});

	it("should be able to return the size of the set", function() {
		for (var i = 0; i < 50; i++) {
			set.add(i);
		}

		expect(set.size()).toEqual(50);
	});

	it("should be able to return all elements", function() {
		var num = 2;
		var string = 'string';
		var obj = {'object': 325};
		var mixed = ['array', 23, {'object': 'value'}];
		set.add(num);
		set.add(string);
		set.add(obj);
		set.add(mixed);

		expect(set.elements()).toEqual([num, string, obj, mixed]);
	});

});
