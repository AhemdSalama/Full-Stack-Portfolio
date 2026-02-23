import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio implements OnInit {
  apiService = inject(ApiService);
  projects: any[] = [];

  ngOnInit(): void {
    this.apiService.getProjects().subscribe((data: any) => {
      this.projects = data;
      console.log(this.projects);
    });
  }
}
