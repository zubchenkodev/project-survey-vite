const StartScreen = ({setAppStage}) => {
    return(
      <div className="start block">
          <h1 className="block__title">Welcome to the Spooky Haloween Quiz!!</h1>
          <p className="block__text">Delve into the mysterious world of witches as you unearth your knowledge through a series of enigmatic questions. Answer all five to unveil your occult expertise</p>
          <button className="block__button" onClick={() => setAppStage('introduction')}>Let's start</button>
      </div>
    )
}

export default StartScreen;