import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pictures } from './pictures';
import { Picturesdetails } from './picturesdetails';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {


  private apiRoot = '//hubblesite.org/api/v3/';
  private dbRoot = '';
  private page = 1;
  private pageSize = 25;
  totalItems;
  totalPages;

  hubbleImageIndex: Pictures[];
  hubbleImagesDetailArray: Picturesdetails[];

  constructor(private httpClient: HttpClient) {
    this.hubbleImageIndex = [];
    this.hubbleImagesDetailArray = [];
    this.getImageIndex();
   }

  getAllImages(page: 1): Observable<Pictures[]> {
    const response = this.httpClient.jsonp<Pictures[]>(this.apiRoot + 'images?page=' + page, 'callback');
    // console.log(response);
    return response;
  }


  getImageIndex() {
    // this.getAllImagesFromDB('all').subscribe (
      this.getAllImages(1).subscribe (
        (response: Pictures[]) => {
      this.hubbleImageIndex = response;

      this.totalItems = this.hubbleImageIndex.length;
      this.totalPages = Math.trunc(this.totalItems / this.pageSize);

      // console.log('Hubble Index');
      // console.log(this.hubbleImageIndex);
      this.loadImages(this.getPageCollection(1));
    });
}

  // getAllImagesFromDB(page: any): Observable<HubbleImage[]> {
  //   const response = this.httpClient.get<HubbleImage[]>('https://spacestuffbackend.herokuapp.com/api/images');
  //   console.log(response);
  //   console.log("response from db");
  //   return response;
  // }

  loadImages(collection) {
    collection.forEach(
      (image) => {
        this.getImage(image.id).subscribe (

          (response: Picturesdetails) => {
            this.hubbleImagesDetailArray.push(response);
            console.log(response);
          }
        );
       }
    );
  }

  getImage(id: number): Observable<Picturesdetails> {
    const response =  this.httpClient.jsonp<Picturesdetails>(this.apiRoot + 'image/' + id.toString(), 'callback');
    // console.log(response);

    return response;
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

    const pageCollection = this.hubbleImageIndex.slice(startIndex, endIndex);

    return pageCollection;
  }



}
