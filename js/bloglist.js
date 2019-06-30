function deletePostModal(){
  var modal = document.getElementById("delete-post-modal");
  modal.style.display = "flex";
}

function noButton(){
  var modal = document.getElementById("delete-post-modal");
  modal.style.display = "none";
}

function openPost()
{
  location.href = "/html/post.html";
}
