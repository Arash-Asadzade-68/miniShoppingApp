export type PropsTypes = {
  pizza:{
    id: number;
    name: string;
    abv: number;
    image_url: string;
    tagline: string;
    description: string;
    food_pairing: string[];
}[]
}

export type params ={
  page:number,
  per_page:number
}