
const {User} = require("../models/user");

const Add = require("../models/add");

module.exports.addPeople = async (req, res) => {

        const data = req.body;
  

        const newPeople = new Add(data);

    
        const result = await newPeople.save();


        return res.status(200).send(result)
}


module.exports.deletePeople = async (req, res) => {
 
    const deletedId = req.params._id;
    const deleteData = await Add.findByIdAndDelete(deletedId)
    return res.status(200).send(deleteData);
}


module.exports.editPeople = async (req, res) => {
 
    const editId = req.params._id;
    const editData = await Add.findByIdAndUpdate(editId, req.body)
    const savedEdit=  await People.findById(editId);
    return res.status(200).send(savedEdit);
}



module.exports.getPeople = async (req, res) => {


    const currentUser = await User.findById(req.params.userId)


    const getNewPeople = await Add.find({userId:currentUser._id});

    return res.status(200).send(getNewPeople);
}






