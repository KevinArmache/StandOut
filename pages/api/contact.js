export default function (req, res) {
  let nodemailer = require("nodemailer");
  require("dotenv").config();

  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "7b9a8afe49dd41",
      pass: "989dae859d93e9",
    },
  });
  const mailData = {
    from: `${req.body.email}`,
    // to: "standoutqueries@gmail.com",
    to: "kevinarmachepsn@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.email}</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
