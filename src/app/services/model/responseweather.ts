import { Coordinates } from './coordinates';
import { Weather } from './weather';
import { Main } from './main';
import { Wind } from './wind';
import { Clouds } from './clouds';
import { Sys } from './sys';

export class ResponseWeather {
    
    coord: Coordinates;
    weather: Array<Weather>;
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
    
}