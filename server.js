require ('dotenv').config()
const express=require('express')
const mongoose= require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const cron = require('node-cron');
const reminderModel = require('./models/reminderModel');
const mailservice = require('./services/mailService.js');

// const datetime = require('date-and-time')


const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles:true
}))

app.use('/user',require('./controllers/userController'))

cron.schedule('* * * * *',async function() {
    
    try {
        const remainder = await reminderModel.find()
        // res.json(remainder)
        console.log(remainder)

            var today = new Date();
            var dd = today.getDate();

            var mm = today.getMonth()+1; 
            var yyyy = today.getFullYear();
            var time = today.getHours() + ":" + today.getMinutes();
            if(dd<10) 
            {
                dd='0'+dd;
            } 

            if(mm<10) 
            {
                mm='0'+mm;
            } 
            today = mm+'/'+dd+'/'+yyyy;
            var dateTime = today+' '+time;

        // var today = new Date();
        // var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
        // var time = today.getHours() + ":" + today.getMinutes();
        // var dateTime = date+' '+time;
        console.log(dateTime)

        // const dateTime = datetime.format(today,'YYYY/MM/DD HH:mm:ss');

    var i;
    for (i = 0; i < remainder.length; i++) {
        console.log(remainder[i].date)
        if(remainder[i].date === dateTime){
            mailservice.sendmail(remainder[i].email,"Reminder",remainder[i].description);
            console.log("okk")
        }
        
    }


    } catch (err) {
        return res.status(500).json({msg : err.message})
    }

  });


const URI = process.env.MONGODB_URL
mongoose.connect(URI,{
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser:true,
    useUnifieldTopology: true
}, err => {
    if(err) throw err;
    console.log('Connected to Mongodb')
})

app.listen(4500, () => console.log('EXPRESS server started at port no. 4500'));

app.get('/',(req,res) => {
    res.json({msg : "testing... "})
})