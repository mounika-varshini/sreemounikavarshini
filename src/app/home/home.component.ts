import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ele: HTMLElement = document.documentElement;

  ngOnInit(): void {

    console.log('home')
    //   //setTimeout(function () { $("#name").show(); }, 3000);
    // const root = document.querySelector(':root') as any;
    // const hide = document.getElementById('hide');
    // if(hide && root){
    //   let pos = hide.getBoundingClientRect();
    //   root.style.setProperty('--top',pos.top);
    //   root.style.setProperty('--left',pos.left);
    //   root.style.setProperty('--height',pos.height);
    //   root.style.setProperty('--width',pos.width);
    //   console.log(pos)
    //   hide.addEventListener('mousemove', (e: any) => {
    //     hide.style.setProperty('--x', e.clientX + 'px')
    //     hide.style.setProperty('--y', e.clientY + 'px')
    //   })
    // }
    //   if (hide) {
    //   }

    //ninivert, September 2016

    /*VARIABLES*/

  //   const canvas = document.getElementsByTagName('canvas')[0] as HTMLCanvasElement;
  //   canvas.width = document.body.clientWidth;
  //   canvas.height = document.body.clientHeight;

  //   const ctx = canvas.getContext('2d')!;



  //   /*Modify options here*/

  //   //possible characters that will appear
  //   const characterList: string[] = ['HTML', 'SCSS', 'JS', 'TS', 'Angular', 'Animations','GIT','JSON','Node','Bootstrap','REST','npm','ES5/ES6'];

  //   //stocks possible character attributes
  //   const layers = {
  //     n: 4, //number of layers
  //     letters: [200, 50, 10,5], //letters per layer (starting from the deepest layer)
  //     coef: [0.3, 0.4, 0.6, 0.8], //how much the letters move from the mouse (starting from the deepest layer)
  //     size: [10, 15, 20, 30], //font size of the letters (starting from the deepest layer)
  //     color: ['#fff', '#eee', '#ccc', '#bbb', '#aaa'], //color of the letters (starting from the deepest layer)
  //     font: 'Courier' //font family (of every layer)
  //   };



  //   /*End of options*/

  //   type Character = {
  //     char: string;
  //     font: string;
  //     size: number;
  //     color: string;
  //     layer: number;
  //     coef: number;
  //     posX: number;
  //     posY: number;
  //   };

  //   const characters: Character[] = [];
  //   let mouseX = document.body.clientWidth / 2;
  //   let mouseY = document.body.clientHeight / 2;

  //   const rnd = {
  //     btwn: function (min: number, max: number) {
  //       return Math.floor(Math.random() * (max - min));
  //     },
  //     choose: function (list: string[]) {
  //       return list[rnd.btwn(0, list.length)];
  //     }
  //   };



  //   /*LETTER DRAWING*/

  //   function drawLetter(char: Character) {
  //     ctx.font = char.size + 'px ' + char.font;
  //     ctx.fillStyle = char.color;

  //     const x = char.posX + (mouseX - canvas.width / 2) * char.coef;
  //     const y = char.posY + (mouseY - canvas.height / 2) * char.coef;

  //     ctx.fillText(char.char, x, y);
  //   }



  //   /*ANIMATION*/

  //   document.onmousemove = function (ev: MouseEvent) {
  //     mouseX = ev.pageX - canvas.offsetLeft;
  //     mouseY = ev.pageY - canvas.offsetTop;

  //     if (window.requestAnimationFrame(update)) {
  //       requestAnimationFrame(update);
  //     } else {
  //       update();
  //     }
  //   };

  //   function update() {
  //     clear();
  //     render();
  //   }

  //   function clear() {
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   }

  //   function render() {
  //     for (let i = 0; i < characters.length; i++) {
  //       drawLetter(characters[i]);
  //     }
  //   }


  //   /*INITIALIZE*/

  //   function createLetters(): void {
  //     for (let i: number = 0; i < layers.n; i++) {
  //       for (let j: number = 0; j < layers.letters[i]; j++) {
  //         const character: string = rnd.choose(characterList);
  //         const x: number = rnd.btwn(0, canvas.width);
  //         const y: number = rnd.btwn(0, canvas.height);

  //         characters.push({
  //           char: character,
  //           font: layers.font,
  //           size: layers.size[i],
  //           color: layers.color[i],
  //           layer: i,
  //           coef: layers.coef[i],
  //           posX: x,
  //           posY: y
  //         });
  //       }
  //     }
  //   }

  //   createLetters();
  //   update();



  //   /*READJUST CANVAS AFTER RESIZE*/

  //   window.onresize = (): void => {
  //     location.reload();
  //   };

  //   // if(document){
  //   //   document.getElementById('close').onclick = (): void => {
  //   //     const elem = document.getElementById('close').parentElement;
  //   //     if (elem) {
  //   //         elem.style.visibility = 'hidden';
  //   //         elem.style.opacity = '0';
  //   //     }
  //   //   };
  //   // }

  // }

  }




}
