import { Api } from 'nocodb-sdk';
import { NOCODB_API_TOKEN } from '$env/static/private';
export const nocodb_api = new Api({
	baseURL: 'https://app.nocodb.com',
	headers: {
		'xc-token': NOCODB_API_TOKEN
	}
});
