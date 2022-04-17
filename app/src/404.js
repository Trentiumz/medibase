import Navbar from "./nav-bar";

export default function PageNotFound() {
    return (
        <div>
        <Navbar />
        <div className="page-not-found">
            <p>Page not found</p>
            <p>Please try again</p>
            <a href="/">Return Home</a>
        </div>
        </div>
    );
}