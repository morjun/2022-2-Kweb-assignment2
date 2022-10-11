const { response } = require('express');
const express = require('express');
const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));

const getBody = (req,res) => {
    return res.send(Object.keys(req.body).map(k => `${k}: ${req.body[k]}`).join('\n'));
}

app.get('/', (req, res) => {
    return res.send(Object.keys(req.query).map(k => `${k}: ${req.query[k]}`).join('\n'));
});

app.post('/', getBody);
app.put('/', getBody);
app.delete('/', getBody);

app.listen(port, () => console.log(`Server listening on port ${port}!`));