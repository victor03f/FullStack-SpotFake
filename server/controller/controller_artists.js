import { Artista, Album, Musica } from '../db.js';

const pegarTodosArtistas = async (req, res) => {
  try {
    const artists = await Artista.findAll();
    return res.status(200).json(artists);
  } catch (error) {
    console.error('Erro ao buscar todos os artistas:', error);
    return res.status(500).json({ error: 'Erro ao buscar artistas' });
  }
};

const pegarArtistaPorId = async (req, res) => {
  const { id } = req.params;

  // Validação do id
  if (isNaN(id)) {
    return res.status(400).json({ error: 'ID inválido' });
  }

  try {
    const artist = await Artista.findByPk(id, {
      include: [{
        model: Album,
        as: 'Albums',
        include: [{ model: Musica, as: 'Musicas' }]
      }]
    });

    if (!artist) {
      return res.status(404).json({ error: 'Artista não encontrado' });
    }

    return res.status(200).json(artist);
  } catch (error) {
    console.error('Erro ao buscar o artista:', error);
    return res.status(500).json({ error: 'Erro ao buscar artista' });
  }
};

const pegarAlbumsPorArtista = async (req, res) => {
  const { id } = req.params;

  // Validação do id
  if (isNaN(id)) {
    return res.status(400).json({ error: 'ID inválido' });
  }

  try {
    const albums = await Album.findAll({
      where: { artista_id: id },
      include: [{ model: Musica, as: 'Musicas' }]
    });

    if (albums.length === 0) {
      return res.status(404).json({ error: 'Nenhum álbum encontrado para este artista' });
    }

    return res.status(200).json(albums);
  } catch (error) {
    console.error('Erro ao buscar álbuns do artista:', error);
    return res.status(500).json({ error: 'Erro ao buscar álbuns' });
  }
};

export { pegarTodosArtistas, pegarArtistaPorId, pegarAlbumsPorArtista };
