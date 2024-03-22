import { OAUTH_API_URL } from './apiUrls';

let accessToken: string;
let tokenExpirationTime: any;

export const fetchAccessToken = async () => {
	let oauthKey = process.env.REACT_APP_OAUTH_KEY;
	let oauthSecret = process.env.REACT_APP_OAUTH_SECRET;
	const oauthCredentials = btoa(`${oauthKey}:${oauthSecret}`);
	let url = OAUTH_API_URL;

	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				Authorization: `Basic ${oauthCredentials}`,
				'Content-Type': 'application/json',
			},
		});
		const data = await response.json();
		accessToken = data.access_token;
		console.log('access_token: ', data.access_token);
		tokenExpirationTime = Date.now() + data.expires_in * 2000;
	} catch (error) {
		console.error('Error fetching access token:', error);
		throw error;
	}
};

export const getAccessToken = async () => {
	if (!accessToken || Date.now() >= tokenExpirationTime) {
		await fetchAccessToken();
	}
	return accessToken;
};
