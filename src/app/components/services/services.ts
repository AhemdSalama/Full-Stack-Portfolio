import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements OnInit {
  apiService = inject(ApiService);
  services: any[] = [];

  ngOnInit(): void {
    this.apiService.getServices().subscribe((data: any) => {
      this.services = data;
      console.log(this.services);
    });
  }
}


