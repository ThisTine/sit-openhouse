import { GoogleAuth, auth } from 'google-auth-library';

export const authFunc = ()=>{
	const keysEnvVar = process.env['CREDS'] ?? '';
	console.log(keysEnvVar);
    
	const keys = JSON.parse(keysEnvVar);
	console.log(keys);

	const auth = new GoogleAuth({
		credentials: keys,
		scopes: ['https://www.googleapis.com/auth/cloud-platform','https://www.googleapis.com/auth/spreadsheets']
	});
	
	return auth;
};