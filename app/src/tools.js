import Cookies from "universal-cookie";
import Notifier from "react-desktop-notification";

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

export function check(){
    const cookies = new Cookies();
    let profile = cookies.get("profile");
    if(!profile) {
        newProfile();
        profile = cookies.get("profile");
    }
    
    const cur_date = new Date().getDate();

    for(let med of profile.medication){
        if(parseInt(med.last_date_taken) !== parseInt(cur_date)){
            Notifier.start(`Remember to take your ${med.medication_name}!`, `Remember to take ${med.medication_name} daily`, "www.google.com", "https://i.pinimg.com/originals/19/65/4c/19654c67417f65bf121984fe99c33ec1.png")
            med.last_date_taken = parseInt(cur_date);
            cookies.set("profile", profile);
        }
    }
}