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

        this.onInputChanged = this.onInputChanged.bind(this);
    }

    onInputChanged(name, newInput) {
        this.task[name] = newInput;
        console.log(this.task);
    }

    renderTableRowInput(fieldName, type, name, value, onInputChanged) {
        return (
            <tr>
                <td>{fieldName}</td>
                <td><input type={type} name={name} defaultValue={value} onChange={(newValue) => { onInputChanged(name, newValue) }} /></td>
            </tr>
        )
    }

    renderTableRowTextarea(fieldName, name, value) {
        return (
            <tr>
                <td>{fieldName}</td>
                <td><textarea name={name} defaultValue={value} /></td>
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
        console.log('Status clicked: ' + status);
    }


    render() {
        return (
            <div>
                {this.renderTableRowStatusDropdown('Status', 'open', this.onStatusClicked)}
                <table>
                    <tbody>
                        {this.renderTableRowInput('id', 'Text', 'id', 'TestValue', this.onInputChanged)}
                        {this.renderTableRowInput('Name', 'Text', 'name', 'TestName')}
                        {this.renderTableRowTextarea('Description', 'description', 'Test Description')}
                        {this.renderTableRowParagraph('Created at', 'createdAt', 'TestValue')}
                        {this.renderTableRowParagraph('Last edit', 'lastEdit', 'TestValue')}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default EditMask;
