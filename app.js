//obj stored with 3 sets of array 
const infoFortune = {
    arrMassages : ['It is Certain', 'It is decidedly so',' Without a doubt', 'Yes definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy, try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Don\'t count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful.'],

    person: ['James', 'Robert', 'Michael', 'William', 'David'],

    joke: ["What kind of exercise do lazy people do? Diddly-squats.", 
        "What do you call a pony with a cough? A little horse!", 
        "What is Forrest Gump's password? 1Forrest1.", 
        "Why did the M&M go to school? He wanted to be a Smartie.", 
        "What did one traffic light say to the other? Stop looking at me, I'm changing!", 
        "What do you call bears with no ears? B.", 
        "What's a foot long and slippery? A slipper!", 
        "Why do French people eat snails? They don't like fast food!", 
        "What's red and moves up and down? A tomato in an elevator!", 
        "I invented a new word today: Plagiarism.", 
        "What is sticky and brown? A stick!", 
        "How does a rabbi make coffee? Hebrews it!", 
        "Rest in peace boiling water. You will be mist!", 
        "How do you throw a space party? You planet!", 
        "Want to hear a construction joke? Oh never mind, I'm still working on that one."] 
}

// generating a random number
let randomNumber = num =>  Math.floor(Math.random() * num) ;

//creates a obj by random selection 
const mysteryObjGenarator = () => {

    //mistery object 
    let misteryObj = {};

    //random massage form infoFortune  object
    misteryObj.randomMassage = infoFortune.arrMassages[randomNumber(infoFortune.arrMassages.length)]; 
    //random person form infoFortune object
    misteryObj.person = infoFortune.person[randomNumber(infoFortune.person.length)]; 
    //random joke form infoFortune object
    misteryObj.joke = infoFortune.joke[randomNumber(infoFortune.joke.length)]; 


    return misteryObj;

}

//returned value of mysteryObjGenerator
let fortuneObj = mysteryObjGenarator(infoFortune);

//function that gives arraged massage
let randomMassageTaker = () => `Dear ${fortuneObj.person}! A massage form you luck "${fortuneObj.randomMassage}". Whatever your fortune is a joke for you --- ${fortuneObj.joke} --- `;

console.log(randomMassageTaker());
