import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";


const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));




app.get("/", (req, res) => {

    const d = new Date();
    const day = d.getDay();

    if (day > 0 & day < 6) {
        res.render(__dirname + "/views/index.ejs", {
            dayType: "weekday",
            advice: "work hard"
        });
    }
    else {
        res.render(__dirname + "/views/index.ejs", {
            dayType: "weekend",
            advice: "fun"
        });
    }
    });





app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });