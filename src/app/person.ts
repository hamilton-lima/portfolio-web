export class Person {
    name: string;
    avatar: string;
    about: string;
    links: Site[];
}

export class Site {
    title: string;
    type: string;
    url: string;
}