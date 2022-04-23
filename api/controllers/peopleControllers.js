
const { People } = require('../models/people');

module.exports.addPeople = async (req, res) => {



  

        const newPeople = new People(req.body);
        const result = await newPeople.save();
        return res.status(200).send(result)

    
}


module.exports.deletePeople = async (req, res) => {
 
    const deletedId = req.params._id;
    const deleteData = await People.findByIdAndDelete(deletedId)
    return res.status(200).send(deleteData);
}


module.exports.editPeople = async (req, res) => {
 
    const editId = req.params._id;
    const editData = await People.findByIdAndUpdate(editId, req.body)
    const savedEdit=  await People.findById(editId);
    return res.status(200).send(savedEdit);
}



module.exports.getPeople = async (req, res) => {
    const getNewPeople = await People.find();
    return res.status(200).send(getNewPeople);
}






