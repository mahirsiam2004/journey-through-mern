function onlyCharacter(str) {
    if (typeof str !== "string") {
        return "Invalid";
    }
    let no_Spaces = str.replace(/\s+/g, "");
    let final_str = no_Spaces.toUpperCase();
    return final_str;
}