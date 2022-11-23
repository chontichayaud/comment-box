console.log("is work")
function checkCommentLength() {
  let comment = document.getElementById("comment").value;
   if (comment.length > 140) {
    alert("The comment may have no more than 140 characters");
  }
 }
  
 function updateCommentLength() {
  let comment = document.getElementById("comment").value;
  document.getElementById("commentLength").innerHTML = comment.length.toString();
   if (comment.length > 140) {
    document.getElementById("comment").style.borderColor = "red";
  } else {
    document.getElementById("comment").style.borderColor = "black";
  }
 }