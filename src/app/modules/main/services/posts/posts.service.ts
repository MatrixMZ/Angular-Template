import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from '../../models/post';
import { apiEndpoints } from './../../../../core/http/api.endpoints';

export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(apiEndpoints.posts.main);
  }
}
