import React from 'react';
import defaultStateData from './Data';

class FakeStore extends React.Component {
    constructor(props) {
        super(props);
        this.state = defaultStateData;
    }
}

export default FakeStore;