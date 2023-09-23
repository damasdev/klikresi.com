import { r as redirect } from "../../../chunks/index.js";
import { OAuth2Client } from "google-auth-library";
import { C as CLIENT_ID, a as CLIENT_SECRET, B as BASE_URL } from "../../../chunks/private.js";
const actions = {
  OAuth2: async () => {
    const redirectURL = `${BASE_URL}/oauth`;
    const oAuth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, redirectURL);
    const authorizeUrl = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: "https://www.googleapis.com/auth/userinfo.email",
      prompt: "consent"
    });
    throw redirect(302, authorizeUrl);
  }
};
export {
  actions
};
