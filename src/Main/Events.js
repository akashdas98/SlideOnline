import React, { Component } from 'react';
import uuid from 'uuid';

class Events extends Component {
    state = {
       events: [
           {
               title: '',
               thumbnail: '',
               price: '',
               date: '',
               id: uuid.v4(),
           }
       ] 
    }

    render() {
        return (
            <div className='events'>
                
            </div>
        )
    }
}

export default Events
