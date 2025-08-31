const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("heelo em");
})

app.listen(port, () => {
    console.log(`Server dang chay tai https://localhost:${port}`);
})