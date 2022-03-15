import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import type { CovidResultInfo } from "../../types/covid-result-info";

export const getServerSideProps: GetServerSideProps = async (context) => {

    const response = await fetch('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET'
    })

    const result = await response.json()


    return {
        props: {
            result
        }
    }
}

const CovidResultServer: NextPage = ({ result }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

    const resultObject = result as CovidResultInfo

    return (
        <div>
            <h1>Update at {resultObject[0].txn_date}</h1>
            <p>New case: {resultObject[0].new_case}</p>
            <p>Total case: {resultObject[0].total_case}</p>
        </div>
    )
}

export default CovidResultServer