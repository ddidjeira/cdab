const mongoose = require("mongoose");
const passwordHash = require("password-hash");
const jwt = require("jwt-simple");
const config = require("../config/config");

const userSchema = mongoose.Schema(
    {
        lastName: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        number: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        situation: {
            type: String,
            required: true
        },
        quizFirstStep: {
            type: String,
            required: true,
            default: "false"
        },
        quizSecondStep: {
            type: String,
            required: true,
            default: "false"
        },
        validSold: {
            type: String,
            required: true,
            default: "false"
        }
    },
);

userSchema.methods = {
    authenticationPwd: function(password) {
        return passwordHash.verify(password, this.password);
    },
    getToken: function() {
        return jwt.encode(this, config.secret);
    }
};

const user = mongoose.model("user", userSchema);

module.exports = user;
