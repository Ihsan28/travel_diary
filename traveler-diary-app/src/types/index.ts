export interface Image {
    url: string;
    altText?: string;
}

export interface DiaryEntry {
    title: string;
    primaryImage: Image;
    content: string;
    images: Image[];
}