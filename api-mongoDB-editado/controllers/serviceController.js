const ServiceModel = require("../model/Service");

const createService = async (req, res) => {
  try {
    const service = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image
    };
    
    const response = await ServiceModel.create(service);
    res.status(200).json(dataToSave);

    console.log('Serviço criado com sucesso!');
    res.status(201).json({ response, msg: 'Serviço criado com sucesso!'});

  } catch (error) {
    console.log(`Erro ao cadastrar: ${error}`);
    return res.status(404).json("Ocorreu um erro ao cadastrar serviço!");
  };
};

const getAllService = async (req, res) => {
  try {
    const services = await ServiceModel.find();
    res.json(services);
      
  } catch (error) {
    console.log(`Erro ao buscar todos: ${error}`);
    return res.status(404).json("Ocorreu um erro ao buscar todos os serviços!");
  };
};

const getOneService = async (req, res) => {
  try {
    const id = req.params.id
    const service = await ServiceModel.findById(id)
    
    if(!service){
      res.status(404).json({ msg, 'Serviço não encontrado' })
      return
    }
    res.json(service)
  } catch (error) {
    console.log(`Erro ao buscar um: ${error}`);
    return res.status(404).json("Ocorreu um erro ao buscar serviço!");

  };
};

const deleteService = async (req, res) => {
  try {
    const id = req.params.id;
    const service = await ServiceModel.findById(id)
    
    if(!service){
      res.status(404).json({ msg, 'Serviço não encontrado' })
    }
    
    const deletedService = await ServiceModel.findByIdAndDelete(id)

    res.status(200).json({ deletedService, msg: 'Serviço excluido com sucesso!'});
    console.log('Serviço excluido com sucesso!');
  } catch (error) {
    console.log(`Erro ao deletar: ${error}`);
    return res.status(404).json("Ocorreu um erro ao deletar serviço!");
  };
};

const updateService = async (req, res) => {
  try {
    const id = req.params.id;

    const service = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image
    }
    
    const updatedService = await Model.findByIdAndUpdate(
      id, service
    )
    
    if(!updatedService){
      res.status(404).json({ msg: 'Serviço não encontrado' })
    }

    res.status(202).json('Serviço atualizado com sucesso!');
    console.log('Serviço atualizado com sucesso!');
      
  } catch (error) {
    console.log(`Erro ao atualizar: ${error}`);
    return res.status(404).json("Ocorreu um erro ao atualizar serviço!");

  };
}


module.exports = { createService, getAllService, getOneService, deleteService, updateService };