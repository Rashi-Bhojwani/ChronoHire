import dotenv from "dotenv";
dotenv.config();

import { Resend } from "resend";

console.log("RESEND KEY =", process.env.RESEND_API_KEY);

let resend = null;

if (
  process.env.RESEND_API_KEY &&
  process.env.RESEND_API_KEY !== "HEHE"
) {
  resend = new Resend(process.env.RESEND_API_KEY);
}

export default resend;