///<reference path="../../../typings/express/express.d.ts"/>
import * as  express from 'express';

var router = express.Router();

router.get("/", (req, res) => {
    res.render("index.html");
});

export default router;