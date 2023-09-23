import { redirect } from '@sveltejs/kit';
import { OAuth2Client } from 'google-auth-library';
import { CLIENT_ID, CLIENT_SECRET, BASE_URL } from '$env/static/private';

export const actions = {
	OAuth2: async () => {
		const redirectURL = `${BASE_URL}/oauth`;

		const oAuth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, redirectURL);

		// Generate the url that will be used for the consent dialog.
		const authorizeUrl = oAuth2Client.generateAuthUrl({
			access_type: 'offline',
			scope: 'https://www.googleapis.com/auth/userinfo.email',
			prompt: 'consent'
		});

		throw redirect(302, authorizeUrl);
	}
};
