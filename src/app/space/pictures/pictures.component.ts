import { Component, OnInit } from '@angular/core';
import { PicturesService } from './pictures.service';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {
  hubbleImagesService: PicturesService;

  page = 1;
  collections: [];
  totalImages: number;

  constructor(hubbleImagesService: PicturesService) {
    this.hubbleImagesService = hubbleImagesService;
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
