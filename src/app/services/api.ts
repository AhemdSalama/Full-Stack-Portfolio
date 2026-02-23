import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);
  private apiUrl = `http://localhost:5000/api`;

  getProjects() {
    return this.http.get(`${this.apiUrl}/projects`);
  }

  getSkills() {
    return this.http.get(`${this.apiUrl}/skills`);
  }
  getServices() {
    return this.http.get(`${this.apiUrl}/services`);
  }
  getExperience() {
    return this.http.get(`${this.apiUrl}/experience`);
  }
  getEducation() {
    return this.http.get(`${this.apiUrl}/education`);
  }
  getProfile() {
    return this.http.get(`${this.apiUrl}/profile`);
  }
}
