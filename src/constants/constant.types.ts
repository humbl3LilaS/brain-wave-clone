export interface TNavigation {
	id: string;
	title: string;
	url: string;
	onlyMobile?: boolean;
}

export interface TRoadmap {
	id: string;
	title: string;
	text: string;
	date: string;
	status: "done" | "progress";
	imageUrl: string;
	colorful?: boolean;
}

export interface TColabContent {
	id: string;
	title: string;
	text?: string;
}

export interface TColabApp {
	id: string;
	title: string;
	icon: string;
	width: number;
	height: number;
}

export interface TPricing {
	id: string;
	title: string;
	description: string;
	price: string | null;
	features: string[];
}

export interface TBenefit {
	id: string;
	title: string;
	text: string;
	backgroundUrl: string;
	imageUrl: string;
	iconUrl: string;
	light?: boolean;
}

export interface TSocial {
	id: string;
	title: string;
	iconUrl: string;
	url: string;
}
