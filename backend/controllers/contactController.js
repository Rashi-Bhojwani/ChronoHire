import resend from "../services/resendService.js";

export const sendContactMessage = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      message,
    } = req.body;

    await resend.emails.send({
      from: "ChronoHire <hr@chronohire.com>",
      to: process.env.COMPANY_EMAIL,

      subject: `New Contact Inquiry - ${name}`,

      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>

        <hr/>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
};