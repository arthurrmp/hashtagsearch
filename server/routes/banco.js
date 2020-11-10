
let express = require('express');
let router = express.Router();
const cors = require('cors');
const configCors = require("../configCors");
const configBanco = require("../configBanco");

const sqlite3 = require('sqlite3').verbose();

router.post('/tweet', cors(configCors.corsOptions), (req, res) => {
    configBanco.inserirNovoTweet(req.body).then((resultado) => {
        console.log(resultado);
        res.sendStatus(200);
        //res.send(resultado);
    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
});

router.get('/tweet/ultimo', cors(configCors.corsOptions), (req, res) => {
    configBanco.obterUltimoTweet(req.body.data).then((tweet) =>
        res.send(tweet)
    );
});

router.get('/tweets/exibidos', cors(configCors.corsOptions), (req, res) => {
    configBanco.obterTweetsExibidos(req.body.data).then((tweets) =>
        res.send(tweets)
    );
});




module.exports = router;
