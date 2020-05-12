export type PropsTypes = {
  beers:{
    id: number;
    name: string;
    abv: number;
    image_url: string;
    tagline: string;
    description: string;
    food_pairing: string[];
}[];
}