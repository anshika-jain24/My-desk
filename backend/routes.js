
module.exports = function(app, db){
    // GET - For Testing
    app.get("/test", (req,res) => {
        let query = "SELECT * FROM USERS";
        db.query(query, (err, result) => {
            if(err) throw err;
            res.send(result);
        });
    });

    app.post("/addUser", (req, res) => {
        let query1 = `SELECT * FROM USERS WHERE EMAIL='${req.body.email}'`;
        db.query(query1, (err, result) => {
            if(err) throw err;
            const res = JSON.parse(JSON.stringify(result));

            if(!res[0]){
                let query = `INSERT INTO USERS VALUES('${req.body.name}', '${req.body.email}', '${req.body.googleId}')`;
                db.query(query, (err, result) => {
                    if(err) throw err;
                    console.log("User successfully Added!");
                });
            }else{
                console.log("User already exists!")
            }
        });
    });
}

