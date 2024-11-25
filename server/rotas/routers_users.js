import  Express  from "express";
import { GetUser, deleteUser, listaUser, trocar_img} from "../controller/controller_user.js";


const rotas_user = Express.Router()

rotas_user.get('/listauser', listaUser )
rotas_user.get('/:id', GetUser )
rotas_user.delete('/:id', deleteUser )
rotas_user.post('/trocar-img/:id', trocar_img)



export{rotas_user}