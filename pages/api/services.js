import { GoogleSpreadsheet } from 'google-spreadsheet';

export default async function (req, res) {

    const doc = new GoogleSpreadsheet('1IP4DHmpXKyG9zJ95e0TS7WfBqC26A_W14ek7GTGbHcA');

    await doc.useServiceAccountAuth({
        client_email: process.env.CLIENT_EMAIL.replace(/(\\r)|(\\n)/g, '\n'),
        private_key: process.env.PRIVATE_KEY.replace(/(\\r)|(\\n)/g, '\n'),
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