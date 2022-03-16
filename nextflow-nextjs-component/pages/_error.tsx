import { NextPage, NextPageContext } from "next";

type ErrorInfo = {
    statusCode: number | undefined
}

const ErrorPage:NextPage<ErrorInfo> = ({ statusCode }) => {
    return (
        <div>

        </div>
    )
}

ErrorPage.getInitialProps = async (context: NextPageContext) => {

    const { err, res } = context;

    const errorCode = err ? err.statusCode : 404;
    const code = res ? res.statusCode : errorCode;

    return {
        statusCode: code
    }
}

export default ErrorPage;