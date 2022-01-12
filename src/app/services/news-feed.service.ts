import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsFeed } from '../model/news-feed.model';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {

  constructor(private httpClient : HttpClient) { }

  getAll(): Observable<NewsFeed[]> {
    return this.httpClient.get<NewsFeed[]>('http://localhost:58331/api/getAllNews');
  }
}
