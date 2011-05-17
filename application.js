(function() {
  $(document).ready(function() {
    var m, url;
    if (m = document.location.search.match(/url=([^/&]+)/)) {
      url = decodeURIComponent(m[1]);
      $("input[name=url]").val(url);
      $("iframe").attr("src", url);
    }
    return $("form").submit(function() {
      event.preventDefault();
      url = this.elements.url.value;
      return $('iframe').attr("src", url);
    });
  });
}).call(this);
