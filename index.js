const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", //Servidor de email
    port: n465, //A porta do servidor
    secure: true, //Se tem ou não criptografia SSL ou TLS
    auth: { //Colocar uma conta de email com a senha
        user: "emaildetestedojnc@gmail.com", //Email
        pass: "Servepratudo1324'@" //Senha
    }
})

transporter.sendMail({
    from: "Joallisson Nascimento Castro <emaildetestedojnc@gmail.com>", //Conata de email que está enviando a mensagem
    to: "joallissons@gmail.com", //Conta de email que vai receber a mensagem
    subject: "Estou enviando esse email pelo backend", //Título da mensagem
    //text: "Olhaí bixo, deu certo pra enviar email com o node, vou postar esse <a href='https://github.com/Joallisson/Envio-email-simples-node'>projeto</a> lá no github", //Descrição da mensagem
    html: "Olhaí bixo, deu certo pra enviar email com o node, vou postar esse <a href='https://github.com/Joallisson/Envio-email-simples-node'>projeto</a> lá no github" //Código html opcional
})