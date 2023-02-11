import { Component } from '@angular/core';

@Component({
  selector: 'app-lessonlist',
  templateUrl: './lessonlist.component.html',
  styleUrls: ['./lessonlist.component.css']
})
export class LessonlistComponent {
  lessons = [
    {title: 'Animals', icon: 'pets', url: '/lesson/Animals'},
    {title: 'Colors', icon: 'palette', url: '/lesson/Colors'},
    {title: 'Numbers', icon: 'numbers',url: '/lesson/Numbers'},
    {title: 'People', icon:'people', url: '/lesson/People'},
  ];
}
