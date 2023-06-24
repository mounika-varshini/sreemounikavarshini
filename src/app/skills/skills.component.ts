import { Component, OnInit } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

// pdfMake.vfs = pdfFonts.pdfMake.vfs;

declare const TagCloud: any;
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})

export class SkillsComponent implements OnInit {


  constructor() {
    // pdfMake.vfs = pdfFonts.pdfMake.vfs;

  }

  ngOnInit() {
    const container = document.getElementById('tagcloud-container');
    const myTags = [
      'JavaScript', 'TypeScript', 'CSS', 'HTML', 'Angular', 'Bootstarp',
      'DSA', 'C++', 'React', 'Java', 'Git',
      'MongoDB', 'Node',
    ];

    let tagCloud = TagCloud('.content', myTags, {

      // radius in px
      radius: 140,

      // animation speed
      // slow, normal, fast
      maxSpeed: 'medium',
      initSpeed: 'medium',

      // 0 = top
      // 90 = left
      // 135 = right-bottom
      direction: 135,
      shape: 'star',

      // interact with cursor move on mouse out
      keep: true



    });

    //To change the color of text randomly
    var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    // document.querySelector('.content').style.color = random_color;
  }

}
