import { React, useState } from 'react';
import TextField from '@mui/material/TextField'

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
            <h1>TODO LIST APP</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    className='type'
                    placeholder="what do you wanna do today?"
                    variant="outlined"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <input
                    type="submit"
                    hidden
                />
            </form>
            {list.map((a,i) => (<div className='messageList'>
                <ul key={i}>
                   {i}{a.message}
                </ul>
            </div>))
            }
        </div>
    )
}
