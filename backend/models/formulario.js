const nodemailer = require('nodemailer');

module.exports = (formulario) => {
 var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
 user: process.env.USER_EMAIL,
 pass: process.env.USER_PASSWORD
 }
 });

const mailOptions = {
 from: `"${formulario.nombre}" <${formulario.email}>`,
 to: process.env.USER_EMAIL,
 subject: formulario.asunto,
 html: `
 <strong>Nombre:</strong> ${formulario.nombre} <br/>
 <strong>E-mail:</strong> ${formulario.email} <br/>
 <strong>Mensaje:</strong> ${formulario.mensaje}
 `
 };

transporter.sendMail(mailOptions, function (err, info) {
 if (err)
 console.log(err)
 else
 console.log(info);
 });
}