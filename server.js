const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    sequelize.sync({ force: false });
  });