import { format } from "date-fns";

export function GetDateTime(date: string) {
	let parsedDate = new Date(date);
	let formatDate = format(parsedDate, "dd/MM/yyyy kk:mm");
	return formatDate;
}
