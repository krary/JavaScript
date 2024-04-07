const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
   host:'smtp-mail.outlook.com',
   port:'587',
   secure:false,
   auth: {
         user:'fraggmentado@outlook.com',
         pass:'marthasarmi123'
         }
   });
let mailOptions = {
    from:'fraggmentado@outlook.com',
    to:'fraggmentado@outlook.com',
    subject:'Mensaje de JavaScript',
    text:'This is the messagge that i sending from node JS..',
    attachments:{
        filename:'Eloquent_JavaScript.pdf',
        path:'/home/kali/Downloads/Eloquent_JavaScript.pdf'

     }
}
transporter.sendMail(mailOptions,function(error,info){
if(info){console.log("Messagge sended..")}
})
