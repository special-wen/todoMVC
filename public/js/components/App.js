/**
 * Created by lmy on 17-8-17.
 */
import React from 'react';
import Hello from './hi';
import Change from './change';

export default class App extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        const { actions, text} = this.props;
        return (
            <div>
                <Hello actions={actions} text={text}/>
                <Change actions={actions}/>
            </div>
        );
    }
}