import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Podcast } from 'src/model/podcast';
import { PodcastserviceService } from 'src/service/podcastservice.service';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrls: ['./podcast-list.component.scss']
})
export class PodcastListComponent implements OnInit {

  @Input() podcast: Podcast = {
    podcast: '', presentador: '', img: ''};
    podcastList$: Observable<Podcast[]> = of([]);

  constructor(private router: Router, private pagelistservice: PodcastserviceService, private titleService: Title) {
    this.titleService.setTitle("Podcast List");
  }

  ngOnInit(): void {
    this.podcastList$ = this.pagelistservice.getPodcast();
  }

  goTo(podcastId: any) {
    this.router.navigate(["/podcast/" + podcastId]);
  }

}
