import React from 'react';
import swal from 'sweetalert';


export function Message(props) {
    const {text, title} = props;

    const handleClick = async () => {
        const messagePopup = await swal({
            title: title,
            text: text,
            buttons: {
                buttonOne: {
                    text: "Close",
                    closeModal: true
                },
                buttonTwo: {
                    text: "Download!",
                    value: "download"
                }
            }
        });

        if(messagePopup === "download") {
            downloadMessage();
        }
    }

    const downloadMessage = () => {
        const element = document.createElement('a');
        const message = `${(title || title === "") ? title : "This message has no title"}\n${text}`
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(message));
        element.setAttribute('download', `${title}.txt`);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
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
