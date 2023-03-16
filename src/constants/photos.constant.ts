export interface Src_Details {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
}
export interface Photo_Details {
    id: number;
    width: number;
    height: number; 
    url: string;
    photographer: string;
    photographer_url: string;
    photographer_id: number; 
    avg_color: string;
    src: Src_Details;
    liked: boolean;
    alt: string;

}

export interface Photos {
    page: number;
    per_page: number;
    photos: Array<Photo_Details>;
    total_results: number;
    next_page: string;
    prev_page?: string;
}
export const mockPhotos: Photos = {
    "page": 1,
    "per_page": 10,
    "photos": [
        {
            "id": 15926006,
            "width": 3777,
            "height": 5665,
            "url": "https://www.pexels.com/photo/food-wood-dawn-coffee-15926006/",
            "photographer": "Nati",
            "photographer_url": "https://www.pexels.com/@nati-87264186",
            "photographer_id": 87264186,
            "avg_color": "#8B806E",
            "src": {
                "original": "https://images.pexels.com/photos/15926006/pexels-photo-15926006.jpeg",
                "large2x": "https://images.pexels.com/photos/15926006/pexels-photo-15926006.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "large": "https://images.pexels.com/photos/15926006/pexels-photo-15926006.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "medium": "https://images.pexels.com/photos/15926006/pexels-photo-15926006.jpeg?auto=compress&cs=tinysrgb&h=350",
                "small": "https://images.pexels.com/photos/15926006/pexels-photo-15926006.jpeg?auto=compress&cs=tinysrgb&h=130",
                "portrait": "https://images.pexels.com/photos/15926006/pexels-photo-15926006.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "landscape": "https://images.pexels.com/photos/15926006/pexels-photo-15926006.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
                "tiny": "https://images.pexels.com/photos/15926006/pexels-photo-15926006.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
            },
            "liked": false,
            "alt": ""
        },
        {
            "id": 15903178,
            "width": 4160,
            "height": 5547,
            "url": "https://www.pexels.com/photo/city-hotel-building-office-15903178/",
            "photographer": "Alvaro Camacho",
            "photographer_url": "https://www.pexels.com/@acam",
            "photographer_id": 289673261,
            "avg_color": "#7F8180",
            "src": {
                "original": "https://images.pexels.com/photos/15903178/pexels-photo-15903178.jpeg",
                "large2x": "https://images.pexels.com/photos/15903178/pexels-photo-15903178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "large": "https://images.pexels.com/photos/15903178/pexels-photo-15903178.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "medium": "https://images.pexels.com/photos/15903178/pexels-photo-15903178.jpeg?auto=compress&cs=tinysrgb&h=350",
                "small": "https://images.pexels.com/photos/15903178/pexels-photo-15903178.jpeg?auto=compress&cs=tinysrgb&h=130",
                "portrait": "https://images.pexels.com/photos/15903178/pexels-photo-15903178.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "landscape": "https://images.pexels.com/photos/15903178/pexels-photo-15903178.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
                "tiny": "https://images.pexels.com/photos/15903178/pexels-photo-15903178.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
            },
            "liked": false,
            "alt": ""
        },
        {
            "id": 15898922,
            "width": 4000,
            "height": 6000,
            "url": "https://www.pexels.com/photo/food-people-woman-summer-15898922/",
            "photographer": "Red-heart Li",
            "photographer_url": "https://www.pexels.com/@bullseye",
            "photographer_id": 323518734,
            "avg_color": "#645C51",
            "src": {
                "original": "https://images.pexels.com/photos/15898922/pexels-photo-15898922.jpeg",
                "large2x": "https://images.pexels.com/photos/15898922/pexels-photo-15898922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "large": "https://images.pexels.com/photos/15898922/pexels-photo-15898922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "medium": "https://images.pexels.com/photos/15898922/pexels-photo-15898922.jpeg?auto=compress&cs=tinysrgb&h=350",
                "small": "https://images.pexels.com/photos/15898922/pexels-photo-15898922.jpeg?auto=compress&cs=tinysrgb&h=130",
                "portrait": "https://images.pexels.com/photos/15898922/pexels-photo-15898922.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "landscape": "https://images.pexels.com/photos/15898922/pexels-photo-15898922.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
                "tiny": "https://images.pexels.com/photos/15898922/pexels-photo-15898922.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
            },
            "liked": false,
            "alt": ""
        },
        {
            "id": 15896384,
            "width": 4156,
            "height": 6234,
            "url": "https://www.pexels.com/photo/snow-wood-landscape-nature-15896384/",
            "photographer": "figen  kokol",
            "photographer_url": "https://www.pexels.com/@figen-kokol-1217662",
            "photographer_id": 1217662,
            "avg_color": "#85868A",
            "src": {
                "original": "https://images.pexels.com/photos/15896384/pexels-photo-15896384.jpeg",
                "large2x": "https://images.pexels.com/photos/15896384/pexels-photo-15896384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "large": "https://images.pexels.com/photos/15896384/pexels-photo-15896384.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "medium": "https://images.pexels.com/photos/15896384/pexels-photo-15896384.jpeg?auto=compress&cs=tinysrgb&h=350",
                "small": "https://images.pexels.com/photos/15896384/pexels-photo-15896384.jpeg?auto=compress&cs=tinysrgb&h=130",
                "portrait": "https://images.pexels.com/photos/15896384/pexels-photo-15896384.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "landscape": "https://images.pexels.com/photos/15896384/pexels-photo-15896384.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
                "tiny": "https://images.pexels.com/photos/15896384/pexels-photo-15896384.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
            },
            "liked": false,
            "alt": "Free stock photo of flower, nature, plant"
        },
        {
            "id": 15885836,
            "width": 3456,
            "height": 5184,
            "url": "https://www.pexels.com/photo/dawn-coffee-writing-drink-15885836/",
            "photographer": "Saliha",
            "photographer_url": "https://www.pexels.com/@kekremsi",
            "photographer_id": 50263006,
            "avg_color": "#5F554C",
            "src": {
                "original": "https://images.pexels.com/photos/15885836/pexels-photo-15885836.jpeg",
                "large2x": "https://images.pexels.com/photos/15885836/pexels-photo-15885836.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "large": "https://images.pexels.com/photos/15885836/pexels-photo-15885836.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "medium": "https://images.pexels.com/photos/15885836/pexels-photo-15885836.jpeg?auto=compress&cs=tinysrgb&h=350",
                "small": "https://images.pexels.com/photos/15885836/pexels-photo-15885836.jpeg?auto=compress&cs=tinysrgb&h=130",
                "portrait": "https://images.pexels.com/photos/15885836/pexels-photo-15885836.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "landscape": "https://images.pexels.com/photos/15885836/pexels-photo-15885836.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
                "tiny": "https://images.pexels.com/photos/15885836/pexels-photo-15885836.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
            },
            "liked": false,
            "alt": ""
        },
        {
            "id": 15875908,
            "width": 6240,
            "height": 4160,
            "url": "https://www.pexels.com/photo/light-fashion-man-people-15875908/",
            "photographer": "Kelsey Wilkerson",
            "photographer_url": "https://www.pexels.com/@kelsey-wilkerson-443975242",
            "photographer_id": 443975242,
            "avg_color": "#563A2C",
            "src": {
                "original": "https://images.pexels.com/photos/15875908/pexels-photo-15875908.jpeg",
                "large2x": "https://images.pexels.com/photos/15875908/pexels-photo-15875908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "large": "https://images.pexels.com/photos/15875908/pexels-photo-15875908.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "medium": "https://images.pexels.com/photos/15875908/pexels-photo-15875908.jpeg?auto=compress&cs=tinysrgb&h=350",
                "small": "https://images.pexels.com/photos/15875908/pexels-photo-15875908.jpeg?auto=compress&cs=tinysrgb&h=130",
                "portrait": "https://images.pexels.com/photos/15875908/pexels-photo-15875908.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "landscape": "https://images.pexels.com/photos/15875908/pexels-photo-15875908.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
                "tiny": "https://images.pexels.com/photos/15875908/pexels-photo-15875908.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
            },
            "liked": false,
            "alt": "Free stock photo of adult, beautiful, car"
        },
        {
            "id": 6103141,
            "width": 3472,
            "height": 4624,
            "url": "https://www.pexels.com/photo/hands-people-woman-book-6103141/",
            "photographer": "Gautham Krishnan",
            "photographer_url": "https://www.pexels.com/@gautham-krishnan-1322437",
            "photographer_id": 1322437,
            "avg_color": "#A79B95",
            "src": {
                "original": "https://images.pexels.com/photos/6103141/pexels-photo-6103141.jpeg",
                "large2x": "https://images.pexels.com/photos/6103141/pexels-photo-6103141.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "large": "https://images.pexels.com/photos/6103141/pexels-photo-6103141.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "medium": "https://images.pexels.com/photos/6103141/pexels-photo-6103141.jpeg?auto=compress&cs=tinysrgb&h=350",
                "small": "https://images.pexels.com/photos/6103141/pexels-photo-6103141.jpeg?auto=compress&cs=tinysrgb&h=130",
                "portrait": "https://images.pexels.com/photos/6103141/pexels-photo-6103141.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "landscape": "https://images.pexels.com/photos/6103141/pexels-photo-6103141.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
                "tiny": "https://images.pexels.com/photos/6103141/pexels-photo-6103141.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
            },
            "liked": false,
            "alt": "Free stock photo of book, book cover, book reading"
        },
        {
            "id": 15872062,
            "width": 3805,
            "height": 5708,
            "url": "https://www.pexels.com/photo/wood-love-summer-garden-15872062/",
            "photographer": "Nati",
            "photographer_url": "https://www.pexels.com/@nati-87264186",
            "photographer_id": 87264186,
            "avg_color": "#453D30",
            "src": {
                "original": "https://images.pexels.com/photos/15872062/pexels-photo-15872062.jpeg",
                "large2x": "https://images.pexels.com/photos/15872062/pexels-photo-15872062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "large": "https://images.pexels.com/photos/15872062/pexels-photo-15872062.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "medium": "https://images.pexels.com/photos/15872062/pexels-photo-15872062.jpeg?auto=compress&cs=tinysrgb&h=350",
                "small": "https://images.pexels.com/photos/15872062/pexels-photo-15872062.jpeg?auto=compress&cs=tinysrgb&h=130",
                "portrait": "https://images.pexels.com/photos/15872062/pexels-photo-15872062.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "landscape": "https://images.pexels.com/photos/15872062/pexels-photo-15872062.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
                "tiny": "https://images.pexels.com/photos/15872062/pexels-photo-15872062.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
            },
            "liked": false,
            "alt": ""
        },
        {
            "id": 15868531,
            "width": 3024,
            "height": 4032,
            "url": "https://www.pexels.com/photo/dawn-landscape-vacation-coffee-15868531/",
            "photographer": "Kate Andreeshcheva",
            "photographer_url": "https://www.pexels.com/@kate-andreeshcheva-35129697",
            "photographer_id": 35129697,
            "avg_color": "#78868F",
            "src": {
                "original": "https://images.pexels.com/photos/15868531/pexels-photo-15868531.jpeg",
                "large2x": "https://images.pexels.com/photos/15868531/pexels-photo-15868531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "large": "https://images.pexels.com/photos/15868531/pexels-photo-15868531.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "medium": "https://images.pexels.com/photos/15868531/pexels-photo-15868531.jpeg?auto=compress&cs=tinysrgb&h=350",
                "small": "https://images.pexels.com/photos/15868531/pexels-photo-15868531.jpeg?auto=compress&cs=tinysrgb&h=130",
                "portrait": "https://images.pexels.com/photos/15868531/pexels-photo-15868531.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "landscape": "https://images.pexels.com/photos/15868531/pexels-photo-15868531.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
                "tiny": "https://images.pexels.com/photos/15868531/pexels-photo-15868531.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
            },
            "liked": false,
            "alt": ""
        },
        {
            "id": 15865829,
            "width": 3243,
            "height": 4166,
            "url": "https://www.pexels.com/photo/cold-snow-man-people-15865829/",
            "photographer": "Sabina Kallari",
            "photographer_url": "https://www.pexels.com/@sabinakallari",
            "photographer_id": 170427453,
            "avg_color": "#E9E9E9",
            "src": {
                "original": "https://images.pexels.com/photos/15865829/pexels-photo-15865829.jpeg",
                "large2x": "https://images.pexels.com/photos/15865829/pexels-photo-15865829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "large": "https://images.pexels.com/photos/15865829/pexels-photo-15865829.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "medium": "https://images.pexels.com/photos/15865829/pexels-photo-15865829.jpeg?auto=compress&cs=tinysrgb&h=350",
                "small": "https://images.pexels.com/photos/15865829/pexels-photo-15865829.jpeg?auto=compress&cs=tinysrgb&h=130",
                "portrait": "https://images.pexels.com/photos/15865829/pexels-photo-15865829.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "landscape": "https://images.pexels.com/photos/15865829/pexels-photo-15865829.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
                "tiny": "https://images.pexels.com/photos/15865829/pexels-photo-15865829.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
            },
            "liked": false,
            "alt": "Free stock photo of 4k wallpaper, monochromatic, monochrome"
        }
    ],
    "total_results": 8000,
    "next_page": "https://api.pexels.com/v1/curated/?page=2&per_page=10"
}