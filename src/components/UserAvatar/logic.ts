// Function to get initials from a name
export const getInitials = (name: string = ''): string => {
    if (!name) return '?';
    
    // Split name into parts
    const nameParts = name.trim().split(/\s+/);
    
    if (nameParts.length === 1) {
      // Single name/word
      return nameParts[0].charAt(0).toUpperCase();
    } else if (nameParts.length > 1) {
      // First and Last name
      const firstNameInitial = nameParts[0].charAt(0);
      const lastNameInitial = nameParts[nameParts.length - 1].charAt(0);
      return `${firstNameInitial}${lastNameInitial}`.toUpperCase();
    } else {
      return '?'; // Should not happen if name is trimmed
    }
  }; 