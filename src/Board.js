import React, {Component} from 'react';
import ReactTable from "react-table";
import './Board.css';
import 'react-table/react-table.css';
import axios from "axios";

export default class Board extends Component {

    state = {
        tasks: []
    };

    stateToDo;
    stateWiP;
    stateDone;

    componentDidMount() {
        axios
            .get('http://h2806881.stratoserver.net:8080/api/tasks')
            .then(response => {

                let newTasks = response.data.map(task => {
                    return {
                        id: task.id,
                        name: task.name,
                        state: task.state
                    }
                });

                newTasks = newTasks.filter(item => item !== null);

                const newState = Object.assign({}, this.state, {
                    tasks: newTasks
                });

                this.setState({tasks: newTasks});

            })
            .catch(error => console.log(error));
    }

    render() {
        const columnsWiP = [{
            Header: 'WiP',
            accessor: 'name' // String-based value accessors!
        }];

        const columnsToDo = [{
            Header: 'ToDo',
            accessor: 'name' // String-based value accessors!
        }];

        const columnsDone = [{
            Header: 'Done',
            accessor: 'name' // String-based value accessors!
        }];

        this.stateToDo =  this.state.tasks.filter(item => item.state === 'open');
        this.stateWiP =  this.state.tasks.filter(item => item.state === 'wip');
        this.stateDone =  this.state.tasks.filter(item => item.state === 'done');

        return (

            <div>
                <div className='col'>
                    <ReactTable data={this.stateToDo} columns={columnsToDo}/>
                </div>
                <div className="col">
                    <ReactTable data={this.stateWiP} columns={columnsWiP}/>
                </div>
                <div className="col">
                    <ReactTable data={this.stateDone} columns={columnsDone}/>
                </div>
            </div>
        )
    }
}