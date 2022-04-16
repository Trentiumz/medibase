const axios = require("axios");

const profileRequest = {
    method: "GET",
    url: 'http://localhost:5000/profiles'
}

export async function getProfile(id) {
    var ret = {"status": "success"};
    
    profileRequest.url = `http://localhost:5000/profiles/${id}`;
    await axios(DINRequest).then(response => {
        if (response.data.length === 0) {
            ret["status"] = "error: profile not found";
            return;
        }
        ret["id"] = response.data[0].id;
        ret["name"] = response.data[0].name;
        ret["settings"] = response.data[0].settings;
        ret["medication"] = response.data[0].medication;
        return ret;
    }).catch (error => {console.log(error)});
    
}