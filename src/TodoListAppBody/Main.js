import { React, useState } from 'react';
import "./Main.scss";
import TextField from '@mui/material/TextField';

export default function Main() {
    const [message, setMessage] = useState("");
    const [list, setList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(message)

        const all = { message }
        if (message) {
            setList((Is) => [...Is, all])
            setMessage("")
        }
    }
    return (
        <div>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                        <link href="https://fonts.googleapis.com/css2?family=Moirai+One&display=swap" rel="stylesheet"/>
                        </head>
                        <fieldset className='allAround'>
                            <h1 className='headText'>&lt;TODO LIST APP /&gt;</h1>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    className='textOut'
                                    placeholder="Bro!! Anything you wanna do today?"
                                    variant="outlined"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                /> 
                                <input
                                    type="submit"
                                    hidden
                                />
                            </form>
                            &nbsp;
                            {list.map((a) => (<div className='messageList'>
                                <ul>
                                    {a.message}
                                </ul>
                            </div>))
                            }
                        </fieldset>

                    </div>
                    )
}
