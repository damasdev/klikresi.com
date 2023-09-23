import { redirect } from '@sveltejs/kit';
import { OAuth2Client } from 'google-auth-library';
import { CLIENT_ID, CLIENT_SECRET, BASE_URL } from '$env/static/private';

async function getUserData(access_token: string) {
	const response = await fetch(
		`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
	);
	const data = await response.json();
	console.log('data', data.email);
}

export const load = async ({ request }) => {
	const redirectURL = `${BASE_URL}/oauth`;
	const url = new URL(request.url);
	const code = url.searchParams.get('code');

	if (!code) {
		return {
			status: 400,
			body: 'Code is missing.'
		};
	}

	try {
		const oAuth2Client = new OAuth2Client({
			clientId: CLIENT_ID,
			clientSecret: CLIENT_SECRET,
			redirectUri: redirectURL
		});

		const { tokens } = await oAuth2Client.getToken(code);

		// Make sure to set the credentials on the OAuth2 client.
		oAuth2Client.setCredentials(tokens);

		const user = oAuth2Client.credentials;
		if (!user.access_token) {
			return {
				status: 400,
				body: 'access token is missing.'
			};
		}

		await getUserData(user.access_token);
	} catch (err) {
		return {
			status: 500,
			body: err
		};
	}

	throw redirect(303, '/dashboard');
};
