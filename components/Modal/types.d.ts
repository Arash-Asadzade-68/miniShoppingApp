export type PropsTypes = {
  selectedItem:selectedItem
showInfo:boolean;
setShowInfo:(showInfo:boolean)=>void
}
export type selectedItem ={
    id: number;
    name: string;
    abv: number;
    image_url: string;
    tagline: string;
    description: string;
    food_pairing: string[];
}
