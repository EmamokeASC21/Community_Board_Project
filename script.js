let userinput = document.querySelector("#input");
let addissue = document.querySelector("#submit-button");
let issueList = document.querySelector("#List_Issues");

addissue.onclick = function (event) {
    event.preventDefault();
    //create
    let newIssue = document.createElement("li");
    newIssue.innerHTML = userinput.value;
    
    //add
    issueList.append(newIssue);

    userinput.value = ""
}

let userInsert = document.querySelector("#insert");
let addfeedback = document.querySelector("#accept-button");
let feedList = document.querySelector("#Record_FeedBack");

addfeedback.onclick = function (event) {
    event.preventDefault();
    //create
    let latestIssue = document.createElement("li");
    latestIssue.innerHTML = userInsert.value;
    
    //add
    feedList.append(latestIssue);

    userInsert.value = ""
}