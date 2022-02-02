import * as fs from "fs";

fs.readFile("Avengers_Endgame.srt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});
