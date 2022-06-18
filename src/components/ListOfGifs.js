import React, { useState, useEffect } from 'react'
import getGifs from '../services/getGifs'
import Gif from './Gif'

export default function({ params }){
        const [ gifs, setGifs ] = useState([])
        const [loading, setLoading] = useState(false)
        const { keyword } = params
        useEffect(() => {
            setLoading(true)
            getGifs({ keyword:keyword }).then(gif => {
                setGifs(gif)
                setLoading(false)
            })
            return () => {}
        }, [keyword])
        if(loading) return <i>Cargando...</i>
        return <>{gifs.map(({title,id,url}) => <Gif key={id} title={title} url={url} id={id} />)}</>
}