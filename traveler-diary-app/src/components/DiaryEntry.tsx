import React from 'react';
import ImageContainer from './ImageContainer';
import ImageGallery from './ImageGallery';

interface DiaryEntryProps {
    title: string;
    primaryImage: string;
    content: string;
    additionalImages: string[];
}

const DiaryEntry: React.FC<DiaryEntryProps> = ({ title, primaryImage, content, additionalImages }) => {
    return (
        <div className="diary-entry">
            <h2>{title}</h2>
            <img src={primaryImage} alt={title} className="primary-image" />
            <p>{content}</p>
            <ImageContainer images={additionalImages} />
            <ImageGallery images={additionalImages} />
        </div>
    );
};

export default DiaryEntry;