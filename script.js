var news = [];

$.getJSON("news.json")
    .done(function(data){
        news = data;
        populateNews();
    })
    .fail(function(){
        console.log("Hmm, something went wrong. Unable to retrieve news.");
    });




function populateNews(){
    for(i=0; i<10; i++){
        let sources = "";
    
        for(j=0; j<news[i].sources.length; j++){
            let url = new URL(news[i].sources[j]);
            sources += `<a href='${url}' target='_blank'><span class="source tooltip">...<span class="tooltip-text">${url.host}</span></span></a>`;
        }
        
        $("#news-feed").append(`<div class="card"><h2 class="date">${news[i].date}</h2>${sources}<p>${news[i].content}</p></div>`);
    }
}



/* DARK MODE */
if(window.localStorage.getItem("darkMode") != null && window.localStorage.getItem("darkMode") == "false"){
    $("body").removeClass("dark-mode");
    $("#socialShare img").css("filter", "brightness(0.1)");
    $("#toggle-dark-mode").text("Dark Mode");
}
function toggleDarkMode(){
    if($("body").hasClass("dark-mode")){
        $("body").removeClass("dark-mode");
        $("#socialShare img").css("filter", "brightness(0.1)");
        $("#toggle-dark-mode").text("Dark Mode");
        window.localStorage.setItem("darkMode", false);
    }
    else{
        $("body").addClass("dark-mode");
        $("#socialShare img").css("filter", "brightness(1)");
        $("#toggle-dark-mode").text("Light Mode");
        window.localStorage.setItem("darkMode", true);
    }
}