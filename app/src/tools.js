import Cookies from "universal-cookie"

export default function newProfile(){
    const cookies = new Cookies();

    const profile = {
        name: "Example1",
        colorblind: false,
        language: "en-us",
        medication: []
    }
    
    cookies.set("profile", profile);
}