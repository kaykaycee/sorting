describe('Bubble Sort', function(){
	beforeEach(function () {
  		spyOn(window, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
	});
	it('sorting [2, 4, 3, 1, 5] involves 4 swaps', function () {
  		bubbleSort([2, 4, 3, 1, 5]);
  		expect(window.swap.calls.count()).toEqual(4);
	});

	beforeEach(function () {
  		spyOn(window, 'comparison').and.callThrough(); // replace existing `tootsiepop['lick']` method
	});
	it('sorting [2, 4, 3, 1, 5] involves 20 comparisons', function () {
  		bubbleSort([2, 4, 3, 1, 5]);
  		expect(window.comparison.calls.count()).toEqual(20);
	});

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
    it('handles an array with a single element', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
  });
    it('handles an array with multiple elements', function(){
    expect( bubbleSort([2, 4, 3, 1, 5]) ).toEqual( [1, 2, 3, 4, 5] );
  });
});

// swaps by iterations:
// [2, 3, 1, 4, 5]	-> swaps: 2
// [2, 1, 3, 4, 5]	-> swaps: 1
// [1, 2, 3, 4, 5]	-> swaps: 1
// totals swaps = 4

// total comparisons = 20

