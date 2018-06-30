import { Site } from './site';

export class Project {
    title: string;
    image: string;
    description: string;
    links: Site[];
    tags: string[];
    startDate: Date;
    endDate: Date;
    company: string;
}
