function totalFine(fare) {
    if (typeof fare!=="number" || fare<=0) {
        return "Invalid";
    }
    let srCharge = 30;
    let with_charge = fare * 0.20;
    let ans= fare + with_charge + srCharge;
    return ans;
}

function onlyCharacter(str) {
    if (typeof str !== "string") {
        return "Invalid";
    }
    let no_Spaces = str.replace(/\s+/g, "");
    let final_str = no_Spaces.toUpperCase();
    return final_str;
}

function bestTeam(player1, player2) {
    if (typeof player1 !== "object" || typeof player2 !== "object" || player1 === null || player2 === null || Array.isArray(player1) || Array.isArray(player2)) {
        return "Invalid";
    }
    let team1Score = player1.foul + player1.cardY + player1.cardR;
    let team2Score = player2.foul + player2.cardY + player2.cardR;

    if (team1Score < team2Score) {
        return player1.name;
    } else if (team2Score < team1Score) {
        return player2.name;
    } else {
        return "Tie";
    }
}

function isSame(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }
    if (arr1.length!==arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

function resultReport(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }
    if (marks.length === 0) {
        return { finalScore: 0, pass: 0, fail: 0 };
    }
    let passCount = 0;
    let failCount = 0;
    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
        if (marks[i] >= 40) {
            passCount++;
        } else {
            failCount++;
        }
    }
    let avg = Math.round(sum / marks.length);

    return { finalScore: avg, pass: passCount, fail: failCount };
}