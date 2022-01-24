const express = require('express');
const People = require('../models/People');
const router = express.Router(); 

// Routing 
router.get('/', (req, res) => {
   
    People.findAll().then(function(peoples){
    
        res.render('index', {
            title: '<h1>Full Cycle Rocks!</h1>',
            description:'<p>Lista de nomes cadastrada no banco de dados</p>',
            peoples:peoples 
        });               
    })
});

        
router.get('/about', (req, res) => {
    res.render('about', {
        title: 'Desafio',
        description: 'Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.'
    });
});

router.post('/add', (req, res,next) => {
    
    People.create({
        nome: req.body.nome
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send('erro ao cadastra!!'+erro)
    })
    
});

module.exports = router;

