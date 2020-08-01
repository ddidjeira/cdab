const userModel = require('../models/User');
const express = require('express');
const route = express.Router();
const passwordHash = require("password-hash");
const validator = require("email-validator");

route.post('/register', async (req,res) => {
    let user = new userModel();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = passwordHash.generate(req.body.password);

    if (validator.validate(user.email)){
        userModel.find({email : user.email}, async (err,docs)=>{
            if (!docs.length) {
                await user.save(err => {
                    if (err) {
                        res.send(err)
                    }
                });
                return res.status(200).json({
                    text : "New user added",
                    token : user.getToken(),
                    email: user.email,
                });
            } else {
                return res.json({text : 'User already exists'});
            }
        });
    }else {
        return res.json({text : 'Email invalid'});
    }
});


route.post('/signIn', async (req,res)=>{
    let user = new userModel();
    user.email = req.body.email;
    user.password = passwordHash.generate(req.body.password);

    if (validator.validate(user.email)){
        userModel.find({email: user.email, password: user.password}, async ()=>{
            const findUser = await userModel.findOne({email: user.email});
            if (!findUser){return res.json({text: "Mail error"})}
            if (findUser.authenticationPwd(req.body.password)) {
                return res.status(200).json({
                    text: "You are connected",
                    token: user.getToken(),
                    email: user.email,
                })
            } else {
                return res.json({text: "Password error"})
            }
        })
    }else {
        return res.json({text : 'Email invalid'});
    }
});


module.exports = route;
