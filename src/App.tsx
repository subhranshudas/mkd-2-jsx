import React, { useState } from 'react';
import { EPNSTextParser } from './EPNSTextParser'
import { extractTimeStamp } from './EPNSTextParser';


function App() {
  const [markdownText, setMarkDownText] = useState('');
  const [sourceText, setSourceText] = useState('');

  const { timeStamp, notificationBody } = extractTimeStamp(sourceText);

  const convertMarkDown = () => {
    setSourceText(markdownText);
  };


  return (
    <div className="App">
      <p>Enter your Markdown</p>

      <div>
        <textarea rows={10} cols={180} value={markdownText} onChange={(e) => setMarkDownText(e.target.value)}></textarea>
      </div>
      
      <button onClick={convertMarkDown}>Render</button>

      <div style={{ margin: 20, border: '2px solid black', padding: '10px' }}>
        <EPNSTextParser text={notificationBody} />
      </div>
      <p><b>TIMESTAMP:</b> {timeStamp}</p>
    </div>
  );
}

export default App;
