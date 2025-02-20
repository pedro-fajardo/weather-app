/**
 * Utility functions for image preloading
 */

export const preloadImages = (imageUrls: string[]) => {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
}; 