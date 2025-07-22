export const calculateRatio = (originalWidth: number, originalHeight: number, desiredWidth: number): number => {
    if (originalWidth <= 0 || originalHeight <= 0 || desiredWidth <= 0) {
        throw new Error("Dimensions must be greater than zero.");
    }
    const ratio = originalHeight / originalWidth;
    const calculatedHeight = desiredWidth * ratio;
    return calculatedHeight;
};