import Navbar from "./nav-bar";

import "./404.css";

export default function PageNotFound() {
    return (
        <div>
        <Navbar />
        <div className="content">
            <div className="inner-content">
                <div className="error-text">
                    404: the cocaine isn't here. Check the black market. <a className="a-error" href="/">Click here</a> to return home.
                </div>
            </div>
        </div>
        </div>
    );
}