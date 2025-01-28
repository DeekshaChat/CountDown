import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
     <TimerChallenge title={'Countdown to launch'} time={'5'}/>
    </>
  );
}

export default App;
