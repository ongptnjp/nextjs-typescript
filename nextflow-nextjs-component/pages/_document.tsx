import Document, { Head, Html, Main, NextScript } from "next/document";


class CustomDocument extends Document {

    render(): JSX.Element {
        return(
            <Html>
                <Head lang="en" title="test COVID documents"/>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }

}

export default CustomDocument;