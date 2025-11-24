// services/booking.ts

export interface BookingData {
    name: string;
    email: string;
    phone: string;
    service: string;
    budget: string;
    timeline: string;
    message: string;
  }
  
  export interface BookingResponse {
    success: boolean;
    message?: string;
    bookingId?: string;
    error?: string;
    details?: Array<{
      field: string;
      message: string;
    }>;
  }
  
  export class BookingService {
    private static readonly API_ENDPOINT = '/api/bookings';
  
    static async submitBooking(data: BookingData): Promise<BookingResponse> {
      try {
        const response = await fetch(this.API_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        const result = await response.json();
  
        if (!response.ok) {
          throw new Error(result.error || 'Failed to submit booking');
        }
  
        return result;
      } catch (error) {
        console.error('Booking submission error:', error);
        
        if (error instanceof Error) {
          return {
            success: false,
            error: error.message,
          };
        }
  
        return {
          success: false,
          error: 'Network error. Please check your connection and try again.',
        };
      }
    }
  
    static validateBookingData(data: BookingData): string[] {
      const errors: string[] = [];
  
      if (!data.name || data.name.trim().length < 2) {
        errors.push('Name must be at least 2 characters long');
      }
  
      if (!data.email || !this.isValidEmail(data.email)) {
        errors.push('Please enter a valid email address');
      }
  
      if (!data.phone || data.phone.length < 10) {
        errors.push('Please enter a valid phone number');
      }
  
      if (!data.service) {
        errors.push('Please select a service');
      }
  
      if (!data.budget) {
        errors.push('Please select a budget range');
      }
  
      if (!data.timeline) {
        errors.push('Please select a timeline');
      }
  
      if (!data.message || data.message.trim().length < 10) {
        errors.push('Please provide a detailed project description (at least 10 characters)');
      }
  
      return errors;
    }
  
    private static isValidEmail(email: string): boolean {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  }
  