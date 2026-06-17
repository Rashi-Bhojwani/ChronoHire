import resend from "../services/resendService.js";

export const submitApplication = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      city,
      experience,
      position,
      message,
    } = req.body;

    const resume = req.file;

    if (!name || !email || !position) {
      return res.status(400).json({
        success: false,
        message: "Required fields missing",
      });
    }

    const attachments = [];

    if (resume) {
      attachments.push({
        filename: resume.originalname,
        content: resume.buffer.toString("base64"),
      });
    }

    const response = await resend.emails.send({
      from: "ChronoHire <noreply@chronohire.com>",
      to: process.env.COMPANY_EMAIL,
      subject: `New Job Application - ${position}`,

      html: `
        <h2>New Job Application</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>City:</strong> ${city || "N/A"}</p>
        <p><strong>Experience:</strong> ${experience || "N/A"}</p>
        <p><strong>Position:</strong> ${position}</p>

        <hr/>

        <p><strong>Cover Message:</strong></p>
        <p>${message || "No message provided"}</p>
      `,

      attachments,
    });

    console.log(response);

    return res.status(200).json({
      success: true,
      message: "Application submitted successfully",
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to submit application",
    });
  }
};