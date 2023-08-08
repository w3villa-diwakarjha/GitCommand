const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());


app.get('/', (req, res) => {
    res.send(5);
});


app.post('/add', (req, res) => {
    let a = parseInt(req.body.a);
    console.log(req.body.a);
    let b = parseInt(req.body.b);
    let ans = a + b;
    console.log(ans);
    res.send(JSON.stringify({ ans: ans }));
})

app.post('/sub', (req, res) => {
    let a = parseInt(req.body.a);
    let b = parseInt(req.body.b);
    let ans = a - b;
    res.send(JSON.stringify({ ans: ans }));
})

app.post('/mul', (req, res) => {
    let a = parseInt(req.body.a);
    let b = parseInt(req.body.b);
    let ans = a * b;
    res.send(JSON.stringify({ ans: ans }));
})

app.post('/div', (req, res) => {

    let a = parseInt(req.body.a);
    let b = parseInt(req.body.b);

    if (b == 0) {
        return res.status(400).json({ error: 'Cannot Divide by Zero' });
    }
    else {
        let ans = a / b;
        res.send(JSON.stringify({ ans: ans }));
    }
})


app.listen(5000, () => {
    console.log("Port is running on 5000")
})