import React from 'react';
import ReactDOM from 'react-dom';
import { ipcRenderer } from 'electron';
require('./index.scss');


// TEST MESSAGES SENT AND RECEIVED
ipcRenderer.send('msg-to-electron', "this is a message sent to electron");
ipcRenderer.on('msg-to-browser', message)

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Electron!</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));