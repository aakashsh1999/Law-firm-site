
/**
 * Utility functions for file handling in the lawyer registration form
 */

// Get file extension from filename
export const getFileExtension = (filename: string): string => {
  return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
};

// Format file size to human readable format
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// Create a thumbnail preview URL for image files
export const createImagePreview = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && typeof e.target.result === 'string') {
        resolve(e.target.result);
      } else {
        reject(new Error('Failed to generate preview'));
      }
    };
    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };
    reader.readAsDataURL(file);
  });
};

// Check if a file is an image
export const isImageFile = (file: File): boolean => {
  const imageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
  return imageTypes.includes(file.type);
};

// Get appropriate icon for file type
export const getFileTypeIcon = (file: File): string => {
  if (isImageFile(file)) {
    return 'image';
  }
  
  switch (file.type) {
    case 'application/pdf':
      return 'file-text';
    case 'application/msword':
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      return 'file-text';
    default:
      return 'file';
  }
};

// Helper to create a fake delay (simulating upload)
export const fakeUploadDelay = (ms = 1000): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
