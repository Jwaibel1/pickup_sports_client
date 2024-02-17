import { Component } from '@angular/core';
import { Post } from '../../shared/models/post';
import { PostComponent } from '../../shared/components/posts/post/post.component';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  posts: Post[] = [
    new Post({
      id: 1,
      title: 'Post 1',
      content: 'Content 1',
      created_at: '2021-01-01',
      user: {
        first_name: 'Jim',
        last_name: 'Dude',
        email: 'email@email.com',
        username: 'jimdude123',
      },
    }),
    new Post({
      id: 2,
      title: 'Post 2',
      content: 'Content 2',
      created_at: '2021-01-01',
      user: {
        first_name: 'Jim',
        last_name: 'Dude',
        email: 'email@email.com',
        username: 'jimdude123',
      },
    }),
    new Post({
      id: 3,
      title: 'Post 3',
      content: 'Content 3',
      created_at: '2021-01-01',
      user: {
        first_name: 'Jim',
        last_name: 'Dude',
        email: 'email@email.com',
        username: 'jimdude123',
      },
    }),
  ];

  constructor() {}
}
