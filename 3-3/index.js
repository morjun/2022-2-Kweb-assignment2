const { response } = require('express');
const express = require('express');
const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/factorial', (req, res) => {res.redirect(`/factorial/${req.query.number}`);});
app.get('/factorial/:number', (req, res) => {
    const factorial = (n) => {
        if (n === 0) return 1;
        else return n * factorial(n - 1);
    }
    return res.send(`${factorial(req.params.number)}`);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));