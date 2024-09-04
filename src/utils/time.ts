export function formatTime(minutes: number): string {
    if (isNaN(minutes) || minutes < 0) {
      throw new Error("Invalid input: minutes must be a non-negative number.");
    }
  
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
  
    // If there are no hours, return only the minutes in MM:00 format
    if (hours === 0) {
      return `${remainingMinutes.toString().padStart(2, '0')}:00 hour`;
    }
  
    // Return the time in HH:MM format
    return `${hours.toString().padStart(2, '0')}:${remainingMinutes.toString().padStart(2, '0')} hour`;
  }