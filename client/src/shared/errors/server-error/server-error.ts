import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ApiError } from '../../../types/error';

@Component({
  selector: 'app-server-error',
  imports: [],
  templateUrl: './server-error.html',
  styleUrl: './server-error.css'
})
export class ServerError {
  protected error: ApiError | null = null; // Allow null to avoid initialization error
  private router = inject(Router);
  protected showDetails = false;
  constructor() {
    const navigation = this.router.getCurrentNavigation();
    this.error = (navigation?.extras?.state?.['error'] as ApiError | null) ?? null; // Safely assign with fallback
  }

  detailsToggle(){
    this.showDetails = !this.showDetails;
  }
}
