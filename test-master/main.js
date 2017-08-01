$(function() {
   var date;
   var datenow;
   var myvar; /* variable for clearing interval of setInterval method */
   var apikey="7a25b655898f8bddca5b58c4ab4a4f51";
 $("#formd").submit(function(event){
     clearInterval(myvar);
     var location =event.currentTarget[0].value;
     var country =event.currentTarget[1].value;
     event.preventDefault();
     var add_locs_cou=location+","+country;
     weather_disp(add_locs_cou);
      })
     function weather_disp(add_locs_cou){
/*   jquery ajax call -- will return json data -- */
         $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+add_locs_cou+"&appid="+apikey+"&units=metric").done(function(data){
         console.log(data);

         $("#intro").html("<h1>Temperature :</h1>");
         $("#intro").append(data.main.temp);
         $("#intro").append("<h1>Country :</h1>");
         $("#intro").append(data.sys.country);
         $("#intro").append("<h1>Location :</h1>");
         $("#intro").append(data.name);
         $("#intro").append("<h1>Weather Description :</h1>");
         $("#intro").append(data.weather[0].description);
          $("#intro").append("<br>");
         var icons=data.weather[0].icon;

         $("#intro").append("<img src=images/"+icons+".png width=150px height=150px></img>")
         return 0;
       });
     }

/*  $("#timenow").click(function(event){
        myvar= setInterval(function(){
        date=new Date();
        datenow=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();

        event.preventDefault();

        $("#intro").html("<br>");
         $("#intro").append("<h1><center>Current Time</center></h1>");
       $("#intro").append("<h1><center>"+datenow+"</center></h1>");
    },1000);



  })*/
  $("#timenow").click(function(){
        var locs=$('#location').val();
        var country1=$('#country').val();
      //  var test = $("form").serialize();  //used to get form data in a url format eg-aaa&aaa



        myvar= setInterval(function(){
      //  date=new Date();
        //datenow=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();

      //  event.preventDefault();
        $.getJSON("http://api.timezonedb.com/v2/get-time-zone?key=YCZW737EYPDR&format=json&&by=zone"+"&zone="+locs+"").done(function(data){
        console.log(data);
        $("#intro").html("<br>");
        // $("#intro").append("<h1><center>Current Time</center></h1>");
      //  $("#intro").append("<h1><center>"+datenow+"</center></h1>");
      });
    },1000);



  })


  /*  */






    //alert(datenow);


//  fetch_weather();
//  setInterval(fetch_weather,100000000);

})
