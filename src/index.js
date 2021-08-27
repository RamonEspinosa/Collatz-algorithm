import { BRUTE_FORCE_TRIES, start } from "./collatz";

const init = async (retries) => {
  const seed = BRUTE_FORCE_TRIES + retries;
  console.log(`Trying with ${seed}`);
  const result = await start(seed);
  if (!result) await init(retries + 1n);
};
init(BRUTE_FORCE_TRIES ** 15n);
