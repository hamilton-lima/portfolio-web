import { Site } from './site';

export class Project {
    title: string;
    image: string;
    description: string;
    links: Site[];
    tags: string[];
    startYear: string;
    endYear: string;
    company: string;
}
