const unroll = require( "./unroll" );

const smallerSquare = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"]
];

const square = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  test( "unroll works correctly", () =>
  {
    expect( unroll( square ) ).toEqual( [
      1, 2, 3, 4,
      5, 6, 7, 8,
      9, 10, 11, 12,
      13, 14, 15, 16
    ] );
  } );

  test("unroll works correctly", () => {
    expect(unroll(smallerSquare)).toEqual(
      'a b c d e f g h i'.split(' ')
    );
  });
});
