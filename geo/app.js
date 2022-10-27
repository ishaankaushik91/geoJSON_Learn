import express from "express";
import "./dbConnect.js";
import points from "./schema.js";
let app = express();
let port = 5000;

// Consumer Key --> JylDOkOfom4ibnGRueBrxhbkhYGCvuaP
// Provider --> mapquest

app.use(express.json());

app.post("/addPoint", async (req, res, next) => {
    try {
        
        let newData = new points(req.body);
        await newData.save();

        return res.status(200).json({
            success : true,
            data : newData
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({error : "Internal Server Error"});
    }
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});