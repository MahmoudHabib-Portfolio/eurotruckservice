const express = require('express');
const path = require('path');

const app = express();

const compression = require('compression');
app.use(compression());

//Use HTTP headers for caching
app.use(express.static(path.join(__dirname, '../frontend/dist'), { maxAge: '1y' }));

// Handle requests by serving index.html for all routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});