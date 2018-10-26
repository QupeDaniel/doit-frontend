import React from 'react';
import TaskStatus from './StatusEnum.js';
import { DropdownButton, MenuItem, ButtonToolbar } from 'react-bootstrap';
import TaskModel from './TaskModel.js';

function InputField(props) {
    return (
        <input className="inputTextField" type={props.type} name={props.name} value={props.value} />
    )
}
class EditMask extends React.Component {

    task;

    constructor(props) {
        super(props);
        this.task = new TaskModel();
        this.task.createdAt = this.getActualTime();

        this.onInputChanged = this.onInputChanged.bind(this);
        this.onStatusClicked = this.onStatusClicked.bind(this);

    }

    onInputChanged(name, newInput) {
        this.task[name] = newInput.target.value;
        this.task.lastEdit = this.getActualTime();
        console.log(this.task);
    }

    getActualTime() {
        var currentdate = new Date(); 
        var datetime = currentdate.getDate() + "/"
                        + (currentdate.getMonth()+1)  + "/" 
                        + currentdate.getFullYear() + " @ "  
                        + currentdate.getHours() + ":"  
                        + currentdate.getMinutes() + ":" 
                        + currentdate.getSeconds();
        return datetime;
    }

    renderTableRowInput(fieldName, type, name, value, onInputChanged) {
        return (
            <tr>
                <td>{fieldName}</td>
                <td><input class="inputTextField" type={type} name={name} defaultValue={value} onChange={(newValue) => { onInputChanged(name, newValue) }} /></td>
            </tr>
        )
    }

    renderTableRowTextarea(fieldName, name, value, onInputChanged) {
        return (
            <tr>
                <td>{fieldName}</td>
                <td><textarea class="inputTextField" name={name} defaultValue={value} onChange={(newValue) => { onInputChanged(name, newValue) }} /></td>
            </tr>
        )
    }

    renderTableRowParagraph(fieldName, name, value) {
        return (
            <tr>
                <td>{fieldName}</td>
                <td><p name={name} >{value}</p></td>
            </tr>
        )
    }


    renderTableRowStatusDropdown(fieldName, value, onStatusClicked) {
        return (
            <ButtonToolbar>
                <DropdownButton
                    bsStyle={'default'}
                    title={fieldName}
                    key={0}
                    id={`dropdown-basic-0`}
                >
                    {TaskStatus.map(status => {
                        if (status === value) {
                            return <MenuItem eventKey={status} onClick={(event) => { onStatusClicked(status); }} active>{status}</MenuItem>
                        } else {
                            return <MenuItem eventKey={status} onClick={(event) => { onStatusClicked(status); }}>{status}</MenuItem>
                        }
                    })}
                </DropdownButton>
            </ButtonToolbar>
        );
    }



    onStatusClicked(status) {
        this.task['status'] = status;
        this.task.lastEdit = this.getActualTime();
        console.log(this.task);
       
    }


    render() {
        return (
            <div>
                
                <table>
                    <tbody>
                        {this.renderTableRowInput('id', 'Text', 'id', 'TestValue', this.onInputChanged)}
                        {this.renderTableRowInput('Name', 'Text', 'name', 'TestName', this.onInputChanged)}
                        {this.renderTableRowTextarea('Description', 'description', 'Test Description', this.onInputChanged)}
                        {this.renderTableRowParagraph('Created at', 'createdAt', 'TestValue')}
                        {this.renderTableRowParagraph('Last edit', 'lastEdit', 'TestValue')}
                    </tbody>
                </table>
                {this.renderTableRowStatusDropdown('Status', 'open', this.onStatusClicked)}

            </div>
            <div>
                
                </div>
        );
    }
}

export default EditMask;
