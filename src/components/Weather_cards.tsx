import { Eye, Droplet, Pressure, SunRise, SunSet, MapPin, Wind } from "@/icons";
import WDataTypes from "@/interfaces/weather_data_types";
import {
	Card,
	CardBody,
	CardHeader,
	Divider,
	Image,
	Tooltip,
} from "@nextui-org/react";

export default function WeatherCards({ weatherData }: Readonly<WDataTypes>) {
	console.log(weatherData);
	const polluting_gases: { [key: string]: string } = {
		co: "Carbon monoxide",
		nh3: "Ammonia",
		no: "Nitrogen monoxide",
		no2: "Nitrogen dioxide",
		o3: "Ozone",
		pm10: "particulates",
		pm2_5: "particulates",
		so2: "Sulphur dioxide",
	};
	return (
		<div className=" flex justify-center items-center flex-col gap-8 w-11/12">
			<Card className="w-full">
				<CardHeader className="flex gap-3">
					<div className="w-full">
						<div className="flex gap-1items-center pl-4">
							<MapPin />
							<div className="flex flex-col">
								<p className="text-md">{weatherData.name}</p>
								<p className="text-small text-default-500 text-center">
									{new Date()
										.toLocaleTimeString("fr-fr", {
											weekday: "short",
											day: "numeric",
											month: "long",
											hour: "2-digit",
											minute: "2-digit",
										})
										.replace("à", "")}
								</p>
							</div>
						</div>
						<div className="flex justify-between">
							<div className="flex items-center">
								<Image
									alt="weather icon"
									height={76}
									radius="sm"
									src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
									width={76}
								/>
								<p className="text-3xl">
									{Math.round(weatherData.main.temp)} °c
								</p>
							</div>
							<div className="flex flex-col justify-center">
								<p className="text-small text-default-500 text-end">
									{weatherData.weather[0].main}
								</p>
								<p className="text-small text-default-500 text-end">
									{Math.round(weatherData.main.temp_min)}°c /
									{Math.round(weatherData.main.temp_max)}°c
								</p>
								<p className="text-small text-default-500 text-end">
									feels like{" "}
									{Math.round(weatherData.main.feels_like)}°c
								</p>
							</div>
						</div>
					</div>
				</CardHeader>
				<CardBody className="flex flex-row gap-2 justify-center items-center">
					{weatherData.forecast.map(
						(forecast: {
							dt: number;
							icon: string;
							main: { temp: number };
							weather: [{ icon: string }];
						}) => {
							return (
								<Card key={forecast.dt}>
									<CardBody>
										<p className="text-small text-default-500 text-center">
											{new Date(
												forecast.dt * 1000
											).toLocaleTimeString("fr-fr", {
												hour: "2-digit",
												minute: "2-digit",
											})}
										</p>
										<Image
											alt="weather icon"
											height={48}
											radius="sm"
											src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
											width={48}
										/>
										<div className="text-center">
											<p className="text-small text-default-500">
												{Math.round(forecast.main.temp)}{" "}
												°c
											</p>
										</div>
									</CardBody>
								</Card>
							);
						}
					)}
				</CardBody>
			</Card>
			<Card className="w-full">
				<CardBody>
					<div className=" grid grid-cols-2 grid-rows-3 gap-4">
						<section>
							<div className="flex mb-3 w-full justify-between">
								<div className="flex items-center gap-3">
									<SunRise />
									Sunrise
								</div>
								<p className=" self-center">
									{new Date(
										weatherData.sys.sunrise * 1000
									).toLocaleTimeString("fr-fr", {
										hour: "2-digit",
										minute: "2-digit",
									})}
								</p>
							</div>
							<Divider />
						</section>
						<section>
							<div className="flex mb-3 w-full justify-between">
								<div className="flex items-center gap-3">
									<SunSet />
									Sunset
								</div>
								<p className=" self-center">
									{new Date(
										weatherData.sys.sunset * 1000
									).toLocaleTimeString("fr-fr", {
										hour: "2-digit",
										minute: "2-digit",
									})}
								</p>
							</div>
							<Divider />
						</section>
						<section>
							<div className="flex mb-3 w-full justify-between">
								<div className="flex items-center gap-3">
									<Droplet />
									Humidity
								</div>
								<p className=" self-center">
									{weatherData.main.humidity}%
								</p>
							</div>
							<Divider />
						</section>
						<section>
							<div className="flex mb-3 w-full justify-between">
								<div className="flex items-center gap-3">
									<Pressure />
									Pressure
								</div>
								<p className=" self-center">
									{weatherData.main.pressure}
								</p>
							</div>
							<Divider />
						</section>
						<section>
							<div className="flex mb-3 w-full justify-between">
								<div className="flex items-center gap-3">
									<Wind />
									Wind
								</div>
								<p className=" self-center">
									{Math.round(weatherData.wind.speed)} Km/h
								</p>
							</div>
							<Divider />
						</section>
						<section>
							<div className="flex mb-3 w-full justify-between">
								<div className="flex items-center gap-3">
									<Eye />
									Visibility
								</div>
								<p className=" self-center">
									{weatherData.visibility / 1000} Km
								</p>
							</div>
							<Divider />
						</section>
					</div>
				</CardBody>
			</Card>
			<Card className="w-full">
				<CardBody>
					<div className=" grid grid-cols-2 grid-rows-3 gap-4">
							{Object.entries(
								weatherData.air_quality.components
							).map(([key, value]) => {
								return (
									<section key={key}>
									<div className="flex mb-3 w-full justify-between">
									<Tooltip content={polluting_gases[key]}>
											<p className=" first-letter:uppercase">
												{key}
											</p>
										</Tooltip>
										<p>{value}</p>
									</div>
									<Divider />
								</section>
								);
							})}
						</div>
				</CardBody>
			</Card>
		</div>
	);
}
