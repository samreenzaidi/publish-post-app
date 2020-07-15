import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import './css/style.css';
import Main from './components/Main';

class App extends React.Component {
 render() {
  return(
   <div className="container">
        <Main/>
   </div>
  );
 }
}
export default App;