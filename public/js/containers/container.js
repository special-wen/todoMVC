/**
 * Created by lmy on 17-8-17.
 */
import App from '../components/App';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

//action
function changeText(){
    return {
        type:'CHANGE_TEXT'
    }
}

function buttonClick(){
    return {
        type:'BUTTON_CLICK'
    }
}

function mapStateToProps(state) {
    return { text: state.text }
}

function mapDispatchToProps(dispatch){
    return{
        actions : bindActionCreators({changeText:changeText,buttonClick:buttonClick},dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)