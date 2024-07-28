import nodemailer from "nodemailer";

export const mailSender = async (email, title, body) => {
  try {
    // Create a Transporter to send emails
    var transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASS,
      },
    });
    // Send emails to users
    let info = await transporter.sendMail({
      from: "sandbox.smtp.mailtrap.io",
      to: email,
      subject: title,
      html: body,
    });

    return info;
  } catch (error) {
    console.log(error.message);
  }
};
