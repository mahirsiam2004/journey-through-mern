/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here

if (fileName[0] === '#' ||fileName.includes(".pdf") || fileName.includes(".docx")) {
    console.log("Store");
} else {
    console.log("Delete");
}
