# Collatz algorithm

This is a small node.js project that tries to find a number that tries to solve the collatz conjecture. If you do not know what is the collatz conjecture, I really reccommend you checking out this [video](https://www.youtube.com/watch?v=094y1Z2wpJg) ([Here](https://www.youtube.com/watch?v=q_dvxXc7d2Y) is the spanish version as).

## Prerequisites

- Node.js ^10.4.0
- Redis

## Running the algorithm

1. Clone the repository
2. Start your redis server (`sudo service redis-server start`)
3. Run `npm i` to install all dependencies.
4. Run `npm start` and wait for the program to stop.
5. If you ever happen to find a number that does not end up in a 4-2-1 loop, then save it since it might be extremely rare.

## License

MIT License
