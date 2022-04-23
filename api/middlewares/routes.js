const userRouter = require('../routers/userRouter');
const peopleRouter = require('../routers/peopleRouter');



module.exports = (app) => {
    app.use('/api/auth', userRouter);
    app.use('/api/people', peopleRouter);
    
}