function execute(url, page) {
    if (!page) page = '1';

    var doc = Http.get(url + "-" + page + ".html").html();

    if (doc) {
        var el = doc.select(".panel-body > div.col-lg-6");
        var novelList = [];
        var next = doc.select("ul.pagination li.active + li a").text();
        
for (var i = 0; i < el.size(); i++) {
    var e = el.get(i);
    novelList.push({
        name: e.select("h4.book-title a").text(),
        link: e.select("h4.book-title a").attr("href"),
        cover: e.select("img").attr("src"),
        description: e.select("p.book-intro-index").text().trim(),
        author: e.select(".book_author a").text(),
        host: "https://www.po18sm.com"
    });
}
        return Response.success(novelList, next);
    }
    return null;
}