
for(var i=0; i<8; i++){
    var oimg =document.createElement('img')
      oimg.setAttribute('src','dunkirk-2017-movie-4k.jpg')
      oimg.setAttribute('alt','image')
      oimg.setAttribute('height', '300px');
      oimg.setAttribute('width', '400px');
      document.body.append(oimg)
      document.body.style.display='flex'
      document.body.style.flexWrap='wrap'
      document.body.style.justifyContent='space-between'
}