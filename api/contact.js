// api/contact.js
const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sizin-email@gmail.com",
      pass: "sizin-email-şifreniz",
    },
  });

  const mailOptions = {
    from: "sizin-email@gmail.com",
    to: "sizin-email@gmail.com",
    subject: `Yeni İletişim Formu Gönderisi: ${subject}`,
    text: `Ad: ${name}\nE-posta: ${email}\nMesaj: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "E-posta başarıyla gönderildi" });
  } catch (error) {
    return res.status(500).json({ error: "E-posta gönderme hatası" });
  }
}
