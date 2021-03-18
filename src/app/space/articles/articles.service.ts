import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Articles } from './articles';
import { Articlesdetails } from './articlesdetails';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private apiRoot = '//hubblesite.org/api/v3/';
  private dbRoot = '';
  private page = 1;
  private pageSize = 25; // 25
  totalItems;
  totalPages;

  articlesIndex: Articles[];
  articlesDetailArray: Articlesdetails[];

  constructor(private httpClient: HttpClient) { 

    this.articlesIndex = [];
    this.articlesDetailArray = [];
    this.getNewsIndex();
  }

  getAllnews(page: 1): Observable<Articles[]> {
    // const response = this.httpClient.jsonp<HubbleNews[]>(this.apiRoot + 'news?page=' + page, 'callback');
    const response = this.httpClient.jsonp<Articles[]>(this.apiRoot + 'news?page=1', 'callback');
    // console.log(response);
    return response;
  }

  getNews(id: number): Observable<Articlesdetails> {
    const response =  this.httpClient.jsonp<Articlesdetails>(this.apiRoot + 'news_release/' + id.toString(), 'callback');
    // console.log(response);
    return response;
  }

  getNewsIndex() {
    // this.getAllNewsFromDB('all').subscribe (
      this.getAllnews(1).subscribe (
        (response: Articles[]) => {
        this.articlesIndex = response;

        this.totalItems = this.articlesIndex.length;
        this.totalPages = Math.trunc(this.totalItems / this.pageSize);

        // console.log('Hubble Index');
        // console.log(this.articlesIndex);
        this.loadNews(this.getPageCollection(1));
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
  
      const pageCollection = this.articlesIndex.slice(startIndex, endIndex);
  
      return pageCollection;
    }
  
    loadNews(collection) {
      collection.forEach(
        (news) => {
          this.getNews(news.news_id).subscribe (
  
            (response: Articlesdetails) => {
              this.articlesDetailArray.push(response);
            }
          );
         }
      );
    }

}
