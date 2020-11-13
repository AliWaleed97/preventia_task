import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/_services/posts.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { async } from 'rxjs/internal/scheduler/async';
import { UtilsService } from 'src/app/_services/utils.service';
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  postID;
  post;
  comments;
  likes;
  comment;
  constructor(
    private route: ActivatedRoute,
    private posts: PostsService,
    private utils: UtilsService
  ) {
    this.postID = this.route.snapshot.paramMap['params']['id'];
    this.comment = new FormGroup({
      post: new FormControl(this.postID),
      author: new FormControl(localStorage.getItem('user_id')),
      content: new FormControl(null, Validators.compose([Validators.required])),
    });
  }

  ngOnInit(): void {
    this.fetchPost();
    this.fetchLikes();
  }
  async fetchPost() {
    this.post = await this.posts.fetchOne(this.postID);
  }

  async fetchLikes() {
    this.likes = await this.posts.fetchAllLikes(this.postID);
  }
  async submit() {
    console.log(this.comment.value);
    try {
      let comment = await this.posts.commentPost(this.comment.value);
      this.comments.push(comment);
      this.comment.reset();

      this.utils.handleSuccess('Comment created successfully!');
    } catch (error) {
      this.utils.handleSuccess('comment failed to be created');
    }
  }
}
