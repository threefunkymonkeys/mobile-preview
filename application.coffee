window.MobilePreview =
  onsubmit: ->
    event.preventDefault()
    url = this.elements.url.value
    MobilePreview.loadSite url

  onload: ->
    if m = document.location.search.match(/url=([^/&]+)/)
      url = decodeURIComponent m[1]
      $("input[name=url]").val(url)
      MobilePreview.loadSite url
      $("form").submit MobilePreview.onsubmit

  loadSite: (url) ->
    $('iframe').attr "src", url
    $("#share").css("visibility", "visible").find("a").attr("href", "?url=" + encodeURIComponent(url))

$(document).ready MobilePreview.onload
