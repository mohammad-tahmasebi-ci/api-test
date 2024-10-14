const URL = 'https://ci-swapi.herokuapp.com/api/';

function getData(type, data) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', URL + type + '/');
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 400) {
      cb(JSON.parse(this.responseText));
    };
  };
}

function writeToDocument(type) {
  var elmnt = document.getElementById('data');
  elmnt.innerHTML = '';
  getData(type, function(data) {
    // console.log(data.dir);
    data = data.results;
    data.forEAch(function(item) {
      elmnt.innerHTML += '<p>' + item.name + '</p>';
    });
});
}

