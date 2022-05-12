import { Component, Input, OnInit } from '@angular/core';
import { Podcast } from 'src/model/podcast';
@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent implements OnInit {

  @Input() podcast?: Podcast;

  constructor() { }

  ngOnInit(): void {
  }

}
