describe("identifyTargetNumber", () => {
  it("should expect index of 1 if target is 50 and this is array [8, 50, 7, -6, -2] ", () => {
    const arr = [8, 50, 7, -6, -2];
    const target = 50;
    const actual = linearSearch(arr, target);

    expect(actual).toEqual(1);
  });
  it("should expect -1 if target is 3 and array is [8, 22, 3, 0, -2] ", () => {
    const arr = [8, 22, 7, 0, -2];
    const target = 3;
    const actual = linearSearch(arr, target);
    expect(actual).toEqual(-1);
  });
  it("should return -1 when given the array [] and a target of 0", () => {
    const arr = [];
    const target = 0;
    const actual = identifyTargetNumber(arr, target);

    const result = linearSearch(arr, target);

    expect(result).toEqual(-1);
  });
  it("should return -1 when given the array [] and a target of 0", function () {
    const arr = [];
    const target = 0;

    const result = linearSearch(arr, target);

    expect(result).toEqual(-1);
  });
});
