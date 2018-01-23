/**
 * Created by zxw on 18-1-23.
 */
import React from 'react'
import ReactDOM from 'react-dom';
class App extends React.Component{
    constructor(){
        super();
        //设置初始状态
        this.state={
            todos:[]
        }
    }
    //绑定键盘回车事件，添加新任务
    handlerKeyUp(e){
        if (e.keyCode == 13){
            let value = e.target.value;
            if(!value)
                return false;
            let newTodoItem = {
                text:value,
                isDone:false
            };
            e.target.value = '';
            this.state.todos.push(newTodoItem)
            //修改状态值，每次修改以后，自动调用this,render方法，在此渲染
            this.setState({todos:this.state.todos});
        }
    }
    render(){
        return(
            <div className="todo-input">
                <input type="text" placeholder="请输入待办事项" onKeyUp={this.handlerKeyUp.bind(this)}/>
                <ul>
                    {this.state.todos.map((todo,index)=>{{
                        return(
                            <li key={index}>{todo.text}</li>
                        )
                    }})}
                </ul>
            </div>
        )
    }
}
ReactDOM.render(<App/>,document.getElementById('app'));