import { getData, getDataById, createData ,updateData,delData,getTigaData} from "./query.js";
import { errorResponse, successResponse } from "./response.js"

export const createUser = async (request,response,next) => {
    try {
        let name = request.body.name;
        let email = request.body.email;
        let password = request.body.password;
        let [result] = await createData(name, email,password);

        if (result.insertId > 0) {
            successResponse(response, "success create user", result.insertId)
            
        } else {
            errorResponse(response, "failed create user", 500)
        } 
    } catch (error) {
        next(error);
    }
    
    
}

export const getUser = async () => {
    let [result] = await getData();

    if (result.length > 0) {
        console.log(result);
    } else {
        console.log("tidak ada data user");
    }
}

export const getUserDetail = async (id) => {
    let [result] = await getDataById(id);

    if (result.length > 0) {
        console.log(result[0]);
    } else {
        console.log(`user dengan id ${id} tidak ditemukan`);
    }
}

export const editUser = async (request,response,next) => {
    console.log(request)
    try{
        let id = request.params.id
        let nama = request.body.name;
        let email = request.body.email;
        let password = request.body.password;
        let [result] = await updateData(id,nama,email,password);
        
        if (result.affectedRows > 0) {
            console.log(result);
            successResponse(response, "update berhasil")
        } else {
            errorResponse(response, "failed update user", 500)
        }
    }catch (error) {
        next(error);
    }
}

export const delUser = async (id) => {
    let [result] = await delData(id);
    
    if (result.affectedRows > 0) {
        console.log(result);
        console.log("Delete berhasil")
    } else {
        console.log("tidak ada data user");
    }
}

export const getLdata = async (id) => {
    let [result] = await getTigaData();

    if (result.length > 0) {
        console.log(result[0]);
    } else {
        console.log(`user dengan id ${id} tidak ditemukan`);
    }
}