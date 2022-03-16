import { NextPage } from "next";
import useSWR from "swr";

import type { CovidResultInfo } from "../../types/covid-result-info";

const fetcher = (...args: any) => {
    return fetch(args).then(res => res.json());
}

const ExcludeAboard : NextPage = () => {
    const { data, error } = useSWR<CovidResultInfo, any>("https://covid19.ddc.moph.go.th/api/Cases/today-cases-all", fetcher);

    if (error) return <h1>Error</h1>

    if (!data) return <h1>Loading ....</h1>
    return (
        <div>
            <h1>Client-side use SWR</h1>
            <h2>New case Exclude aboard : {data[0].new_case_excludeabroad}</h2>
        </div>
    )
}

export default ExcludeAboard;