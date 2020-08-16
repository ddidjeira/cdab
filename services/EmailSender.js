const nodemailer = require("nodemailer");
const userModel = require('../models/User');

module.exports = {
    sendEmail: async (userEmail, subject, container) => {
        return new Promise((resolve, reject) => {
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                port: 465,
                secure: true,
                auth: {
                    user: 'sumsa.fabrice@gmail.com',
                    pass: 'Fabioedem9'
                }
            });
            let mailOptions = {
                from: 'sumsa.fabrice@gmail.com',
                to: userEmail,
                subject: subject,
                html: container
            };
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.log(err);
                    return reject(err)
                } else {
                    console.log('Message sent : ' + info.response);
                    return resolve(info.response)
                }
            });
            transporter.close();
        });
    },
};
