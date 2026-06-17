import { Resend } from "resend";
import formidable from "formidable";
import fs from "fs";

const resend = new Resend(process.env.RESEND_API_KEY);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const form = formidable({
      multiples: false,
      keepExtensions: true,
      maxFileSize: 5 * 1024 * 1024,
    });

    const [fields, files] = await form.parse(req);

    const name = fields.name?.[0] || fields.name;
    const email = fields.email?.[0] || fields.email;
    const phone = fields.phone?.[0] || fields.phone;
    const city = fields.city?.[0] || fields.city;
    const experience = fields.experience?.[0] || fields.experience;
    const position = fields.position?.[0] || fields.position;
    const message = fields.message?.[0] || fields.message;

    if (!name || !email || !position) {
      return res.status(400).json({
        success: false,
        message: "Required fields missing",
      });
    }

    const attachments = [];

    const resumeFile = files.resume
      ? Array.isArray(files.resume)
        ? files.resume[0]
        : files.resume
      : null;

    if (resumeFile) {
      const fileBuffer = fs.readFileSync(resumeFile.filepath);

      attachments.push({
        filename: resumeFile.originalFilename,
        content: fileBuffer.toString("base64"),
      });
    }

    const result = await resend.emails.send({
      from: "ChronoHire <onboarding@resend.dev>",
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

console.log("RESEND RESULT:", result);

    return res.status(200).json({
      success: true,
      message: "Application submitted successfully",
    });

  } catch (error) {
    console.error("APPLY ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Failed to submit application",
    });
  }
}