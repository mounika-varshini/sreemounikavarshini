import { compileDeclareClassMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { event } from 'jquery';
import Swiper from 'swiper';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  pizza = document.getElementsByClassName('pizza');
  slice1 = document.getElementsByClassName('one');
  slice2 = document.getElementsByClassName('two');
  slice3 = document.getElementsByClassName('three');
  slice4 = document.getElementsByClassName('four');
  text1 = document.getElementsByClassName('overlay1');
  img1 = document.getElementsByClassName('img1');
  heading1 = document.getElementsByClassName('heading1');
  text2 = document.getElementsByClassName('overlay2');
  img2 = document.getElementsByClassName('img2');
  heading2 = document.getElementsByClassName('heading2');
  text3 = document.getElementsByClassName('overlay3');
  img3 = document.getElementsByClassName('img3');
  heading3 = document.getElementsByClassName('heading3');
  text4 = document.getElementsByClassName('overlay4');
  img4 = document.getElementsByClassName('img4');
  heading4 = document.getElementsByClassName('heading4');

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.slice1, this.pizza)
    for (let i = 0; i < this.slice1.length; i++) {
      const slice = this.slice1[i] as HTMLElement;
      const circle = this.pizza[i] as HTMLElement;
      const two = this.slice2[i] as HTMLElement;
      const three = this.slice3[i] as HTMLElement;
      const four = this.slice4[i] as HTMLElement;
      const text = this.text1[i] as HTMLElement;
      const img1 = this.img1[i] as HTMLElement;
      const img2 = this.img2[i] as HTMLElement;
      const img3 = this.img3[i] as HTMLElement;
      const img4 = this.img4[i] as HTMLElement;
      const arena = this.heading1[i] as HTMLElement;

      slice.addEventListener('click', (event) => {
        const targetElement: HTMLElement = event.target as HTMLElement;
        img1.style.filter = `blur(5px)`;
        text.style.opacity = `1`;
        text.style.zIndex = `2`;
        slice.style.transition = `transform 0.5s`
        slice.style.transform = `scale(1) translate(-200px, -100px)`;
        circle.style.transition = `transform 1s`;
        img2.style.backgroundSize = `5rem 5rem`;
        img3.style.backgroundSize = `5rem 5rem`;
        img4.style.backgroundSize = `5rem 5rem`;
        // circle.style.transform = `translate(500px, 300px)`;
        two.style.transform = `translate(500px, 300px) rotate(-90deg)`;
        three.style.transform = `translate(500px, 300px) rotate(-180deg)`;
        four.style.transform = `translate(500px, 300px)  rotate(-270deg)`;
        setTimeout(function () {
          slice.style.height = `50rem`;
          slice.style.width = `50rem`;
          circle.style.height = `250px`;
          circle.style.width = `250px`;
          two.style.height = `250px`;
          three.style.height = `250px`;
          four.style.height = `250px`;
          two.style.width = `250px`;
          three.style.width = `250px`;
          four.style.width = `250px`;
        }, 100)
      });


      document.addEventListener('mousedown', (event) => {
        // Reset the translation when the mouse leaves the element
        const targetElement: HTMLElement = event.target as HTMLElement;
        console.log(targetElement)
        // if (slice && !slice.contains(targetElement)) {
        img1.style.filter = `blur(0px)`;
        text.style.opacity = `0`;
        slice.style.transition = `transform 0.5s`
        slice.style.transform = `translate(0,0)`;
        circle.style.transition = `transform 1s`;
        circle.style.transform = `translate(0,0)`;
        two.style.transform = `translate(0, 0) rotate(270deg)`;
        three.style.transform = `translate(0, 0) rotate(180deg)`;
        four.style.transform = `translate(0, 0)  rotate(90deg)`;
        img2.style.backgroundSize = `10rem 10rem`;
        img3.style.backgroundSize = `10rem 10rem`;
        img4.style.backgroundSize = `11rem 15rem`;
        setTimeout(function () {
          slice.style.height = `500px`;
          slice.style.width = `500px`;
          circle.style.height = `500px`;
          circle.style.width = `500px`;
          two.style.height = `500px`
          three.style.height = `500px`
          four.style.height = `500px`
          two.style.width = `500px`
          three.style.width = `500px`
          four.style.width = `500px`
        }, 100);
        // }
      });

    }

    for (let i = 0; i < this.slice2.length; i++) {
      const slice = this.slice2[i] as HTMLElement;
      const circle = this.pizza[i] as HTMLElement;
      const one = this.slice1[i] as HTMLElement;
      const three = this.slice3[i] as HTMLElement;
      const four = this.slice4[i] as HTMLElement;
      const text = this.text2[i] as HTMLElement;
      const img1 = this.img2[i] as HTMLElement;
      const img2 = this.img1[i] as HTMLElement;
      const img3 = this.img3[i] as HTMLElement;
      const img4 = this.img4[i] as HTMLElement;
      const arena = this.heading2[i] as HTMLElement;
      // circle.style.border = `20px solid #fff`;
      // circle.style.borderRadius = `50%`;
      // circle.style.boxShadow = ` 0 0 50px #0f0, inset 0 0 50px #0f0`;
      // (circle.style as any).webkitBoxReflect = `below 10px linear-gradient(transparent, transparent, #0002)`;
      // circle.style.animation = `animate 5s linear infinite`;
      slice.addEventListener('click', (event) => {
        console.log(text)
        img1.style.filter = `blur(5px)`;
        text.style.opacity = `1`;
        text.style.zIndex = `2`;
        slice.style.transition = `transform 0.5s`;
        slice.style.transform = `scale(1) translate(-300px, -300px) rotate(-90deg)`;
        circle.style.transition = `transform 1s`;
        // circle.style.transform = `translate(500px, 300px)`;
        one.style.transform = `translate(500px, -150px) rotate(0deg)`;
        three.style.transform = `translate(500px, -150px) rotate(-180deg)`;
        four.style.transform = `translate(500px, -150px)  rotate(-270deg)`;
        img2.style.backgroundSize = `5rem 5rem`;
        img3.style.backgroundSize = `5rem 5rem`;
        img4.style.backgroundSize = `5rem 5rem`;
        setTimeout(function () {
          slice.style.height = `50rem`;
          slice.style.width = `50rem`;
          circle.style.height = `250px`;
          circle.style.width = `250px`;
          one.style.height = `250px`;
          three.style.height = `250px`;
          four.style.height = `250px`;
          one.style.width = `250px`;
          three.style.width = `250px`;
          four.style.width = `250px`;
        }, 100);
      });
      document.addEventListener('mousedown', (event) => {
        // Reset the translation when the mouse leaves the element
        const targetElement: HTMLElement = event.target as HTMLElement;
        // if (slice && !slice.contains(targetElement)) {
        img1.style.filter = `blur(0px)`;
        text.style.opacity = `0`;
        slice.style.transition = `transform 0.5s`
        img1.style.filter = `blur(0px)`;
        text.style.opacity = `0`;
        slice.style.transform = `scale(1) translate(0, 0) rotate(-90deg)`;
        circle.style.transition = `transform 1s`;
        circle.style.transform = `translate(0,0)`;
        one.style.transform = `translate(0, 0) rotate(0deg)`;
        three.style.transform = `translate(0, 0) rotate(180deg)`;
        four.style.transform = `translate(0, 0)  rotate(90deg)`;
        img2.style.backgroundSize = `10rem 10rem`;
        img3.style.backgroundSize = `10rem 10rem`;
        img4.style.backgroundSize = `11rem 15rem`;
        setTimeout(function () {
          slice.style.height = `500px`;
          slice.style.width = `500px`;
          circle.style.height = `500px`;
          circle.style.width = `500px`;
          one.style.height = `500px`
          three.style.height = `500px`
          four.style.height = `500px`
          one.style.width = `500px`
          three.style.width = `500px`
          four.style.width = `500px`
        }, 100);
        // }
      });

    }

    for (let i = 0; i < this.slice3.length; i++) {
      const slice = this.slice3[i] as HTMLElement;
      const circle = this.pizza[i] as HTMLElement;
      const two = this.slice2[i] as HTMLElement;
      const one = this.slice1[i] as HTMLElement;
      const four = this.slice4[i] as HTMLElement;
      const text = this.text3[i] as HTMLElement;
      const img1 = this.img3[i] as HTMLElement;
      const img2 = this.img1[i] as HTMLElement;
      const img3 = this.img2[i] as HTMLElement;
      const img4 = this.img4[i] as HTMLElement;
      const arena = this.heading3[i] as HTMLElement;
      slice.addEventListener('click', (event) => {
        console.log('HI')
        img1.style.filter = `blur(5px)`;
        text.style.opacity = `1`;
        text.style.zIndex = `2`;
        slice.style.transition = `transform 0.5s`
        slice.style.transform = `scale(1) translate(-100px, -300px) rotate(-180deg)`;
        circle.style.transition = `transform 1s`;
        // circle.style.transform = `translate(500px, 300px)`;
        two.style.transform = `translate(-300px, -150px) rotate(-90deg)`;
        one.style.transform = `translate(-300px, -150px) rotate(0deg)`;
        four.style.transform = `translate(-300px, -150px)  rotate(90deg)`;
        img2.style.backgroundSize = `5rem 5rem`;
        img3.style.backgroundSize = `5rem 5rem`;
        img4.style.backgroundSize = `5rem 5rem`;
        setTimeout(function () {
          slice.style.height = `50rem`;
          slice.style.width = `50rem`;
          circle.style.height = `250px`;
          circle.style.width = `250px`;
          two.style.height = `250px`;
          one.style.height = `250px`;
          four.style.height = `250px`;
          two.style.width = `250px`;
          one.style.width = `250px`;
          four.style.width = `250px`;
        }, 100);
      });
      document.addEventListener('mousedown', (event) => {
        // Reset the translation when the mouse leaves the element
        const targetElement: HTMLElement = event.target as HTMLElement;
        // if (slice && !slice.contains(targetElement)) {
        img1.style.filter = `blur(0px)`;
        text.style.opacity = `0`;
        slice.style.transition = `transform 0.5s`
        slice.style.transform = `translate(0,0)`;
        circle.style.transition = `transform 1s`;
        slice.style.transform = `scale(1) translate(0,0) rotate(-180deg)`;
        two.style.transform = `translate(0, 0) rotate(270deg)`;
        one.style.transform = `translate(0, 0) rotate(0deg)`;
        four.style.transform = `translate(0, 0)  rotate(90deg)`;
        img2.style.backgroundSize = `10rem 10rem`;
        img3.style.backgroundSize = `10rem 10rem`;
        img4.style.backgroundSize = `11rem 15rem`;
        setTimeout(function () {
          slice.style.height = `500px`;
          slice.style.width = `500px`;
          circle.style.height = `500px`;
          circle.style.width = `500px`;
          two.style.height = `500px`
          one.style.height = `500px`
          four.style.height = `500px`
          two.style.width = `500px`
          one.style.width = `500px`
          four.style.width = `500px`
        }, 100);
        // }
      });

    }

    for (let i = 0; i < this.slice4.length; i++) {
      const slice = this.slice4[i] as HTMLElement;
      const circle = this.pizza[i] as HTMLElement;
      const two = this.slice2[i] as HTMLElement;
      const three = this.slice3[i] as HTMLElement;
      const one = this.slice1[i] as HTMLElement;
      const text = this.text4[i] as HTMLElement;
      const img1 = this.img4[i] as HTMLElement;
      const img2 = this.img1[i] as HTMLElement;
      const img3 = this.img3[i] as HTMLElement;
      const img4 = this.img2[i] as HTMLElement;
      const arena = this.heading4[i] as HTMLElement;
      slice.addEventListener('click', (event) => {
        console.log('HI')
        img1.style.filter = `blur(5px)`;
        text.style.opacity = `1`;
        text.style.zIndex = `3`;
        slice.style.transition = `transform 0.5s`
        slice.style.transform = `scale(1) translate(-200px, -100px) rotate(-270deg)`;
        circle.style.transition = `transform 1s`;
        // circle.style.transform = `translate(500px, 300px)`;
        two.style.transform = `translate(-300px, 300px) rotate(-90deg)`;
        three.style.transform = `translate(-300px, 300px) rotate(-180deg)`;
        one.style.transform = `translate(-300px, 300px)  rotate(0deg)`;
        img2.style.backgroundSize = `5rem 5rem`;
        img3.style.backgroundSize = `5rem 5rem`;
        img4.style.backgroundSize = `5rem 5rem`;
        setTimeout(function () {
          slice.style.height = `50rem`;
          slice.style.width = `50rem`;
          circle.style.height = `250px`;
          circle.style.width = `250px`;
          two.style.height = `250px`;
          three.style.height = `250px`;
          one.style.height = `250px`;
          two.style.width = `250px`;
          three.style.width = `250px`;
          one.style.width = `250px`;
        }, 100);
      });
      document.addEventListener('mousedown', (event) => {
        // Reset the translation when the mouse leaves the element
        const targetElement: HTMLElement = event.target as HTMLElement;
        // if (slice && !slice.contains(targetElement)) {
        img1.style.filter = `blur(0px)`;
        text.style.opacity = `0`;
        slice.style.transition = `transform 0.5s`
        slice.style.transform = `scale(1) translate(0px, 0px) rotate(-270deg)`;
        circle.style.transition = `transform 1s`;
        circle.style.transform = `translate(0,0)`;
        two.style.transform = `translate(0, 0) rotate(270deg)`;
        three.style.transform = `translate(0, 0) rotate(180deg)`;
        one.style.transform = `translate(0, 0)  rotate(0deg)`;
        img2.style.backgroundSize = `10rem 10rem`;
        img3.style.backgroundSize = `10rem 10rem`;
        img4.style.backgroundSize = `10rem 10rem`;
        setTimeout(function () {
          slice.style.height = `500px`;
          slice.style.width = `500px`;
          circle.style.height = `500px`;
          circle.style.width = `500px`;
          two.style.height = `500px`
          three.style.height = `500px`
          one.style.height = `500px`
          two.style.width = `500px`
          three.style.width = `500px`
          one.style.width = `500px`
        }, 100);
        // }
      });

    }

  }

  arena(event: any) {
    console.log('redirect')
    event.stopPropagation();
    window.open('https://inncirclesarena.com');
  }

  winRace(event: any) {
    event.stopPropagation();
    window.open('https://winrace-6894b.web.app/');
  }

  quiz(event: any) {
    event.stopPropagation();
    window.open('https://quiztimex.web.app/');
  }

  diceToss(event: any) {
    event.stopPropagation();
    window.open('https://dicetossg.web.app/');
  }

}