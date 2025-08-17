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