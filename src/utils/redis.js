import Redis from "redis";
export const client = Redis.createClient();
export const getMembers = (key) =>
  new Promise((resolve, reject) => {
    client.SMEMBERS(key, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
export const addMembers = (key, ...members) =>
  new Promise((resolve, reject) => {
    client.SADD(key, members, (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
export const deleteSet = (key) =>
  new Promise((resolve, reject) => {
    client.DEL(key, (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
