import React from 'react';
import swal from 'sweetalert';


export function Message(props) {
    const {text, title} = props;

    const handleClick = () => {
        swal({
            title: title,
            text: text})
        }

    return(
        <div className="Message" style={{display: 'flex', alignItems: 'center', flexDirection: 'column', height: '50px' ,margin: '20px'}}>
            <button style={{fontSize: 15,borderRadius: 5, fontWeight: 'bold', width: '400px', height: '100%',display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column',cursor: 'pointer'}} onClick={handleClick}>
                <span>{title ? title : 'This message has no title'}</span>
                <span>Click to view message!</span>
            </button>
        </div>
    );
}

export default Message;
