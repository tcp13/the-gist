/* Project Launch Site Analytics */

$.ajax({
    type: "POST",
    url: "https://us-central1-direct-hope-351923.cloudfunctions.net/pls-analytics",
    data: {
        "timestamp": Date.now(),
        "site": document.location.hostname,
        "url": document.location.href,
        "title": document.title,
        "referrer": document.referrer,
        "width": screen.width,
        "language": navigator.language,
        "useragent": navigator.userAgent
    },
    success: function(){
        console.log("Successfully logged to PLS Analytics!");
    }
});