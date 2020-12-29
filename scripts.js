// 1.Create a request variable from XMLHttpRequest
var req=new XMLHttpRequest();

// 2.Create a new connection 1.method 2.url 3.boolean->true means rest code will execute if we rae facing connection issue
req.open('GET','https://restcountries.eu/rest/v2/region/asia',true);

// 3.send the request
req.send();

// 4.load the response
req.onload=function(){
    var data = JSON.parse(this.response);
    
//    firstTask();
    // secondTask();
    // thirdTask();
    // fourthTask();
    fifthTask();
    // getWeather(data[0].latlng[0],data[0].latlng[1])
}
function firstTask(){
    var req=new XMLHttpRequest();
    req.open('GET','https://restcountries.eu/rest/v2/all',true);
    req.send();
    req.onload=function(){
        var data=JSON.parse(this.response);
         let countries_data=data.filter(item=>item.name.length>=1)
        for(let i in countries_data){
            console.log(countries_data[i].name);
        }
}

function secondTask(){
    var req=new XMLHttpRequest();
    req.open('GET','https://restcountries.eu/rest/v2/all',true);
    req.send();
    req.onload=function(){
        var data=JSON.parse(this.response);
        let countries_data = data.filter(item=>item.population>=200000)
        for(let i in countries_data){
            console.log(countries_data[i].name);
        }
    }
}

function thirdTask(){
    var req=new XMLHttpRequest();
    req.open('GET','https://restcountries.eu/rest/v2/all',true);
    req.send();
    req.onload=function(){
        var data=JSON.parse(this.response);
        console.log(data);
        data.forEach(element => {
            console.log("CountryName: "+element.name+", Capital: "+element.capital+", Flag: "+element.flag);
        });
    }
}

function fourthTask(){
    var req=new XMLHttpRequest();
    req.open('GET','https://restcountries.eu/rest/v2/all',true);
    req.send();
    req.onload=function(){
        var data=JSON.parse(this.response);
        // console.log(data);
        var total_population = data.reduce((sum,element)=>{return sum+element.population},0)
        console.log(total_population);
       
    }
}

function fifthTask(){
    function sample(element){
        var res = element.currencies.filter(item=>item.symbol==='$');
        return res.length>0;
    }
    var req=new XMLHttpRequest();
    req.open('GET','https://restcountries.eu/rest/v2/all',true);
    req.send();
    req.onload=function(){
        var data=JSON.parse(this.response);
        let curency_data = data.filter(sample);
        for(let i in curency_data){
            console.log(curency_data[i].name);
        }
       
    }
}

function getWeather(lat,lon){
    var req=new XMLHttpRequest();
    req.open('GET','https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=8ad98f58fb29ea333268353f1dba4a62',true);
    req.send();
    req.onload=function(){
        var data=JSON.parse(this.response);
        console.log(data);
    }
}