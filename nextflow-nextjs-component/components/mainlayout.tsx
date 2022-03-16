import { NextComponentType } from "next";
import Link from "next/link";
import Footer from "./footer";


const MainLayout: NextComponentType = ({ children }) => {
    return (
        <div>
            <div>
                <Link href={"/"}>Home</Link>
                <Link href={"/covid-result"}>Covid Result</Link>
            </div>
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout;