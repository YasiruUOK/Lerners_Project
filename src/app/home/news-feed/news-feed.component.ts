import { Component, OnInit } from '@angular/core';
import { NewsFeed } from 'src/app/services/news-feed.model';
import { NewsFeedService } from 'src/app/services/news-feed.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  newsFeedLists?: NewsFeed[];

  constructor(private newsFeedService: NewsFeedService) { }

  ngOnInit(): void {
    this.retrieveNewsFeed();
  }

  retrieveNewsFeed(): void {
    this.newsFeedService.getAll()
      .subscribe({
        next: (data) => {
          this.newsFeedLists = data;
          console.log(this.newsFeedLists);
        },
        error: (e) => console.error(e)
      });
  }
}
