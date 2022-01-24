const express = require('express')
const expbs = require('express-handlebars')
const path = require('path')
const body = require('body-parser')
const app = express()
const port = 3000
//-------------------------------------------------------
const routes = require('./routes/handlers');

app.use(express.static(path.join(__dirname,'public')));

// configurando template handleBars
const hbs = expbs.create({

    defaultLayout: 'main',
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
    layoutsDir: path.join(__dirname, 'views/mainLayout'), 
    partialsDir: path.join(__dirname, 'views/pieces'), 

  });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(body.json())
app.use(body.urlencoded({extended: true}))

// Configure Routes
app.use('/', routes);

// -------------------------
app.listen(port, () => {
    console.log(`Rodando em http://localhost:${port}`)
  })