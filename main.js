$(function() {
   var date;
   var datenow;
   var apikey="88a5fe7b9279debdf0f3d0d5bd7e3745";
  //alert(datenow);
  setInterval(function(){
    date=new Date();
    datenow="current date is"+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    $("#time").html(datenow);
  },1000);

  fetch_weather();
  setInterval(fetch_weather,1000000);
  function fetch_weather(){

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Bangalore,IN&appid=88a5fe7b9279debdf0f3d0d5bd7e3745&units=metric").done(function(data){
      console.log(data);
      $("#temp").html(data.main.temp);
    });
  }
});
