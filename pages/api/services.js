import { GoogleSpreadsheet } from 'google-spreadsheet';
import credentials from '../../credentials/google-sheets-api.json';

export default async function (req, res) {

    const doc = new GoogleSpreadsheet('1IP4DHmpXKyG9zJ95e0TS7WfBqC26A_W14ek7GTGbHcA');

    await doc.useServiceAccountAuth({
        client_email: credentials.client_email/* CLIENT_EMAIL.replace(/\\n/g, "\n") */,
        private_key: credentials.private_key/* PRIVATE_KEY.replace(/\\n/g, "\n") */,
    });

    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();

    const services = rows.map(({ id, data, militar, avatar, grad, escala, today })=>{
        return {
            id,
            data,
            militar,
            avatar,
            grad,
            escala,
            today
        }
    })

    const whoIsServiceToday = services.find(service => service.today === "sim");
    
    const whoIsServiceTomorrow = services.find(service => service.id == Number(whoIsServiceToday.id) + 1);

    const scaleSize = services.length;
    const servicesModificated = services.filter(({id, data, militar, avatar, grad, escala}, index)=> {
        if(index >= scaleSize - 4) {
            return {
                id,
                data,
                militar,
                avatar,
                grad,
                escala
            }
        }
    })

    res.json({
        servicesModificated,
        whoIsServiceToday,
        whoIsServiceTomorrow
    })
}