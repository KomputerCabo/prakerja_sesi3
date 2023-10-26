import pool from "./dbconnect.js";

const getData = () => {
    const query = "SELECT id, nama, email, password, created_at FROM user";
    
    return pool.query(query);
}

const createData = (nama, email, password) => {
    let createdAt = new Date();

    const query = "INSERT INTO user(nama, email, password, created_at) VALUES (?, ?, ?, ?)";
    const values = [nama, email, password, createdAt];

    return pool.query(query,values);
}

const getDataById = (id) => {
    const query = "SELECT id, nama, email, password, created_at FROM users WHERE id = ? ";
    
    return pool.query(query, [id]);
}

const updateData =(id,nama,email,password)=>{
    const query= "UPDATE user SET nama=? WHERE id=?"
    const values=[nama,id]

    return pool.query(query,values)
}

const delData =(id)=>{
    const query= "DELETE FROM user WHERE id=?"
    const values=[id]

    return pool.query(query,values)
}


const getTigaData = () => {
    const query = "SELECT id, nama, email, password, created_at FROM user ORDER BY id DESC LIMIT 1";
    
    return pool.query(query);
}

export { getData, createData, getDataById, updateData, delData,getTigaData}

