export class Person {
    name: string;
    avatar: string;
    about: string;
    links: Site[];
}

export class Site {
    type: string;
    url: string;
}