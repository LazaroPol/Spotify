import { Component } from '@angular/core';
import { PodcastserviceService } from 'src/service/podcastservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyectoSpotify';

  constructor(private podcastservice: PodcastserviceService){

  }}

  // podcastList: Podcast[] = [
  //   {
  //     img: "https://i.scdn.co/image/ab67656300005f1fa56625fff96e74dc2efa6135",
  //     podcastName: "2+1 by Drafteados y Daimiel",
  //     subtitle: "Spotify Studios",
  //     // link: "/show/7z8tSXAARFiF7LvC5lwnwl"
  //   },
  //   {
  //     img: "https://i.scdn.co/image/ab67656300005f1f61de6a63ffcbfbe65ecffd2a",
  //     podcastName: "The Wild Project",
  //     subtitle: "Jordi Wild",
  //     // link: "/show/5iKz9gAsyuQ1xLG6MFLtQg"
  //   },
  //   {
  //     img: "https://i.scdn.co/image/ab67656300005f1f2495aca76fdbbc8b458cdda9",
  //     podcastName: "Por si las voces vuelven",
  //     subtitle: "Ángel Martín",
  //     // link: "/show/3ZsoveYNKojRyaeWpM3ruo"
  //   },
  //   {
  //     img: "https://i.scdn.co/image/d3ae59a048dff7e95109aec18803f22bebe82d2f",
  //     podcastName: "The Joe Rogan Experience",
  //     subtitle: "The Joe Rogan Experience",
  //     // link: "/show/4rOoJ6Egrf8K2IrywzwOMk"
  //   },
  
  
  
  // ]
  // secondPodcastList: Podcast[] = [
  //   {
  //     img: "https://i.scdn.co/image/ab67656300005f1f92efdc3f34b6342d77850082",
  //     podcastName: "Nadie sabe nada",
  //     subtitle: "Andreu Buenafuente y Berto Romero",
  //     // link: "/show/7z8tSXAARFiF7LvC5lwnwl"
  //   },
  //   {
  //     img: "https://i.scdn.co/image/ab67656300005f1f09c888fe5f467015e8cfd5eb",
  //     podcastName: "Señales Podcast",
  //     subtitle: "Señales Podcast",
  //     // link: "/show/5iKz9gAsyuQ1xLG6MFLtQg"
  //   },
  //   {
  //     img: "https://i.scdn.co/image/311f3c0bc7eaa9a9b10a56bbba7b6ebef95dd01b",
  //     podcastName: "El Podcast de JF Calero",
  //     subtitle: "JF Calero",
  //     // link: "/show/3ZsoveYNKojRyaeWpM3ruo"
  //   },
  //   {
  //     img: "https://i.scdn.co/image/516f926d695dc36799b8a66448b1ca191da02903",
  //     podcastName: "Monday Morning Podcast",
  //     subtitle: "All Things Comedy",
  //     // link: "/show/4rOoJ6Egrf8K2IrywzwOMk"
  //   },
  
  
  
  // ]
  // podcastfirstTest: Podcast[] = [
  //   {
  //     img: "https://i.scdn.co/image/ab67656300005f1fa56625fff96e74dc2efa6135",
  //     podcastName: "2+1 by Drafteados y Daimiel",
  //     subtitle: "Spotify Studios",
  //     // link: "/show/7z8tSXAARFiF7LvC5lwnwl"
  //   },
  //   {
  //     img: "https://i.scdn.co/image/ab67656300005f1f61de6a63ffcbfbe65ecffd2a",
  //     podcastName: "The Wild Project",
  //     subtitle: "Jordi Wild",
  //     // link: "/show/5iKz9gAsyuQ1xLG6MFLtQg"
  //   },
  //   {
  //     img: "https://i.scdn.co/image/ab67656300005f1f2495aca76fdbbc8b458cdda9",
  //     podcastName: "Por si las voces vuelven",
  //     subtitle: "Ángel Martín",
  //     // link: "/show/3ZsoveYNKojRyaeWpM3ruo"
  //   },
  //   {
  //     img: "https://i.scdn.co/image/d3ae59a048dff7e95109aec18803f22bebe82d2f",
  //     podcastName: "The Joe Rogan Experience",
  //     subtitle: "The Joe Rogan Experience",
  //     // link: "/show/4rOoJ6Egrf8K2IrywzwOMk"
  //   },
  
  
  
  // ]
  // podcastListtest: Podcast[] = [
  //   {
  //     img: "https://i.scdn.co/image/ab67656300005f1fa56625fff96e74dc2efa6135",
  //     podcastName: "2+1 by Drafteados y Daimiel",
  //     subtitle: "Spotify Studios",
  //     // link: "/show/7z8tSXAARFiF7LvC5lwnwl"
  //   },
  //   {
  //     img: "https://i.scdn.co/image/ab67656300005f1f61de6a63ffcbfbe65ecffd2a",
  //     podcastName: "The Wild Project",
  //     subtitle: "Jordi Wild",
  //     // link: "/show/5iKz9gAsyuQ1xLG6MFLtQg"
  //   },
  //   {
  //     img: "https://i.scdn.co/image/ab67656300005f1f2495aca76fdbbc8b458cdda9",
  //     podcastName: "Por si las voces vuelven",
  //     subtitle: "Ángel Martín",
  //     // link: "/show/3ZsoveYNKojRyaeWpM3ruo"
  //   },
  //   {
  //     img: "https://i.scdn.co/image/d3ae59a048dff7e95109aec18803f22bebe82d2f",
  //     podcastName: "The Joe Rogan Experience",
  //     subtitle: "The Joe Rogan Experience",
  //     // link: "/show/4rOoJ6Egrf8K2IrywzwOMk"
  //   },
  
  
  
  // ];


