load("config.js")

function execute(url) {
    var doc = Http.get(url).html();
    if (doc) {
        let list = [];
         doc.select("ul.list-charts li a").forEach(e => {
            list.push({
                name: e.text(),
                url: e.attr("href"),
                host: BASE_URL
            });
        });
    }
}