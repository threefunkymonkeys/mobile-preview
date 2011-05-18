(function() {
  window.MobilePreview = {
    onsubmit: function() {
      var url;
      event.preventDefault();
      url = this.elements.url.value;
      return MobilePreview.loadSite(url);
    },
    onload: function() {
      var m, url;
      if (m = document.location.search.match(/url=([^/&]+)/)) {
        url = decodeURIComponent(m[1]);
        $("input[name=url]").val(url);
        MobilePreview.loadSite(url);
        return $("form").submit(MobilePreview.onsubmit);
      }
    },
    loadSite: function(url) {
      $('iframe').attr("src", url);
      return $("#share").css("visibility", "visible").find("a").attr("href", "?url=" + encodeURIComponent(url));
    }
  };
  $(document).ready(MobilePreview.onload);
}).call(this);
