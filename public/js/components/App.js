/**
 * Created by zxw on 18-1-23.
 */
import React from 'react'
import ReactDOM from 'react-dom';
import TodoHeader from './TodoHeader' //引入组件
import TodoMain from './TodoMain'
class App extends React.Component{
    constructor(){
        super();
        //设置初始状态
        this.state={
            todos:[]
        }
    }
    //添加todo事项的方法
    addTodo(item){
        this.state.todos.push(item)
        this.setState({todos:this.state.todos}); //设置状态
    }

    render(){
        return(
            <div className="todo-wapper">
                {/*//将原内容写在组件中并引入进行渲染*/}
                {/*//把addTodo方法传递到TodoHeader组件中，bind(this)是为了把该react实例绑定在this上*/}
                <TodoHeader addTodo={this.addTodo.bind(this)}/>
                {/*//把state.todos传入到todoMain中*/}
                <TodoMain todos={this.state.todos}/>
            </div>

        )
    }
}
ReactDOM.render(<App/>,document.getElementById('app'));