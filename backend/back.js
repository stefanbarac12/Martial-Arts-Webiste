let express = require("express");
let bodyParser = require("body-parser");
let mysql = require("mysql");
let app = express();
let port = 3000;

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "stefanbarac123!!!", //stefanbarac123!!!
    database: "martial_arts"
});

con.connect(function (err) {
    if (err) {
        throw err
    }
    console.log("Uspesno konektovan na bazu");
});

//Node post funkcija za loginovanje usera
app.post('/login', function (req, res) {
    let user = req.body.user;
    let pass = req.body.pass;

    con.query('SELECT * FROM users WHERE usr_username = ? AND usr_password = ?',
        [user, pass],
        function (err, result, fields) {
            if (err) {
                throw err;
            }
            if (result.length === 0) {
                res.json('Greska prilikom logovanja!');
                return;
            }
            res.json(result[0]);
        });
});

//Node post funkcija za pravljenje novog usera usera
app.post('/singup', function (req, res) {
    let userName = req.body.userName;
    let singupPass = req.body.singupPass;
    let email = req.body.email;

    con.query(`INSERT INTO users
    (usr_username, usr_password, usr_level, usr_email)
    VALUES(?, ?, 2, ?)`,
        [userName, singupPass, email],
        function (err, result, fields) {
            if (err) {
                throw err;
            }
            res.json('Korisnik uspesno kreiran');
        });
});

//Node GET funkcija za sensei-je
app.get('/senseis', function (req, res) {
    let senseiId = req.query.senseiId;

    con.query(`SELECT * FROM senseis WHERE sen_id = ?`,
        [senseiId],
        function (err, result, fields) {
            if (err) {
                throw err;
            }
            res.json(result[0]);
        });
});

//Node POST funkcija za dodavanje youtube klipova
app.post('/yt_videos', function (req, res) {
    let title = req.body.title;
    let senseiId = req.body.senseiId;
    let link = req.body.link;

    con.query(`INSERT INTO yt_videos (ytv_title, sen_id, ytv_links)
    VALUES (?, ?, ?)`, [title, senseiId, link],
        function (err, result, fields) {
            if (err) {
                throw err;
            }
            res.json('Adding successfully');
        });
});

//Node GET funkcija za youtube klipove
app.get('/yt_videos', function (req, res) {
    let senseiId = req.query.senseiId;

    con.query(`SELECT * FROM yt_videos WHERE sen_id = ?
                ORDER BY ytv_id DESC`,
        [senseiId],
        function (err, result, fields) {
            if (err) {
                throw err;
            }
            res.json(result);
        });
});

//Node DELETE funkcija za briisanje youtube klipova
app.delete('/yt_videos', function (req, res) {
    let ytv_id = req.query.ytv_id;

    con.query(`DELETE FROM yt_videos WHERE ytv_id = ?`,
        [ytv_id],
        function (err, result, fields) {
            if (err) {
                throw err;
            }
            res.json(ytv_id);
        });
});

//Node GET funkcija za komentare
app.get('/comments', function (req, res) {
    let senseiId = req.query.sen_id;

    con.query(`SELECT 
                c.com_id,
                u.usr_username,
                c.com_text,
                c.com_date           
                FROM comments c 
                LEFT JOIN users u ON u.usr_id = c.usr_id
                WHERE c.sen_id = ? ORDER BY c.com_date DESC`, [senseiId],
        function (err, result, fields) {
            if (err) {
                throw err;
            }
            res.json(result);
        });
});

//Node POST funkcija za komentare
app.post('/comments', function (req, res) {
    let usr_id = req.body.usr_id;
    let sen_id = req.body.sen_id;
    let text = req.body.text;
    // let grade = req.body.grade;

    con.query(`INSERT INTO comments (usr_id, sen_id, com_text) VALUES (?,?,?)`,
        [usr_id, sen_id, text], function (err, result, fields) {
            if (err) {
                throw err;
            }
            res.json('comment is added!');
        });
});

//Node DELETE funkcija za komentare
app.delete('/comments', function (req, res) {
    let com_id = req.query.com_id;

    con.query(`DELETE FROM comments WHERE com_id = ?`,
        [com_id],
        function (err, result, fields) {
            if (err) {
                throw err;
            }
            res.json('Comment deleted');
        });
});

//Node GET funkcija za borilacke vestine
app.get('/martial_arts_types', function (req, res) {
    let senseiId = req.query.senseiId;

    con.query(`SELECT mat_text, mat_name FROM martial_arts_types JOIN senseis 
    ON senseis.mat_id = martial_arts_types.mat_id WHERE sen_id = ?`,
        [senseiId],
        function (err, result, fields) {
            if (err) {
                throw err;
            }
            res.json(result[0]);
        });
});



//Node GET funkcija za training plan
app.get('/training_plan', function (req, res) {
    let senseiId = req.query.senseiId;

    con.query(`SELECT * FROM training_plan JOIN senseis 
    ON senseis.tp_id = training_plan.tp_id WHERE senseis.sen_id = ?`,
        [senseiId],
        function (err, result, fields) {
            if (err) {
                throw err;
            }
            res.json(result[0]);
        });
});

app.listen(port, function () {
    console.log("slusa na portu " + port);
});






