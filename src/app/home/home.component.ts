import { Component, OnInit } from '@angular/core';
import { appData2D, appData3D } from '../appData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  appData2D;
  appData3D;
  // dialog;
  // appData2D = [
  //   {
  //     "name": "Pomodoro Clock",
  //     "img": "",
  //     "desc": "This is my take on a Pomodoro app to help with my time management. This utilizes the Howler.js library for sound and local storage to cache settings.",
  //     "tech": "HTML, CSS, JavaScript, Howler.js and multiple Canvas element overlays.",
  //     "link": ['/frame/pomodoroclock']
  //   },
  //   {
  //     "name": "Snowflake Overlay",
  //     "img": "",
  //     "desc": "This is an overlay that simulates snowflakes falling. It uses a canvas element for the overlay. There are random wind and intensity changes along with random snowflake properties.",
  //     "tech": "HTML, CSS, JavaScript",
  //     "link": "/frame/snow"
  //   },
  //   {
  //     "name": "Polar Equations",
  //     "img": "",
  //     "desc": "This app allows you to explore Polar Equations. This utilizes local storage to cache settings.",
  //     "tech": "HTML, CSS, JavaScript and multiple Canvas element overlays.",
  //     "link": "/frame/polareqs"
  //   },
  //   {
  //     "name": "Simple Sprite Creator",
  //     "img": "",
  //     "desc": "An advanced pixel art application. It has multiple brush sizes, undo options, smart background, import/export among other features.",
  //     "tech": "HTML, CSS, JavaScript",
  //     "link": "/frame/pixelpaint"
  //   },
  // ];

  // appData3D = [
  //   {
  //     "name": "Tower Game POC",
  //     "img": "",
  //     "desc": "Galvanize Capstone Project  Given 10 days to come up with a project idea using an unfamiliar technology and build it.  It's an object oriented 3D tower game using an event bus architecture for component communication.",
  //     "tech": "Frontend: HTML, CSS, JavaScript and ThreeJS. Backend: Node, Express, Knex, PostgreSQL",
  //     "link": "/frame/towerpoc"
  //   },
  //   {
  //     "name": "Tower Game Prototype",
  //     "img": "",
  //     "desc": "",
  //     "tech": "",
  //     "link": "/frame/tower"
  //   },
  //   {
  //     "name": "3D Music Visualizer",
  //     "img": "",
  //     "desc": "",
  //     "tech": "",
  //     "link": "/frame/mp3player"
  //   },
  //   {
  //     "name": "3D Noise",
  //     "img": "",
  //     "desc": "This is an exploration of perlin and simplex noise. I use the noise to produce multiple 2D and 3D textures.",
  //     "tech": "HTML, CSS, JavaScript and Babylon.JS",
  //     "link": "/frame/noise"
  //   },
  //   {
  //     "name": "RGB Cube",
  //     "img": "",
  //     "desc": "A simple RGB cube",
  //     "tech": "HTML, CSS, JavaScript and Babylon.JS",
  //     "link": "/frame/rgbcube"
  //   },
  //   {
  //     "name": "Menger Sponge w/ Clones",
  //     "img": "",
  //     "desc": "By utilizing CSG I was able to reduce the vertices down to 1,492,120 from 3,840,000. Clones were also used to help with optimization.",
  //     "tech": "HTML, CSS, JavaScript and Babylon.JS",
  //     "link": "/frame/mengerclones"
  //   },
  //   {
  //     "name": "Menger Sponge w/ Planes",
  //     "img": "",
  //     "desc": "This third implementation quickly generates an L4 Menger sponge using only 984 vertices instead of 3,840,000!! It uses planes and textures for the different layers of the sponge.",
  //     "tech": "HTML, CSS, JavaScript and Babylon.JS",
  //     "link": "/frame/mengerplanes"
  //   },
  //   {
  //     "name": "Four Camera Template for BabylonJS",
  //     "img": "",
  //     "desc": "",
  //     "tech": "",
  //     "link": "/frame/babylon4port"
  //   },
  // ];


  constructor() { 
    this.appData2D = appData2D;
    this.appData3D = appData3D;
  }

  ngOnInit(): void {

  }
}
