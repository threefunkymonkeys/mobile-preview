$(document).ready ->
  if m = document.location.search.match(/url=([^/&]+)/)
    url = decodeURIComponent m[1]
    $("input[name=url]").val(url)
    $("iframe").attr "src", url

  $("form").submit ->
    event.preventDefault()
    url = this.elements.url.value
    $('iframe').attr "src", url
