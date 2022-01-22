const nodeMailer = require("nodemailer");

require("dotenv").config();

const PASSWORD = process.env.PASSWORD;

export default function handler(req, res) {
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

      let done = false;

      transporter.sendMail(mailData, (err, info) => {
        if (err) {
          done = false;
        } else {
          done = true;
        }
      });
      if (done === true)
        return res.status(200).send({
          status: false,
          message: "Bir şey yanlış gitti. Lütfen daha sonra tekrar deneyiniz",
        });
      return res.status(200).send({
        status: true,
        message: "Send Mail Worked",
      });
    } catch (err) {
      console.error(err);
      res.status(400).send("Error !");
    }
  } else {
    res.status(404).send();
  }
}
