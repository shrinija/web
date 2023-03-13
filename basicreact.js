import React from 'react';
import ReactDOM from 'react-dom';
import Heading from "./Heading";
import List from "./list";

ReactDOM.render(
<div>
   <Heading />
   <List/>
</div>,
document.getElementById('root')
);


//...................................

import React from "react";
function List(){
    return(
        <ul>
    <li>chocolate</li>
    <li>green tea</li>
    <li>coffee</li>
   </ul>
    );
}

export default List;

//.......................................


import React from "react";

function Heading(){
    return <h1>My favourite food</h1>;
}

export default Heading;


//===============================================================================================================================================================
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(<App />,document.getElementById('root'));


//.............................

import React from 'react';
import Heading from "./Heading";
import List from "./list";


function App(){
    return (
    <div>
        <Heading />
        <List />
    </div>
    );
}

export default App;
