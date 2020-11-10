// Arquivo que contém funções com operações no banco de dados, por exemplo, inserir hashtag no banco, obter último tweet (para exibição no telão).

const sqlite3 = require(`sqlite3`);
const moment = require('moment'); 
const caminhoDB = `database/tweets.db`;



/**
 * Cria a tabela tweets no banco SQLITE se não for existente, 
 */
function criarBancoSeInexistente() {
    let db = new sqlite3.Database(caminhoDB);
    db.exec(`CREATE TABLE IF NOT EXISTS TWEETS (id_interno INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, id STRING, nome STRING, tweet STRING, usuario STRING, foto STRING, horario DATETIME)`);
    db.close();
}

/**
 * Obtém último tweet para exibição no telão
 */
async function obterUltimoTweet() {
    let db = new sqlite3.Database(caminhoDB);
    let promise = await new Promise((resolve, reject) => {
        db.get(`SELECT * FROM TWEETS ORDER BY id_interno DESC`, (err, tweet) => {
            if (err) {
                reject(err);
            } else {
                resolve(tweet);
            }
            db.close();
        });
    }).catch(err => { throw err });
    return promise;
}


/**
 * Insere novo tweet no banco para exibição no telão
 * @param tweet 
 */
async function inserirNovoTweet(tweet) {
    let promise = await new Promise((resolve, reject) => {
        let db = new sqlite3.Database(caminhoDB);
        db.run(`insert into tweets (id, nome, tweet, usuario, foto, horario) values (?, ?, ?, ?, ?, ?)`, [tweet.id, tweet.nome, tweet.tweet, tweet.usuario, tweet.foto, tweet.horario], (error) => {
            if (error) {
                console.error(error);
                db.close();
                reject(error);
            } else {
                db.close();
                resolve();
            }
        });
    }).catch(err => { throw err });
    return promise;
}


/**
 * Obtém o histórico de tweets exibidos no telão no dia determinado
 * @param dia 
 */
async function obterTweetsExibidos(dia) {
    let promise = await new Promise((resolve, reject) => {
        let db = new sqlite3.Database(caminhoDB);
        if (!dia) {
            dia = moment(new Date());
        } else {
            dia = moment(new Date(dia));
        }
        if (!dia.isValid()) {
            reject('Data inválida')
        }
        // Preparação de dia passado por parâmetro no formato da Twitter API para ser usada no operador LIKE do SQLITE. exemplo: [%]Aug 24%2020
        let filtroData = dia.format(`[%]MMM DD[%]YYYY`);
        db.all(`SELECT * FROM TWEETS where horario like ? order by id_interno desc`, filtroData, (err, tweets_exibidos) => {
            if (err) {
                db.close();
                reject(err);
            } else {
                db.close();
                console.log(tweets_exibidos);
                resolve(tweets_exibidos);
            }
        });
    }).catch(err => { throw err });
    return promise;
}

criarBancoSeInexistente();

module.exports = { criarBancoSeInexistente, obterUltimoTweet, inserirNovoTweet, obterTweetsExibidos };


