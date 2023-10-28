import React, { useState } from 'react';

const Introduction = ({ setAppStage, setName, setMonsterType, setSelectedTopic, name, monsterType, selectedTopic, monsters, topics }) => {
  

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMonsterTypeChange = (e) => {
    setMonsterType(e.target.value);
  };

  const handleTopicChange = (e) => {
    setSelectedTopic(+e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') {
      alert("Please enter your name before starting the quiz.");
      return;
    }
    setAppStage('greeting');
  };

  

  return (
    <div className="introduction block">
      <h2 className='block__title'>Before we embark on this eerie journey, reveal the depths of your enigmatic self.</h2>
      <form className='introduction__form' onSubmit={handleSubmit}>
        <div className='introduction__form-part'>
          <label htmlFor="name">What is your name?</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className='introduction__form-part'>
        <label>What kind of monster are you?</label>
        <div className="introduction__options">
          {monsters.map((monster) => (
            <div key={monster}>
              <input
                type="radio"
                id={monster}
                name="monsterType"
                value={monster}
                checked={monsterType === monster}
                onChange={handleMonsterTypeChange}
              />
              <label htmlFor={monster}>{monster}</label>
            </div>
          ))}
        </div>
        </div>
        <div className='introduction__form-part'>
        <label htmlFor="topic">Choose a topic:</label>
        <select
          id="topic"
          name="topic"
          value={selectedTopic}
          onChange={handleTopicChange}
        >
          <option value="1">{topics[0]}</option>
          <option value="2">{topics[1]}</option>
          <option value="3">{topics[2]}</option>
        </select>
        </div>
        <button className="block__button introduction__form-part" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Introduction;
