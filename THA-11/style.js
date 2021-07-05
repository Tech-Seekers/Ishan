const questions=[
    {
        'question':'Who is the owner of bitcoin ?',
        'options':['Santoshi Nakamoto' , 'Elon Musk', 'Narendra Modi' ,'Muskesh Ambani'] 
    },

    {
        'question':  "Which is India's largest city by population",
        'options' : ["Delhi","Mumbai" , "Pune", "Bangalore"]
    },
    {
        "question": "India is a federal union comprising twenty-nine states and how many union territories?",
        "options": ["7","6","8","9"]
    },
    {
        "question": "What are the major languages spoken in Andhra Pradesh?",
        "options": ["Telugu and Urdu", " English and Telugu", "Telugu and Kannada","All of the above languages"]
    },
    {
    
        "question": "What is the state flower of Haryana?",
        "options": [ "Lotus","Rhododendron","Golden Shower","Not declared"]
    },
    {
   
        "question": "Where was the International Conference on 'Yoga for Diabetes' organized from January 4-6, 2017?",
        "options": ["New Delhi ", "Jharkhand","Jammu and Kashmir","Haryana"]
    },
    {


        "question": "The tower which was lighted up in Tricolour of India on Republic Day, 2017?",
        "options": ["Burj Khalifa","WTC Towers", "Jeddah Tower","Burj Al Arab"]
    },
    {
      
        "question": "Which of the following states is not located in the North?",
        "options": ["Jharkhand","Himachal Pradesh", "Jammu and Kashmir","Haryana"]
    },
    {
        "question": "In what state is the Elephant Falls located?",
        "options": [ "Mizoram","Meghalaya","Orissa","Manipur"]
    },
    {
        "question": "Which state has the largest population in India?",
        "options": [ "Uttar Pradesh","Maharastra","Bihar","Andra Pradesh"]
    },
    {
        "question": " Which state has the largest area?",
        "options": [ "Rajasthan","Maharashtra","Bihar","Andra Pradesh"]

    },
    {
        "question": "Which is the largest coffee producing state of India?",
        "options": [ "Karnataka","Maharastra","Maharashtra","Rajasthan"]

    },
    {
        "question": "In which state is the main language Khasi?",
        "options": ["Meghalaya","Nagaland", "Rajasthan", "Maharashtra"]

    },
    {

        "question": "Which of the following created history in 2016 by winning all three gold medals on offer in the 1st Western Asia Youth Chess Championship?",
        "options": [ "Kush Bhagat","Nihal Sarin","Praggnanandhaa","Vidit Gujrathi"]

    },
    {
            
     
        "question": "Which Bollywood actress is the new ambassador for Swachh Bharat Mission's youth-based 'Swachh Saathi' programme?",
        "options": ["Dia Mirza ","Vidya Balan ", "Priyanka Chopra","Sonakshi Sinha"]
    },
    {
        "question": "When is the Indian Air Force Day celebrated?",
        "options": ["October 8","October 9", "October 10","October 11"]
    }
]

var score=0;

const result=document.querySelector('.result');

result.addEventListener('click',()=>{
    result.innerHTML=`${score}/${questions.length}`;
})

function shuffle(arr){
    for(var i=0;i<arr.length;i++)
    {
        const inde=Math.floor(Math.random()*(i+1));
        var temp=arr[i];
        arr[i]=arr[inde];
        arr[inde]=temp;
    }
}

function reveal(option){
    const options = option.closest(".options")
    var temp=score;
    options.querySelectorAll('button').forEach((button)=>{
        button.click();
    })
    score=temp;
}

function createOption (option,answer=false){
    const optionHolder=document.createElement("div");
    optionHolder.classList.add("option")

    const button = document.createElement("button")
    
    button.addEventListener('click',()=>{
        if(answer){
            if(!button.classList.contains("correct")){
                score++;
            }
            button.classList.add("correct");
        }
        else{
            button.classList.add("wrong");
        }
        reveal(button);
    })
    button.innerHTML=option;
    optionHolder.append(button);
    return optionHolder;
}

shuffle(questions);

questions.forEach((current, number)=>{
     const container=document.createElement("div");
     container.classList.add("container");

     const question=document.createElement("div");
     question.classList.add("question");

     question.innerHTML = `${number+1}. ${current.question}`;
     container.append(question);
     
     const options=document.createElement("div");
     options.classList.add("options");

     optionarr=[]
     current.options.forEach((option,number)=>{
         if(number==0){
            optionarr.push(createOption(option,true));
         }
         else{
            optionarr.push(createOption (option));
         }
     })

     shuffle(optionarr);
     optionarr.forEach((option)=>{
         options.append(option);
     })

     container.append(options);
     document.body.append(container);

})

/*<div class="container">
            <div class="question">1. Who is the first President of India ?</div>
            <div class="options">
                <div class="option"><button"options</button></div>
                <div class="option"><button></button></div>
                <div class="option"><button>option3</button></div>
                <div class="option"><button>option4</button></div>
            </div>
        </div>
*/