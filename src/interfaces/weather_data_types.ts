export default interface WDataTypes {
	weatherData: {
		name: string;
		main: {
			temp: number;
			temp_min: number;
			temp_max: number;
			feels_like: number;
		};
		air_quality: {
			air_quality_index: number;
			components: {
				[key: string]: number;
			};
		};
		weather: [{ icon: string; main: string }];
		forecast: [];
		sys: {
			sunrise : number,
			sunset : number
		}
	};
}
