import React, {useState, useEffect} from "react";
const axios = require("axios");

const DINRequest = {
  method: 'GET',
  url: 'https://health-products.canada.ca/api/drug/'
};

export default async function MakeDINRequests(input) {
    console.log("!!!!!!!!!!!!" + input);
    var ret = {"error": "none"};
    ret["patient_name"] = input[0];
    ret["prescribed_date"] = input[1];
    ret["doctor_name"] = input[2];
    ret["din"] = input[3];
    ret["quantity_dispensed"] = input[4];
    ret["instructions"] = input[5];
    ret["warnings"] = input[6];

    // get the base information using DIN
    DINRequest.url = `https://health-products.canada.ca/api/drug/drugproduct/?lang=en&type=json&din=${input[3]}`;
    await axios(DINRequest).then(response => {
        if (response.data.length === 0) {
            ret["error"] = "DIN not found";
            return;
        }

        ret["drug_code"] = response.data[0].drug_code;
        ret["class_name"] = response.data[0].class_name;
        ret["company_name"] = response.data[0].company_name;
        ret["brand_name"] = response.data[0].brand_name;
        ret["descriptor"] = response.data[0].descriptor;
        ret["number_of_ai"] = response.data[0].number_of_ai;
        return ret;
    }).catch (error => {console.log(error)});

    // get the dosage form (liquid, ointment, etc.)
    DINRequest.url = `https://health-products.canada.ca/api/drug/form/?lang=en&type=json&id=${ret.drug_code}`;
    await axios(DINRequest).then(response => {
        ret["form"] = response.data[0].pharmaceutical_form_name;
    }).catch(error => {console.log(error)});

    DINRequest.url = `https://health-products.canada.ca/api/drug/route/?lang=en&type=json&id=${ret.drug_code}`;
    await axios(DINRequest).then(response => {
        ret["route"] = response.data[0].route_of_administration_name;
    }).catch(error => {console.log(error)});

    // get the active ingredients
    DINRequest.url = `https://health-products.canada.ca/api/drug/activeingredient/?lang=en&type=json&id=${ret.drug_code}`;
    await axios(DINRequest).then(response => {
        const ingredients = response.data.map((el) => {return {
            name: el.ingredient_name,
            strength: el.strength + " " + el.strength_unit,
        }})
        ret["ingredients"] = ingredients;
    }).catch (error => {console.log(error)});
    console.log(ret);
    return ret;
}
