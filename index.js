import * as UserService from './control.js';
import express from 'express';

// // console.log("ambil data user: ")
// // await UserService.getUser();

// // console.log("create data user: ");
// // await UserService.createUser("Andika E. Wiyatno", "dika@gmail.com", "pass1234");
// await UserService.createUser("sasa", "rovi@gmail.com", "pa55");

// // console.log("ambil data user: ")
// // await UserService.getUser();

// // await UserService.editUser(9,"kuku")
// // await UserService.delUser(9,"kuku")
// await UserService.getLdata()

const port = 8080;
const host = "localhost";
const app = express();
app.use(express.json());
// app.get("/users",UserService.getUser);
// app.get("/users/:id", UserService.getUserDetail);
// app.post("/users", UserService.createUser);
// app.delete("/users/:id", UserService.deleteUser);
app.put("/users/:id", UserService.editUser);



app.listen(port, host, () => {
    console.log(`Server berjalan di http://${host}:${port}`);
});