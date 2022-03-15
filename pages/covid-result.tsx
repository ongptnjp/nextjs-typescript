import React from "react";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import type { CovidResultInfo } from "../types/covid-result-info";

export const getStaticProps: GetStaticProps = async (context) => {
    const response = await fetch("https://covid19.ddc.moph.go.th/api/Cases/today-cases-all", {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    });

    const result : CovidResultInfo = await response.json();
    return {
        props: {
            result
        }
    }
}

const CovidResult : NextPage = ({ result }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const covidInfo = result as CovidResultInfo;
    return (
        <div>
            <p>New Case : {covidInfo[0].new_case}</p>
        </div>
    );
}

export default CovidResult;