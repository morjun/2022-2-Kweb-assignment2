const { response } = require("express");
const express = require("express");
const port = 3000;
const app = express();
const { runQuery } = require("./database");

const getUsername = async (uid) => {
    const sql = `select name from users where id = ?`;
    results = await runQuery(sql, uid);
    return results[0];
}

const getFare = async (uid) => {
    const sql = `select round(sum(trains.distance)*(types.fare_rate/1000),-2) as fare from users inner join tickets on users.id = tickets.user and tickets.user = ? inner join trains on tickets.train = trains.id inner join types on types.id = trains.type  group by tickets.user`;
    results = await runQuery(sql, uid);
    return results[0];
}

const getAvailability = async (tid) => {
    const sql = `select types.max_seats = count(*) as flag from tickets inner join trains on tickets.train = trains.id inner join types on types.id = trains.type where tickets.train = ? group by tickets.train`;
    results = await runQuery(sql, tid);
    return results[0];
}


app.get("/fare", async (req, res) => {
  const { uid } = req.query;
  const username = await(getUsername(uid));
  const fare = await(getFare(uid));
  res.send(`Total fare of ${username.name} is ${fare.fare}KRW.`);
});

app.get("/train/status", async (req, res) => {
  const { tid } = req.query;
  const flag = await(getAvailability(tid));
  if (flag.flag)
    res.send(`train ${tid} is not sold out`);
  else
    res.send(`train ${tid} is sold out`);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
