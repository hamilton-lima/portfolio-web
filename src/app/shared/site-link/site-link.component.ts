import { Component, OnInit, Input } from '@angular/core';
import { Theme } from '../../models/theme';
import { Site } from '../../models/site';

@Component({
  selector: 'app-site-link',
  templateUrl: './site-link.component.html',
  styleUrls: ['./site-link.component.css']
})
export class SiteLinkComponent implements OnInit {
  @Input() link: Site;
  @Input() theme: Theme;
  
  constructor() { }

  ngOnInit() {
  }

}
