import React from 'react';
import DiaryEntry from './DiaryEntry';

const StaggeredLayout: React.FC<{ entries: Array<{ title: string; imageUrl: string; content: string; images: string[] }> }> = ({ entries }) => {
    return (
        <div className="staggered-layout">
            {entries.map((entry, index) => (
                <div key={index} className="diary-entry">
                    <DiaryEntry title={entry.title} imageUrl={entry.imageUrl} content={entry.content} images={entry.images} />
                </div>
            ))}
        </div>
    );
};

export default StaggeredLayout;