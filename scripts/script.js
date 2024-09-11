async function get_projects(){
    let y_d = await fetch("https://api.github.com/users/kaiserarchja/repos");
    let y = await y_d.json();
    for(i in y){
    document.getElementsByClassName("projects")[0].innerHTML += "<li><a href=\""+y[i]["html_url"]+"\">" + y[i]["name"]+ "</a></li>" + " <br>";

    }
}
async function get_news() {
    let news = await fetch("https://api.github.com/users/kaiserarchja/events");
    let jsNews = await news.json();
    for(i in jsNews){
        let times = jsNews[i]["created_at"].split(/T|Z/);
        let repoName = jsNews[i]["repo"]["name"].split('/');
        let url = jsNews[i]["repo"]["name"];
        let message = jsNews[i]["payload"]["commits"][0]["message"];
        let author = jsNews[i]["payload"]["commits"][0]["author"]["name"];
        document.getElementsByClassName("newsData")[0].innerHTML += "<li>"+"<h6>---"+times[0]+"---"+times[1]+"---</h6>"+"<p>"+"Der Name des Repositorys:&nbsp &nbsp"+repoName[1]+"<br>"
                                                                   +"Repo. URL:&nbsp &nbsp"+"<a href=\"https://github.com/"+url+"\">"+"Klicken Sie!"+"</a> <br>"
                                                                   +"Nachricht:&nbsp &nbsp"+message+"<br>"
                                                                   +"Autor:&nbsp &nbsp"+author+"</p>"+"</li>"
    }
    
}
get_projects();
get_news();