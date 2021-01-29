const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://reqres.in/api/users?page=2');

    xhr.onload = () => {
        console.log(xhr.response);
    };


    xhr.send();
};

const sendData = () => {};

getBtn.addEventListener('click',getData);
postBtn.addEventListener('click',sendData);