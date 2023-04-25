import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [eventList, setEventList] = useState('');
  const clickBtn = useRef();

  useEffect(() => {
    setEventList((val) => val + 'Event initalized. \n');

    clickBtn.current.addEventListener('click', (e) => {
      setEventList((val) => val + 'click event raised! \n');
    }, false);

    clickBtn.current.addEventListener('touchstart', (e) => {
      setEventList((val) => val + 'touch event raised! \n');
    }, false);

  }, []);
  return (
    <div className="App">
      <span
        onDragStart={(e) => {
          e.dataTransfer.setData('d', 'f');
        }}
        onDragExit={(e) => {
          alert(e.dataTransfer.getData('d'));
        }}
       ref={clickBtn}
       draggable={true}
       style={{fontSize: '3em', cursor: 'pointer'}}
       >클릭</span>
      <br />
      <br />
      <textarea style={{width: '100%', height: '300px'}} defaultValue={eventList} />
    </div>
  );
}

export default App;

