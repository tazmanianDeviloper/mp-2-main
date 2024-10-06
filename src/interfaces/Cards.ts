export interface data {
    id: number;
    name: string;
    card_images: card_images[];
    frameType: string;
    desc: string;
}


// Images are in an array so using this to access them then later retieve first one
export type card_images = {
    id: number;
    image_url: string;
}
