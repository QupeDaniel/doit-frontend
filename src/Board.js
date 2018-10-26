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

                const newTasks = response.map(task => {
                    return {
                        id: task.id,
                        name: task.name
                    }
                });

                const newState = Object.assign({}, this.state, {
                    tasks: newTasks
                });

                this.setState(newState);
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

        let stateToDo;
        let stateWiP;
        let stateDone;

        this.state.tasks = this.state.tasks.filter(item => item !== null);
        stateToDo =  this.state.tasks.filter(item => item.state === 'open');
        stateWiP =  this.state.tasks.filter(item => item.state === 'wip');
        stateDone =  this.state.tasks.filter(item => item.state === 'done');

        return (
            <div>
                <div className='col'>
                    <ReactTable data={stateToDo} columns={columnsToDo}/>
                </div>
                <div className="col">
                    <ReactTable data={stateWiP} columns={columnsWiP}/>
                </div>
                <div className="col">
                    <ReactTable data={stateDone} columns={columnsDone}/>
                </div>
            </div>
        )
    }
}