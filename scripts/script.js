async function get_projects(){
    let y_d = await fetch("https://api.github.com/users/kaiserarchja/repos");
    let y = await y_d.json();
    let ans = "";
    for(i in y){
    document.getElementsByClassName("projects")[0].innerHTML += "<li><a href=\""+y[i]["html_url"]+"\">" + y[i]["name"]+ "</a></li>" + " <br>";

    }
}
get_projects();