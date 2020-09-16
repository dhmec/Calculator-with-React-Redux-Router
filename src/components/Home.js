import React from 'react';
import './Home.css';


function Home()
{
    return(
        <section>
            <h1>Welcome to my Calculator!</h1>
            <h2>Made with React-Redux and Router</h2>
            <h3>How to play!</h3>
            <p>Instructions: </p>
            <ol>
                <li>Go to Calculator at the top</li>
                <li>Enter Numeric value in input1</li>
                <li>Select any Mathematical Operation</li>
                <li>Enter Numeric value in input2</li>
                <li>Click or hit Enter key from the keyboard</li>
                <li>See the Result</li>
                <li>Go to Past Calculate List at the top</li>
                <li>See Detailed Past Result(s)</li>
            </ol>
        </section>
    );
}

export default Home;