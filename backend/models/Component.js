const db = require('../database/dbConnection');

class Component{
    constructor(){
        try{
            db.run(`
                CREATE TABLE IF NOT EXISTS component (
                    idComponent INTEGER PRIMARY KEY,
                    
                    FK_idDashboard INTEGER NOT NULL,
                    FOREIGN KEY (FK_idDashboard) REFERENCES dashboard (idDashboard) 
                    
                    type TEXT NOT NULL,
                    column INTEGER NOT NULL,
                    row INTEGER NOT NULL,
                    columnWidth INTEGER NOT NULL,
                    rowHeight INTEGER NOT NULL,

                    FK_idCalendar INTEGER,
                    FOREIGN KEY (FK_idCalendar) REFERENCES calendar (idCalendar) 
                    
                    FK_idToDoList INTEGER,
                    FOREIGN KEY (FK_idToDoList) REFERENCES toDoList (idToDoList) 
                    
                    FK_idNotes INTEGER,
                    FOREIGN KEY (FK_idNotes) REFERENCES notes (idNotes) 
                    
                    FK_idAlbum INTEGER,
                    FOREIGN KEY (FK_idAlbum) REFERENCES album (idAlbum) 
                );
            `);
        }catch(e){
            console.log(e);
        }
    }

    get(req, res){
        try{
            db.all(
                "SELECT * FROM component WHERE idComponent = ?",
                [ req.body.FK_idDashboard ],
                (err, rows) => {
                    if(err){
                        throw err;
                    }

                    res.status(200).send(rows);
                }
            )
        }catch(e){
            console.log(e);
            res.status(500).send()
        }
    }

    add(req, res){
        try{
            db.run( `INSERT INTO component 
                (
                    FK_idDashboard,
                    type,
                    column,
                    row,
                    columnWidth,
                    rowHeight,
                    FK_idCalendar,
                    FK_idToDoList,
                    FK_idNotes,
                    FK_idAlbum
                ) values ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )`, 
                [
                    req.body.FK_idDashboard,
                    req.body.type,
                    req.body.column,
                    req.body.row,
                    req.body.columnWidth,
                    req.body.rowHeight,
                    req.body.FK_idCalendar,
                    req.body.FK_idToDoList,
                    req.body.FK_idNotes,
                    req.body.FK_idAlbum
                ],
                (err) => {
                    if(err){
                        throw err;
                    }

                    res.status(200).send(this.lastID);
                }
            );
        }catch(e){
            console.log(e);
            res.status(500).send()
        }
    }

    set(req, res){
        try{
            db.run(
                `
                    UPDATE component 
                    SET 
                        column = ?,
                        row = ?,
                        columnWidth = ?,
                        rowHeight = ?
                    WHERE idComponent = ? 
                `,
                [
                    req.body.column,
                    req.body.row,
                    req.body.columnWidth,
                    req.body.rowHeight,
                    req.body.idComponent
                ],
                (err) => {
                    if(err){
                        throw err;
                    }

                    res.status(200).send();
                }
            );
        }catch(e){
            console.log(e);
            res.status(500).send()
        }
    }

    del(req, res){
        try{
           db.run( `DELETE FROM component WHERE idComponent = ?`, [req.body.idComponent],
                (err) => {
                    if(err){
                        throw err;
                    }

                    res.status(200).send();
                }
            );
        }catch(e){
            console.log(e);
            res.status(500).send();
        }
    }
}

module.exports = Component;