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