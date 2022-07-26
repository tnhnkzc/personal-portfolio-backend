import nodemailer from "nodemailer";

const Email = (options) => {
  let transporter = nodemailer.createTransport({
    service: "Hotmail",
    auth: {
      user: process.env.SEND_MAIL,
      pass: process.env.PASSWORD,
    },
  });

  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }
  });
};

//send email
const EmailSender = ({ fullName, email, subject, message }) => {
  const options = {
    from: email,
    to: "tnhnkzc1905@hotmail.com",
    subject: `Message from ${fullName}`,
    message: message,
    html: `<p>Email: ${email}</p>
    <p>Name: ${fullName}</p>
    <p>Subject: ${subject}</p>
    <p>Message: ${message}</p>`,
  };
  Email(options);
};
export default EmailSender;
