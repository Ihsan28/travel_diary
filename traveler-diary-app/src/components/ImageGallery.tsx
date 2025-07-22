import React from 'react';
import { useImageRatio } from '../hooks/useImageRatio';
import './components.css';

interface ImageGalleryProps {
    images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
    return (
        <div className="image-gallery">
            {images.map((image, index) => {
                const { width, height } = useImageRatio(image);
                return (
                    <img
                        key={index}
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        style={{ width: `${width}px`, height: `${height}px` }}
                        className="gallery-image"
                    />
                );
            })}
        </div>
    );
};

export default ImageGallery;