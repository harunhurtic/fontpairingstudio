export interface ContrastResult {
  ratio: number;
  aa: boolean;
  aaa: boolean;
  aaLarge: boolean;
  aaaLarge: boolean;
  level: 'Fail' | 'AA Large' | 'AA' | 'AAA Large' | 'AAA';
}

// Convert hex color to RGB
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// Calculate relative luminance according to WCAG 2.1
export function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// Calculate contrast ratio between two colors
export function getContrastRatio(color1: string, color2: string): number {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) return 1;
  
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
}

// Check WCAG 2.1 compliance levels
export function checkContrast(foreground: string, background: string): ContrastResult {
  const ratio = getContrastRatio(foreground, background);
  
  const aa = ratio >= 4.5;
  const aaa = ratio >= 7;
  const aaLarge = ratio >= 3;
  const aaaLarge = ratio >= 4.5;
  
  let level: ContrastResult['level'] = 'Fail';
  if (aaa) level = 'AAA';
  else if (aaaLarge) level = 'AAA Large';
  else if (aa) level = 'AA';
  else if (aaLarge) level = 'AA Large';
  
  return {
    ratio: Math.round(ratio * 100) / 100,
    aa,
    aaa,
    aaLarge,
    aaaLarge,
    level
  };
}

// Generate random color
export function generateRandomColor(): string {
  const colors = [
    '#000000', '#1a1a1a', '#333333', '#666666', '#999999', '#cccccc', '#ffffff',
    '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff',
    '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3',
    '#54a0ff', '#5f27cd', '#00d2d3', '#ff9f43', '#ee5a24', '#0984e3',
    '#6c5ce7', '#fd79a8', '#e17055', '#00b894', '#e84393', '#2d3436'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Get readable text color based on background
export function getReadableTextColor(backgroundColor: string): string {
  const rgb = hexToRgb(backgroundColor);
  if (!rgb) return '#000000';
  
  const luminance = getLuminance(rgb.r, rgb.g, rgb.b);
  return luminance > 0.5 ? '#000000' : '#ffffff';
}

// Generate accessible color pair that meets WCAG AA standards
export function generateAccessibleColorPair(): { textColor: string; backgroundColor: string } {
  const colors = [
    '#000000', '#1a1a1a', '#333333', '#666666', '#999999', '#cccccc', '#ffffff',
    '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff',
    '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3',
    '#54a0ff', '#5f27cd', '#00d2d3', '#ff9f43', '#ee5a24', '#0984e3',
    '#6c5ce7', '#fd79a8', '#e17055', '#00b894', '#e84393', '#2d3436'
  ];
  
  let attempts = 0;
  const maxAttempts = 100;
  
  while (attempts < maxAttempts) {
    const backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    const textColor = colors[Math.floor(Math.random() * colors.length)];
    
    if (backgroundColor !== textColor) {
      const ratio = getContrastRatio(textColor, backgroundColor);
      if (ratio >= 4.5) { // WCAG AA standard
        return { textColor, backgroundColor };
      }
    }
    
    attempts++;
  }
  
  // Fallback to guaranteed accessible pairing
  return { textColor: '#000000', backgroundColor: '#ffffff' };
}