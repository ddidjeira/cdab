const nodemailer = require("nodemailer");
const userModel = require('../models/User');

module.exports = {
    sendEmail: async (userEmail, subject, container) => {
        return new Promise((resolve, reject) => {
            let transporter = nodemailer.createTransport({
                host: 'ssl0.ovh.net',
                //service: 'gmail',
                port: 465,
                secure: true,
                auth: {
                    user: 'test-website@cdabcompass.com',
                    pass: 'MO#i5.C2pkh$WNdo'
                }
            });
            let mailOptions = {
                from: 'test-website@cdabcompass.com',
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
