import { Component, OnInit } from '@angular/core';
import { VideosService } from './videos.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {


  hubbleVideosService: VideosService;

  page = 1;
  collections: [];
  totalImages: number;

  constructor(hubbleVideosService: VideosService) {
    this.hubbleVideosService = hubbleVideosService;
  }

  ngOnInit(): void {
  }

  truncate(value: string, limit = 25, completeWords = true, ellipsis = '…') {
    let lastindex = limit;
    if (completeWords) {
      lastindex = value.substr(0, limit).lastIndexOf(' ');
    }
    return `${value.substr(0, limit)}${ellipsis}`;
  }

}
