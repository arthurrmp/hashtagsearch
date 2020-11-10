let express = require('express');
let router = express.Router();
const configTwitter = require("../configTwitter");
const cors = require('cors');
const configCors = require("../configCors");

router.get('/tweets', cors(configCors.corsOptions), (req, res) => {
  let db = new sqlite3.Database(`tweets/${hashtag}.db`);
  db.run('CREATE TABLE IF NOT EXISTS TWEETS (id integer primary key, tweet STRING, usuario STRING, horario DATETIME, status STRING)');
  db.close();
});

router.get('/tweets/buscar/:hashtag', cors(configCors.corsOptions), (req, res) => {
  configTwitter.obterTweetsPorHashtag(`${req.params.hashtag}`).then((tweets) => {
    res.send(tweets);
  }).catch((erro) => {
    res.status(400).send(erro);
  })
});

module.exports = router;
