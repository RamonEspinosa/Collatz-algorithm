import { addMembers, deleteSet, getMembers } from "./utils/redis";

export const RESULTS = "RESULTS";
/* All the numbers we know that lead up in the 4, 2, 1 loop. */
export const BRUTE_FORCE_TRIES = 295_147_905_179_352_825_856n;
/* The collatz algorithm. If the number is even, divide it by 2. If the number is odd, do 3*x+1 */
export const collatz = (x) => {
  // is even
  if (x % 2n === 0n) {
    return x / 2n;
  }
  // is odd
  return 3n * x + 1n;
};
export const start = async (hailstone) => {
  const result = collatz(hailstone);
  if (hailstone > BRUTE_FORCE_TRIES) {
    const previousResults = await getMembers(RESULTS);
    if (previousResults.includes(result)) {
      console.log(
        `YOU FOUND A MAGICAL NUMBER!!!!! ${hailstone}. TELL EVERYONE ABOUT IT ASAP!!!!`
      );
      return previousResults.concat(hailstone);
    }
    await addMembers(RESULTS, result);
    return start(result);
  }
  await deleteSet(RESULTS);
  return false;
};
