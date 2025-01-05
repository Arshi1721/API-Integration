import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;



app.use(bodyParser.urlencoded({ extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

const apiURL = "https://api.thecatapi.com/v1/breeds";

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(apiURL);
        res.render("index", { breeds: response.data, error: null });
       // console.log(response.data);
    } catch (error) {
        res.render("index", { breeds: [], error: error.message});
        // console.error("Error fetching data:", error.message);
        // res.status(500).send("An error occured while fetching data.");

    }
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}.`);
});
