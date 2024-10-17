async function get_projects(){
    let y_d = await fetch("https://api.github.com/users/kaiserarchja/repos");
    let y = await y_d.json();
    let ans = "";
    if(y_d.status == 403){
        ans = "Deine IP Addresse wurde blockiert. Bitte versuch mal in 20 Minuten!"
        document.getElementById("projects").innerHTML = "<p style=\"color:red;\">"+ans+"</p>";
    }
    else{
        for(i in y){
        ans += "<li><a href=\""+y[i]["html_url"]+"\">" + y[i]["name"]+ "</a></li>" + " <br>";

        }
        document.getElementById("projects").innerHTML = ans;
    }
}
async function get_news() {
    let news = await fetch("https://api.github.com/users/kaiserarchja/events");
    let jsNews = await news.json();
    if(news.status == 403){
        ans = "Deine IP Addresse wurde blockiert. Bitte versuch mal in 20 Minuten!"
        document.getElementById("news").innerHTML = "<p style=\"color:red;\">"+ans+"</p>";
    }
    else{
        let ans= "";
        
        for(let i = 0; i < 15; i++){
            if(jsNews[i]["type"] == "PushEvent"){
                let times = await jsNews[i]["created_at"].split(/T|Z/);
                let repoName = await jsNews[i]["repo"]["name"].split("/");
                let url = await jsNews[i]["repo"]["name"];
                let message = await jsNews[i]["payload"]["commits"][0]["message"];
                let author = await jsNews[i]["payload"]["commits"][0]["author"]["name"];
                ans += "<li>"+"<h6>---"+times[0]+"---"+times[1]+"---</h6>"+"<p>"+"Der Name des Repositorys:&nbsp &nbsp"+repoName[1]+"<br>"+"Repo. URL:&nbsp &nbsp"+"<a href=\"https://github.com/"+url+"\">"+"Klicken Sie!"+"</a> <br>"+"Nachricht:&nbsp &nbsp"+message+"<br>"+"Autor:&nbsp &nbsp"+author+"</p>"+"</li> ";
            }
        }
        document.getElementById("news").innerHTML = ans;
    }
}
