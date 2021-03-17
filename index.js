
// function superbowlWin(element, index, array) {
//     if (element["result"] === "W") {
//         return element["year"]
//     }
// }

// function superbowlWin(recordsArray) {
//     recordsArray.find(function (record) {
//         if (record.result === "W") {
//             return record.year
//         }
//     })
// }

function superbowlWin(recordsArray) {
    let returnItem
    recordsArray.find(function (record) {
        if (record.result === "W") {
            returnItem = record.year
            //console.log(returnItem)
        }
    })
    //console.log(returnItem)
    return returnItem
}