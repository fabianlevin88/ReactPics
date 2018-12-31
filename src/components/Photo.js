import './ImageList.css';
import React     from 'react';
import ImageCard from './ImageCard'

const Photo = props => {
    
    const images = props.images.map( image => {

        return <ImageCard className="ui medium rounded image" key={image.id} image={image} /> 
    })

    return(
        <div className="ui list">
            <div className="item">
                <div className="image-list">{images}</div>
            </div>
        </div>      
    );
}

export default Photo;