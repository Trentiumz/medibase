import Cookies from "universal-cookie";
import translateText from './api-calls/translateText.js';
import Notifier from "react-desktop-notification";
import {useState} from 'react';

export function getProfile(){
    const cookies = new Cookies();
    let profile = cookies.get("profile");
    if(!profile){
        newProfile();
        profile = cookies.get("profile");
    }
    return profile;
}

export function setProfile(profile){
    const cookies = new Cookies();
    cookies.set("profile", profile);
}

function newProfile(){
    const cookies = new Cookies();

    const profile = {
        name: "Example1",
        colorblind: false,
        language: "en-us",
        medication: []
    }
    
    // create profile, meds, and info
    cookies.set("profile", profile);
}

export function check(){
    const cur_date = new Date().getDate();

    let profile = getProfile();
    for(let ind = 0; ind < profile.medication.length; ind++){
        const med = profile.medication[ind]
        if(parseInt(med.last_date_taken) !== parseInt(cur_date) && med.to_notify){
            Notifier.start(`Remember to take your ${med.medication_name}!`, `Remember to take ${med.medication_name} daily`, "www.google.com", "https://i.pinimg.com/originals/19/65/4c/19654c67417f65bf121984fe99c33ec1.png")
        }
        profile.medication[ind].last_date_taken = parseInt(cur_date)
        setProfile(profile);
    }
}

export async function toLang(text, lang){
    const cookies = new Cookies();
    const hashVal = text + lang;
    let translated = cookies.get("translated");
    if(!translated) {
        translated = {};
        cookies.set("translated", {});
    }
    if(lang.startsWith("en")){
        return text;
    }

    if(translated[hashVal]){
        return translated[hashVal];
    }
    
    let response = await translateText(text, lang)

    translated = cookies.get("translated");
    translated[hashVal] = response;
    cookies.set("translated", translated);
    return response;
}

export async function toCurLang(text){
    const profile = getProfile();
    return await toLang(text, profile.language);
}

function Lang(props){
    const text = props.text;
    const lang = props.lang;
    let [curText, setText] = useState(text);
    toLang(text, lang).then(response => {
        if(curText !== response){
            setText(response)
        }
    })
    return (
        <span>{curText}</span>
    )
}

export function CurLang(props){
    const text = props.text;
    const profile = getProfile();
    return <Lang text={text} lang={profile.language} />;
}