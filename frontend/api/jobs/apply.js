import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  return res.status(200).json({
    success: true,
    message:
      "Apply endpoint detected. Resume upload implementation next.",
  });
}