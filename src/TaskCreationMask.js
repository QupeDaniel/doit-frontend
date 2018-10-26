import React from 'react';
import ReactDOM from 'react-dom';
import TaskStatus from './StatusEnum.js';

function InputField(props) {
    return (
        <input className="inputTextField" type={props.type} name={props.name} value={props.value} />
    )
}
 class EditMask extends React.Component {

    renderTableRowInput(fieldName, type, name, value) {
        return (
            <tr>
                <td>{fieldName}</td>
                <td><InputField type={type} name={name} defaultValue={value} /></td>
            </tr>
        )
    }

    renderTableRowTextarea(fieldName, name, value) {
        return (
            <tr>
                <td>{fieldName}</td>
                <td><textarea  name={name} defaultValue={value} /></td>
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

    
    renderTableRowStatusDropdown(fieldName, name, value, onStatusClicked) {
        return (
            <tr>
                <td>{fieldName}</td>
                {console.log('TaskStatus: ' + TaskStatus)}
                <td><ul>
                    {TaskStatus.map(status => {
                        return <li key={status} onClick={() => {onStatusClicked(status)}}>{status}</li>
                        
                    })}
                </ul></td>
            </tr>
        )
    }

    onStatusClicked(status) {
        console.log('Status clicked: ' + status);
    }
    

    render() {
        return (
            <table>
                <tbody>
                {this.renderTableRowInput('id', 'Text', 'id','TestValue')}
                {this.renderTableRowInput('Name', 'Text', 'name','TestName')}
                {this.renderTableRowTextarea('Description', 'description','Test Description')}
                {this.renderTableRowParagraph('Created at', 'createdAt','TestValue')}
                {this.renderTableRowParagraph('Last edit', 'lastEdit','TestValue')}
                {this.renderTableRowStatusDropdown('Status', 'status', 'open',this.onStatusClicked)}
                </tbody>
            </table>
        )
    }
}

export default EditMask;
