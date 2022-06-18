import React from 'react'
import '../styles/Gif.css'
export default function Gif({title, id, url, params}){
    const pathname = window.location.pathname
    return <a href={`${pathname}/${id}`} className='Gif'>
            <h4>{title}</h4>
            <img key={id} src={url} alt={title} />
          </a>
}