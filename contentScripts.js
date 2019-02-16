let pageTitle = document.getElementsByTagName("title")[0].innerText;
if (pageTitle.includes("본인확인")) {
    let inputList = document.getElementsByTagName("input");
    document.querySelector
    for (let i=0; i<inputList.length; i++) {
        if (inputList[i].type === "checkbox") {
            inputList[i].checked = true;
        }
    }
}



//     for (let i=firstBoxIndex; i<firstBoxIndex+4; i++) {
//         inputList[i].checked = true;
//     }
// }

    // document.querySelector(`label[for=${$0.name}]`).textContent.search("선택") != -1