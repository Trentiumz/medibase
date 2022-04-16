import Cookies from "universal-cookie"

export default function newProfile(){
    const cookies = Cookies();

    const profile = {
        name: "",
        colorblind: true,
        language: "en-us",
        medication: []
    }
    
    cookies.set("profile", profile);
}