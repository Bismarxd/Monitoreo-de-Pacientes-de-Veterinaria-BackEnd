import nodemailer from 'nodemailer'

const emailRegistro = async(datos) => {
    var transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    
    const {email, nombre, token} = datos;

    //Enviar el Email
    const info = await transport.sendMail({
      from: "Veterinaria La Paz",
      to: email,
      subject: "Comprueba tu cuenta en APV",
      html: `<!DOCTYPE html> 
              <html> 
                <head> 
                  <meta charset="utf-8"> 
                  <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Comprueba tu cuenta en Veterinaria La Paz</title> 
                  </head> <body style="font-family: Arial, sans-serif; background-color: #f2f2f2; padding: 20px;"> 
                  <div style="background-color: #ffffff; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px #888888;"> 
                  <h1 style="text-align: center; color: #4CAF50;">Comprueba tu cuenta en Veterinaria La Paz</h1> 
                  <p style="font-size: 16px;">Hola ${nombre},</p> <p style="font-size: 16px;">Tu cuenta ya está lista, solo debes comprobarla en el siguiente enlace:</p> 
                  <p style="text-align: center; margin: 20px 0;"><a href="${process.env.FRONTEND_URL}/confirmar/${token}" style="background-color:#4CAF50; color: #ffffff; padding: 10px 20px; border-radius: 5px; text-decoration: none;">Comprobar cuenta</a></p> 
                  <p style="font-size: 16px;">Si no creaste esta cuenta, puedes ignorar este mensaje.</p> 
                  <p style="font-size: 16px;">¡Gracias por unirte a Veterinaria La Paz!</p> <hr style="border: none; border-top: 1px solid #dddddd; margin: 20px 0;"> 
                  <p style="font-size: 12px; color: #999999; text-align: center;">Este mensaje fue enviado automáticamente desde Veterinaria La Paz. Por favor, no respondas a este correo electrónico.</p> </div> </body> </html> 
        `,
    });
    
};

export default emailRegistro;