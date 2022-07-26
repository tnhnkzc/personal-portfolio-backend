import nodemailer from "nodemailer";

const Email = (options) => {
  let transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: process.env.SEND_MAIL, // email
      pass: process.env.PASSWORD, //password
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
    to: process.env.SEND_TO,
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
