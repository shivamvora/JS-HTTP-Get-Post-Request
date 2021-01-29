const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const sendHttpRequest = (method,url,data) => {

    const promise = new Promise((resolve,reject) => {
        const xhr = new XMLHttpRequest();
    xhr.open(method, url); 

    xhr.responseType = 'json';

    if(data){ 
    xhr.setRequestHeader('Content-Type','application/json');
}
    xhr.onload = () => {
        resolve(xhr.response); 
    };


    xhr.send(JSON.stringify(data));
    });
    return promise;
};

const getData = () => {
    sendHttpRequest('GET','https://reqres.in/api/users?page=2').then(responseData => {
         console.log(responseData);
    });
};

const sendData = () => {
    sendHttpRequest('POST','https://reqres.in/api/register',{
        email : 'eve.holt@reqres.in',
        password : 'pistol'
    }).then(responseData => {
        console.log(responseData);
    });
};

getBtn.addEventListener('click',getData);
postBtn.addEventListener('click',sendData);