import React from 'react';


export function Message(props) {
    const {text, title} = props;

    return(
        <div className="Message" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: 'white'}}>
            <span>{title ? title : 'This message has no title'}</span>
            <p>{text}</p>
        </div>
    );
}

export default Message;
