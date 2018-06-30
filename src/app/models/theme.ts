import { Font } from './font';
import { SiteLink } from './sitelink';
import { TagColor } from './tagcolor';

export class Theme {
    siteLink: SiteLink;
    avatarBorderRadius: string;
    tagColors: TagColor[];
    font: Font;
    fontPersonName: Font;
}
