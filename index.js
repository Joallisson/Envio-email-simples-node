const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", //Servidor de email
    port: "", //A porta do servidor
    secure: "", //Se tem ou não criptografia SSL ou TLS
    auth: { //Colocar uma conta de email com a senha
        user: "", //Email
        pass: "" //Senha
    }
})

transporter.sendMail({
    from: "", //Conata de email que está enviando a mensagem
    to: "", //Conta de email que vai receber a mensagem
    subject: "", //Título da mensagem
    text: "", //Descrição da mensagem
    html: "" //Código html opcional
})