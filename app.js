const express = require('express');
const app = express();
const myRouter = require("./my-router");
app.use('/my-router', myRouter);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})

app.all('/anything', (req, res, next) => {
    console.log('Anything method.');
    next();
})


app
    .route('/blog')
    .get((req, res) => {
        res.send('Get a list of blog')
    })
    .post((req, res) => {
        res.send('Add a record  to blog')
    })
    .put((req, res) => {
        res.send('Update blog')
    })

1// app.get('/', (req, res) => {
//     res.send('Hello World!');
// })

// app.get('/contact', (req, res) => {
//     res.send('<h1>Contact page</h1>');
// });

// app.get('/contact/:id', (req, res) => {
//     res.send(`<h1>Contact</h1> Параметр: ${req.params.id}`)
// });

// app.patch('/user/:userid', (req, res) => {
//     const id = req.params.userid
// })

// app.use((req, res, next) => {
//     console.log('Наше проміжне ПЗ')
//     next();
// })

// for urlencoded
// app.use(express.urlencoded({extended: false}));

// for json
// app.use(express.json())
// app.post('/login', (req, res, next) => {
//     const { email, password } = req.body
// })


