export interface schedule {
	service: string;
	start: string;
	end: string;
}

export interface site {
	location: {
		lat: string;
		lng: string;
	};
	name: string;
	schedules: {
		now?: schedule;
		next?: schedule;
	};
	size: number;
	status: string;
}
