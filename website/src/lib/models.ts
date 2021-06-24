interface Drink {
    title: string;
    booze: string;
}

interface Song {
    id: string;
    title: string;
    melody: string;
    lang: string;
    text: string[];
}

export type { Drink, Song }
