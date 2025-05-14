load("config.js");
function execute(url) {
    
    var doc = Http.get(url).html();
    if (doc) {
        let content = doc.select("div.panel-body.content-body.content-ext").html();
        content = content.replace(/<a[^>]*>([^<]+)<\/a>/g,'')
            .replace(/ ?\n/g, "<br>")
            .replace(/&nbsp;/g, '')  
            .replace(/&(amp|quot|lt|gt);/g, "");
        return Response.success(content);
    }
    return null;
}