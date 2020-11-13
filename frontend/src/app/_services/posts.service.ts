import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  public fetchAll(opts) {
    if (!opts) opts = {};
    return this.http.get(`/api/posts/`, { params: opts }).toPromise();
  }
  public fetchOne(id) {
    return this.http.get(`/api/posts/${id}/`).toPromise();
  }
  public update(id, body) {
    return this.http.patch(`/api/posts/${id}`, body).toPromise();
  }
  public create(body) {
    return this.http.post(`/api/posts/`, body).toPromise();
  }
  public delete(id) {
    return this.http.delete(`/api/posts/${id}`).toPromise();
  }
  public fetchAllLikes(post_id) {
    return this.http
      .get(`/api/likes/`, { params: { post: post_id } })
      .toPromise();
  }
  public likePost(body) {
    return this.http.post(`/api/likes/`, body).toPromise();
  }
  public commentPost(body) {
    return this.http.post(`/api/comments/`, body).toPromise();
  }
  public LikedByUser(post_id, user_id) {
    return this.http
      .get(`/api/likes/`, { params: { post: post_id, liker: user_id } })
      .toPromise();
  }
}
