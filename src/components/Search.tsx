"use client";
import fetch_all_weather_data from "@/functions/fetch_all_weather_data";
import fetch_geocode from "@/functions/fetch_geocode";
import OWATypes from "@/interfaces/owa_types";
import { Autocomplete, AutocompleteItem, Avatar } from "@nextui-org/react";
import { useState } from "react";

export default function Search() {
	const [timer, setTimer] = useState<number>();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [geocodeData, setGeocodeData] = useState<OWATypes[]>([]);
	function fetchGeocode(text: string) {
		setIsLoading(true);
		clearTimeout(timer);
		const newTimer = window.setTimeout(async () => {
			setGeocodeData(
				await fetch_geocode(text, process.env.NEXT_PUBLIC_OW_API_KEY)
			);
			return 0;
		}, 250);
		setTimer(newTimer);
		setIsLoading(false);
	}
	async function get_data_selected_city(id: any) {
		if (id !== null) {
			fetch_all_weather_data(
				geocodeData[id].lat,
				geocodeData[id].lon,
				process.env.NEXT_PUBLIC_OW_API_KEY
			);
		}
	}
	return (
		<div>
			<Autocomplete
				className="max-w-xs"
				isLoading={isLoading}
				items={geocodeData}
				label="Search a city"
				placeholder="Paris"
				variant="bordered"
				onInputChange={fetchGeocode}
				onKeyDown={(e: any) => e.continuePropagation()}
				onSelectionChange={get_data_selected_city}
			>
				{geocodeData.map((item: OWATypes, index: number) => (
					<AutocompleteItem key={index} textValue={item.name}>
						<div className="flex gap-2 items-center">
							<Avatar
								alt={item.country}
								className="flex-shrink-0"
								size="sm"
								src={`https://flagcdn.com/${item.country.toLowerCase()}.svg`}
							/>
							<div className="flex flex-col">
								<span className="text-small">
									{item.name}, {item.state}
								</span>
								<span className="text-tiny text-default-400">
									{item.lat}, {item.lon}
								</span>
							</div>
						</div>
					</AutocompleteItem>
				))}
			</Autocomplete>
		</div>
	);
}
