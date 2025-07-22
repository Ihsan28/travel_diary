import { useState, useEffect } from 'react';

const useImageRatio = (imageUrl: string) => {
    const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);

    useEffect(() => {
        const img = new Image();
        img.src = imageUrl;

        img.onload = () => {
            const { naturalWidth, naturalHeight } = img;
            setDimensions({ width: naturalWidth, height: naturalHeight });
        };

        // Cleanup function to avoid memory leaks
        return () => {
            setDimensions(null);
        };
    }, [imageUrl]);

    return dimensions;
};

export default useImageRatio;