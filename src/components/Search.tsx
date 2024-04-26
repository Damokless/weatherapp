"use client";
import AsyncListTypes from "@/interfaces/async_list_type";
import OWATypes from "@/interfaces/owa_types";
import { Autocomplete, AutocompleteItem, Avatar } from "@nextui-org/react";
import { useAsyncList } from "@react-stately/data";
import { useState } from "react";


export default function Search() {
	const [timer, setTimer] = useState<number>()
	let list: AsyncListTypes = useAsyncList({
		async load({ signal, filterText }) {
			if (filterText !== "") {
				return new Promise(function(resolve) {
					clearTimeout(timer)
					const newTimer = window.setTimeout(async () => {
						// no callback function .then() to avoid too many deep levels (Vie de ma mère, one day I'll figure out how to make a better api call)
						let res = await fetch(
							`https://api.openweathermap.org/geo/1.0/direct?q=${filterText}&limit=5&appid=${process.env.NEXT_PUBLIC_OW_API_KEY}`,
							{ signal }
						);
						let json = await res.json();

						resolve({items : json})
					}, 250);
					setTimer(newTimer)
				  });

			} else {
				return {
					items: [],
				};
			}
		},
	});

	return (
		<div>
			{" "}
			<Autocomplete
				className="max-w-xs"
				inputValue={list.filterText}
				isLoading={list.isLoading}
				items={list.items}
				label="Search a city"
				placeholder="Paris"
				variant="bordered"
				onInputChange={list.setFilterText}
				onKeyDown={(e: any) => e.continuePropagation()}
			>
				{list.items.map((item: OWATypes, index: number) => (
					<AutocompleteItem key={index}>
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
