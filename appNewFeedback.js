function feedBack(){

         const username = localStorage.getItem('textValue');
         var btm=document.getElementById("btm");
         var btm2=document.getElementById("btm2");
         var btm3=document.getElementById("btm3");
         
         btm.style.display=("none");
         btm2.style.display=("none");
         btm3.style.display=("block");



  
               var imei = document.getElementById("imeiCont");
               var model = document.getElementById("modelCont");
                   phoneImageLay= document.getElementById("imageLay");
                   phoneImage= document.getElementById("phoneImage");




if (username=="gmasele15@gmail.com"){
            phoneImageLay.style.display=("block");
            
            imei.innerHTML=("353959101403277");
            model.innerHTML=("APPLE iPhone 11 Pro Max(A2220)");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11-pro.jpg";
   }



  
 
}




