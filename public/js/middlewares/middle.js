/**
 * Created by lmy on 17-8-17.
 */
import request from 'superagent';
export default store=>next=>action=> {
    if (action.type === 'CHANGE_TEXT') {
        request.get('/')
            .end((err, res) => {
                next({type: 'CHANGE_TEXT'});
            });
        console.log('this is a middleware runing');

    }
    else
        next(action);
}