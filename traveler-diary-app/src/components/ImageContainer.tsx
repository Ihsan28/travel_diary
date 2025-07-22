import React from 'react';
import './ImageContainer.css';

interface ImageContainerProps {
    images: string[];
}

const ImageContainer: React.FC<ImageContainerProps> = ({ images }) => {
    return (
        <div className="image-container">
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index + 1}`} className="image-item" />
            ))}
        </div>
    );
};

export default ImageContainer;