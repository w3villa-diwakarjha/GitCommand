function add() {
    let a = document.getElementById("number1").value;

    let b = document.getElementById("number2").value;

    if (isNaN(a) || isNaN(b)) {
        alert("Please Enter The Number")
        return;
    }
    let data = {
        a: a,
        b: b,
    }
    fetch('http://localhost:5000/add', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(data),
    }).then((res) => res.json()).then((data) => {
        document.getElementById("result").value = data.ans;
    });
}


function sub() {
    let a = document.getElementById('number1').value;
    document.getElementById('number1').innerHTML = a;

    let b = document.getElementById('number2').value;
    document.getElementById('number2').innerHTML = b;

    if (isNaN(a) || isNaN(b)) {
        alert("please Enter the Number")
        return;
    }
    let data = {
        a: a,
        b: b,
    }
    fetch('http://localhost:5000/sub', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(data),
    }).then((res) => res.json())
        .then((data) => {
            console.log(data);
            document.getElementById('result').value = data.ans;
        });
}


function mul() {
    let a = document.getElementById('number1').value;
    document.getElementById('number1').innerHTML = a;

    let b = document.getElementById('number2').value;
    document.getElementById('number2').innerHTML = b;

    if (isNaN(a) || isNaN(b)) {
        alert("please Enter the Number")
        return;
    }
    let data = {
        a: a,
        b: b
    }
    fetch('http://localhost:5000/mul', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(data),
    }).then((res) => res.json())
        .then((data) => {
            console.log(data.ans);
            document.getElementById('result').value = data.ans;
        });
}


function div() {
    let a = document.getElementById('number1').value;
    document.getElementById('number1').innerHTML = a;

    let b = document.getElementById('number2').value;
    document.getElementById('number2').innerHTML = b;

    if (isNaN(a) || isNaN(b)) {
        alert("please Enter the Number")
        return;
    }
    let data = {
        a: a,
        b: b
    }
    fetch('http://localhost:5000/div', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(data),
    }).then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data.ans == undefined)
                document.getElementById('result').value = "";
            else{
                document.getElementById('result').value = data.ans;
            }
        });
}
