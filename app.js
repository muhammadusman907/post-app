
var mainPost = document.getElementById("main-post");
var textarea = document.getElementById("textarea");
var tittle = document.getElementById("tittle");
var font = document.getElementById("font-color");
var allPost = document.getElementById("all-post");

var selectBackground ;
var selectImage;
// ===================================================================
// ****************************POST OPEN*****************************
// ===================================================================
function postOpen(){

    mainPost.style.display = "flex";
    mainPost.style.position = "absolute"
    mainPost.style.justifyContent = "center"
    mainPost.style.alignItems = "center"
    mainPost.style.width = "100%"
    console.log("he")
}

// ===================================================================
// ****************************POST CLOSE*****************************
// ===================================================================
function postClose(){
    mainPost.style.display = "none"
}
// =========================================
// ===================COLOR=================
// =========================================
function changer (image){
    selectImage = image;
    if(selectImage){
        textarea.style.backgroundImage = `url(${selectImage})`;
    textarea.style.backgroundRepeat = "no-repeat";
    textarea.style.backgroundSize = "cover";
    }
    else {
        textarea.style.backgroundImage = "post-background/purple.jpeg";
    }
}
function colors(background){
textarea.style.backgroundImage = "";
    selectBackground = background;
    textarea.style.backgroundColor = selectBackground;
}
function fontColor(){
    textarea.style.color = font.value ;
}
// ================================================================== //
// ============================ post code ===========================//
// ==================================================================//
function posts(){
    if (tittle.value.trim() && textarea.value.trim()){
    allPost.innerHTML += `
    <div class="post" id="hello">
    
    <div class="user-photo-input">
    <div class="user-photo">
    <img src="public/user-pic.jpg" alt="">
    </div>
    <div class="user-input d-flex justify-content-around">
    <h4>Muhammad Usman</h4>
    <button class="btn btn-danger" onclick="deletePost(this)">close</button>
    </div>
    </div>
    <!-- ================= icon ============= -->
    <div class="post-value " style="background-color:${selectBackground};background-image:url(${selectImage}); background-size:cover;">
    <div>
    <h3 class="ms-2" style="color:${font.value};">${tittle.value}</h3>
    </div>
    <div>
    <p class="ms-2" style="color:${font.value};">${textarea.value}</p>
    </div>
    
    </div>
    </div>`
    mainPost.style.display = "none";
    selectImage ="";
    tittle.value = "";
    textarea.value = "";
    selectBackground = ""
    textarea.style.backgroundColor = "";
    textarea.style.backgroundImage = "";
}
else{
    alert("input not ")
}
}
// =======================================================================//
// ================================= delete post ==========================//
// =======================================================================//
function deletePost(e){
    e.parentNode.parentNode.parentNode.remove();
    console.log(e.parentNode.parentNode.parentNode)
}