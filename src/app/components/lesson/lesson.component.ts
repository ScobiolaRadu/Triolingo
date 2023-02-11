import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonlistComponent } from 'src/app/components/lessonlist/lessonlist.component';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})

export class LessonComponent implements OnInit {
  lessonTitle = '';
  slides: any[] = [];
  currentSlideIndex = 0;

  constructor(private route: ActivatedRoute) {
    this.slides = [
      { title: 'Slide 1' },
      { title: 'Slide 2' },
      { title: 'Slide 3' },
      { title: 'Slide 4' },
    ];
  }

  ngOnInit() {
      const urlSegments = this.route.snapshot.url;
      this.lessonTitle = urlSegments[urlSegments.length - 1].path;

      switch (this.lessonTitle) {
        case 'Animals':
          this.slides = [
            { text: 'Lion', 
            imageUrl: "/assets/lion.png",
            text2: "Leu"
            },
            { text: 'Dog',
            imageUrl: "/assets/dog.png",
            text2: "Câine" 
          },
            { text: 'Elephant',
            imageUrl: "/assets/elephant.png",
            text2: "Elefant" 
          },
            { text: 'Pig',
            imageUrl: "/assets/pig.png",
            text2: "Porc" 
          },
          ];
          break;
          case 'Colors':
          this.slides = [
            { text: 'Red',
            imageUrl: "/assets/red.png",
            text2: "Roșu"},
            { text: 'Blue', 
            imageUrl: "/assets/blue.png",
            text2: "Albastru"},
            { text: 'Green',
            imageUrl: "/assets/green.png",
            text2: "Verde" },
            { text: 'Yellow',
            imageUrl: "/assets/yellow.png",
            text2: "Galben" },
          ];
          break;
        case 'Numbers':
          this.slides = [
            { text: 'Zero',
            text2: "Zero" },
            { text: 'One' ,
            text2: "Unu"},
            { text: 'Two' ,
            text2: "Doi"},
            { text: 'Three',
            text2: "Trei" },
            { text: 'Four',
            text2: "Patru" },
            { text: 'Five',
            text2: "Cinci" },
            { text: 'Six',
            text2: "Șase" },
            { text: 'Seven',
            text2: "Șapte" },
            { text: 'Eight',
            text2: "Opt" },
            { text: 'Nine',
            text2: "Nouă" },
            { text: 'Ten',
            text2: "Zece"}
            
          ];
        break;
        case 'People':
          this.slides = [
            { text: 'Mom' ,
            imageUrl: "/assets/mother.png",
            text2: "Mamă"},
            { text: 'Dad',
            imageUrl: "/assets/father.png",
            text2: "Tată" },
            { text: 'Sister',
            imageUrl: "/assets/sister.png",
            text2: "Soră" },
            { text: 'Brother',
            imageUrl: "/assets/brother.png",
            text2: "Frate" }
          ];
          break;
          
          
    }


}

previousSlide() {
  if (this.currentSlideIndex === 0) {
    return;
  }
  this.currentSlideIndex--;
}

nextSlide() {
  if (this.currentSlideIndex === this.slides.length - 1) {
    return;
  }
  this.currentSlideIndex++;
}


}
