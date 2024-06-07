// how to set prefix before every line you log.log.Master
// const addPrefixBeforeEveryLine = (strToAddPrefix) => {
//     const prefixToAdd = "$ ";
//     const splittedstr = strToAddPrefix.split("\n");
//     const mappedListofstr = splittedstr.map((str)=>{
//         return prefixToAdd + str
//     })
//     const finalList = mappedListofstr.join("\n");
//         return finalList;
// };

// const strToLog = addPrefixBeforeEveryLine(`This is India
// I am a citizen of India`);

// console.log(strToLog);

const addPrefixBeforeEveryLine = (strToAddPrefix) => {
    const prefixToAdd = "$ ";
    // const splittedstr = strToAddPrefix.split("\n");
    return strToAddPrefix
        .split("\n")
        .map((str) => prefixToAdd + str)
        .join("\n");
}
const strToLog = addPrefixBeforeEveryLine(`This is India
I am a citizen of India`);

console.log(strToLog);