import React from 'react';
import Image from './Image';

class App extends React.Component {
    render() {
        let Images = [];
        for (let i = 0; i < 50; i++) {
            Images.push(<Image number={i}/>); //custom tag 'number' could be anything...think ex: robot
        }



        return <div className="container">
            <div className="row"> 
                <div className="col-sm-6 col-sm-offset-3">
                   {Images}
                </div>
            </div>
        </div>
    }
}

export default App;

//or, individually add up if you don't need too many ex:
// <Image number={1}/>
// <Image number={2}/>
// <Image number={3}/>