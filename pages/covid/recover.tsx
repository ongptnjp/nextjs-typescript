import { NextPage } from "next";
import { useEffect, useState } from "react";
import type { CovidResultInfo } from "../../types/covid-result-info";

const RecoverPage : NextPage = () => {

    const [covidResultInfo, setCovidResultInfo] = useState<CovidResultInfo>();

    useEffect(() => {

        const initData = async () => {
            const response = await fetch('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'GET'
            })

            const result: CovidResultInfo = await response.json();

            setCovidResultInfo(result);
        }

        initData();

    }, []);

    if(!covidResultInfo) return <h1>Loading ....</h1>

    return (
        <div>
            <h1>Client side rendering</h1>
            <h2>Recover today : {covidResultInfo[0].new_recovered}</h2>
        </div>
    )
}

export default RecoverPage;