import Navbar from "./nav-bar";
import {CurLang} from "./tools.js"

export default function Schedule() {
    return (
        <div>
        <Navbar />
        <div className="content">
            <div className="inner-content">
                <div>
                <p className="schedule-body"><CurLang text="Coming Soon! Here's a sneak peek!" /></p>    
                <img className = "schedule-img" src="https://media.discordapp.net/attachments/960656398478352454/965373486572916786/Group_29.png" alt="schedule mock-up" />
                </div>
            </div>
        </div>
        </div>
    );
}
