import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Videos } from './videos';
import { Videosdetails } from './videosdetails';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  private apiRoot = '//hubblesite.org/api/v3/';
  private dbRoot = '';
  private page = 1;
  private pageSize = 25;
  totalItems;
  totalPages;

  hubbleVideosIndex: Videos[];
  hubbleVideosDetailArray: Videosdetails[];

  constructor(private httpClient: HttpClient) {
    this.hubbleVideosIndex = [];
    this.hubbleVideosDetailArray = [];
    this.getVideosIndex();
  }

  getVideos(id: number): Observable<Videosdetails> {
    const response = this.httpClient.jsonp<Videosdetails>(this.apiRoot + 'video/' + id.toString(), 'callback');
    // console.log(response);
    return response;
  }

  getAllVideos(page: 1): Observable<Videos[]> {
    const response = this.httpClient.jsonp<Videos[]>(this.apiRoot + 'videos?page=' + page, 'callback');
    // console.log(response);
    return response;
  }

  getVideosIndex() {
    // this.getAllVideosFromDB('all').subscribe (
    this.getAllVideos(1).subscribe(
      (response: Videos[]) => {
        this.hubbleVideosIndex = response;

        this.totalItems = this.hubbleVideosIndex.length;
        this.totalPages = Math.trunc(this.totalItems / this.pageSize);

        // console.log('Hubble Index');
        // console.log(this.hubbleVideosIndex);
        this.loadVideos(this.getPageCollection(1));
      });
  }

  getPageCollection(page) {

    if (page > this.totalPages) {
      page = 1;
    }
    const startIndex = (page - 1) * this.pageSize;
    let endIndex = startIndex + this.pageSize;
    if (endIndex > this.totalItems) {
      endIndex = this.totalItems;
    }

    const pageCollection = this.hubbleVideosIndex.slice(startIndex, endIndex);

    return pageCollection;
  }

  loadVideos(collection) {
    collection.forEach(
      (videos) => {
        this.getVideos(videos.id).subscribe(

          (response: Videosdetails) => {
            this.hubbleVideosDetailArray.push(response);
            // console.log(response);

          }
        );
      }
    );
  }
}
