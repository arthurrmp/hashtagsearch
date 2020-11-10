// Arquivo que contém configuração do CORS 

// Origens permitidas pela API: As requeridas pelo Ionic e as que são necessárias para testes.
const allowedOrigins = [
    'capacitor://localhost',
    'ionic://localhost',
    'http://localhost:8100',
];

// Verifica se a origem se não está na lista permitida (cURL, Postman, etc.)
const corsOptions = {
    origin: (origin, callback) => {

        /** Para fins de teste, a API permite conexão de qualquer website/app ❗ **/
        callback(null, true);

        /** 
         * Código correto para verificação se a origem da requisição está permitida:
         **/
        
        /*
         if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Origin not allowed by CORS'));
        }
        */
    }
}

module.exports = { corsOptions }