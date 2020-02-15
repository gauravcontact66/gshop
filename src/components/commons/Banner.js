import React,{ Component } from 'react';

export default function Banner({children, title, subtitle}){
    return (
        <div>
            <h1>{title}</h1>
            <div></div>
            <p>{subtitle}</p>
            {children}
        </div>
    )
}