const URL = 'https://ci-swapi.herokapp.com/api/';

function getData(type, data) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', URL + type);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 400) {
      cb(JSON.parse(this.responseText));
    };
  };
}

function writeToDocument(type) {
  getData(type, function(data) {
    document.getElementById('data').innerHTML = data;
});
}

