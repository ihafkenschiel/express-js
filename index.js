import Express from "express";
import { products } from "./products.js";

const app = Express();
const port = 3000;
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.get("/products/:id", (req, res) => {
    // res.send(req.params);
    res.json(products.find((product) => {
        return +req.params.id === product.id
    }));
})

app.post("/add", (req, res) => {
    console.log(req.body.id);
    res.sendStatus(200);
})

app.listen(port, () => console.log(`Listening on port ${port}`))