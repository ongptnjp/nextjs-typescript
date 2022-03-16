import { NextComponentType } from "next";

const Footer: NextComponentType = ({ children }) => {
    return (
        <div>
            <a href="https://www.apple.com">
                <p>Apple.com</p>
            </a>
        </div>
    )
};

export default Footer;