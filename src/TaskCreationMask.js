import React from 'react';
import ReactDOM from 'react-dom';

function InputField(props) {
    return (
        <input className="inputTextField" type={props.type} name={props.name} />
    )
}
 class EditMask extends React.Component {

    renderTableRow(fieldName, type, name, value) {
        return (
            <tr>
                <td>{fieldName}</td>
                <td><InputField type={type} name={name} value={value} /></td>
            </tr>
        )
    }

    render() {
        return (
            <table>
                {this.renderTableRow('id', 'Text', 'id','')}
            </table>
        )
    }
}

export default EditMask;
