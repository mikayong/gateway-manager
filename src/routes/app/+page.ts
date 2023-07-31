import type { PageLoad } from './$types';
import type { ConicStop } from '@skeletonlabs/skeleton';

const conicStops: ConicStop[] = [
	{ lable: 'online',  color: ['green', 500], start: 0, end: 75 },
	{ lable: 'offline', color: ['red', 500], start: 75, end: 100 }
];

export const load: PageLoad = async () => {
	return {
		conicStops
	};
}
