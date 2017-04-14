var newLink = document.createElement("a");

var allParagraphs = document.getElementsByTagName("p");

var firstParagraph = allParagraphs [0];

function revealCopy (e){
  for ( var i = 0; i < allParagraphs.length; i++) {
    if(i==0){
      continue;
    }
e.preventDefault();
}

allParagraphs[i].style.display = "none";
}

newLink.setAttribute("href","#");

newLink.innerHTML="Read More";

firstParagraph.appendChild (newLink);

newLink.addEventListener("click", revealCopy);

for ( var i = 0; i < allParagraphs.length; i++) {
  if(i==0){
    continue;
  }
allParagraphs[i].style.display = "none";
}

newLink.style.display = "inline-block";

newLink.style.marginLeft = "0.5em";

//this setup creates the Read More tag after the first paragraph
