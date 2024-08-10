const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/', (req,res) =>{
    res.send('Hello world');
});

app.get('/rota', (req, res) => {
    res.send('Outra rota');
});

app.get('/consulta-cep/:cep', async (req, res) => {
    const cep = req.params.cep;

    try{
        const response = await axios.get(`http://viacep.com.br/ws/${cep}/json/`);
        const data = response.data;
        res.json (data);
    
    }catch (error) {

        console.error(error);
        res.status(500).json({error: 'Erro ao consultar o cep'});

    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});


