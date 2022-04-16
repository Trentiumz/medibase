import React, {useState, useEffect} from "react";
const axios = require("axios");

const DINRequest = {
  method: 'GET',
  url: 'https://health-products.canada.ca/api/drug/'
};

export default async function MakeDINRequests(din) {
    const [ret, setRet] = useState({});
    function updateRet(key, val) {
        let tmp = ret;
        tmp[key] = val;
        setRet(tmp);
    }

    // get the base information using DIN
    DINRequest.url = `https://health-products.canada.ca/api/drug/drugproduct/?lang=en&type=json&din=${din}`;
    await axios(DINRequest).then(response => {
        console.log(response);
        updateRet("drug_code", response.data.drug_code);
        updateRet("drug_name", response.data.drug_name);
        updateRet("company_name", response.data.company_name);
        updateRet("descriptor", response.data.descriptor);
    }).catch (error => {console.log(error)});

    // get the active ingredients
    DINRequest.url = `https://health-products.canada.ca/api/drug/activeingredient/?lang=en&type=json&id=${ret.drug_code}`;
    await axios(DINRequest).then(response => {
        console.log(response);
    }).catch (error => {console.log(error)});
    console.log(ret);
}
