import {useState} from 'react';
import Tabletop from 'tabletop';

function Init() {

    const [data, setData] = useState([]);

    Tabletop.init({
        key: "https://docs.google.com/spreadsheets/d/1sbyMINQHPsJctjAtMW0lCfLrcpMqoGMOJj6AN-sNQrc/pubhtml",

        callback: showInfo,

        simpleSheet: true
    });

    function showInfo(data, tabletop) {
        console.log(data);
        setData(data);
    }

    return (
       <>
       {data.map(panda => (
           <h1>{panda.title}</h1>
       ))}
       </> 
    )
}

export default Init;