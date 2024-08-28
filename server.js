const app = require('./app');
const db= require('./config/database');
try{
    db.authenticate();
    console.log('Connection has been established successfully.');   
}
catch(error){
    console.error('Unable to connect to the database:', error);
}
const port =  8080;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});