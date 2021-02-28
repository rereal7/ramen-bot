function doPost(e) {
  let shopName = ['とみ田', '松戸二郎', 'なりたけ']
  let url = ['https://www.tomita-cocoro.jp/category/2/?mode=pc', 'https://twitter.com/matsudojiro3', 'http://naritake.co.jp/locations/142/%E6%9C%AC%E5%85%AB%E5%B9%A1%E5%BA%97/'];
  var ramdom = Math.floor( Math.random()*3);
  message = 'おすすめのラーメンは' + shopName[ramdom] + 'です！ ' + url[ramdom];
  return ContentService.createTextOutput(message);
}
