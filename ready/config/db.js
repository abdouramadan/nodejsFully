const mongoose  =   require('mongoose')
const DBURI     =   process.env.DBURI

const connect   =   mongoose.connect(DBURI, 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(res => console.log('connected to mongodb'))
.catch(err => console.log(err))