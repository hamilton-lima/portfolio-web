import { SiteLink } from './../../models/sitelink';
import { Component, OnInit, Input } from '@angular/core';
import { Theme } from '../../models/theme';

@Component({
  selector: 'app-site-link',
  templateUrl: './site-link.component.html',
  styleUrls: ['./site-link.component.css']
})
export class SiteLinkComponent implements OnInit {
  @Input() link: SiteLink;
  @Input() theme: Theme;
  
  constructor() { }

  ngOnInit() {
  }

}
