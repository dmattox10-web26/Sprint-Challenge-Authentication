import React, { useState, useEffect } from 'react'
import Joke from './Joke'
import { axiosWithAuth } from '../tools/axiosWithAuth'

const Jokes = props => {
    const [jokes, updateJokes] = useState([])

    useEffect(() => {
        axiosWithAuth().get('/')
        .then(res => {
            updateJokes(res.data)
        })

    }, [])
    return (
        <div>
            Jokes
            <div className='spacer'></div>
            {
                jokes.map(joke => <Joke joke={joke} />)
            }
        </div>
    )
}

export default Jokes