const path = require('path');
const compression = require('compression');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Handlebars Configuration
const hbs = exphbs.create({ helpers });

app.use(compression());

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
