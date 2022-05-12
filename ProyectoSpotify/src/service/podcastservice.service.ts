import { HttpClient,HttpHeaders } from'@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Podcast } from 'src/model/podcast';
import { api } from'../api';






const httpOptions = {
  headers : new HttpHeaders({ 'Content-Type': 'application/json'}),
};

@Injectable({
  providedIn: 'root'
})
export class PodcastserviceService {
  podcastList: Podcast[] = [];

  constructor(private http: HttpClient) { }

  getPodcast(): Observable<Podcast[]> {
    return this.http.get<Podcast[]>(api.podcast);
  }
  createPodcast(podcast: Podcast):Observable<Podcast>{
    return this.http.post<Podcast>(api.podcast,podcast,httpOptions);
 }
//  updatePodcast(podcast: Podcast): Observable<Podcast> {
//   return this.http.put<Podcast>(api.podcast + "/" + podcast.id, podcast, httpOptions);
// }






}
