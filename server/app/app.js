const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    let data = {
        status:"Good",
        message: "API Page v1",
        code: 200
    }
    res.json(data);
});

const APP_NAME = "Server"
const port = 4000
app.listen(port, () => console.log(`\nApp:${APP_NAME} listening on port ${port}!\n`));