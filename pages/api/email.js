const nodeMailer = require("nodemailer");

require("dotenv").config();

const PASSWORD = process.env.PASSWORD;

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { email, subject, firstName, lastName, message } = req.body;

      const transporter = nodeMailer.createTransport({
        // port: 465,
        // host: "smtp.gmail.com",
        service: "gmail",
        auth: {
          user: "hamedsahin2018@gmail.com",
          pass: PASSWORD,
        },
        secure: true,
      });

      if (!email || !firstName || !lastName || !message || !subject)
        return res.status(204).send({
          message: "Lütfen tüm alanları doldurunuz",
        });
      // start send message (email)
      const mailData = {
        from: email,
        to: "hamedsahin2018@gmail.com",
        subject: `Message from ${firstName} ${lastName} about ${subject} his email ${email}`,
        text: message,
        // html: <div>{message}</div>,
      };

      // const data = await transporter.sendMail(mailData);

      return transporter.sendMail(mailData, (err, info) => {
        if (err) {
          return res.status(400).send(err);
        } else {
          return res.status(200).send({
            status: true,
            message: "Send Mail Worked",
          });
        }
      });
    } catch (err) {
      console.error(err);
      res.status(400).send("Error !");
    }
  } else {
    res.status(404).send();
  }
}
