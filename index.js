const fs = require("fs");
const { parse } = require("csv-parse");

const results = [];
fs.createReadStream("kepler-data.csv")
  .on("data", (data) => {
    results.push(data);
  })
  .on("error", (err) => {
    console.log(err);
  })
  .on("end", () => {
    console.log(results);
  });
