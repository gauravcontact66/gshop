import React, { Component, useState, useEffect } from 'react';
import { Gallery, GalleryImage } from 'react-gesture-gallery';
import Banner from './Banner';
import '../../App';

export default function Slider() {
    const INITIAL_INDEX = 0;
    const [ index, setIndex ] = React.useState(INITIAL_INDEX);
    useEffect(() => {
        setInterval(() => {
            if(index == images.length - 1){
                setIndex(INITIAL_INDEX);
            } else {
                setIndex(index + 1)
            }
        }, 2500)
    }, [index]);
    
    const images = [
                        {src: "images/img-slider1.jpg"},
                        {src: "images/img-slider2.jpg"},
                        {src: "images/img-slider3.jpg"}
                    ];
    const texts = [
        {title: "luxurious-1", subtitle:"deluxe rooms starting at $299"},
        {title: "luxurious-2", subtitle:"deluxe rooms starting at $245"},
        {title: "luxurious-3", subtitle:"deluxe rooms starting at $289"}
    ];                
    return (
        
            <Gallery style={{height: '100vh'}} index={index} onRequestChange={i => setIndex(i) }>
                {images.map((img) => (
                    <GalleryImage objectFit="contain" src={img.src} key={img.src}></GalleryImage>
                ))}               
            </Gallery>
    )
}

