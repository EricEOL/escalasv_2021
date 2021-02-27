import { GoogleSpreadsheet } from 'google-spreadsheet';
import credentials from '../../credentials/google-sheets-api.json';

export default async function (req, res) {

    const doc = new GoogleSpreadsheet('1IP4DHmpXKyG9zJ95e0TS7WfBqC26A_W14ek7GTGbHcA');

    await doc.useServiceAccountAuth({
        client_email: credentials.client_email/* CLIENT_EMAIL.replace(/\\n/g, "\n") */,
        private_key: credentials.private_key/* PRIVATE_KEY.replace(/\\n/g, "\n") */,
    });

    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[1];
    const rows = await sheet.getRows();

    const military = rows.map(({ id, name, grad, avatar, team, responsability })=>{
        return {
            id, 
            name, 
            grad,
            avatar,
            team,
            responsability
        }
    })

    res.json({
        military
    })
}