import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/_services/posts.service';
import { UtilsService } from 'src/app/_services/utils.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: any;
  params: any;
  order: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private post: PostsService,
    private utilService: UtilsService
  ) {}

  ngOnInit(): void {
    this.fetchPosts();
    this.handleParams();
  }

  handleParams() {
    this.route.queryParamMap.subscribe((params) => {
      this.params = params['params'];
      this.fetchPosts();
    });
  }
  sort() {
    this.order = !this.order;
    this.order
      ? (this.params = { ...this.params, ordering: '-created_at' })
      : (this.params = { ...this.params, ordering: 'created_at' });
    this.fetchPosts();
  }
  async fetchPosts() {
    this.posts = await this.post.fetchAll(this.params);
  }
  async checkLiked(post_id, liker_id) {
    let res = await this.post.LikedByUser(post_id, liker_id);
    if (Object.keys(res).length != 0) return true;
    return false;
  }

  async like(id) {
    let liker_id = parseInt(localStorage.getItem('user_id'));
    let liked = await this.checkLiked(id, liker_id);
    if (liked) {
      this.utilService.handleError('You have already liked this post!');
      return;
    }
    try {
      this.post.likePost({ post: id, liker: liker_id });
      this.utilService.handleSuccess('Post liked successfully!');
    } catch (error) {
      this.utilService.handleError("couldn't like post");
    }
  }
}
