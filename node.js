 

const myPromise = ((res,req)=> {
    res("done");
    req(new Error("_"));
    setTimeout(() => res("..."));

},2000);

myPromise.then((val)=> {
    console.log(val);
    throw new Error("oh no");

}) 
.catch((e)=> {
    console.error(e.message);
})

.then(()=> console.log("after a catch"),
() => console.log('not found')
);

myPromise.then(val => {
    console.log(val);
    return Promise.reject("oh no")
})

.catch((e)=> {
console.log(e);
});

class HttpError extends Error { // (1)
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  function loadJson(url) { // (2)
    return fetch(url)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new HttpError(response);
        }
      })
  }
  
  loadJson('no-such-user.json') // (3)
    .catch(alert);



// node express fetch data

const fetchData = () => {
  var URL =``;

  fetch(URL)
  .then((res)=> {
    res.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err)
  })
}

//post call in node

var URL = ``;

const headers = {
  'content-type': "application/json",
  'client_id': "1001125",
  "client_secret": "876JHG76UKFJYGVHf867rFUTFGHCJ8JHV"

}
const data = {
  "name": "Wade Wilson",
  "occupation": "Murderer",
  "age": "30 (forever)"
}
//fetch data with a post method
fetch(URL, {method:'POST',headers:headers,body:data})
.then((res)=> {
  return res.json();
})

.then((json)=> {
  console.log(json)
});

//await and async

const fetch = requiere('node-fetch');

const url = "https://example.com";

const get_data = async url => {
  try{
    const res = await fetch(url);
    const json = await res.json();

    console.log(json);
  } catch(err) {
    console.log(err)
  }
}

get_data(url);


//get method

var express = requiere ('express');
var app = express();

var fs = requiere("fs")

app.get('/listen',function(res,rej){
  fs.readfile(_dirname + "/"+ "user.json"+ "uft8", function(err,data) {
    console.log(data);
    res.end(data);
  })
  var server = app.listen(8081,function() {
    var host = server.address().address
    var port = server.address().port
    console.log("example app listening at http//",host,port)
  })
})

