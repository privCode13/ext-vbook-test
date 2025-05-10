load("libs.js");
load("config.js");

function execute(url) {
  url = url.replace(
    /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/gim,
    BASE_URL
  );
  var response = fetch(url);
  if (response.ok) {
    var doc = response.html();
    var htm = $.Q(doc, ".ndtruyen", {
      remove: 'em, a[target="_blank"]',
    }).html();
    htm = htm.replace(/<br>|\\n/g, "<br><br>");
    return Response.success(htm);
  }
  return null;
}

//em, center, a[target="_blank"]
