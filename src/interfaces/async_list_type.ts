import OWATypes from "./owa_types";
export default interface AsyncListTypes {
	filterText: string;
	isLoading: boolean;
	items: OWATypes[];
	setFilterText: (value: string) => void;
}
