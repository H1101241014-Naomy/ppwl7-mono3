import { google } from "googleapis";

export function createOAuthClient() {
  console.log("CLIENT ID:", process.env.GOOGLE_CLIENT_ID);
  console.log("REDIRECT:", process.env.GOOGLE_REDIRECT_URI);

  return new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );
}

// Tambahkan tipe any supaya TS tidak error
export default function handler(req: any, res: any) {
  const client = createOAuthClient();
  res.status(200).send("Cek logs Vercel Messages, CLIENT ID & REDIRECT muncul di console");
}