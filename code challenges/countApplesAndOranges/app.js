function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let nosOfApples = 0;
  let nosOfOranges = 0;
  let orangesArray;
  let applesArray;
  let newApples = apples
    .map((x) => x + a)
    .filter((val) => val > s - 1 && val <= t);
  let newOranges = oranges
    .map((x) => x + b)
    .filter((val) => val > s - 1 && val <= t);
  return [newApples.length, newOranges.length];
}
