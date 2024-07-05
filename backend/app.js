const express=require('express');
const cors=require('cors');
const User=require('./models/auth')
const mongoose = require('mongoose')
const bodyParser=require('body-parser');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const secreatKey="Sachin Goyal";
const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


const url = `mongodb+srv://Sachin:Sachin1234@cluster0.yrnw5ly.mongodb.net/node-angular?retryWrites=true&w=majority&appName=Cluster0`;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    });



app.post('/api/signup', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    // User.findOne({ email: email })
    //     .then(user => {
    //         if (user) {
    //             return res.status(400).json({ message: 'User already exists' });
    //         }

            // Hash the password
            bcrypt.hash(password, 10)
                .then(hash => {
                    const newUser = new User({
                        email: email,
                        password: hash
                    });
                    newUser.save()
                    .then(result => {
                        // Create a JWT token
                        jwt.sign(
                            { email: email },
                            secreatKey,
                            { expiresIn: '1h' },
                            (err, token) => {
                                if (err) {
                                    return res.status(500).send({
                                        message: 'Error in generating token',
                                        error: err
                                    });
                                }
                                res.status(201).json({
                                    message: 'User Created Successfully',
                                    token: token,
                                    result: result
                                });
                            }
                        );
                    })
                    .catch(err => {
                        res.status(500).json({
                            error: err
                        });
                    });
                })
                
        })
        
app.post('/api/login',(req,res,next)=>{
    let fetchedUser;
    User.findOne({ email: req.body.email })
    .then(user=>{
      if(!user){
        return res.status(401).json({ message: 'Auth Failed' });
      }
      fetchedUser=user;
     return bcrypt.compare(req.body.password,user.password)
    })
    .then(result=>{
       if(!result){
        return res.status(401).json({ message: 'Auth Failed' });
       }
       const token=jwt.sign({email:fetchedUser.email,userId:fetchedUser._id},secreatKey,{expiresIn:'1h'});
         res.status(200).json({
            token:token
         })
    })
    .catch(err=>{
        return res.status(401).json({ message: 'Auth Failed' });
    })
})

module.exports=app;
