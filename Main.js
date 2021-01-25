function NewPost() {

    var parent = document.querySelector("main");

    var child = document.createElement("section");
    var title = document.createElement("h4");
    var desc = document.createElement("p");
    var btn = document.createElement("button");

    title.innerHTML = "Untitled";
    desc.innerHTML = "...";
    btn.innerHTML = "Delete";

    makeEditable(title);
    makeEditable(desc);

    child.appendChild(title);
    child.appendChild(desc);
    child.appendChild(btn);
    parent.appendChild(child);

}

function makeEditable(elem){
    elem.onclick = function(){
        elem.contentEditable = true;
        elem.focus();
    }
    elem.onblur = function(){
        elem.contentEditable = false;
    }
}

function DeletePost() {

}