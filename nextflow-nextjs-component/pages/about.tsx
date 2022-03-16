import { NextPage } from "next";
import Head from "next/head";

interface MyProps {
    title: string
}

const About: NextPage<MyProps> = (props) => {
    return (
        <div>
            <Head>
                <title>{props.title} about my company</title>
            </Head>
        </div>
    )
}

export default About;