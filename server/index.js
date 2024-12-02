import Express from "express";
import cors from "cors";
import {rotas} from "./rotas/routers_auth.js";
import { rotas_user } from "./rotas/routers_users.js";
import { rotas_artistas } from './rotas/routers_artists.js'
import { rotas_albums } from "./rotas/routers_albuns.js";


const app = Express()
app.use(Express.json())
app.use(cors())
app.use('/autenticacao', rotas)
app.use('/adm', rotas_user)
app.use('/user', rotas_user)
app.use('/delete', rotas_user)
app.use('/artista', rotas_artistas)
app.use('/album', rotas_albums)






app.listen(8000)




// import { criarTabelas } from "./db.js";
 //criarTabelas()