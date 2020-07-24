const express = require('express');
const app = express();
const moment = require('moment');
const exphbs = require('express-handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const logger = (req, res, next) => {
    console.log(`${moment().format()} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
  }
app.use(logger);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => 
    console.log(`Server started on port ${PORT}`));

app.get('/', (req, res) =>
    // res.send('test<')
    res.render('index')
);

app.post('/', (req, res) => {
        console.log(res.body);
        res.send({
            msg: 'test post'
        });
    }
);