(function() {
  window.MobilePreview = {
    onsubmit: function() {
    },
    onload: function() {
      var m, c, url,share="";
      if (m = document.location.search.match(/url=([^/&]+)/)) {
        url = decodeURIComponent(m[1]);
        $("input[name=url]").val(url);
        if(c = document.location.search.match(/(ipp|ipl|ipadp|ipadl)/g)) {
          $(c).each(function(){ $("input[name="+this+"]").attr("checked",true) });
          c = document.location.search.match(/url=[^/&]+(.*)/);
          share = c[1];
        }
        MobilePreview.loadSite(url, share);
      }
    },
    loadSite: function(url, addShare) {
      var checkBlock = $("#checks-block");
      $(".ipad, .iphone").hide();
      checkBlock.find("input:checked").each(function(){
        var value = $(this).val();
        $("#"+value).attr("src", url).parent().show();
      });
      $("#share").css("visibility", "visible").find("a").attr("href", "?url=" + encodeURIComponent(url) + addShare);
    }
  };

  $(document).ready(MobilePreview.onload);
}).call(this);
