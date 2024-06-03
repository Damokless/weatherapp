import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

export default function WeatherCards({ weatherData }: any) {
	console.log(weatherData);
	return (
		<div className=" flex justify-center items-center flex-col gap-8">
			<Card>
				<CardHeader className="flex gap-3">
					<Image
						alt="weather icon"
						height={76}
						radius="sm"
						src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
						width={76}
					/>
					<div className="flex flex-col">
						<p className="text-md">{weatherData.name}</p>
						<p className="text-small text-default-500">
							{weatherData.main.temp} °C |
							{weatherData.weather[0].main},
							{weatherData.weather[0].description}
						</p>
					</div>
				</CardHeader>
				<CardBody className="flex flex-row gap-2">
					{weatherData.forecast.map((element: any) => {
						console.log(element);
						return (
							<Card key={element.dt}>
								<CardBody>
								<p className="text-small text-default-500 text-center">
											{new Date(
												element.dt * 1000
											).toLocaleTimeString("fr-fr", {
												hour: "2-digit",
												minute: "2-digit",
											})}
										</p>
									<Image
										alt="weather icon"
										height={48}
										radius="sm"
										src={`https://openweathermap.org/img/wn/${element.weather[0].icon}.png`}
										width={48}
									/>
									<div className="text-center">
										<p className="text-small text-default-500">
											{element.main.temp} °c
										</p>
									</div>
								</CardBody>
							</Card>
						);
					})}
				</CardBody>
			</Card>
			<Card>
				<CardBody>
					<p>
						Make beautiful websites regardless of your design
						experience.
					</p>
				</CardBody>
			</Card>
		</div>
	);
}
