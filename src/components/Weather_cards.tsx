import { Card, CardBody } from "@nextui-org/react";

export default function WeatherCards({weatherData}) {
	console.log(weatherData)
	return (
		<div className=" flex justify-center items-center flex-col gap-8">
			<Card>
				<CardBody>
					<p>
						Make beautiful websites regardless of your design
						experience.
					</p>
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
