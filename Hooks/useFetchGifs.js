import { useState, useEffect } from 'react'
import GetGifs from '../helpers/GetGifs'

export const useFetchGifs = (category) => {

    const [state, setstate] = useState({
        data:[],
        loading: true
    })

    useEffect(()=>{
        GetGifs(category).then(gifs => {
                setstate({
                    data: gifs,
                    loading: false
                })
            console.log(gifs)
        })
    },[category])

    return state;
}  
