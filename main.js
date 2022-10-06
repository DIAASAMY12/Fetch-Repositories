let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

getButton.onclick = function(){
    getRepos();
}

function getRepos(){
    if (theInput.value == ""){
        reposData.innerHTML="<span> Please Write GitHub UserName </span>"
    } else {
        fetch(`https://api.github.com/users/${theInput.value}/repos`)

    .then((response) => response.json())

    .then((repositories) => {
        reposData.innerHTML="";
        repositories.forEach(repo => {
            let mainDiv = document.createElement("div");
            let repoName= document.createTextNode(repo.name);
            mainDiv.appendChild(repoName);
            let theUrl =document.createElement("a");
            let theUrlText = document.createTextNode("Visit");
            theUrl.appendChild(theUrlText);
            theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;
            theUrl.setAttribute("target","_blank");
            mainDiv.appendChild(theUrl);
            let StarsSpan = document.createElement("span");
            let StarsText = document.createTextNode(`Stars ${repo.stargazers_count}`);
            StarsSpan.appendChild(StarsText);
            mainDiv.appendChild(StarsSpan);
            mainDiv.className="repo-box";
            reposData.appendChild(mainDiv);
        })
    });
    }
}