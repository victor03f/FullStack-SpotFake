import express from 'express'
import { pegarTodosAlbums, pegarAlbumPorId, pegarMusicaPeloAlbum } from '../controller/controller_albuns.js';

const rotas_albums = express.Router();

rotas_albums.get('/', pegarTodosAlbums);
rotas_albums.get('/:id', pegarAlbumPorId); 
rotas_albums.get('/:id/musicas/', pegarMusicaPeloAlbum);  

export {rotas_albums};