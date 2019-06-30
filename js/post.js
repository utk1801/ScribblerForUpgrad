function showSignInModal(){
    var modal = document.getElementById("signin-modal");
    modal.style.display = "flex";
  }
  
  function hideSignInModal(){
    var modal = document.getElementById("signin-modal");
    modal.style.display = "none";
  }
  
  function showSignUpModal(){
    var modal = document.getElementById("signup-modal");
    modal.style.display = "flex";
  }
  
  function hideSignUpModal(){
    var modal = document.getElementById("signup-modal");
    modal.style.display = "none";
  }
function editComment(){
  
}

var val=0;

function incrementCounter(){
  var cntr = document.getElementById('counterLikedBy');
  val++;
  cntr.innerText = val;

  var toggleLike = '<button class="postLike" id="likePost" >Like '+
  '<i style="font-size: 14px;font-weight: bolder;" '+ 'class="fa fa-thumbs-up" aria-hidden="true"></i>'+
  '</button>';

  var toggleLiked = '<button class="postLike" id="likePost" >Liked! '+
  '<i style="font-size: 14px;font-weight: bolder;" '+ 'class="fa fa-thumbs-up" aria-hidden="true"></i>'+
  '</button>';


  var edtLikeBtn = document.getElementById('likePostDiv');
  var toDo = (edtLikeBtn.innerText).toString().trim();
  
  if(val===1){
    cntr.innerText+=' person likes this!';
  }else{
    cntr.innerText+=' persons have liked this!';
  }
  edtLikeBtn.innerHTML = toggleLiked;

}

function toggleEditSave(){
  var toggleSave = '<button class="postEdit">Save '+
  '<i style="font-size: 14px;font-weight: bolder;" '+
  'class="fa fa-save" aria-hidden="true"></i>'+
  '</button>';
  var toggleEdit = '<button class="postEdit">Edit '+
  '<i style="font-size: 14px;font-weight: bolder;" '+
  'class="fa fa-pencil-square-o" aria-hidden="true"></i>'+
  '</button>';

  var edtSaveBtn = document.getElementById('editPost');
  var toDo = (edtSaveBtn.innerText).toString().trim();
  console.log(toDo);
  console.log(toDo.localeCompare('Edit'));
  if(toDo.localeCompare('Edit')===0){
    console.log("Currently Edit");
    var bSave = document.getElementById('editPost');
    bSave.innerHTML = toggleSave;
    enableEditableText();

  }
  else{
    console.log("Currently Save");
    var bEdit = document.getElementById('editPost');
    bEdit.innerHTML = toggleEdit;
    updateEditedBlog();
  }

}

function enableEditableText(){

  //Div element
  var getDiv = document.getElementById('blogBody');
  var getBlogContent = getDiv.innerText;
  getDiv.style.display="none";

  //Create a input element
  var editInput = document.getElementById('txtEditedBlog');
  editInput.style.display="block";
  editInput.innerText=getBlogContent;
  
  //Update the Div element
}

function updateEditedBlog(){
  var editInput = document.getElementById('txtEditedBlog');

  var textEdited = (editInput.innerHTML).toString();
  var getDiv = document.getElementById('blogBody');
  getDiv.innerHTML=textEdited;
  getDiv.style.display="block";
  editInput.style.display="none";

  
}
function addComment(){

  console.log("Inside add comment");
  var post = document.getElementById("txtCommentCommentPost");
  if(post.value==""){
    alert('Entered value is too short.');
  } else
     {
      var x = document.getElementById("txtCommentCommentPost").value;
      var pElement = '<p >'+ x + '</p>';
      var getDiv = document.getElementById('listAllComments');
      getDiv.innerHTML = pElement + getDiv.innerHTML;
      post.value="";

     }

}

function showCreatePostModal(){
  var modal = document.getElementById("create-post-modal");
  modal.style.display = "flex";
}

function hideCreatePostModal(){
  var modal = document.getElementById("create-post-modal");
  modal.style.display = "none";
}