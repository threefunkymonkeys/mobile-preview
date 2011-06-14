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
      if( checkBlock.find("input:checked").length == 0 ) {
        checkBlock.find("input").attr("checked", true);
      }
      checkBlock.find("input:checked").each(function(){
        var value = $(this).val();
        $("#"+value).attr("src", url).parent().show();
      });
      MobilePreview.requestShortURL("http://threefunkymonkeys.github.com/mobile-preview/?url=" + url, function(tinyurl) {
          var twitter_link = "http://twitter.com/share?text=" + encodeURIComponent("I just tested a responsive web using mobile-preview, check it " + tinyurl + " via @3funkymonkeys");
          $("#tw-link").attr("href", twitter_link);
          $("#share").css("visibility", "visible").find("a").attr("href", "?url=" + encodeURIComponent(url) + addShare);
      } );

    },
    requestShortURL: function(longURL, success) {
        var API = 'http://json-tinyurl.appspot.com/?url=',
            URL = API + encodeURIComponent(longURL) + '&callback=?';
       
            $.getJSON(URL, function(data){
                  success && success(data.tinyurl);
            });
         
    }
  };

  $(document).ready(MobilePreview.onload);
}).call(this);
