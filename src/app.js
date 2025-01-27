// Importation de Express
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const televisionRoutes = require('./routes/televisionRoutes');


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app
    .use(morgan('dev'))//return the code 200/404 etc
    .use(cors());


// All routes
app.use('/', televisionRoutes);



// Run the server
app.listen(PORT, () => {
    console.log(`Le serveur est en cours d'exécution sur http://localhost:${PORT}`);
});

