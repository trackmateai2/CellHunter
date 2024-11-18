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
            
            imei.innerHTML=("352607847635386");
            model.innerHTML=("SAMSUNG Galaxy A03 Core(SM-A032F)");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a03-core.jpg";
   }


if (username=="bongimogonatty@gmail.com"){
            phoneImageLay.style.display=("block");
            
            imei.innerHTML=("352607847635386");
            model.innerHTML=("SAMSUNG Galaxy A03 Core(SM-A032F)");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a03-core.jpg";
   }

if (username=="molatediodirile@gmail.com"){
            phoneImageLay.style.display=("block");
            
            imei.innerHTML=("35474365516082");
            model.innerHTML=("Invalid IMEI number");
            phoneImage.src = "data:image/jpeg;base64,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";
   }

if (username=="tumisangd@temp.com"){
            phoneImageLay.style.display=("block");
            
            imei.innerHTML=("353879101810216");
            model.innerHTML=("APPLE iPhone 11 Pro(A2217)");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11-pro-max-.jpg";
   }
if (username=="76935569@Cellhunter.com"){
            phoneImageLay.style.display=("block");
            
            imei.innerHTML=("353475129709538");
            model.innerHTML=("SAMSUNG Galaxy A33 5G(SM-A336E)");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a33-5g.jpg";
   }








         









         




/*****************************--RESULTS_TEMPS*****************************************************************************************/






if (username=="evansbuca@temp.com"){
           window.location.href=("Results/resultsEvansbuca.html");
   }
if (username=="phexmore@gmail.com"){
           window.location.href=("Results/resultsPhex.html");
   }
  
if (username=="freddy@temp.com"){
           window.location.href=("Results/resultsFreddy.html");
   }

if (username=="77814127_2@temp.com"){
           window.location.href=("Results/results77814-2.html");
   }
  
if (username=="77814127@temp.com"){
           window.location.href=("Results/results77814.html");
   }

if (username=="71768204@temp.com"){
           window.location.href=("Results/results71768.html");
   }

if (username=="katloken@temp.com"){
           window.location.href=("Results/resultsKatloken.html");
   }
  
if (username=="olorato@temp.com"){
           window.location.href=("Results/resultsOlorato.html");
   }

if (username=="72980793@temp.com"){
           window.location.href=("Results/results72980.html");
   }
  
if (username=="76920299@temp.com"){
           window.location.href=("Results/results76920.html");
   }

if (username=="72376304@temp.com"){
           window.location.href=("Results/results72376.html");
   }

if (username=="mmagokatlego@temp.com"){
           window.location.href=("Results/resultsMmagoKatlego.html");
   }
  
if (username=="moitshepimashika23@gmail.com"){
           window.location.href=("Results/resultsMoitshepi.html");
   }

if (username=="mogotsi@temp.com"){
           window.location.href=("Results/resultsMogotsi.html");
   }

if (username=="tidimalotshwenyego@gmail.com"){
           window.location.href=("Results/resultsTidimaloTshw.html");
   }
  
if (username=="gerald@temp.com"){
           window.location.href=("Results/resultsGerald.html");
   }

if (username=="tinymmane@temp.com"){
           window.location.href=("Results/resultsTinymmane.html");
   }
  
if (username=="rasjay@temp.com"){
           window.location.href=("Results/resultsRasjay.html");
   }

if (username=="mbixx@temp.com"){
           window.location.href=("Results/resultsMbixx.html");
   }
if (username=="kaonec@temp.com"){
           window.location.href=("Results/resultsKaonec.html");
   }

if (username=="71479022@temp.com"){
           window.location.href=("Results/results71479.html");
   }

if (username=="lebesani@temp.com"){
           window.location.href=("Results/resultsLebesani.html");
   }
  
if (username=="shantee@temp.com"){
           window.location.href=("Results/resultsShantee.html");
   }

if (username=="balekani@temp.com"){
           window.location.href=("Results/resultsBalekani.html");
   }
  
if (username=="lebogangtshepo@temp.com"){
           window.location.href=("Results/resultsLebogang716.html");
   }

if (username=="bnlpmodisa@gmail.com"){
           window.location.href=("Results/resultsBnlmodisa.html");
   }

if (username=="masterman@temp.com"){
           window.location.href=("Results/resultsMasterman.html");
   }

if (username=="twaezah@temp.com"){
           window.location.href=("Results/resultsTwaezah.html");
   }

if (username=="raymond@temp.com"){
           window.location.href=("Results/resultsRaymond.html");
   }
if (username=="isaac@temp.com"){
           window.location.href=("Results/resultsIsaac.html");
   }


if (username=="patiencebasie@gmail.com"){
           window.location.href=("Results/resultsPatience.html");
   }


if (username=="ruthie@temp.com"){
           window.location.href=("Results/resultsRuthie.html");
   }
  
if (username=="moatemo@temp.com"){
           window.location.href=("Results/resultsMoatemo.html");
   }

if (username=="lebogang@temp.com"){
           window.location.href=("Results/resultsLebogang.html");
   }

if (username=="badumetse@temp.com"){
           window.location.href=("Results/resultsBadumetse.html");
   }
  
if (username=="ontlametse@temp.com"){
           window.location.href=("Results/resultsOntlametse.html");
   }


if (username=="ronald@temp.com"){
           window.location.href=("Results/resultsRonald.html");
   }

if (username=="76707830@temp.com"){
           window.location.href=("Results/results76707.html");
   }
  
if (username=="nattysarefo@gmail.com"){
           window.location.href=("Results/resultsNatty.html");
   }

if (username=="chrispin@temp.com"){
           window.location.href=("Results/resultsChrispin.html");
   }
if (username=="thatayaone@temp.com"){
           window.location.href=("Results/resultsThatayaone.html");
   }
  
if (username=="empyre@temp.com"){
           window.location.href=("Results/resultsEmpyre.html");
   }
if (username=="zaids@temp.com"){
           window.location.href=("Results/resultsZaids.html");
   }
if (username=="tidimalo@temp.com"){
           window.location.href=("Results/resultsTidimalo.html");
   }

if (username=="kgotso@temp.com"){
           window.location.href=("Results/resultsKgotso.html");
   }

if (username=="bakang@temp.com"){
           window.location.href=("Results/resultsBakang.html");
   }

if (username=="balesengbobothobane@gmail.com"){
           window.location.href=("Results/resultsBaleseng.html");
   }
if (username=="seleka@temp.com"){
           window.location.href=("Results/resultsSeleka.html");
   }
  
if (username=="princess@temp.com"){
           window.location.href=("Results/resultsPrincess.html");
   }

if (username=="olefile@temp.com"){
           window.location.href=("Results/resultsOlefile.html");
   }

if (username=="bogosi@temp.com"){
           window.location.href=("Results/resultsBogosi.html");
   }
  
if (username=="thubans@temp.com"){
           window.location.href=("Results/resultsThubans.html");
   }
  
if (username=="dappamphoeng@gmail.com"){
           window.location.href=("Results/resultsReetsang.html");
   }
if (username=="73295665@temp.com"){
           window.location.href=("Results/results73295.html");
   }
  
if (username=="virgoangel@temp.com"){
           window.location.href=("Results/resultsVirgo.html");
   }

if (username=="kgopiso@temp.com"){
           window.location.href=("Results/resultsKgopiso.html");
   }
if (username=="teekells@temp.com"){
           window.location.href=("Results/resultsTeekells.html");
   }

if (username=="71415574@temp.com"){
           window.location.href=("Results/results71415.html");
   }

if (username=="magang@temp.com"){
           window.location.href=("Results/resultsBoemo.html");
   }
if (username=="boemomagang@gmail.com"){
           window.location.href=("Results/resultsBoemo.html");
   }

  
if (username=="74202145@temp.com"){
           window.location.href=("Results/results74202.html");
   }

if (username=="kagiso@temp.com"){
           window.location.href=("Results/resultsBrianKagiso.html");
   }

if (username=="kgosimabalane3@gmail.com"){
           window.location.href=("Results/resultsKgosimabalane.html");
   }
  
if (username=="73834466@temp.com"){
           window.location.href=("Results/results73834.html");
   }

if (username=="75756565@temp.com"){
           window.location.href=("Results/results75756.html");
   }
  
if (username=="gaone00@temp.com"){
           window.location.href=("Results/resultsGaone.html");
   }

if (username=="tirelo@temp.com"){
           window.location.href=("Results/resultsTirelo.html");
   }

if (username=="dituwe@temp.com"){
           window.location.href=("Results/resultsDituwe.html");
   }

if (username=="matsoga@temp.com"){
           window.location.href=("Results/resultsMatsoga.html");
   }

if (username=="maitumelo@temp.com"){
           window.location.href=("Results/resultsMaitumelo.html");
   }
if (username=="maitumelolesang@gmail.com"){
           window.location.href=("Results/resultsMaitumelo.html");
   }

if (username=="71741714@temp.com"){
           window.location.href=("Results/results71741714.html");
   }

if (username=="73024187@temp.com"){
           window.location.href=("Results/results73024.html");
   }

if (username=="mubutale@gov.bw"){
           window.location.href=("Results/resultsMubutale.html");
   }
  
if (username=="goffy00@temp.com"){
           window.location.href=("Results/resultsGoffy.html");
   }

if (username=="rowland@temp.com"){
           window.location.href=("Results/resultsRowland.html");
   }
if (username=="76184747@temp.com"){
           window.location.href=("Results/results76184.html");
   }

if (username=="msiza@temp.com"){
           window.location.href=("Results/resultsMsiza.html");
   }

if (username=="77183700@temp.com"){
           window.location.href=("Results/results77183.html");
   }
  if (username=="75351789@temp.com"){
           window.location.href=("Results/results75351.html");
   }
  if (username=="71727191@temp.com"){
           window.location.href=("Results/results71727.html");
   }
  if (username=="75177295@temp.com"){
           window.location.href=("Results/resultsMinge.html");
   }
 
if (username=="motlogelwajustin@gmail.com"){
           window.location.href=("Results/resultsMotlogelwa.html");
   }

  
if (username=="madouble@temp.com"){
           window.location.href=("Results/resultsMadouble.html");
   }
  







         

  
 
}//LastBrace(Fdbk)




