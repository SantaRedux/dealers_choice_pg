const express = require('express');
const morgan = require('morgan');
const viewPainting = require('./routes/viewPainting');
const paintingsList = require('./routes/paintingsList');

const app = express();

app.use(morgan('dev'));

app.use(express.static('./public'));

const { syncAndSeed, models: { Painting } } = require('./db.js');

app.get('/', (req, res, next) => {
    res.redirect('/sneakers');
});

app.get('/paintings', async (req, res, next) => {
    try {
        const paintings = await Painting.findAll();
        res.send(paintingsList);
    } catch (ex) { next(ex) }
})

app.get('/paintings/:id', async (req, res, next) => {
    try {
        res.send(viewPainting(id));
    } catch (ex) { next(ex) }
})

app.listen(1337);