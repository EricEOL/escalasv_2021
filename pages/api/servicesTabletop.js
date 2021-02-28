import Tabletop from 'tabletop';

export default async function (req, res) {

    Tabletop.init({
        key: "https://docs.google.com/spreadsheets/d/1IP4DHmpXKyG9zJ95e0TS7WfBqC26A_W14ek7GTGbHcA/pubhtml",

        callback: showInfo,

        simpleSheet: true
    });

    function showInfo(data, tabletop) {

        const services = Array.from(data);

        const whoIsServiceToday = services.find(service => service.today == "sim");
        const whoIsServiceTomorrow = services.find(service => service.id == Number(whoIsServiceToday.id) + 1);

        const scaleSize = services.length;
        const servicesModificated = services.filter(({ id, data, militar, avatar, grad, escala }, index) => {
            if (index >= scaleSize - 4) {
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
        });
    }
}