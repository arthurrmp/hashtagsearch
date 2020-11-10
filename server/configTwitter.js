let Twitter = require('twitter');

//Credenciais twitter - Alterar
let client = new Twitter({
    consumer_key: 'CONSUMER_KEY',
    consumer_secret: 'CONSUMER_SECRET',
    access_token_key: 'ACCESS_TOKEN_KEY',
    access_token_secret: 'ACCESS_TOKEN_SECRET'
}); 

async function obterTweetsPorHashtag(hashtag) {
    let promise = await new Promise((resolve, reject) => {
        if (!hashtag) {
            reject(`Erro - Parâmetro Hashtag não existente`)
        }
        // Se o parâmetro passada não começar com #, adiciona # no início.
        if (!hashtag.startsWith(`#`)) {
            hashtag = `#${hashtag}`;
        }
        let params = { q: `${hashtag} -filter:retweets -filter:replies`, count: 30, tweet_mode: 'extended' };
        client.get('search/tweets', params, (error, tweets, response) => {
            let tweets_resultado = [];
            console.log(tweets.statuses[1])
            tweets.statuses.forEach(function (tweet) {
                tweets_resultado.push({
                    id: tweet.id_str,
                    tweet: tweet.full_text,
                    nome: tweet.user.name,
                    usuario: tweet.user.screen_name,
                    foto: tweet.user.profile_image_url,
                    horario: tweet.created_at,
                })
            });
            resolve(tweets_resultado);
        });
    }).catch(err => { throw err });
    return promise;
}

module.exports = { obterTweetsPorHashtag };
