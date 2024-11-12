import  Express  from "express";
import { GetUser, deleteUser, listaUser, trocarfotoUser } from "../controller/controller_user.js";


const rotas_user = Express.Router()

rotas_user.get('/listauser', listaUser )
rotas_user.get('/:id', GetUser )
rotas_user.delete('/:id', deleteUser )
rotas_user.post('/profile/:id', trocarfotoUser )


export{rotas_user}