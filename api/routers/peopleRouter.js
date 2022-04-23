const router = require('express').Router();
const { addPeople , getPeople, deletePeople, editPeople} = require('../controllers/peopleControllers');

const  authorize = require("../middlewares/authorize")

router.route('/add')
    .post(authorize, addPeople);

    router.route('/')
    .get( getPeople);

    router.route('/:_id')
    .delete(authorize, deletePeople);

    router.route('/:_id')
    .put(authorize, editPeople);



module.exports = router;