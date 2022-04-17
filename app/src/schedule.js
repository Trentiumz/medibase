import Navbar from "./nav-bar";
import {CurLang} from "./tools.js"

export default function Schedule() {
    return (
        <div>
        <Navbar />
        <div className="content">
            <div className="inner-content">
                <div className="error-text">
                <p><CurLang text="Coming Soon!" /></p>    
                <a className="a-error" href="/"><CurLang text="Click here" /></a> <CurLang text="to return home." />
                </div>
            </div>
        </div>
        </div>
    );
}
