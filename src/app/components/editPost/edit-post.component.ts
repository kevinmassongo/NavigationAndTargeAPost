import { Component, Input, inject, input } from '@angular/core';
import { Post } from '../../services/post.model';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="editPostForm" (ngSubmit)="onSubmit()">
      <h2>Modification ce poste</h2>
      <input type="text" placeholder="Titre" formControlName="title">
      <input type="text" placeholder="Description" formControlName="body">
      {{ editResult | async}}
      <button type="submit">Modifier</button>
    </form>
  `,
  styles: [`
    
    form {
      * {
        width : 30vw;
        display : block;
        margin : 0.5rem auto;
        padding : 1rem 0.2rem
      }
      button {
        cursor:pointer;
        font-size : 1rem;
        font-weight : bold;
        border : none
      }
      button:hover{
        background-color : red;
        color : white
      }
    }

    `]
})
export default class EditPostComponent {
  @Input() post !: Post;
  private ps = inject(PostService);
  editResult !:  Observable<Post>

  private route = inject(ActivatedRoute)
  private router = inject(Router)
  
  editPostForm = new FormGroup ({
    title : new FormControl(''),
    body : new FormControl('')
  })

  ngOnInit() : void {
    const postId = this.route.snapshot.paramMap.get('id');
    this.ps.getPost(Number(postId)).subscribe((post) => {
      this.post = post  
      this.editPostForm.patchValue(post)
    })    
  }
  
  onSubmit() {
    const post : Post = {
      userId : this.post.userId,
      id : this.post.id,
      title : this.editPostForm.value.title!,
      body : this.editPostForm.value.body!
    }

    this.ps.putPost(post.id, post).subscribe(()=> {
      this.router.navigate(['accueil'])
    })
  }
}
