import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  ngOnInit(): void {
    new Typed('.typing', {
      strings: ['Web Developer', 'Software Engineer', 'Problem Solver'],
      typeSpeed: 100,
      backSpeed: 40,
      loop: true,
    });
  }
}
