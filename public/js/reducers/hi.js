/**
 * Created by lmy on 17-8-17.
 */

//reducer
const initialState = {
    text: 'Hello'
}
export default function myApp(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                text:state.text=='Hello'?'hahaha':'Hello'
            }
        case 'BUTTON_CLICK':
            return {
                text: 'You click this button'
            }
        default:
            return {
                text:'Hello'
            };
    }
}