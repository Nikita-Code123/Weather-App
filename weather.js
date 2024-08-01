
const deg = document.querySelector("#head");
const para = document.querySelector("#para");
const para2 = document.querySelector("#para2");
let div=document.querySelector(".one");

const API_KEY = '22923e12eec082e5f8938eac75ebe3a3';



const weather = async (city) => {
    try{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;//unit = matric isliye likha hu qki tempruchre celcius me ayye
     const response = await fetch(url);
     console.log(response);
     const data = await response.json();
     console.log(data);
      console.log(data.main.temp);
     let temp = data.main.temp;
     console.log(data.name);
     console.log(data.main.humidity);
    let name=data.name;
     console.log(data.weather[0].description);
     let atmosphere=data.weather[0].description;
    deg.innerHTML = `${temp}° C`;
    para.innerHTML=name;
    para2.innerHTML=atmosphere;
    if (atmosphere=="haze"){
        div.style.backgroundImage="url(https://images.pexels.com/photos/1165991/pexels-photo-1165991.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)";
        console.log("Done");

    }
    else if(atmosphere==""){
        div.style.backgroundImage="url(https://i1.sndcdn.com/artworks-000107276099-lqcw4e-t500x500.jpg)";
     
    }
    else if(atmosphere=="clear sky"){
        div.style.backgroundImage="url(https://images.unsplash.com/photo-1601297183305-6df142704ea2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xlYXIlMjBza3l8ZW58MHx8MHx8fDA%3D)"
    }
    else if(atmosphere=="broken clouds"){
        div.style.backgroundImage="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYwawqe5bboqjW0WwAUWF65Gmrcqx0AcdO5-zsDhknyg&s)";
    }
    else if(atmosphere=="overcast clouds"){
        div.style.backgroundImage="url(https://www.rochesterfirst.com/wp-content/uploads/sites/66/2021/04/sky-1107579_1920.jpg)";
    }
    else if (atmosphere=="dust"){
        div.style.backgroundImage="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpbuc_IJXmhYRv6bIdZyGt8Xm7s9C1Bgqpzi0IW1PexA&s)";
    }
    else {
        div.style.backgroundImage="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJaY6M8UgSg_KFv8ZDu7g4YFuSICHrW6iPr_899WBrWlPIXqEzAuSrgI08j5cC1xED4vA&usqp=CAU)";
    }
    }
    catch(err){
        alert("Enter Valid city");
    }

}

let cit;
function deva() {
    cit = document.getElementById("ip").value;
    console.log(cit);
    weather(cit);
}
