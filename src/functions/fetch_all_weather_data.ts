export default async function fetch_all_weather_data(
	latitude: number,
	longitude: number,
	api_key: string | undefined
) {
	const weather = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric`
	)
		.then((res) => res.json())
		.then((data) => {
			return data;
		})
		.catch(() => {
			return {};
		});
	const air_polution = await fetch(
		`https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${api_key}`
	)
		.then((res) => res.json())
		.then((data) => {
			return data;
		})
		.catch(() => {
			return {};
		});
	const forecast = await fetch(
		`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric`
	)
		.then((res) => res.json())
		.then((data) => {
			return data;
		})
		.catch(() => {
			return {};
		});
	weather.air_quality = {
		air_quality_index: air_polution.list[0].main.aqi,
		components: air_polution.list[0].components,
	};
	weather.forecast = forecast.list.slice(0,9);
	return weather
}
