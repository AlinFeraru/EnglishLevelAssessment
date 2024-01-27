//function myfunc(){
//    alert(document.getElementById("language").value);
//}

var countQues=0;
var lang;
var score=0;

var HTMLquestions=[

    {
        question: "Can I park here?",
        choices: ["Sorry, I did that.","It&#8217s the same place.","Only for half an hour.","You park here sometimes."],
        answer: 3
    
    },
    
    {
        question: "What colour will you paint your children&#8217s bedroom?",
        choices: ["I hope it was right.","We can&#8217t decide.","It wasn&#8217t very difficult.","They love it."],
        answer: 2
    
    },
    {
        question: "I can&#8217t understand this email.",
        choices: ["Would you like some help?","Don&#8217t you know?","I suppose you can.","Yes, you don&#8217t."],
        answer: 1
    
    },
    {
        question: "I&#8217d like two tickets for tomorrow night.",
        choices: ["How much did you pay?","Afternoon and evening.","I&#8217ll just check for you","Three times please"],
        answer: 3
    
    },
    {/*5*/
        question: "Shall we go to the gym now?",
        choices: ["I&#8217m too tired.","It&#8217s very good.","Not at all. ","Sometimes we do."],
        answer: 1
    
    },
    {
        question: "His eyes were ______ bad that he couldn&#8217t read the number plate of the car in front.",
        choices: ["such","too","so","very"],
        answer: 3
    
    }, 
    {
        question: "The company needs to decide ______ and for all what its position is on this point.",
        choices: ["here","once","first","finally"],
        answer: 2
    
    }, 
    {
        question: "Don&#8217t put the cup on the ______ of the table; someone will knock it off.",
        choices: ["outside","edge","boundary","border"],
        answer: 2
    
    }, 
    {
        question: "I&#8217m sorry; I didn&#8217t ______  to disturb you.",
        choices: ["hope","think","mean","suppose"],
        answer: 3
    
    }, 
    {/*10*/
        question: "The singer ended the concert ______ her most popular song.",
        choices: ["by","with","in","as"],
        answer: 2
    
    },
	    {
        question: "The shop didn&#8217t have the shoes I wanted, but they&#8217ve ______ a pair specially for me.",
        choices: ["booked","ordered","commanded","asked"],
        answer: 2
    
    },
    
    {
        question: "It was only ten days ago ______ she started her new job.",
        choices: ["then","since","after","that"],
        answer: 4
    
    },
    {
        question: "______ tired Melissa is when she gets home from work, she always makes time to say goodnight to the children.",
        choices: ["Whatever","No matter how","However much","Although"],
        answer: 2
    
    },
    {
        question: "I was looking forward ______ at the new restaurant, but it was closed.",
        choices: ["to eat","to have eaten","to eating","eating"],
        answer: 3
    
    },
    {/*15*/
        question: "Would you mind ______ these plates a wipe before putting them in the cupboard?",
        choices: ["making","doing","getting","giving"],
        answer: 4
    
    },
    {
        question: "Have you got time to discuss your work now or are you ______ to leave?",
        choices: ["thinking","round","planned","about"],
        answer: 4
    
    }, 
    {
        question: "She came to live here ______ a month ago.",
        choices: ["quite","beyond","already","almost"],
        answer: 4
    
    }, 
    {
        question: "Once the plane is in the air, you can ______ your seat belt if you wish.",
        choices: ["undress","unfasten","unlock","untie"],
        answer: 2
    
    }, 
    {
        question: "I left my last job because I had no ______ to travel.",
        choices: ["place","position","opportunity","possibility"],
        answer: 3
    
    }, 
    {/*20*/
        question: "It wasn&#8217t a bad crash and ______ damage was done to my car.",
        choices: ["little","small","light","mere"],
        answer: 1
    
    }, 
    {
        question: "This printer is recommended as being ______ reliable.",
        choices: ["greatly","highly","strongly","readily"],
        answer: 2
    
    }, 
    {
        question: "Anne&#8217s house is somewhere in the ______ of the railway station.",
        choices: ["region","quarter","vicinity","district"],
        answer: 3
    
    }, 
    {
        question: "When I realized I had dropped  my gloves, I decided to ______ my steps.",
        choices: ["retrace","regress","resume","return"],
        answer: 1
    
    }, 
    {
        question: "Before making a decision, the leader considered all ______ of the argument.",
        choices: ["sides","features","perspectives","shades"],
        answer: 1
    
    }, 
    {/*25*/
        question: "I&#8217d rather you ______ to her why we can&#8217t go.",
        choices: ["would explain","explained","to explain","will explain"],
        answer: 2
    
    }
                
];

var CSSquestions=[


                
];
var JSquestions=[

  
                
];





//alert(questions.length);
document.getElementById("score").textContent="Score : "+0;
document.querySelector(".view-results").style.display="none";
document.querySelector(".quiz").style.display="none";
document.querySelector(".final-result").style.display="none";








document.querySelector(".choose-lang").addEventListener("click",function(){

    lang=document.getElementById("language").value+"questions";
    document.getElementById("ques-left").textContent="Question : "+(countQues+1)+"/"+window[lang].length;

//    alert(window[lang].length);
    //window["anything"] will convert "anything" string to object because window is also an object
    document.querySelector(".quiz").style.display="block";
    
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
     for (i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
        
    };/*For loop Closed*/
    
//    window.location.href="#score";

});





document.querySelector(".submit-answer").addEventListener("click",function(){
//     alert(window[lang][countQues].choices[window[lang][countQues].answer-1]);
//     alert(document.querySelector('input[name="options"]:checked').value);

    if(document.querySelector('input[name="options"]:checked').value===window[lang][countQues].choices[window[lang][countQues].answer-1]){
           
        score+=1;
        document.getElementById("score").textContent="Score : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle correct'>"+(countQues+1)+"</div>";
           
    }else{
    
        score-=0;
        document.getElementById("score").textContent="Score : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle incorrect'>"+(countQues+1)+"</div>";
    };
    
    if (countQues<window[lang].length-1){
        countQues++;
    }else{
        document.querySelector(".submit-answer").style.display="none";
        document.querySelector(".view-results").style.display="unset";

    }
    
    document.getElementById("ques-left").textContent="Question : "+(countQues+1)+"/"+window[lang].length;
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
    for (i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
        
    };/*For loop Closed*/

});

document.querySelector(".view-results").addEventListener("click",function(){
    
    document.querySelector(".final-result").style.display="block";
    
  /*  document.querySelector(".solved-ques-no").innerHTML="You Solved "+(countQues+1)+" questions of "+document.getElementById("language").value; */
    
    var correct= document.getElementById("ques-view").getElementsByClassName("correct").length;
    
    document.querySelector(".right-wrong").innerHTML=correct+" were RIGHT and "+((countQues+1)-correct)+" were WRONG";
    
    document.getElementById("display-final-score").innerHTML="Your Final Score is: "+score;
    
    if (score<14){
        document.querySelector(".remark").innerHTML="Estimated Level: A2 KET - Elementary";
    }else if(score<19){
        document.querySelector(".remark").innerHTML="Estimated Level: B1 PET - intermediate";
    }else if(score<21){
        document.querySelector(".remark").innerHTML="Estimated Level: B2 First Certificate - Upper Intermediate";
    }else if(score<23){
        document.querySelector(".remark").innerHTML="Estimated Level: C1 CAE - Advanced";
    }else{
		document.querySelector(".remark").innerHTML="Estimated Level: C2 CPE - Proficient";
	}
    
//    window.location.href="#display-final-score";

});

document.getElementById("restart").addEventListener("click",function(){
    location.reload();

});

document.getElementById("about").addEventListener("click",function(){
    alert("Prueba del nivel de inglés - Aula San Roque");

});


/*Smooth Scroll*/


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});



/*Smooth Scroll End*/
