import { useState } from "react";
import StartScreen from "./StartScreen";
import Introduction from "./Introduction";
import Greeting from "./Greeting";
import Question from "./Question";
import Result from "./Result";


export const App = () => {

  const historyQuestions = [
    {
      id: 1,
      question: "What vegetable was originally carved to create a Jack-O'-lantern before the pumpkin became the Halloween vegetable of choice?",
      options: [
        'Turnip',
        'Tomatoe',
        'Broccoli',
        'Spinach'
      ],
      correct: 1
    },
    {
      id: 2,
      question: "Which famous magician died on Halloween?",
      options: [
        'David Copperfield',
        'Harry Houdini',
        'Penn Jillette',
        'David Blaine'
      ],
      correct: 2
    },
    {
      id: 3,
      question: "Victorians used to put what inside their coffins, just in case?",
      options: [
        'Snacks',
        'Book',
        'Bells',
        'Shoes'
      ],
      correct: 3
    },
    {
      id: 4,
      question: "What is a group of witches called?",
      options: [
        'A coven',
        'A network',
        'A league',
        'A squad'
      ],
      correct: 1
    },
    {
      id: 5,
      question: "For which fruit do you traditionally bob for on Halloween??",
      options: [
        'Oranges',
        'Bananas',
        'Kiwis',
        'Apples'
      ],
      correct: 4
    },
  ]

  const literatureQuestions = [
    {
      id: 1,
      question: "Which spell did Professor Flitwick first teach Harry, Ron and Hermione on Halloween in Harry Potter and the Sorcerer's Stone? ",
      options: [
        'Expecto Patronum',
        'Expelliarmus',
        'Wingardium Leviosa',
        'Avada Kedavra'
      ],
      correct: 3
    },
    {
      id: 2,
      question: "Janet and Allan Ahlberg's Halloween classic Funnybones tells the story of a big skeleton, a little skeleton and what other type of skeleton?",
      options: [
        'A fish sceleton',
        'A cat sceleton',
        'A dog sceleton',
        'A humster sceleton'
      ],
      correct: 3
    },
    {
      id: 3,
      question: "How many witches appear in Shakespeare's Macbeth?",
      options: [
        'One',
        'Two',
        'Three',
        'Over Million'
      ],
      correct: 3
    },
    {
      id: 4,
      question: "What is the name of the White Witch in The Chronicles of Narnia?",
      options: [
        'Selma',
        'Olena',
        'Marta',
        'Jadis'
      ],
      correct: 4
    },
    {
      id: 5,
      question: "Who wrote Frankenstein in 1818?",
      options: [
        'Lord Byron',
        'John Keats',
        'Jane Austen',
        'Mary Shelley'
      ],
      correct: 4
    },
  ]

  const mixedQuestions = [
    {
      id: 1,
      question: 'What is the last name of Sabrina the teenage witch?',
      options: [
        'Spellman',
        'Spookyins',
        'Jonson',
        'Witcher'
      ],
      correct: 1
    },
    {
      id: 2,
      question: "In the film adaptation of Roald Dahl's The Witches, Anjelica Huston's Grand High Witch plans to turn children into what?",
      options: [
        'Spiders',
        'Mice',
        'Adults',
        'Yogurt'
      ],
      correct: 2
    },
    {
      id: 3,
      question: "How many witches appear in Shakespeare's Macbeth?",
      options: [
        'One',
        'Two',
        'Three',
        'Over Million'
      ],
      correct: 3
    },
    {
      id: 4,
      question: "What is a group of witches called?",
      options: [
        'A coven',
        'A network',
        'A league',
        'A squad'
      ],
      correct: 1
    },
    {
      id: 5,
      question: "What animals are traditionally associated with witches?",
      options: [
        'Black Cat',
        'Red Panda',
        'Polar Bear',
        'Party Animal'
      ],
      correct: 1
    }

  ];

  const correctAnswerMessages = [
    "Great job! You got it right! 🎉",
    "Correct! You're on fire! 🔥",
    "You're nailing it! Another point in the bag! 🌟",
    "Perfect! You're a quiz master! 🏆",
    "Well done! You're acing this quiz! 🌠",
  ];

  const wrongAnswerMessages = [
    "Oops! That's not quite right. 😅 Don't worry, you'll get the next one!",
    "Incorrect, but keep going! Learning from mistakes is part of the fun. 🧐",
    "Not the right answer this time, but don't give up! 💪",
    "Wrong answer, but the next question is your chance to shine! ✨",
    "Not quite there, but you're making progress! 🌱",
  ];
  
  const halloweenQuizResults = [
    "Oh no! You got a score of 0. No worries, even the best witches had to start somewhere. Keep practicing your spells!",
    "You scored 1 point. You're brewing your knowledge slowly, like a beginner witch. Keep stirring the cauldron of wisdom!",
    "You earned 2 points, like a witch-in-training. There's room for improvement on your broomstick journey. Keep studying your witchcraft!",
    "You've conjured up 3 points! Well done, apprentice witch! You're on your way to mastering the dark arts of Halloween.",
    "Impressive! You've scored 4 points. Your knowledge is as enchanting as a witch's spellbook. Just a little more and you'll be casting hexes in no time!",
    "Perfect score! You've aced the Halloween witch quiz with 5 out of 5! Congratulations, you're a master witch, ready to brew potions and cast spells on All Hallows' Eve!"
  ];

  const monsters = [
    'mysterious vampire',
    'friendly ghost',
    'zany zombie',
    'silly skeleton',
    'just a plain human',
  ];

  const topics = [
    "Spooky History",
    "Scary Literature",
    "Terrifying Mix"
  ];

  const [name, setName] = useState('');
  const [monsterType, setMonsterType] = useState('mysterious vampire'); 
  const [selectedTopic, setSelectedTopic] = useState(1); 

  const questions = selectedTopic === 1 ?
  historyQuestions
  : selectedTopic === 2 ?
  literatureQuestions 
  : mixedQuestions 

  const [questionIndex, setQuestionIndex] = useState(0);

  const [scores, setScores] = useState(0);

  const [appStage, setAppStage] = useState('start');

  const nextQuestion = () => {
    setQuestionIndex((questionIndex) => questionIndex + 1)
  }


  return (
    <div className="app">
      <div className="container">
          {appStage === 'start' &&
              <StartScreen setAppStage={setAppStage}/>
          }
          {appStage === "introduction" &&
              <Introduction setAppStage={setAppStage} name={name} setName={setName} setSelectedTopic={setSelectedTopic} setMonsterType={setMonsterType} monsterType={monsterType} monsters={monsters} topics={topics}/>
          }
          {
            appStage === 'greeting' &&
            <Greeting name={name} selectedTopic={selectedTopic} monsterType={monsterType} setAppStage={setAppStage}
            topics={topics}
            />
          }
          {appStage === "question" &&
            <Question selectedTopic={selectedTopic} topics={topics} question={questions[questionIndex]} nextQuestion={nextQuestion} setScores={setScores} 
            correctAnswerMessage={correctAnswerMessages[questionIndex]} wrongAnswerMessage={wrongAnswerMessages[questionIndex]}
            setAppStage={setAppStage}
            />
          }
          {
            appStage === 'result' && 
            <Result name={name} scores={scores} halloweenQuizResults={halloweenQuizResults}/>
          }
          
      </div>
    </div>
  )
};










