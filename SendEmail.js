import nodemailer from "nodemailer";

// NodeMailer

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
    from: `Personal Portfolio 👨‍💻 <tnhnkzc1905@hotmail.com>`,
    to: process.env.SEND_TO,
    subject: "Message from Personal Portfolio",
    message: message,
    html: `<div>
    <ul>
    <li><p>Name and Surname: ${fullName}</p></li>
    <li><p>Email: ${email}</p></li>
    <li><p>Subject: ${subject}</p></li>
    <li><p>Message: ${message}</p></li>
    </ul>
    </div>`,
  };
  Email(options);
};
export default EmailSender;
