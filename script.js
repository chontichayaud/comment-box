console.log("is work");
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
 
// function displayComment() {
//   let data = "";
//   let name = document.getElementById("name").value;
//   let email = document.getElementById("email").value;
//   let usercomment = document.getElementById("comment").value;
//   // console.log("1");
//   data  = name +"<br>"+ email +"<br>"+ usercomment;
//   // console.log("2" + data.toString());
//   document.getElementById("data").innerHTML = data; 
//   // console.log("3" + data.toString());
// }
const form = document.querySelector("form");
const list = document.querySelector("div");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event){ 
  console.log("here");
  event.preventDefault();
  const name = event.target.elements.userName.value;
  const email = event.target.elements.userEmail.value;
  const comment = event.target.elements.userComment.value;

  post = name+email+comment

  const newItem = document.createElement("div");
  newItem.textContent = post;
  list.appendChild(newItem);
  
  form.reset();
};