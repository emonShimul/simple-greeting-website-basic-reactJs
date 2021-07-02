import React from 'react';
import "./index.css"

function App() {
    // new Date(year, month, day, hours, minutes, seconds, milliseconds)
    let curDate = new Date(2021, 7, 2, 21);
    curDate = curDate.getHours();
    let greeting = '';
    const cssStyle = {};

    if (curDate >= 5 && curDate < 12) {
        greeting = 'Good Morning !!';
        cssStyle.color = 'green';
    } else if (curDate >= 12 && curDate < 17) {
        greeting = "Good Afternoon !!";
        cssStyle.color = 'orange';
    } else if (curDate >= 18 && curDate < 21) {
        greeting = "Good Evening !!";
        cssStyle.color = 'blue';
    } else {
        greeting = "Good Night !!";
        cssStyle.color = 'red';
    }

    return (
        <>
            <div>
                <h1>
                    Hello Sir, <span style={cssStyle}> {greeting} </span>
                </h1>
            </div>
        </>
    );
}

export default App;