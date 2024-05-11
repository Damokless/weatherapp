export default async function fetch_geocode(text: string, api_key : string | undefined) {
	if (text !== "") {
		return await fetch(
			`https://api.openweathermap.org/geo/1.0/direct?q=${text}&limit=5&appid=${process.env.NEXT_PUBLIC_OW_API_KEY}`
		)
			.then((res) => res.json())
			.then((data) => {
				return data;
			})
			.catch(() => {
				return [];
			});
	}
	return [];
}
