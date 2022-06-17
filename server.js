const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:5000'
}));

// Error Manager
const apiErrorHandler = require('./api/v1/middlewares/errorManager/apiErrorHandler')
app.use(apiErrorHandler);

// Express body parser
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', require('./api/v1/routes/index.js'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
