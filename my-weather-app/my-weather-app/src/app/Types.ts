  export interface ICurrentWeather {
        temperature: number;
        windspeed: number;
        winddirection: number;
        weathercode: number;
        time: string;
    }

    export interface IHourlyUnits {
        time: string;
        temperature_2m: string;
        rain: string;
        showers: string;
        snowfall: string;
        snow_depth: string;
        visibility: string;
    }

    export interface IHourly {
        time: string[];
        temperature_2m: number[];
        rain: number[];
        showers: number[];
        snowfall: number[];
        snow_depth: number[];
        visibility: number[];
    }

    export interface IDailyUnits {
        time: string;
        temperature_2m_max: string;
        temperature_2m_min: string;
        sunrise: string;
        sunset: string;
        uv_index_max: string;
        showers_sum: string;
        snowfall_sum: string;
    }

    export interface IDaily {
        time: string[];
        temperature_2m_max: number[];
        temperature_2m_min: number[];
        sunrise: string[];
        sunset: string[];
        uv_index_max: number[];
        showers_sum: number[];
        snowfall_sum: number[];
    }

    export interface IWeatherMain {
        latitude: number;
        longitude: number;
        generationtime_ms: number;
        utc_offset_seconds: number;
        timezone: string;
        timezone_abbreviation: string;
        elevation: number;
        current_weather: ICurrentWeather;
        hourly_units: IHourlyUnits;
        hourly: IHourly;
        daily_units: IDailyUnits;
        daily: IDaily;
    }