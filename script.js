

function refresh(){
    
        cod=document.getElementById("value1").innerHTML;
        cod2=document.getElementById("value2").innerHTML;
        alert(cod+","+cod2);
        
        var marker = L.marker([cod, cod2]).addTo(map);
        marker.bindPopup("<font color=#000000><b>My Location </b> <br/> <font size=0.5px color=grey>  Accuracy 97%... ").openPopup();   
}


function dashb(){
         var btm=document.getElementById("btm");
         var btm2=document.getElementById("btm2");
         var btm3=document.getElementById("btm3");
         
         btm.style.display=("block");
         btm2.style.display=("none");
         btm3.style.display=("none");
}
function startTrk(){
         var btm=document.getElementById("btm");
         var btm2=document.getElementById("btm2");
         var btm3=document.getElementById("btm3");
         
         btm.style.display=("none");
         btm2.style.display=("block");
         btm3.style.display=("none");
}
function trkResults(){
         var btm=document.getElementById("btm");
         var btm2=document.getElementById("btm2");
         var btm3=document.getElementById("btm3");
         
         btm.style.display=("none");
         btm2.style.display=("none");
         btm3.style.display=("block");
}



















