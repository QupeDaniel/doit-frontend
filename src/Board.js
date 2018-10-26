import React, {Component} from 'react';
import './Board.css';
import 'react-table/react-table.css';
import axios from "axios";

export default class Board extends Component {

    state = {
        tasks: []
    };

    componentDidMount() {
        axios
            .get('http://h2806881.stratoserver.net:8080/api/tasks')
            .then(response => {

                let newTasks = response.data.map(task => {
                    return {
                        id: task.id,
                        name: task.name,
                        state: task.state,
                        description: task.description
                    }
                });

                newTasks = newTasks.filter(item => item !== null);

                this.setState({tasks: newTasks});

            })
            .catch(error => console.log(error));
    }

    moveTask = (task, direction) => {
        console.log('halloo!!!');
    }

    renderOneTask(task) {
        return (
        <div className="one-task">
        <span className="col-checkbox"><input type="checkbox" value="{task.id}"/></span>
        <span className="col-text">{task.id} {task.name} {task.description}</span>
        <button onClick={this.moveTask.bind(this, task, 'left')}>links</button>
        </div>
        );
    }



    render() {

        const stateToDo = this.state.tasks.filter(item => item.state === 'open');
        const stateWiP = this.state.tasks.filter(item => item.state === 'wip');
        const stateDone = this.state.tasks.filter(item => item.state === 'done');

        const tasksToDoList = stateToDo.map(this.renderOneTask);

        const tasksWipList = stateDone.map(this.renderOneTask);

        const tasksDoneList = stateWiP.map(this.renderOneTask);

        return (
            <div>
                <div className="table-col border-right">
                    <h1>ToDo</h1>
                    {tasksToDoList}
                </div>
                <div className="table-col">
                    <h1>WiP</h1>
                    {tasksWipList}
                </div>
                <div className="table-col border-left">
                    <h1>Done</h1>
                    {tasksDoneList}
                </div>
            </div>
        )
    }
}