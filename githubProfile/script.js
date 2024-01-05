const requestURL='https://api.github.com/users/';
const profile_container=document.querySelector('.profile-container');
const form=document.querySelector('#form');
const searchBox=document.querySelector('#search');

const formHandler=function(){
    if(searchBox.value!==""){
        user(searchBox.value);
        searchBox.value="";
    }
    return false;
}

const searchBoxHandler=function(){
    formHandler();
}

form.addEventListener('submit',formHandler,false);
searchBox.addEventListener('focusout',searchBoxHandler,false);


const getRepostories=async function(username){
     const repos=document.querySelector('#repos');
     const response = await fetch(requestURL+username+'/repos');
     const data=await response.json();
    //  console.log(data);
    data.forEach((repo) => {
        const ele=document.createElement('a');
        ele.classList.add('repo');
        ele.href=repo.html_url;
        ele.innerText=repo.name;
        ele.target="_blank";
        repos.appendChild(ele);
    });
}

const user=async(username)=>{
   const response=await fetch(requestURL+username);
   const data=await response.json();
//    console.log(typeof data);
//    console.log(data);
   
const card=`
    <div class="profile-container">
        <div class="img-container">
            <img src="${data.avatar_url}" alt="image">
        </div>
        <div class="card">
            <h2>${data.name}</h2>
            <h4>${data.bio}</h4>
            <ul class="info">
                <li>${data.followers}<strong> Followers</strong></li>
                <li>${data.following}<strong> Following</strong></li>
                <li>${data.public_repos}<strong> Repos</strong></li>
            </ul>
            <div id="repos">
            </div>
        </div>
    </div>`

    profile_container.innerHTML=card;
    getRepostories(username);
}



