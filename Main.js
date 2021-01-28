
let elementCreateId = 0;
function NewPost(){

    elementCreateId++;

    let div = document.createElement("div");
    div.id = "div" + elementCreateId;
    var parent = document.getElementById("box-id");
    parent.appendChild(div);
  
  
    let title = document.createElement("Input");
    title.setAttribute('maxLength', 30);
    title.type = "text";
    title.value = "New Title " + (elementCreateId-1);
    title.className = "titleClass";
    title.id = "titleId";

    var parent = document.getElementById("div" + elementCreateId);
    parent.appendChild(title);



    let Text = document.createElement("textarea");
    Text.setAttribute('maxlength', 400);
    Text.type = "text";
    Text.value = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore harum, quasi dicta ex totam quisquam quo tempore maxime, commodi praesentium eius quod suscipit! Tenetur magnam eligendi amet fugiat adipisci impedit.";
    Text.className = "textClass";
    Text.id = "TextId";

    var parent = document.getElementById("div" + elementCreateId);
    parent.appendChild(Text);
}















