import React from 'react';
import ReactDOM from 'react-dom';

function InputField(props) {
    return (
        <input className="inputTextField" type={props.type} name={props.name}>
            {props.value}
        </input>
    )
}
class EditMask extends React.Component {

    renderTableRow(props) {
        return (
            <tr>
                <td>{props.fieldName}</td>
                <td><InputField type={props.type} name={props.name} value={props.value} /></td>
            </tr>
        )
    }

    render() {
        return (
            <table>
                {renderTableRow(fieldName = 'id', name = 'id', value = '')}
            </table>
        )
    }
}

ReactDOM.render(<EditMask />, document.getElementById("root"));
