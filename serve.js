const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;

// Serve arquivos estáticos da pasta web-ache-me
app.use(express.static(path.join(__dirname, 'web-ache-me')));

// Conecta ao Banco.db
const db = new sqlite3.Database(path.join(__dirname, 'web-ache-me', 'dados', 'Banco.db'), (err) => {
    if (err) console.error('Erro ao conectar no banco:', err.message);
    else console.log('Banco.db conectado!');
});

// Rota para retornar produtos
app.get('/produtos', (req, res) => {
    db.all('SELECT * FROM Banco', [], (err, rows) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(rows);
    });
});

// Fechar banco ao encerrar servidor
process.on('SIGINT', () => {
    db.close(() => {
        console.log('Banco fechado.');
        process.exit(0);
    });
});

// Inicia servidor
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));