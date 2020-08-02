const userModel = require('../models/User');
const express = require('express');
const route = express.Router();
const passwordHash = require("password-hash");
const validator = require("email-validator");

route.post('/register', async (req,res) => {
    let user = new userModel();
    user.lastName = req.body.lastName;
    user.firstName = req.body.firstName;
    user.email = req.body.email;
    user.password = passwordHash.generate(req.body.password);

    if (validator.validate(user.email)){
        userModel.find({email : user.email}, async (err,docs)=>{
            console.log("docs : "+docs+" user"+user);
            if (!docs.length) {
                await user.save(err => {
                    if (err) {
                        return res.status(500).json({text : 'Erreur sauvegarde'});
                    }
                    return res.status(200).json({
                        status: "200",
                        text : "New user added",
                        token : user.getToken(),
                        email: user.email,
                    });
                });
            } else {
                return res.status(409).json({text : 'User already exists'});
            }
        });
    }else {
        return res.status(412).json({text : 'Email invalid'});
    }
});


route.post('/login', async (req,res)=>{
    let user = new userModel();
    user.email = req.body.email;
    user.password = passwordHash.generate(req.body.password);

    console.log("email : "+user.email+" password : "+user.password);

    if (validator.validate(user.email)){
        userModel.find({email: user.email, password: user.password}, async ()=>{
            const findUser = await userModel.findOne({email: user.email});
            if (!findUser){return res.status(409).json({text: "Mail error"})}
            if (findUser.authenticationPwd(req.body.password)) {
                return res.status(200).json({
                    text: "You are connected",
                    token: user.getToken(),
                    email: user.email,
                })
            } else {
                return res.status(409).json({text: "Password error"})
            }
        })
    }else {
        return res.status(412).json({text : 'Email invalid'});
    }
});


module.exports = route;
