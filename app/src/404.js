import Navbar from "./nav-bar";
import {CurLang} from "./tools.js"
import "./404.css";

export default function PageNotFound() {
    return (
        <div>
        <Navbar />
        <div className="content">
            <div className="inner-content">
                <div className="error-text">
                    <CurLang text="404: page no here D:"/> <a className="a-error" href="/"><CurLang text="Click here" /></a> <CurLang text="to return home."/>
                </div>
            </div>
        </div>
        </div>
    );
}
