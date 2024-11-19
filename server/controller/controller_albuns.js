import { Artista, Album, Musica } from '../db.js';

const pegarTodosAlbums = async (req, res) => {
  try {
    const albums = await Album.findAll();
    return res.status(200).json(albums);
  } catch (error) {
    console.error('Erro ao buscar todos os álbuns:', error);
    return res.status(500).json({ error: 'Erro ao buscar álbuns' });
  }
};

const pegarAlbumPorId = async (req, res) => {
  const { id } = req.params;

  // Validação do id
  if (isNaN(id)) {
    return res.status(400).json({ error: 'ID inválido' });
  }

  try {
    const album = await Album.findByPk(id, {
      include: [{
        model: Musica,
        as: 'Musicas'
      }]
    });

    if (!album) {
      return res.status(404).json({ error: 'Álbum não encontrado' });
    }

    return res.status(200).json(album);
  } catch (error) {
    console.error('Erro ao buscar o álbum:', error);
    return res.status(500).json({ error: 'Erro ao buscar álbum' });
  }
};

const pegarMusicaPeloAlbum = async (req, res) => {
  const { id } = req.params;

  // Validação do id
  if (isNaN(id)) {
    return res.status(400).json({ error: 'ID inválido' });
  }

  try {
    const musicas = await Musica.findAll({ where: { album_id: id } });

    if (musicas.length === 0) {
      return res.status(404).json({ error: 'Nenhuma música encontrada para este álbum' });
    }

    return res.status(200).json(musicas);
  } catch (error) {
    console.error('Erro ao buscar músicas do álbum:', error);
    return res.status(500).json({ error: 'Erro ao buscar músicas' });
  }
};

export { pegarTodosAlbums, pegarAlbumPorId, pegarMusicaPeloAlbum };