$('.explain').hide(0);

$('#passwordInfo').click(function(){
    $('.explain').slideDown(500);
});

 let checkNum =function(){
    let regexp = /\d/g || [];
    if(regexp.test(passwordInfo.value)==true){
        $('#done4').css ('background-color','green')
     }else if(regexp.test(passwordInfo.value)==false){
        $('#done4').css ('background-color','red')
       }
    return regexp.test(passwordInfo.value);
     
}
let checkSmallLetters =function(){
    let regexp = /\w[a-z]/g || [];
    if(regexp.test(passwordInfo.value)==true){
        $('#done1').css ('background-color','green')
     }else if(regexp.test(passwordInfo.value)==false){
        $('#done1').css ('background-color','red')
       }
    return regexp.test(passwordInfo.value);
     
}
let checkBigLetters =function(){
    let regexp = /\w[A-Z]/g || [];
    if(regexp.test(passwordInfo.value)==true){
        $('#done3').css ('background-color','green')
     }else if(regexp.test(passwordInfo.value)==false){
        $('#done3').css ('background-color','red')
       }
    return regexp.test(passwordInfo.value);
     
}
let checkSymvols =function(){
    let regexp = /\W/g || [];
    if(regexp.test(passwordInfo.value)==true){
        $('#done5').css ('background-color','green')
     }else if(regexp.test(passwordInfo.value)==false){
        $('#done5').css ('background-color','red')
       }
    return regexp.test(passwordInfo.value);
   
}
passwordInfo.oninput = function(){
    console.log('dsf')
    checkSymvols()
    checkBigLetters()
    checkNum()
    checkSmallLetters()
    
   if(passwordInfo.value.length>6 && passwordInfo.value.length<20){
    console.log(true)
    $('#done2').css ('background-color','green')
   }else if(passwordInfo.value.length>19 || passwordInfo.value.length<6){
    $('#done2').css ('background-color','red')
   }
}



      
    
    

