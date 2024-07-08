"use client";
import Search from "@/components/Search";
import WeatherCards from "@/components/Weather_cards";
import { useState } from "react";
export default function Home() {
	const [weatherData, setWeatherData] = useState();
	return (
		<div className="w-full md:h-screen	">
			<div className="grid grid-cols-1 xl:grid-cols-2 w-full h-full">
				<Search setValue={setWeatherData} />
				{weatherData && <WeatherCards weatherData={weatherData} />}
			</div>
		</div>
	);
}
