import mysql from 'mysql2/promise';
// const mysql = require('mysql2/promise');
// const dbConfig = require('./dbconfig.js');
import db from './dbconfig.js';
 
const pool = mysql.createPool(db);
 
export default pool