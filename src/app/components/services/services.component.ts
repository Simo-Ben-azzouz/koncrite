import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'] // Fixed 'styleUrl' typo to 'styleUrls'
})
export class ServicesComponent implements OnInit {
  services: any[] = []; // Corrected the variable name to hold the services list

  constructor(private serviceService: ServiceService) {} // Fixed naming for better readability

  ngOnInit(): void {
    this.getAllServices();
  }

  getAllServices(): void {
    this.serviceService.getAll().subscribe(
      response => {
        this.services = response.data; // Assign the `data` part of the API response to `services`
      },
      error => {
        console.error('Error fetching services:', error); // Added error handling
      }
    );
  }
}
