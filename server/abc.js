import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/pages/products.html'));
});

// Serve CSS files
app.get("/css/products.css", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/css/products.css'));
});

// Serve JavaScript files
app.get("/components/products.js", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/components/products.js'));
});

app.get("/assests/login-background.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/assests/login-background.jpg'));
});





app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
