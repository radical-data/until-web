import { Api } from 'nocodb-sdk'
import { NOCODB_AUTH_TOKEN } from '$env/static/private';
export const nocodb_api = new Api({
  baseURL: 'https://app.nocodb.com',
  headers: {
    'xc-auth': NOCODB_AUTH_TOKEN
  }
})