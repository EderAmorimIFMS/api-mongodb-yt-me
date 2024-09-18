const PartyModel = require("../model/Party");

const checkPartyBudget = (budget, service) => {
  const priceSum = service.reduce((sum, service) => sum + service.price, 0)
  
  if(priceSum > budget){
    return false;
  };
  
  return true;
};

const createParty = async (req, res) => {
  try {
    const party = {
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      budget: req.body.budget,
      image: req.body.image,
      services: req.body.service,
    }
    
    if(party.service && !checkPartyBudget(party.budget, party.service)){
      res.status(406).json({ msg: 'O orçamento não é suficiente.'})
    }
    const response = await PartyModel.create(response);

    console.log('Festa criada com sucesso!');
    res.status(201).json({ response, msg: 'Festa criada com sucesso!'});

  } catch (error) {
    console.log(`Erro ao cadastrar: ${error}`);
    return res.status(404).json("Ocorreu um erro ao cadastrar Festa!");
  };
};

const getAllParty = async (req, res) => {
  try {
    const parties = await PartyModel.find();
    res.json(parties)
      
  } catch (error) {
    console.log(`Erro ao buscar todos: ${error}`);
    return res.status(404).json("Ocorreu um erro ao buscar todas as festas!");
  }
}

const getOneParty = async (req, res) => {
  try {
    const id = req.params.id
    const party = await PartyModel.findById(id)
    
    if(!party){
      res.status(404).json({ msg: 'Festa não encontrada' })
      return
    }
    
    res.json(party)
  } catch (error) {
    console.log(`Erro ao buscar um: ${error}`);
    return res.status(404).json("Ocorreu um erro ao buscar festa!");

  };
};

const deleteParty = async (req, res) => {
  try {
    const id = req.params.id;
    const party = await PartyModel.findById(id)
    
    if(!party){
      res.status(404).json({ msg: 'Festa não encontrada' })
    }
    
    const deleteParty = await PartyModel.findByIdAndDelete(id)

    res.status(200).json({ deleteParty, msg: 'Festa excluida com sucesso!'});
    console.log('Festa excluida com sucesso!');
  } catch (error) {
    console.log(`Erro ao deletar: ${error}`);
    return res.status(404).json("Ocorreu um erro ao deletar festa!");
  };
};

const updatedParty = async (req, res) => {
  try {
    const id = req.params.id;

    const party = {
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      budget: req.body.budget,
      image: req.body.image,
      services: req.body.service,
    }
    
    if(party.service && !checkPartyBudget(party.budget, party.service)){

      res.status(406).json({ msg: 'O orçamento não é suficiente.'})

    }
    
    const updatedParty = await PartyModel.findByIdAndUpdate(
      id, party
    )
    
    if(!updatedParty){
      res.status(404).json({ msg: 'Festa não encontrado' })
    }

    res.status(200).json('Festa atualizada com sucesso!');
    console.log('Festa atualizada com sucesso!');
      
  } catch (error) {
    console.log(`Erro ao atualizar: ${error}`);
    return res.status(404).json("Ocorreu um erro ao atualizar festa!");

  };
};

module.exports = { createParty, getAllParty, getOneParty, deleteParty};