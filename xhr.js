const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://reqres.in/api/users?page=2'); 

    xhr.onload = () => {
        const data = JSON.parse(xhr.response);
        console.log(data);  
    };


    xhr.send(); // send request
};

const sendData = () => {};

getBtn.addEventListener('click',getData);
postBtn.addEventListener('click',sendData);