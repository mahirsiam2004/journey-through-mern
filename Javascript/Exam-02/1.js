function totalFine(fare) {
    if (typeof fare!=="number" || fare<=0) {
        return "Invalid";
    }
    let srCharge = 30;
    let with_charge = fare * 0.20;
    let ans= fare + with_charge + srCharge;
    return ans;
}
