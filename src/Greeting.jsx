import React from 'react'

const Greeting = ({setAppStage, name, monsterType, selectedTopic, topics}) => {

  return (
    <div className="greeting block">
        <h2 className='block__title'>Nice to meet you, {monsterType} {name}, you have chosen the {topics[selectedTopic - 1]} topic. The Spooky Quiz starts now! Good luck and enjoy the chills and thrills!</h2>
        <button
        className="block__button"
        onClick={() => setAppStage('question')}
        >Let's go
        </button>
    </div>
  )
}

export default Greeting