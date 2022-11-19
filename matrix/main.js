let diodeColor = 'orange';
let clearColor = 'white';
let errorColor = 'red';
$('.diode').css('backgroundColor', clearColor);


$("#add").click(function(){
    $(".star").addClass("start__animation");
 });


$('#add').click(function(){
    
    let str = $('#inp').val().toLowerCase();
    $('#inp').val('');
    let i = 0;
    let timerId = setInterval(() => {
        if(i<str.length){
            switch (str[i]){
                case 'a' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d4_2').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d4_4').css('backgroundColor', diodeColor); 
                    $('#d5_4').css('backgroundColor', diodeColor); 
                    $('#d6_4').css('backgroundColor', diodeColor); 
                    $('#d3_4').css('backgroundColor', diodeColor); 
    
                }switch (str[i]){
                    case 'а' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d4_2').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d4_4').css('backgroundColor', diodeColor); 
                    $('#d5_4').css('backgroundColor', diodeColor); 
                    $('#d6_4').css('backgroundColor', diodeColor); 
                    $('#d3_4').css('backgroundColor', diodeColor);  
    
                } switch (str[i]){
                    case 'b' :
                    $('.diode').css('backgroundColor', clearColor);

                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d3_4').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d5_4').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d4_2').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                    $('#d6_3').css('backgroundColor', diodeColor); 
    
                }switch (str[i]){
                    case 'в' :
                    $('.diode').css('backgroundColor', clearColor);

                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d3_4').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d5_4').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d4_2').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                    $('#d6_3').css('backgroundColor', diodeColor); 
    
                }switch (str[i]){
                    case 'г' :
                    $('.diode').css('backgroundColor', clearColor);

                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d2_4').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d4_2').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                }switch (str[i]){
                    case 'ґ' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d1_4').css('backgroundColor', diodeColor); 
                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d2_4').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d4_2').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                }switch (str[i]){
                    case 'б' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d2_4').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d4_2').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                    $('#d6_3').css('backgroundColor', diodeColor); 
                    $('#d6_4').css('backgroundColor', diodeColor); 
                    $('#d5_4').css('backgroundColor', diodeColor); 
                    $('#d4_4').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 



       
    
                }
                switch (str[i]){
                    case 'c' :
                    $('.diode').css('backgroundColor', clearColor);

                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d2_4').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d4_2').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d6_3').css('backgroundColor', diodeColor); 
                    $('#d6_4').css('backgroundColor', diodeColor); 

                } switch (str[i]){
                    case 'с' :
                    $('.diode').css('backgroundColor', clearColor);

                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d2_4').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d4_2').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d6_3').css('backgroundColor', diodeColor); 
                    $('#d6_4').css('backgroundColor', diodeColor); 

                }
                switch (str[i]){
                    case 'd' :
                    $('.diode').css('backgroundColor', clearColor);

                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d3_4').css('backgroundColor', diodeColor); 
                    $('#d4_4').css('backgroundColor', diodeColor); 
                    $('#d5_4').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d4_2').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                    $('#d6_3').css('backgroundColor', diodeColor); 
                }switch (str[i]){
                    case 'д' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d5_3').css('backgroundColor', diodeColor); 
                    $('#d2_4').css('backgroundColor', diodeColor); 
                    $('#d3_4').css('backgroundColor', diodeColor); 
                    $('#d4_4').css('backgroundColor', diodeColor); 
                    $('#d5_4').css('backgroundColor', diodeColor); 
                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d2_4').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d4_2').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d6_1').css('backgroundColor', diodeColor); 
                    $('#d6_5').css('backgroundColor', diodeColor); 
                } switch (str[i]){
                    case 'e' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d2_4').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d4_2').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d4_4').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                    $('#d6_3').css('backgroundColor', diodeColor); 
                    $('#d6_4').css('backgroundColor', diodeColor); 
                } switch (str[i]){
                    case 'е' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d2_4').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d4_2').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d4_4').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                    $('#d6_3').css('backgroundColor', diodeColor); 
                    $('#d6_4').css('backgroundColor', diodeColor); 
                }switch (str[i]){
                    case 'є' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d2_4').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d4_2').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d4_4').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d6_3').css('backgroundColor', diodeColor); 
                    $('#d6_4').css('backgroundColor', diodeColor); 
                }switch (str[i]){
                    case 'ж' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_1').css('backgroundColor', diodeColor); 
                    $('#d2_5').css('backgroundColor', diodeColor); 
                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d3_3').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d3_4').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d5_3').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d5_4').css('backgroundColor', diodeColor); 
                    $('#d6_3').css('backgroundColor', diodeColor); 
                    $('#d6_1').css('backgroundColor', diodeColor); 
                    $('#d6_5').css('backgroundColor', diodeColor); 

      
                }switch (str[i]){
                    case 'з'  :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d3_4').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d4_4').css('backgroundColor', diodeColor); 
                    $('#d5_4').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d6_3').css('backgroundColor', diodeColor); 
                   
      
                }  switch (str[i]){
                    case 'f' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d2_4').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d4_2').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d4_4').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 

                }  switch (str[i]){
                    case 'ь' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d4_2').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                    $('#d6_3').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d5_4').css('backgroundColor', diodeColor);  
                }  switch (str[i]){
                    case 'ю' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_1').css('backgroundColor', diodeColor);  
                    $('#d3_1').css('backgroundColor', diodeColor);  
                    $('#d4_1').css('backgroundColor', diodeColor);  
                    $('#d5_1').css('backgroundColor', diodeColor);  
                    $('#d6_1').css('backgroundColor', diodeColor);  
                    $('#d7_1').css('backgroundColor', diodeColor);  
                    $('#d4_2').css('backgroundColor', diodeColor);  
                    $('#d5_2').css('backgroundColor', diodeColor);  
                    $('#d6_3').css('backgroundColor', diodeColor);  
                    $('#d6_4').css('backgroundColor', diodeColor);  
                    $('#d4_5').css('backgroundColor', diodeColor);  
                    $('#d5_5').css('backgroundColor', diodeColor);  
                    $('#d3_4').css('backgroundColor', diodeColor);  
                    $('#d3_3').css('backgroundColor', diodeColor);  



                }  switch (str[i]){
                    case 'я' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_5').css('backgroundColor', diodeColor);  
                    $('#d2_4').css('backgroundColor', diodeColor);  
                    $('#d2_3').css('backgroundColor', diodeColor);  
                    $('#d3_2').css('backgroundColor', diodeColor);  
                    $('#d3_5').css('backgroundColor', diodeColor);  
                    $('#d4_5').css('backgroundColor', diodeColor);  
                    $('#d4_4').css('backgroundColor', diodeColor);  
                    $('#d4_3').css('backgroundColor', diodeColor);  
                    $('#d5_5').css('backgroundColor', diodeColor);  
                    $('#d6_5').css('backgroundColor', diodeColor);  
                    $('#d7_5').css('backgroundColor', diodeColor);  
                    $('#d5_2').css('backgroundColor', diodeColor);  
                    $('#d6_2').css('backgroundColor', diodeColor);  
                    $('#d7_2').css('backgroundColor', diodeColor);



                }   switch (str[i]){
                    case 'g' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d2_4').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d4_2').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d4_4').css('backgroundColor', diodeColor); 
                    $('#d4_5').css('backgroundColor', diodeColor); 
                    $('#d5_5').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                    $('#d6_3').css('backgroundColor', diodeColor); 
                    $('#d6_4').css('backgroundColor', diodeColor); 
                    $('#d6_5').css('backgroundColor', diodeColor); 


                }switch (str[i]){
                    case 'h' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d4_2').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                    $('#d2_4').css('backgroundColor', diodeColor); 
                    $('#d3_4').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d4_4').css('backgroundColor', diodeColor); 
                    $('#d5_4').css('backgroundColor', diodeColor); 
                    $('#d6_4').css('backgroundColor', diodeColor); 
                }switch (str[i]){
                    case 'н' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d4_2').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                    $('#d2_4').css('backgroundColor', diodeColor); 
                    $('#d3_4').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d4_4').css('backgroundColor', diodeColor); 
                    $('#d5_4').css('backgroundColor', diodeColor); 
                    $('#d6_4').css('backgroundColor', diodeColor); 
                }switch (str[i]){
                    case 'i' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d2_4').css('backgroundColor', diodeColor); 
                    $('#d3_3').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d5_3').css('backgroundColor', diodeColor); 
                    $('#d6_3').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                    $('#d6_4').css('backgroundColor', diodeColor); 
       
                }switch (str[i]){
                    case 'і' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d2_4').css('backgroundColor', diodeColor); 
                    $('#d3_3').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d5_3').css('backgroundColor', diodeColor); 
                    $('#d6_3').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                    $('#d6_4').css('backgroundColor', diodeColor); 
       
                }switch (str[i]){
                    case 'ї' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d1_2').css('backgroundColor', errorColor); 
                    $('#d1_4').css('backgroundColor', errorColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d3_3').css('backgroundColor', diodeColor); 
                    $('#d3_4').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d5_3').css('backgroundColor', diodeColor); 
                    $('#d6_3').css('backgroundColor', diodeColor); 
                    $('#d7_3').css('backgroundColor', diodeColor); 
                    $('#d7_2').css('backgroundColor', diodeColor); 
                    $('#d7_4').css('backgroundColor', diodeColor); 
       
                }switch (str[i]){
                    case 'j' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d3_3').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d5_3').css('backgroundColor', diodeColor); 
                    $('#d6_3').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                }switch (str[i]){
                    case 'k' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d2_4').css('backgroundColor', diodeColor); 
                    $('#d3_4').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d4_2').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                    $('#d5_4').css('backgroundColor', diodeColor); 
                    $('#d6_4').css('backgroundColor', diodeColor); 
                }switch (str[i]){
                    case 'к' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d2_4').css('backgroundColor', diodeColor); 
                    $('#d3_4').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d4_2').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                    $('#d5_4').css('backgroundColor', diodeColor); 
                    $('#d6_4').css('backgroundColor', diodeColor); 
                }switch (str[i]){
                    case 'л' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d4_2').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                    $('#d6_1').css('backgroundColor', diodeColor); 
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d2_4').css('backgroundColor', diodeColor); 
                    $('#d3_4').css('backgroundColor', diodeColor); 
                    $('#d4_4').css('backgroundColor', diodeColor); 
                    $('#d5_4').css('backgroundColor', diodeColor); 
                    $('#d6_4').css('backgroundColor', diodeColor); 

         
                }switch (str[i]){
                    case 'п' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d4_2').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d2_4').css('backgroundColor', diodeColor); 
                    $('#d3_4').css('backgroundColor', diodeColor); 
                    $('#d4_4').css('backgroundColor', diodeColor); 
                    $('#d5_4').css('backgroundColor', diodeColor); 
                    $('#d6_4').css('backgroundColor', diodeColor); 

                }switch (str[i]){
                    case 'l' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d4_2').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                    $('#d6_3').css('backgroundColor', diodeColor); 
                    $('#d6_4').css('backgroundColor', diodeColor); 

                }switch (str[i]){
                    case 'm' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d1_1').css('backgroundColor', diodeColor); 
                    $('#d1_5').css('backgroundColor', diodeColor); 
                    $('#d2_1').css('backgroundColor', diodeColor); 
                    $('#d2_4').css('backgroundColor', diodeColor); 
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d3_1').css('backgroundColor', diodeColor); 
                    $('#d3_3').css('backgroundColor', diodeColor); 
                    $('#d4_1').css('backgroundColor', diodeColor); 
                    $('#d5_1').css('backgroundColor', diodeColor); 
                    $('#d6_1').css('backgroundColor', diodeColor); 
                    $('#d7_1').css('backgroundColor', diodeColor); 
                    $('#d1_5').css('backgroundColor', diodeColor); 
                    $('#d2_5').css('backgroundColor', diodeColor); 
                    $('#d3_5').css('backgroundColor', diodeColor); 
                    $('#d4_5').css('backgroundColor', diodeColor); 
                    $('#d5_5').css('backgroundColor', diodeColor); 
                    $('#d6_5').css('backgroundColor', diodeColor); 
                    $('#d7_5').css('backgroundColor', diodeColor); 

                }switch (str[i]){
                    case 'м' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d1_1').css('backgroundColor', diodeColor); 
                    $('#d1_5').css('backgroundColor', diodeColor); 
                    $('#d2_1').css('backgroundColor', diodeColor); 
                    $('#d2_4').css('backgroundColor', diodeColor); 
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d3_1').css('backgroundColor', diodeColor); 
                    $('#d3_3').css('backgroundColor', diodeColor); 
                    $('#d4_1').css('backgroundColor', diodeColor); 
                    $('#d5_1').css('backgroundColor', diodeColor); 
                    $('#d6_1').css('backgroundColor', diodeColor); 
                    $('#d7_1').css('backgroundColor', diodeColor); 
                    $('#d1_5').css('backgroundColor', diodeColor); 
                    $('#d2_5').css('backgroundColor', diodeColor); 
                    $('#d3_5').css('backgroundColor', diodeColor); 
                    $('#d4_5').css('backgroundColor', diodeColor); 
                    $('#d5_5').css('backgroundColor', diodeColor); 
                    $('#d6_5').css('backgroundColor', diodeColor); 
                    $('#d7_5').css('backgroundColor', diodeColor); 

                }switch (str[i]){
                    case 'n' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d3_3').css('backgroundColor', diodeColor); 
                    $('#d4_2').css('backgroundColor', diodeColor); 
                    $('#d4_4').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                    $('#d2_5').css('backgroundColor', diodeColor); 
                    $('#d3_5').css('backgroundColor', diodeColor); 
                    $('#d4_5').css('backgroundColor', diodeColor); 
                    $('#d5_5').css('backgroundColor', diodeColor); 
                    $('#d6_5').css('backgroundColor', diodeColor); 

                }switch (str[i]){
                    case 'и' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d3_4').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d4_2').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                    $('#d2_5').css('backgroundColor', diodeColor); 
                    $('#d3_5').css('backgroundColor', diodeColor); 
                    $('#d4_5').css('backgroundColor', diodeColor); 
                    $('#d5_5').css('backgroundColor', diodeColor); 
                    $('#d6_5').css('backgroundColor', diodeColor); 

                }switch (str[i]){
                    case 'й' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d1_3').css('backgroundColor', errorColor); 
                    $('#d1_4').css('backgroundColor', errorColor); 
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d3_4').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d4_2').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                    $('#d2_5').css('backgroundColor', diodeColor); 
                    $('#d3_5').css('backgroundColor', diodeColor); 
                    $('#d4_5').css('backgroundColor', diodeColor); 
                    $('#d5_5').css('backgroundColor', diodeColor); 
                    $('#d6_5').css('backgroundColor', diodeColor); 

                }switch (str[i]){
                    case 'o' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d3_1').css('backgroundColor', diodeColor); 
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d2_4').css('backgroundColor', diodeColor); 
                    $('#d4_1').css('backgroundColor', diodeColor); 
                    $('#d5_1').css('backgroundColor', diodeColor); 
                    $('#d3_5').css('backgroundColor', diodeColor); 
                    $('#d4_5').css('backgroundColor', diodeColor); 
                    $('#d5_5').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                    $('#d6_3').css('backgroundColor', diodeColor); 
                    $('#d6_4').css('backgroundColor', diodeColor); 
                }switch (str[i]){
                    case 'о' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d3_1').css('backgroundColor', diodeColor); 
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d2_4').css('backgroundColor', diodeColor); 
                    $('#d4_1').css('backgroundColor', diodeColor); 
                    $('#d5_1').css('backgroundColor', diodeColor); 
                    $('#d3_5').css('backgroundColor', diodeColor); 
                    $('#d4_5').css('backgroundColor', diodeColor); 
                    $('#d5_5').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                    $('#d6_3').css('backgroundColor', diodeColor); 
                    $('#d6_4').css('backgroundColor', diodeColor); 
                }switch (str[i]){
                    case 'p' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d3_4').css('backgroundColor', diodeColor); 
                    $('#d4_2').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                }switch (str[i]){
                    case 'р' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d3_4').css('backgroundColor', diodeColor); 
                    $('#d4_2').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                }switch (str[i]){
                    case '' :
                    $('.diode').css('backgroundColor', clearColor);
                }switch (str[i]){
                    case 'q' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d3_1').css('backgroundColor', diodeColor); 
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d2_4').css('backgroundColor', diodeColor); 
                    $('#d4_1').css('backgroundColor', diodeColor); 
                    $('#d5_1').css('backgroundColor', diodeColor); 
                    $('#d3_5').css('backgroundColor', diodeColor); 
                    $('#d4_5').css('backgroundColor', diodeColor); 
                    $('#d5_5').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                    $('#d6_3').css('backgroundColor', diodeColor); 
                    $('#d6_4').css('backgroundColor', diodeColor); 
                    $('#d7_5').css('backgroundColor', diodeColor); 
                    $('#d6_4').css('backgroundColor', diodeColor); 
                    $('#d5_3').css('backgroundColor', diodeColor); 
                }switch (str[i]){
                    case 'r' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d3_4').css('backgroundColor', diodeColor); 
                    $('#d4_2').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                    $('#d5_4').css('backgroundColor', diodeColor); 
                    $('#d6_4').css('backgroundColor', diodeColor); 
                }switch (str[i]){
                    case 's' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d2_4').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d4_2').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d4_4').css('backgroundColor', diodeColor); 
                    $('#d5_4').css('backgroundColor', diodeColor); 
                    $('#d6_4').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                    $('#d6_3').css('backgroundColor', diodeColor); 
                }switch (str[i]){
                    case 't' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_1').css('backgroundColor', diodeColor); 
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d2_4').css('backgroundColor', diodeColor); 
                    $('#d2_5').css('backgroundColor', diodeColor); 
                    $('#d3_3').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d5_3').css('backgroundColor', diodeColor); 
                    $('#d6_3').css('backgroundColor', diodeColor); 
                }switch (str[i]){
                    case 'т' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_1').css('backgroundColor', diodeColor); 
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d2_4').css('backgroundColor', diodeColor); 
                    $('#d2_5').css('backgroundColor', diodeColor); 
                    $('#d3_3').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d5_3').css('backgroundColor', diodeColor); 
                    $('#d6_3').css('backgroundColor', diodeColor); 
                }switch (str[i]){
                    case 'u' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_1').css('backgroundColor', diodeColor); 
                    $('#d3_1').css('backgroundColor', diodeColor); 
                    $('#d4_1').css('backgroundColor', diodeColor); 
                    $('#d5_1').css('backgroundColor', diodeColor); 
                    $('#d3_5').css('backgroundColor', diodeColor); 
                    $('#d4_5').css('backgroundColor', diodeColor); 
                    $('#d5_5').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                    $('#d6_3').css('backgroundColor', diodeColor); 
                    $('#d6_4').css('backgroundColor', diodeColor); 
                    $('#d2_5').css('backgroundColor', diodeColor); 
                }switch (str[i]){
                    case 'v' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d3_1').css('backgroundColor', diodeColor); 
                    $('#d3_5').css('backgroundColor', diodeColor); 
                    $('#d4_4').css('backgroundColor', diodeColor); 
                    $('#d4_2').css('backgroundColor', diodeColor); 
                    $('#d5_3').css('backgroundColor', diodeColor); 
                }switch (str[i]){
                    case 'w' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d3_1').css('backgroundColor', diodeColor); 
                    $('#d4_1').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d3_3').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d5_4').css('backgroundColor', diodeColor); 
                    $('#d3_5').css('backgroundColor', diodeColor); 
                    $('#d4_5').css('backgroundColor', diodeColor); 
                }switch (str[i]){
                    case 'x' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_1').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d5_4').css('backgroundColor', diodeColor); 
                    $('#d6_5').css('backgroundColor', diodeColor); 
                    $('#d6_1').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d3_4').css('backgroundColor', diodeColor); 
                    $('#d2_5').css('backgroundColor', diodeColor); 
                }switch (str[i]){
                    case 'х' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_1').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d5_4').css('backgroundColor', diodeColor); 
                    $('#d6_5').css('backgroundColor', diodeColor); 
                    $('#d6_1').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d3_4').css('backgroundColor', diodeColor); 
                    $('#d2_5').css('backgroundColor', diodeColor); 
                }switch (str[i]){
                    case 'ц' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d4_2').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d2_4').css('backgroundColor', diodeColor); 
                    $('#d3_4').css('backgroundColor', diodeColor); 
                    $('#d4_4').css('backgroundColor', diodeColor); 
                    $('#d5_4').css('backgroundColor', diodeColor); 
                    $('#d5_3').css('backgroundColor', diodeColor); 
                    $('#d6_4').css('backgroundColor', diodeColor); 
                    $('#d6_5').css('backgroundColor', diodeColor); 
                }switch (str[i]){
                    case 'ч' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_4').css('backgroundColor', diodeColor); 
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d4_2').css('backgroundColor', diodeColor); 
                    $('#d3_4').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d4_4').css('backgroundColor', diodeColor); 
                    $('#d5_4').css('backgroundColor', diodeColor); 
                    $('#d6_4').css('backgroundColor', diodeColor); 
                }switch (str[i]){
                    case 'ш' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_1').css('backgroundColor', diodeColor); 
                    $('#d3_1').css('backgroundColor', diodeColor); 
                    $('#d4_1').css('backgroundColor', diodeColor); 
                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d3_3').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d2_5').css('backgroundColor', diodeColor); 
                    $('#d3_5').css('backgroundColor', diodeColor); 
                    $('#d4_5').css('backgroundColor', diodeColor); 
                    $('#d5_1').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d5_3').css('backgroundColor', diodeColor); 
                    $('#d5_4').css('backgroundColor', diodeColor); 
                    $('#d5_5').css('backgroundColor', diodeColor); 
                }switch (str[i]){
                    case 'щ' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_1').css('backgroundColor', diodeColor); 
                    $('#d3_1').css('backgroundColor', diodeColor); 
                    $('#d4_1').css('backgroundColor', diodeColor); 
                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d3_3').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d2_5').css('backgroundColor', diodeColor); 
                    $('#d3_5').css('backgroundColor', diodeColor); 
                    $('#d4_5').css('backgroundColor', diodeColor); 
                    $('#d5_1').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d5_3').css('backgroundColor', diodeColor); 
                    $('#d5_4').css('backgroundColor', diodeColor); 
                    $('#d5_5').css('backgroundColor', diodeColor); 
                    $('#d5_5').css('backgroundColor', diodeColor); 
                    $('#d6_4').css('backgroundColor', diodeColor); 
                    $('#d7_5').css('backgroundColor', diodeColor);  
                }switch (str[i]){
                    case 'y' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_1').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d2_5').css('backgroundColor', diodeColor); 
                    $('#d3_4').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d5_3').css('backgroundColor', diodeColor); 
                    $('#d6_3').css('backgroundColor', diodeColor); 
                }switch (str[i]){
                    case 'у' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_1').css('backgroundColor', diodeColor); 
                    $('#d3_2').css('backgroundColor', diodeColor); 
                    $('#d2_5').css('backgroundColor', diodeColor); 
                    $('#d3_4').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d5_3').css('backgroundColor', diodeColor); 
                    $('#d6_3').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                }switch (str[i]){
                    case 'ф' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d2_4').css('backgroundColor', diodeColor); 
                    $('#d3_3').css('backgroundColor', diodeColor); 
                    $('#d3_5').css('backgroundColor', diodeColor); 
                    $('#d4_5').css('backgroundColor', diodeColor); 
                    $('#d3_1').css('backgroundColor', diodeColor); 
                    $('#d4_1').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d5_3').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d5_4').css('backgroundColor', diodeColor); 
                    $('#d6_3').css('backgroundColor', diodeColor); 
                    $('#d7_3').css('backgroundColor', diodeColor); 
                }switch (str[i]){
                    case 'z' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d2_1').css('backgroundColor', diodeColor); 
                    $('#d2_2').css('backgroundColor', diodeColor); 
                    $('#d2_3').css('backgroundColor', diodeColor); 
                    $('#d2_4').css('backgroundColor', diodeColor); 
                    $('#d2_5').css('backgroundColor', diodeColor); 
                    $('#d3_4').css('backgroundColor', diodeColor); 
                    $('#d4_3').css('backgroundColor', diodeColor); 
                    $('#d5_2').css('backgroundColor', diodeColor); 
                    $('#d6_1').css('backgroundColor', diodeColor); 
                    $('#d6_2').css('backgroundColor', diodeColor); 
                    $('#d6_3').css('backgroundColor', diodeColor); 
                    $('#d6_4').css('backgroundColor', diodeColor); 
                    $('#d6_5').css('backgroundColor', diodeColor); 
                }switch (str[i]){
                    case '/' :
                    $('.diode').css('backgroundColor', clearColor);
                    $('#d6_3').css('backgroundColor', errorColor); 
                    $('#d5_2').css('backgroundColor', errorColor); 
                    $('#d5_4').css('backgroundColor', errorColor); 
                    $('#d4_1').css('backgroundColor', errorColor); 
                    $('#d4_5').css('backgroundColor', errorColor); 
                    $('#d3_2').css('backgroundColor', errorColor); 
                    $('#d3_4').css('backgroundColor', errorColor); 
                    $('#d4_3').css('backgroundColor', errorColor);
                }
            i++;
        }else{
            $('.diode').css('backgroundColor', clearColor); 
            clearInterval(timerId);
        }
    }, 1000);
});
