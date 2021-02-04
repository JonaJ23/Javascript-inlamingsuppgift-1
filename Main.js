/* Hur jag debuggade javascript-koden:
jag började med att lägga till en debugger i koden, sedan öppnade jag min webbplats inne i Chromes webbläsare 
och gick in på Console genom att trycka på F12. Där kunde jag steppa under varje kodrad där debuggern låg för att upptäcka potentiella fel och buggar. 
Det största problemet jag fått hålla på att lösa är att göra hemsidan responsiv till att skapa nya blogginlägg. Oftast slutade det att funka
med att skapa nya inlägg när jag la till en ny funktion för blogginläggen p.g.a. dålig koll med vad varför funktionen inte accepterade nyare kod och 
dumt nog så använde jag inte debugging i början, utan fastnade nästan med samma problem hela dan utan att tänka på hitta fel med en debugger. */



let elementCreateId = 0; // Deklarerar en variabel för ett index-värde när nytt blogginlägg skapas.

function NewPost(){ /* Detta är JS-funktionen för HTML-knappen och som skapar ett event för nya blogginlägg. 
När jag klickar på knappen så aktiveras denna funktion och börjar först med att addera ett nytt id-nummer för det nya inlägget. 
Sedan vill jag att den ska hämta det befintliga elementet "div" från HTML genom att få tag på själva Id-namnet. Detta element ska utgöra "området" 
för inläggets position samt skapa placering för en ny titel- och beskrivningsruta med hjälp av nya element i eventet. För att också ha en maxlängd på hur 
lång texten får skrivas sätts ett värde med en setAttribute på både titeln och beskrivningstexten. */
    
    elementCreateId++;
    debugger;

    // Här deklareras variabeln "div" för att ge blogginläggen en sektion att hamna i. Varje inlägg får också ett eget id med hjälp variabeln elementCreateId.
    let div = document.createElement("div");
    div.id = "div" + elementCreateId;

    // Deklarerar variabeln parent och använder ett id från "container" i HTML-koden för att skapa själva "innehållet" till blogginlägget, parent lägger sedan "div" som child-element.
    var parent = document.getElementById("container"); 
    parent.appendChild(div);
  
    // "Input" skapas som ett element för att kunna redigera titeln och ger den ett id-nummer. 
    let title = document.createElement("input");
    title.setAttribute('maxLength', 30);
    title.type = "text";
    title.placeholder = "New Title " + (elementCreateId-1);
    title.className = "titleClass";
    title.id = "titleId";

    var parent = document.getElementById("div" + elementCreateId);
    parent.appendChild(title);


    // Här skapas element för inläggets nedre textruta med hjälp av "textarea" och läggs sedan i rätt "div" som child-element. 
    let Text = document.createElement("textarea");
    Text.setAttribute('maxlength', 400);
    Text.type = "text";
    Text.placeholder = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore harum, quasi dicta ex totam quisquam quo tempore maxime, commodi praesentium eius quod suscipit! Tenetur magnam eligendi amet fugiat adipisci impedit.";
    Text.className = "textClass";
    Text.id = "TextId";

    var parent = document.getElementById("div" + elementCreateId);
    parent.appendChild(Text);

}














