var assert = require('assert');
const { program } = require('commander');
const { isEven } = require('../src/utils/numberUtils');
const { getEvenIdsFromArray, getOddIdsFromArray, getMaxIdsFromArray, getCompletedIdsFromArray } = require('../src/controllers/arrayController');

describe('isEven function', function() {
    it('should return true for even numbers', function() {
        assert.strictEqual(isEven(2), true);
        assert.strictEqual(isEven(4), true);
        assert.strictEqual(isEven(10), true);
    });

    it('should return false for odd numbers', function() {
        assert.strictEqual(isEven(1), false);
        assert.strictEqual(isEven(3), false);
        assert.strictEqual(isEven(9), false);
        assert.strictEqual(isEven(3.2), false);

    });

    it('should return true for zero', function() {
        assert.strictEqual(isEven(0), true);
    });

    it('should throw for non-numeric input', function() {
        assert.throws(() => {
          isEven("asd");
        }, /error: number needs to be an number/);

    });
});



describe('getEvenIdsFromArray function', function() {
    it('should return an empty array for an empty input array', function() {
      const result = getEvenIdsFromArray([]);
      assert.deepStrictEqual(result, []);
    });
  
    it('should filter out objects with even ids', function() {
      const inputArray = [
        { id: 1, value: 'A' },
        { id: 2, value: 'B' },
        { id: 3, value: 'C' },
        { id: 4, value: 'D' },
      ];
  
      const result = getEvenIdsFromArray(inputArray);
  
      assert.deepStrictEqual(result, [
        { id: 2, value: 'B' },
        { id: 4, value: 'D' },
      ]);
    });
  
    it('should handle non-integer ids', function() {
      const inputArray = [
        { id: 1.5, value: 'A' },
        { id: 'not a number', value: 'B' },
        { id: 3, value: 'C' },
        { id: "", value: 'D' },
      ];
  
      assert.throws(() =>{
        getEvenIdsFromArray(inputArray);
      }, /error: Id is not an integer/);


    });
  
    it('should throw an error for non-array input', function() {
      assert.throws(() => {
        getEvenIdsFromArray('not an array');
      }, /error: 'array' needs to be an Array/);
    });
  });



  describe('getOddIdsFromArray function', function() {
    it('should return an empty array for an empty input array', function() {
      const result = getOddIdsFromArray([]);
      assert.deepStrictEqual(result, []);
    });
  
    it('should filter out objects with odd ids', function() {
      const inputArray = [
        { id: 1, value: 'A' },
        { id: 2, value: 'B' },
        { id: 3, value: 'C' },
        { id: 4, value: 'D' },
      ];
  
      const result = getOddIdsFromArray(inputArray);
  
      assert.deepStrictEqual(result, [
        { id: 1, value: 'A' },
        { id: 3, value: 'C' },
      ]);
    });
  
    it('should handle non-integer ids', function() {
      const inputArray = [
        { id: 1.5, value: 'A' },
        { id: 'not a number', value: 'B' },
        { id: 3, value: 'C' },
        { id: "", value: 'D' },
      ];
  
      assert.throws(() =>{
        getOddIdsFromArray(inputArray);
      }, /error: Id is not an integer/);


    });
  
    it('should throw an error for non-array input', function() {
      assert.throws(() => {
        getOddIdsFromArray('not an array');
      }, /error: 'array' needs to be an Array/);
    });
  });
  

  describe("getMaxIdsFromArray function", function(){

    it("should reduce the array to 3 items", function(){
      assert.deepEqual(getMaxIdsFromArray([1,2,3,4,5], 3), [1,2,3])
    })


    it('should throw an error for non array and non integer', function() {
      assert.throws(() => {
        getMaxIdsFromArray('not an array', 3);
      }, /error: 'array' needs to be an Array/);


      assert.throws(() => {
        getMaxIdsFromArray([1,2,3,4], "asdsad");
      }, /error: 'quantity' needs to be a number/);

    });

  })


  describe("getCompletedIdsFromArray function", function(){

    it("should return completed items", function(){
      assert.deepEqual(getCompletedIdsFromArray([
        {id:1, completed: true},
        {id: 2, completed: false},
        {id: 3, completed:true}
      ], true), [
        {id: 1, completed: true},
        {id: 3, completed: true}
      ])
    })

    it("should return not completed items", function(){
      assert.deepEqual(getCompletedIdsFromArray([
        {id:1, completed: true},
        {id: 2, completed: false},
        {id: 3, completed:true}
      ], false), [
        {id: 2, completed: false}
      ])
    })

    
    it("should throw when not an array", function(){
      assert.throws(() => {
        getCompletedIdsFromArray("[1,2,3,4]", true);
      }, /error: 'array' needs to be an Array/);
    })

    it("should throw when completed not a boolean", function(){
      assert.throws(() => {
        getCompletedIdsFromArray([1,2,3,4], "true");
      }, /error: 'completed' is not a boolean/);
    })
   
  });

  