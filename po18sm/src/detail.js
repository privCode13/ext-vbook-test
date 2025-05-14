load("config.js")

function execute(url) {
    var doc = Http.get(url).html();
    if (doc) {
        return Response.success({
            name: doc.select("div.info2 h1").text(),
            cover: doc.select("div.info1 img").attr("src"),
            host: BASE_URL,
            author: doc.select("div.info2 h3").text(),
            detail: doc.select("div.info2 div p").text(),
            description: doc.select("div.info3  p").first().text(),
            ongoing:  doc.select("div.info3").html().indexOf("写作状态：连载中") > -1
        });
    }
    return null;
}