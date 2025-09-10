const express = require('express');
const app = express();
const port = 8000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

const posts = [

    {
        titolo: 'Ciambellone',
        content: 'quanto è buono il ciambellone',
        img: 'immagine1',
        tags: ['ciambella', 'dolce', 'rotondo'],
    },
    {
        titolo: 'cracker',
        content: 'quanto è buono il cracker',
        img: 'immagine2',
        tags: ['cracker', 'salato', 'rettangolare'],
    },
    {
        titolo: 'pane_fritto',
        content: 'quanto è buono il pane_fritto',
        img: 'immagine3',
        tags: ['pane_fritto', 'fritto', 'unto'],
    },
    {
        titolo: 'barbabietola',
        content: 'quanto è buona la barbabietola',
        img: 'immagine4',
        tags: ['barbabietola', 'rossa', 'rotsporcaondo'],
    },
    {
        titolo: 'torta_paesana',
        content: 'quanto è buona la torta_paesana',
        img: 'immagine5',
        tags: ['torta_paesana', 'rustica', 'paesana'],
    },

];

app.get('/bacheca', (req, res) => {
    res.json(posts)
})



app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})