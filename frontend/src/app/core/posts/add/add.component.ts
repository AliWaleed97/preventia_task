import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostsService } from 'src/app/_services/posts.service';
import { UtilsService } from 'src/app/_services/utils.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  postForm;
  constructor(
    private posts: PostsService,
    private utils: UtilsService,
    private router: Router
  ) {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      content: new FormControl(null, [Validators.required]),
      author: new FormControl(parseInt(localStorage.getItem('user_id'))),
    });
  }

  ngOnInit(): void {}

  async submit() {
    try {
      await this.posts.create(this.postForm.value);
      this.utils.handleSuccess('Post created successfully!');
      this.router.navigate(['/posts']);
    } catch (error) {
      this.utils.handleError('Post failed to be created!');
    }
  }
}
