import React, {Component} from 'react';
import ReactTable from "react-table";
import './Board.css';
import 'react-table/react-table.css';

export default class Board extends Component {


    constructor(){
        super();
        this.data = [];

    }


    getData(){
        fetch('http://h2806881.stratoserver.net:8080/api/tasks', {'mode': 'no-cors'})
            .then(result => {
                console.log(result);
                return result.json();
            })
            .then(result  =>
                    this.data = result
            )
            .catch(error => console.log(error))


    }
    render() {
        this.getData();

        const data2 = [{
            id: '123',
            name: 'Task1',
            state: 'wip',
            creatorId: '',
            ownerId: ''
        },
            {
                id: '123',
                name: 'Task2',
                state: 'todo',
                creatorId: '',
                ownerId: ''
            },
            {
                id: '123',
                name: 'Task3',
                state: 'done',
                creatorId: '',
                ownerId: ''
            }];

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

        this.data = this.data.filter(item => item !== null);
        const stateToDo = this.data.filter(item => item.state === 'todo');
        const stateWiP = this.data.filter(item => item.state === 'wip');
        const stateDone = this.data.filter(item => item.state === 'done');


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