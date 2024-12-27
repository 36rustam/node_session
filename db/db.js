const mysql =require('mysql2');
const { connect } = require('../routes/rout_home');
require('dotenv').config();


class DB{
    constructor(){
        this.connect=mysql.connect({
            host:'localhost',
            user:'root',
            database:'test2',
            password:'',
        });
        this.connect.connect(err=>{
            if(err)throw err;
            console.log('connectada');
        });

        // return connect;
    };

    mas(){
        const sql='INSERT INTO productos(nombre,precio) VALUES(?,?)';
        const vari = ['name',55];
        this.connect.execute(sql,vari,err=>{
            if(err)throw err;
            console.log('añadido');
        })
    };
};




module.exports=DB;