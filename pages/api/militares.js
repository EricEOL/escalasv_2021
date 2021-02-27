import { GoogleSpreadsheet } from 'google-spreadsheet';

export default async function (req, res) {

    const doc = new GoogleSpreadsheet('1IP4DHmpXKyG9zJ95e0TS7WfBqC26A_W14ek7GTGbHcA');

    await doc.useServiceAccountAuth({
        client_email: process.env.CLIENT_EMAIL.replace(/(\\r)|(\\n)/g, '\n'),
        private_key: process.env.PRIVATE_KEY.replace(/(\\r)|(\\n)/g, '\n'),
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