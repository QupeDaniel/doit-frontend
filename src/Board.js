import React, {Component} from 'react';
import ReactTable from "react-table";
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

    render() {

        const stateToDo = this.state.tasks.filter(item => item.state === 'open');
        const stateWiP = this.state.tasks.filter(item => item.state === 'wip');
        const stateDone = this.state.tasks.filter(item => item.state === 'done');

        const tasksToDoList = stateToDo
            .map(task => <div className="one-task">{task.id} {task.name} {task.description}</div>
            );

        const tasksWipList = stateDone
            .map(task => <div className="one-task">{task.id} {task.name} {task.description}</div>
            );

        const tasksDoneList = stateWiP
            .map(task => <div className="one-task">{task.id} {task.name} {task.description}</div>
            );

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