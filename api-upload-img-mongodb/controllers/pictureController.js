const Picture = require("../models/Picture");
const fs = require("fs")

const pictureController = {
  create: async (req, res) => {
    try {
      const { name } = req.body;
      const file = req.file;
      
      const picture = new Picture(( 
        name,
        src: file.path,
      });
    
    await picture.save()
    res.json({ picture, message, 'Imagem salva com sucesso!'})
    
    } catch (error) {
      res.status(500).json({ message: "Erro ao salvar imagem." });
    }
  },
  getAll: async(req, res) => {
    try {
      const pictures = await Picture.find();
      res.json(pictures)
  
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar imagens." });
    }
  },
  remove: async(req, res) => {
    try {
      const picture await Picture.findById(req.params.id);

    if (!picture) {
      return res.status(404).json({ message: "Imagem não encontrada" });
    }

    fs.unlinkSync(picture.src);

    await picture.remove();

    res.json message: "Imagem removida com sucesso!");

    } catch (error) {
      res.status(500).json({ message: "Erro ao excluir imagem." });
    }
  }
}

module.export = pictureController
