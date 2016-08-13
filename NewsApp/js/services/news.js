function news ($http) {

  var URL = 'http://api-nghyf.rhcloud.com/news';

  this.getNews = function () {
    return $http.get(URL);
  };
}
