import React, { useState, useEffect } from 'react';
import Tabletop from 'tabletop';

export default function Ranking() {
    
    const [ranking, setRanking] = useState([]);

    useEffect(() => {
        Tabletop.init({
            key: "https://docs.google.com/spreadsheets/d/1bAVYC59d1cUAKCaZsaVMN1F4wjIex8iXaqvm8tx8uu8/pubhtml",

            callback: showInfo,

            simpleSheet: true
        });

        function showInfo(data, tabletop) {

            const militaresData = Array.from(data);

            function compare(a,b) {
                if (a.qtd_services < b.qtd_services) return 1;
                if (a.qtd_services > b.qtd_services) return -1;
                return 0;
            }

            const militaresDataOrdered = militaresData.sort(compare);
            setRanking(militaresDataOrdered);
        }

    }, []);
    
    
    return (
        <>
            {ranking.map((militar, index) => (
                <p><span>{militar.name}</span><strong>{militar.qtd_services}</strong></p>
            ))}
        </>
    )
}