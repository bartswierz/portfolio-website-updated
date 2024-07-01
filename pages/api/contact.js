import nodemailer from "nodemailer";

export default async function ContactAPI(req, res) {
  const { name, email, message } = req.body;

  // const user = process.env.user;

  const data = {
    name,
    email,
    message,
  };

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // user: user,
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  // TODO - 19:00 mark SETUP GOOGLE PASSWORD MANAGER - IT WILL NOT WORK IF WE DONT SET THAT UP FIRST
  try {
    const mail = await transporter.sendMail({
      from: process.env.user,
      to: "bartoszswierzynski7@gmail.com",
      replyTo: email,
      subject: `Contact form submission from ${data.name}`,
      text: data.message,
      html: `
      <p>${data.name}</p>
      <p>${data.email}</p>
      <p>${data.message}</p>
      `,
    });

    console.log("Message sent: ", mail.messageId);

    return res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Could not send the email. Your message was not sent." });
  }
}
