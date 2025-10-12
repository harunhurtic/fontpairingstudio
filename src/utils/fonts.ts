export interface FontPair {
  header: string;
  body: string;
  category: string;
  justification: string;
  bestUsedFor: string[];
  headerWeight: {
    low: number;
    medium: number;
    high: number;
  };
  bodyWeight: {
    low: number;
    medium: number;
    high: number;
  };
  headerStyle: {
    low: string;
    medium: string;
    high: string;
  };
  bodyStyle: {
    low: string;
    medium: string;
    high: string;
  };
}

export interface GoogleFont {
  name: string;
  weights: number[];
  styles: string[];
  category: 'serif' | 'sans-serif' | 'display' | 'handwriting' | 'monospace';
  vibe: string[];
}

export const googleFonts: GoogleFont[] = [
  // Modern Sans-Serif (38 fonts)
  { name: 'Inter', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['modern', 'professional', 'minimal'] },
  { name: 'Poppins', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['modern', 'friendly', 'playful'] },
  { name: 'Montserrat', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['modern', 'professional'] },
  { name: 'DM Sans', weights: [400, 500, 700], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['modern', 'minimal', 'clean'] },
  { name: 'Plus Jakarta Sans', weights: [200, 300, 400, 500, 600, 700, 800], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['modern', 'friendly', 'minimal'] },
  { name: 'Manrope', weights: [200, 300, 400, 500, 600, 700, 800], styles: ['normal'], category: 'sans-serif', vibe: ['modern', 'professional', 'clean'] },
  { name: 'Space Grotesk', weights: [300, 400, 500, 600, 700], styles: ['normal'], category: 'sans-serif', vibe: ['modern', 'bold', 'impactful'] },
  { name: 'Figtree', weights: [300, 400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['modern', 'friendly', 'clean'] },
  { name: 'Outfit', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal'], category: 'sans-serif', vibe: ['modern', 'minimal', 'bold'] },
  { name: 'Lexend', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal'], category: 'sans-serif', vibe: ['modern', 'readable', 'friendly'] },
  { name: 'Raleway', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['modern', 'elegant', 'minimal'] },
  { name: 'Source Sans 3', weights: [200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['modern', 'professional', 'clean'] },
  { name: 'Cabin', weights: [400, 500, 600, 700], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['modern', 'friendly', 'clean'] },
  { name: 'Public Sans', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['modern', 'professional', 'minimal'] },
  { name: 'Sora', weights: [100, 200, 300, 400, 500, 600, 700, 800], styles: ['normal'], category: 'sans-serif', vibe: ['modern', 'friendly', 'clean'] },
  { name: 'Red Hat Display', weights: [300, 400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['modern', 'bold', 'friendly'] },
  { name: 'Red Hat Text', weights: [300, 400, 500, 600, 700], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['modern', 'readable', 'friendly'] },
  { name: 'Epilogue', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['modern', 'elegant', 'minimal'] },
  { name: 'Urbanist', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['modern', 'bold', 'clean'] },
  { name: 'Work Sans', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['minimal', 'professional'] },
  { name: 'IBM Plex Sans', weights: [100, 200, 300, 400, 500, 600, 700], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['minimal', 'professional', 'modern'] },
  { name: 'Jost', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['modern', 'minimal', 'clean'] },
  { name: 'Archivo', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['modern', 'professional', 'clean'] },
  { name: 'Barlow', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['professional', 'modern', 'clean'] },
  { name: 'Overpass', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['professional', 'modern', 'minimal'] },
  { name: 'Maven Pro', weights: [400, 500, 600, 700, 800, 900], styles: ['normal'], category: 'sans-serif', vibe: ['professional', 'friendly', 'modern'] },
  { name: 'Oxygen', weights: [300, 400, 700], styles: ['normal'], category: 'sans-serif', vibe: ['professional', 'clean', 'minimal'] },
  { name: 'Asap', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['friendly', 'readable', 'modern'] },
  { name: 'Be Vietnam Pro', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['modern', 'friendly', 'clean'] },
  { name: 'Spline Sans', weights: [300, 400, 500, 600, 700], styles: ['normal'], category: 'sans-serif', vibe: ['modern', 'minimal', 'clean'] },
  { name: 'Hanken Grotesk', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['modern', 'professional', 'minimal'] },
  { name: 'General Sans', weights: [400, 500, 600, 700], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['modern', 'friendly', 'minimal'] },
  { name: 'Karla', weights: [200, 300, 400, 500, 600, 700, 800], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['friendly', 'minimal', 'clean'] },
  { name: 'Hind', weights: [300, 400, 500, 600, 700], styles: ['normal'], category: 'sans-serif', vibe: ['minimal', 'clean', 'readable'] },
  { name: 'Encode Sans', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal'], category: 'sans-serif', vibe: ['modern', 'clean', 'minimal'] },
  { name: 'Instrument Sans', weights: [400, 500, 600, 700], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['modern', 'minimal', 'professional'] },
  { name: 'Onest', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal'], category: 'sans-serif', vibe: ['modern', 'minimal', 'clean'] },
  { name: 'Bricolage Grotesque', weights: [200, 300, 400, 500, 600, 700, 800], styles: ['normal'], category: 'sans-serif', vibe: ['modern', 'creative', 'bold'] },
  
  // Friendly/Readable Sans-Serif (24 fonts)
  { name: 'Nunito', weights: [200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['friendly', 'playful', 'modern'] },
  { name: 'Open Sans', weights: [300, 400, 500, 600, 700, 800], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['friendly', 'readable', 'professional'] },
  { name: 'Lato', weights: [100, 300, 400, 700, 900], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['friendly', 'professional'] },
  { name: 'Quicksand', weights: [300, 400, 500, 600, 700], styles: ['normal'], category: 'sans-serif', vibe: ['friendly', 'modern', 'playful'] },
  { name: 'Rubik', weights: [300, 400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['friendly', 'modern', 'playful'] },
  { name: 'Nunito Sans', weights: [200, 300, 400, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['friendly', 'professional', 'clean'] },
  { name: 'Roboto', weights: [100, 300, 400, 500, 700, 900], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['minimal', 'modern', 'clean'] },
  { name: 'PT Sans', weights: [400, 700], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['minimal', 'readable', 'professional'] },
  { name: 'Fira Sans', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['minimal', 'modern', 'clean'] },
  { name: 'Mulish', weights: [200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['friendly', 'modern', 'clean'] },
  { name: 'Noto Sans', weights: [400, 700], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['minimal', 'readable', 'clean'] },
  { name: 'Varela Round', weights: [400], styles: ['normal'], category: 'sans-serif', vibe: ['friendly', 'playful', 'clean'] },
  { name: 'Alegreya Sans', weights: [100, 300, 400, 500, 700, 800, 900], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['friendly', 'readable', 'modern'] },
  { name: 'Josefin Sans', weights: [100, 200, 300, 400, 500, 600, 700], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['modern', 'elegant', 'playful'] },
  { name: 'Titillium Web', weights: [200, 300, 400, 600, 700, 900], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['professional', 'modern', 'clean'] },
  { name: 'Cantarell', weights: [400, 700], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['professional', 'clean', 'readable'] },
  { name: 'Droid Sans', weights: [400, 700], styles: ['normal'], category: 'sans-serif', vibe: ['readable', 'professional', 'clean'] },
  { name: 'Comfortaa', weights: [300, 400, 500, 600, 700], styles: ['normal'], category: 'sans-serif', vibe: ['friendly', 'playful', 'modern'] },
  { name: 'Fredoka', weights: [300, 400, 500, 600, 700], styles: ['normal'], category: 'sans-serif', vibe: ['playful', 'friendly', 'bold'] },
  { name: 'Atkinson Hyperlegible', weights: [400, 700], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['readable', 'professional', 'clean'] },
  { name: 'Readex Pro', weights: [200, 300, 400, 500, 600, 700], styles: ['normal'], category: 'sans-serif', vibe: ['readable', 'modern', 'friendly'] },
  { name: 'Schibsted Grotesk', weights: [400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['readable', 'modern', 'professional'] },
  { name: 'Commissioner', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal'], category: 'sans-serif', vibe: ['readable', 'modern', 'clean'] },
  { name: 'Anybody', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['readable', 'friendly', 'modern'] },
  
  // Classic Serif (32 fonts)
  { name: 'Playfair Display', weights: [400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'serif', vibe: ['classic', 'elegant', 'editorial'] },
  { name: 'Crimson Text', weights: [400, 600, 700], styles: ['normal', 'italic'], category: 'serif', vibe: ['classic', 'readable', 'editorial'] },
  { name: 'Cormorant Garamond', weights: [300, 400, 500, 600, 700], styles: ['normal', 'italic'], category: 'serif', vibe: ['classic', 'elegant'] },
  { name: 'Lora', weights: [400, 500, 600, 700], styles: ['normal', 'italic'], category: 'serif', vibe: ['classic', 'readable', 'friendly'] },
  { name: 'Crimson Pro', weights: [200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'serif', vibe: ['classic', 'editorial', 'readable'] },
  { name: 'Spectral', weights: [200, 300, 400, 500, 600, 700, 800], styles: ['normal', 'italic'], category: 'serif', vibe: ['classic', 'elegant', 'editorial'] },
  { name: 'EB Garamond', weights: [400, 500, 600, 700, 800], styles: ['normal', 'italic'], category: 'serif', vibe: ['classic', 'elegant', 'readable'] },
  { name: 'Merriweather', weights: [300, 400, 700, 900], styles: ['normal', 'italic'], category: 'serif', vibe: ['readable', 'editorial', 'classic'] },
  { name: 'Source Serif 4', weights: [200, 300, 400, 600, 700, 900], styles: ['normal', 'italic'], category: 'serif', vibe: ['readable', 'editorial', 'professional'] },
  { name: 'Libre Baskerville', weights: [400, 700], styles: ['normal', 'italic'], category: 'serif', vibe: ['readable', 'classic', 'editorial'] },
  { name: 'Alegreya', weights: [400, 500, 700, 800, 900], styles: ['normal', 'italic'], category: 'serif', vibe: ['editorial', 'classic', 'readable'] },
  { name: 'IBM Plex Serif', weights: [100, 200, 300, 400, 500, 600, 700], styles: ['normal', 'italic'], category: 'serif', vibe: ['editorial', 'modern', 'professional'] },
  { name: 'PT Serif', weights: [400, 700], styles: ['normal', 'italic'], category: 'serif', vibe: ['readable', 'professional', 'classic'] },
  { name: 'Droid Serif', weights: [400, 700], styles: ['normal', 'italic'], category: 'serif', vibe: ['readable', 'professional', 'classic'] },
  { name: 'Cardo', weights: [400, 700], styles: ['normal', 'italic'], category: 'serif', vibe: ['classic', 'editorial', 'elegant'] },
  { name: 'Vollkorn', weights: [400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'serif', vibe: ['classic', 'readable', 'editorial'] },
  { name: 'Literata', weights: [200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'serif', vibe: ['editorial', 'readable', 'professional'] },
  { name: 'Zilla Slab', weights: [300, 400, 500, 600, 700], styles: ['normal', 'italic'], category: 'serif', vibe: ['editorial', 'modern', 'readable'] },
  { name: 'Bitter', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'serif', vibe: ['editorial', 'readable', 'modern'] },
  { name: 'Arvo', weights: [400, 700], styles: ['normal', 'italic'], category: 'serif', vibe: ['classic', 'readable', 'friendly'] },
  { name: 'Domine', weights: [400, 500, 600, 700], styles: ['normal'], category: 'serif', vibe: ['classic', 'readable', 'modern'] },
  { name: 'Neuton', weights: [200, 300, 400, 700, 800], styles: ['normal', 'italic'], category: 'serif', vibe: ['classic', 'elegant', 'readable'] },
  { name: 'Gentium Book Plus', weights: [400, 700], styles: ['normal', 'italic'], category: 'serif', vibe: ['classic', 'readable', 'editorial'] },
  { name: 'Crete Round', weights: [400], styles: ['normal', 'italic'], category: 'serif', vibe: ['classic', 'friendly', 'readable'] },
  { name: 'Old Standard TT', weights: [400, 700], styles: ['normal', 'italic'], category: 'serif', vibe: ['classic', 'elegant', 'editorial'] },
  { name: 'Noto Serif', weights: [400, 700], styles: ['normal', 'italic'], category: 'serif', vibe: ['readable', 'professional', 'clean'] },
  { name: 'Libre Caslon Text', weights: [400, 700], styles: ['normal', 'italic'], category: 'serif', vibe: ['classic', 'readable', 'editorial'] },
  { name: 'Adamina', weights: [400], styles: ['normal'], category: 'serif', vibe: ['classic', 'elegant', 'readable'] },
  { name: 'Lusitana', weights: [400, 700], styles: ['normal'], category: 'serif', vibe: ['classic', 'elegant', 'editorial'] },
  { name: 'Petrona', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'serif', vibe: ['classic', 'elegant', 'readable'] },
  { name: 'Fraunces', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'serif', vibe: ['classic', 'elegant', 'creative'] },
  { name: 'Alike', weights: [400], styles: ['normal'], category: 'serif', vibe: ['classic', 'readable', 'clean'] },
  
  // Elegant/Luxury Serif (8 fonts)
  { name: 'Cinzel', weights: [400, 500, 600, 700, 800, 900], styles: ['normal'], category: 'serif', vibe: ['elegant', 'classic', 'impactful'] },
  { name: 'Bodoni Moda', weights: [400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'serif', vibe: ['elegant', 'classic', 'bold'] },
  { name: 'Cormorant', weights: [300, 400, 500, 600, 700], styles: ['normal', 'italic'], category: 'serif', vibe: ['elegant', 'classic', 'readable'] },
  { name: 'Yeseva One', weights: [400], styles: ['normal'], category: 'serif', vibe: ['elegant', 'classic', 'bold'] },
  { name: 'Oranienbaum', weights: [400], styles: ['normal'], category: 'serif', vibe: ['elegant', 'classic', 'editorial'] },
  { name: 'Unna', weights: [400, 700], styles: ['normal', 'italic'], category: 'serif', vibe: ['elegant', 'classic', 'readable'] },
  { name: 'Marcellus', weights: [400], styles: ['normal'], category: 'serif', vibe: ['elegant', 'classic', 'minimal'] },
  { name: 'Forum', weights: [400], styles: ['normal'], category: 'serif', vibe: ['elegant', 'classic', 'minimal'] },
  
  // Slab Serif (8 fonts)
  { name: 'Roboto Slab', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal'], category: 'serif', vibe: ['modern', 'readable', 'professional'] },
  { name: 'Josefin Slab', weights: [100, 200, 300, 400, 500, 600, 700], styles: ['normal', 'italic'], category: 'serif', vibe: ['modern', 'elegant', 'readable'] },
  { name: 'Slabo 27px', weights: [400], styles: ['normal'], category: 'serif', vibe: ['readable', 'editorial', 'classic'] },
  { name: 'Bree Serif', weights: [400], styles: ['normal'], category: 'serif', vibe: ['friendly', 'playful', 'readable'] },
  { name: 'Rokkitt', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'serif', vibe: ['modern', 'bold', 'readable'] },
  { name: 'Coustard', weights: [400, 900], styles: ['normal'], category: 'serif', vibe: ['friendly', 'readable', 'playful'] },
  { name: 'Bevan', weights: [400], styles: ['normal', 'italic'], category: 'serif', vibe: ['bold', 'impactful', 'playful'] },
  { name: 'Ultra', weights: [400], styles: ['normal'], category: 'serif', vibe: ['bold', 'impactful', 'modern'] },
  
  // Display Fonts (22 fonts)
  { name: 'Oswald', weights: [200, 300, 400, 500, 600, 700], styles: ['normal'], category: 'sans-serif', vibe: ['bold', 'impactful', 'modern'] },
  { name: 'Abril Fatface', weights: [400], styles: ['normal'], category: 'display', vibe: ['bold', 'playful', 'impactful'] },
  { name: 'Bebas Neue', weights: [400], styles: ['normal'], category: 'display', vibe: ['bold', 'modern', 'impactful'] },
  { name: 'Righteous', weights: [400], styles: ['normal'], category: 'display', vibe: ['bold', 'playful', 'modern'] },
  { name: 'Fredoka One', weights: [400], styles: ['normal'], category: 'display', vibe: ['playful', 'bold', 'friendly'] },
  { name: 'Archivo Black', weights: [400], styles: ['normal'], category: 'display', vibe: ['bold', 'modern', 'impactful'] },
  { name: 'League Spartan', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal'], category: 'sans-serif', vibe: ['modern', 'bold', 'minimal'] },
  { name: 'Lobster', weights: [400], styles: ['normal'], category: 'display', vibe: ['playful', 'creative', 'bold'] },
  { name: 'Paytone One', weights: [400], styles: ['normal'], category: 'display', vibe: ['bold', 'playful', 'friendly'] },
  { name: 'Alfa Slab One', weights: [400], styles: ['normal'], category: 'display', vibe: ['bold', 'impactful', 'playful'] },
  { name: 'Staatliches', weights: [400], styles: ['normal'], category: 'display', vibe: ['bold', 'modern', 'impactful'] },
  { name: 'Fjalla One', weights: [400], styles: ['normal'], category: 'display', vibe: ['bold', 'modern', 'clean'] },
  { name: 'Anton', weights: [400], styles: ['normal'], category: 'display', vibe: ['bold', 'impactful', 'modern'] },
  { name: 'Bungee', weights: [400], styles: ['normal'], category: 'display', vibe: ['bold', 'playful', 'modern'] },
  { name: 'Bangers', weights: [400], styles: ['normal'], category: 'display', vibe: ['playful', 'bold', 'creative'] },
  { name: 'Teko', weights: [300, 400, 500, 600, 700], styles: ['normal'], category: 'display', vibe: ['bold', 'modern', 'impactful'] },
  { name: 'Pathway Gothic One', weights: [400], styles: ['normal'], category: 'sans-serif', vibe: ['bold', 'modern', 'clean'] },
  { name: 'Russo One', weights: [400], styles: ['normal'], category: 'sans-serif', vibe: ['bold', 'impactful', 'modern'] },
  { name: 'Saira Condensed', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal'], category: 'sans-serif', vibe: ['bold', 'modern', 'minimal'] },
  { name: 'Chakra Petch', weights: [300, 400, 500, 600, 700], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['modern', 'bold', 'creative'] },
  { name: 'Black Ops One', weights: [400], styles: ['normal'], category: 'display', vibe: ['bold', 'impactful', 'creative'] },
  
  // Condensed (8 fonts)
  { name: 'Roboto Condensed', weights: [300, 400, 700], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['modern', 'professional', 'minimal'] },
  { name: 'Open Sans Condensed', weights: [300, 700], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['professional', 'clean', 'minimal'] },
  { name: 'PT Sans Narrow', weights: [400, 700], styles: ['normal'], category: 'sans-serif', vibe: ['professional', 'minimal', 'clean'] },
  { name: 'Yanone Kaffeesatz', weights: [200, 300, 400, 500, 600, 700], styles: ['normal'], category: 'sans-serif', vibe: ['modern', 'playful', 'clean'] },
  { name: 'Archivo Narrow', weights: [400, 500, 600, 700], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['modern', 'professional', 'clean'] },
  { name: 'Abel', weights: [400], styles: ['normal'], category: 'sans-serif', vibe: ['modern', 'minimal', 'clean'] },
  { name: 'Cuprum', weights: [400, 500, 600, 700], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['modern', 'clean', 'minimal'] },
  { name: 'Ruda', weights: [400, 500, 600, 700, 800, 900], styles: ['normal'], category: 'sans-serif', vibe: ['modern', 'bold', 'clean'] },
  
  // Creative/Tech (12 fonts)
  { name: 'Exo 2', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['modern', 'bold', 'creative'] },
  { name: 'Orbitron', weights: [400, 500, 600, 700, 800, 900], styles: ['normal'], category: 'sans-serif', vibe: ['modern', 'bold', 'creative'] },
  { name: 'Saira', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['modern', 'clean', 'minimal'] },
  { name: 'JetBrains Mono', weights: [100, 200, 300, 400, 500, 600, 700, 800], styles: ['normal', 'italic'], category: 'monospace', vibe: ['modern', 'professional', 'minimal'] },
  { name: 'Fira Code', weights: [300, 400, 500, 600, 700], styles: ['normal'], category: 'monospace', vibe: ['modern', 'professional', 'minimal'] },
  { name: 'Source Code Pro', weights: [200, 300, 400, 500, 600, 700, 900], styles: ['normal', 'italic'], category: 'monospace', vibe: ['minimal', 'professional', 'clean'] },
  { name: 'Space Mono', weights: [400, 700], styles: ['normal', 'italic'], category: 'monospace', vibe: ['modern', 'bold', 'minimal'] },
  { name: 'Inconsolata', weights: [200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal'], category: 'monospace', vibe: ['minimal', 'clean', 'modern'] },
  { name: 'Press Start 2P', weights: [400], styles: ['normal'], category: 'display', vibe: ['playful', 'bold', 'creative'] },
  { name: 'Gruppo', weights: [400], styles: ['normal'], category: 'sans-serif', vibe: ['creative', 'playful', 'modern'] },
  { name: 'Audiowide', weights: [400], styles: ['normal'], category: 'display', vibe: ['modern', 'bold', 'creative'] },
  { name: 'Share Tech Mono', weights: [400], styles: ['normal'], category: 'monospace', vibe: ['modern', 'clean', 'creative'] },
  
  // Additional Modern Sans-Serif (9 fonts)
  { name: 'Albert Sans', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['modern', 'friendly', 'clean'] },
  { name: 'Satoshi', weights: [400, 500, 700], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['modern', 'minimal', 'elegant'] },
  { name: 'Arimo', weights: [400, 500, 600, 700], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['minimal', 'professional', 'clean'] },
  { name: 'Yantramanav', weights: [100, 300, 400, 500, 700, 900], styles: ['normal'], category: 'sans-serif', vibe: ['modern', 'minimal', 'clean'] },
  { name: 'Alata', weights: [400], styles: ['normal'], category: 'sans-serif', vibe: ['modern', 'minimal', 'clean'] },
  { name: 'Hind Madurai', weights: [300, 400, 500, 600, 700], styles: ['normal'], category: 'sans-serif', vibe: ['minimal', 'clean', 'readable'] },
  { name: 'Questrial', weights: [400], styles: ['normal'], category: 'sans-serif', vibe: ['minimal', 'clean', 'professional'] },
  { name: 'Almarai', weights: [300, 400, 700, 800], styles: ['normal'], category: 'sans-serif', vibe: ['modern', 'clean', 'minimal'] },
  { name: 'Hind Siliguri', weights: [300, 400, 500, 600, 700], styles: ['normal'], category: 'sans-serif', vibe: ['minimal', 'clean', 'readable'] },
  
  // Additional Serif Fonts (2 fonts)
  { name: 'Tinos', weights: [400, 700], styles: ['normal', 'italic'], category: 'serif', vibe: ['professional', 'readable', 'classic'] },
  { name: 'Gelasio', weights: [400, 500, 600, 700], styles: ['normal', 'italic'], category: 'serif', vibe: ['professional', 'readable', 'clean'] },
  
  // Additional Display Fonts (4 fonts)
  { name: 'Saira Stencil One', weights: [400], styles: ['normal'], category: 'display', vibe: ['bold', 'creative', 'impactful'] },
  { name: 'Khand', weights: [300, 400, 500, 600, 700], styles: ['normal'], category: 'display', vibe: ['modern', 'bold', 'clean'] },
  { name: 'Wallpoet', weights: [400], styles: ['normal'], category: 'display', vibe: ['creative', 'bold', 'modern'] },
  { name: 'Bungee Inline', weights: [400], styles: ['normal'], category: 'display', vibe: ['playful', 'bold', 'creative'] },
  
  // Handwriting/Script (14 fonts)
  { name: 'Dancing Script', weights: [400, 500, 600, 700], styles: ['normal'], category: 'handwriting', vibe: ['playful', 'elegant', 'creative'] },
  { name: 'Caveat', weights: [400, 500, 600, 700], styles: ['normal'], category: 'handwriting', vibe: ['playful', 'friendly', 'creative'] },
  { name: 'Pacifico', weights: [400], styles: ['normal'], category: 'handwriting', vibe: ['playful', 'friendly', 'creative'] },
  { name: 'Great Vibes', weights: [400], styles: ['normal'], category: 'handwriting', vibe: ['elegant', 'creative', 'playful'] },
  { name: 'Amatic SC', weights: [400, 700], styles: ['normal'], category: 'handwriting', vibe: ['playful', 'creative', 'friendly'] },
  { name: 'Shadows Into Light', weights: [400], styles: ['normal'], category: 'handwriting', vibe: ['playful', 'creative', 'friendly'] },
  { name: 'Kaushan Script', weights: [400], styles: ['normal'], category: 'handwriting', vibe: ['creative', 'elegant', 'playful'] },
  { name: 'Satisfy', weights: [400], styles: ['normal'], category: 'handwriting', vibe: ['playful', 'friendly', 'creative'] },
  { name: 'Kalam', weights: [300, 400, 700], styles: ['normal'], category: 'handwriting', vibe: ['playful', 'friendly', 'creative'] },
  { name: 'Patrick Hand', weights: [400], styles: ['normal'], category: 'handwriting', vibe: ['playful', 'creative', 'friendly'] },
  { name: 'Homemade Apple', weights: [400], styles: ['normal'], category: 'handwriting', vibe: ['playful', 'friendly', 'creative'] },
  { name: 'Architects Daughter', weights: [400], styles: ['normal'], category: 'handwriting', vibe: ['playful', 'creative', 'friendly'] },
  { name: 'Covered By Your Grace', weights: [400], styles: ['normal'], category: 'handwriting', vibe: ['playful', 'friendly', 'creative'] },
  { name: 'Permanent Marker', weights: [400], styles: ['normal'], category: 'handwriting', vibe: ['playful', 'bold', 'creative'] },
  
  // Missing fonts referenced in pairings (11 fonts)
  { name: 'Noticia Text', weights: [400, 700], styles: ['normal', 'italic'], category: 'serif', vibe: ['readable', 'editorial', 'professional'] },
  { name: 'Big Shoulders Display', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal'], category: 'display', vibe: ['bold', 'impactful', 'modern'] },
  { name: 'Heebo', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal'], category: 'sans-serif', vibe: ['friendly', 'modern', 'clean'] },
  { name: 'Passion One', weights: [400, 700, 900], styles: ['normal'], category: 'display', vibe: ['bold', 'impactful', 'playful'] },
  { name: 'M PLUS Rounded 1c', weights: [100, 300, 400, 500, 700, 800, 900], styles: ['normal'], category: 'sans-serif', vibe: ['friendly', 'playful', 'modern'] },
  { name: 'Chivo', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['modern', 'bold', 'clean'] },
  { name: 'Catamaran', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal'], category: 'sans-serif', vibe: ['friendly', 'modern', 'readable'] },
  { name: 'Prompt', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal', 'italic'], category: 'sans-serif', vibe: ['modern', 'clean', 'friendly'] },
  { name: 'Kumbh Sans', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal'], category: 'sans-serif', vibe: ['professional', 'modern', 'friendly'] },
  { name: 'Spartan', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], styles: ['normal'], category: 'sans-serif', vibe: ['modern', 'minimal', 'bold'] },
  { name: 'Lilita One', weights: [400], styles: ['normal'], category: 'display', vibe: ['playful', 'bold', 'friendly'] },
];

export const styles = [
  'modern',
  'classic',
  'friendly',
  'professional',
  'minimal',
  'playful',
  'bold',
  'elegant',
  'readable',
  'editorial',
  'impactful',
  'clean',
  'creative'
];

// For backwards compatibility
export const vibes = styles;

// Enhanced font pairings - 91 curated combinations with detailed justifications
export const fontPairings: FontPair[] = [
  // === LOW CONTRAST PAIRINGS === (Same family or very similar styles)
  
  { 
    header: 'Inter', body: 'Inter', category: 'modern',
    justification: 'Using Inter for both headers and body text creates a clean, cohesive design system perfect for modern interfaces. This monochromatic approach minimizes visual noise while maintaining excellent readability across all screen sizes. The subtle weight variations between headings and body copy establish a clear hierarchy without introducing stylistic contrast.',
    bestUsedFor: ['SaaS applications', 'Design systems', 'Admin dashboards', 'Product documentation', 'Technical blogs'],
    headerWeight: { low: 500, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 400, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Poppins', body: 'Poppins', category: 'friendly',
    justification: 'Poppins\' geometric construction with perfectly circular forms creates an approachable, modern aesthetic. When used for both headers and body, it delivers exceptional consistency while the extensive weight range (from 100 to 900) provides ample opportunity for establishing clear typographic hierarchy through size and weight alone.',
    bestUsedFor: ['Marketing websites', 'E-commerce stores', 'Mobile apps', 'Startup landing pages', 'Consumer brands'],
    headerWeight: { low: 500, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 400, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Montserrat', body: 'Montserrat', category: 'professional',
    justification: 'Inspired by the urban typography of Buenos Aires, Montserrat brings geometric precision with a human touch. This monochromatic pairing works exceptionally well for corporate communications and professional portfolios. The font\'s moderate x-height and generous spacing ensure excellent legibility at all sizes, making it ideal for data-heavy interfaces.',
    bestUsedFor: ['Corporate websites', 'Business presentations', 'Financial services', 'Real estate', 'Professional portfolios'],
    headerWeight: { low: 500, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 400, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Lato', body: 'Lato', category: 'minimal',
    justification: 'Lato\'s semi-rounded letterforms give warmth to an otherwise neutral sans-serif. Using it throughout your design creates a friendly yet professional atmosphere perfect for content-focused websites. The font was specifically designed to look serious yet friendly, making it versatile for both corporate and creative contexts.',
    bestUsedFor: ['Content marketing', 'Educational platforms', 'Non-profit organizations', 'Government websites', 'Healthcare portals'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 300, medium: 400, high: 400 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Raleway', body: 'Raleway', category: 'elegant',
    justification: 'Raleway is an elegant sans-serif with a unique combination of thin weights and distinctive character. Perfect for fashion, lifestyle, and creative industries, this pairing creates sophisticated visual harmony. The font\'s tall x-height and wide letter spacing contribute to excellent readability, even at smaller sizes.',
    bestUsedFor: ['Fashion brands', 'Luxury goods', 'Creative agencies', 'Art galleries', 'Photography portfolios'],
    headerWeight: { low: 500, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 400, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Work Sans', body: 'Work Sans', category: 'minimal',
    justification: 'Designed specifically for screen interfaces, Work Sans offers optimized letter spacing and clear character differentiation. This superfamily pairing ensures maximum legibility for both short headlines and extended reading. The subtle grotesque influences give it character without compromising professional neutrality.',
    bestUsedFor: ['Web applications', 'UI/UX projects', 'Developer tools', 'Knowledge bases', 'Support documentation'],
    headerWeight: { low: 500, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 400, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Roboto', body: 'Roboto', category: 'minimal',
    justification: 'As Google\'s flagship font, Roboto combines geometric forms with open curves for a natural reading rhythm. The dual nature—mechanical skeleton with friendly, approachable curves—makes it incredibly versatile. Using Roboto throughout creates instantly recognizable, trustworthy interfaces that feel contemporary and accessible.',
    bestUsedFor: ['Android apps', 'Google-ecosystem products', 'Tech startups', 'Digital services', 'Mobile-first websites'],
    headerWeight: { low: 400, medium: 500, high: 700 },
    bodyWeight: { low: 300, medium: 400, high: 400 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Open Sans', body: 'Open Sans', category: 'friendly',
    justification: 'Open Sans was designed with an upright stress, open forms, and a neutral yet friendly appearance. This humanist sans-serif excels in both print and digital environments. The extensive character set supports 897 glyphs, making it excellent for multilingual projects while maintaining consistent brand identity.',
    bestUsedFor: ['Multilingual websites', 'Accessibility-focused projects', 'Educational content', 'Community platforms', 'Public sector'],
    headerWeight: { low: 500, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 400, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Lexend', body: 'Lexend', category: 'readable',
    justification: 'Lexend was specifically designed to improve reading proficiency based on scientific research. Using it throughout creates interfaces optimized for accessibility and reading comprehension. The unique letterforms and spacing reduce visual stress, making it ideal for educational platforms and inclusive design.',
    bestUsedFor: ['Educational platforms', 'Reading apps', 'Accessibility tools', 'Learning management', 'Dyslexia-friendly content'],
    headerWeight: { low: 400, medium: 500, high: 600 },
    bodyWeight: { low: 400, medium: 400, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Atkinson Hyperlegible', body: 'Atkinson Hyperlegible', category: 'readable',
    justification: 'Created by the Braille Institute, Atkinson Hyperlegible was designed to maximize legibility for low vision readers. Its distinctive letterforms prevent character confusion while maintaining aesthetic appeal. Using it throughout creates exceptionally accessible interfaces that benefit all users, especially those with visual impairments.',
    bestUsedFor: ['Accessibility-first sites', 'Healthcare platforms', 'Senior services', 'Vision assistance', 'Inclusive products'],
    headerWeight: { low: 400, medium: 700, high: 700 },
    bodyWeight: { low: 400, medium: 400, high: 400 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  // === MEDIUM CONTRAST PAIRINGS ===
  
  { 
    header: 'Abril Fatface', body: 'Lato', category: 'bold',
    justification: 'Abril Fatface brings dramatic Victorian display aesthetics to modern web design with its extreme contrast and distinctive hairline serifs. Paired with Lato\'s warm, approachable sans-serif, this combination creates magazine-quality layouts perfect for editorial and lifestyle brands. The high-contrast headlines demand attention while Lato ensures comfortable, extended reading. This pairing balances artistic flair with functional readability.',
    bestUsedFor: ['Fashion magazines', 'Lifestyle blogs', 'Wedding invitations', 'Restaurant branding', 'Event marketing', 'Creative portfolios'],
    headerWeight: { low: 400, medium: 400, high: 400 },
    bodyWeight: { low: 400, medium: 400, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Playfair Display', body: 'Source Sans 3', category: 'elegant',
    justification: 'Playfair Display\'s high-contrast transitional style evokes the elegance of 18th-century typography, making it perfect for sophisticated editorial content. When combined with Source Sans 3\'s clean, professional letterforms, you get a pairing that feels both timeless and contemporary. The serif headlines add gravitas and authority, while the sans-serif body ensures modern readability and accessibility across all devices.',
    bestUsedFor: ['Literary magazines', 'Book publishers', 'Law firms', 'Premium brands', 'Cultural institutions', 'Editorial design'],
    headerWeight: { low: 500, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 400, high: 400 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'italic' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Oswald', body: 'Open Sans', category: 'bold',
    justification: 'Oswald\'s condensed, all-caps aesthetic creates vertical impact and commands immediate attention, perfect for news headlines and promotional materials. Open Sans provides the friendly, readable counterpoint that keeps body text accessible and inviting. Originally reworked from the classic \'Alternate Gothic\' typefaces, Oswald brings industrial strength tempered by digital-age refinement. This pairing excels in news and sports websites.',
    bestUsedFor: ['News websites', 'Sports coverage', 'Event promotions', 'Press releases', 'Announcement pages', 'Breaking news'],
    headerWeight: { low: 400, medium: 500, high: 600 },
    bodyWeight: { low: 400, medium: 400, high: 400 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Montserrat', body: 'Merriweather', category: 'professional',
    justification: 'This popular pairing combines urban-inspired geometric sans with a traditional serif designed for screen readability. Montserrat\'s clean, modern headlines establish a contemporary brand voice, while Merriweather\'s slightly condensed letterforms with sturdy serifs ensure comfortable extended reading. The contrast between geometric precision and organic warmth creates visual interest while maintaining professional credibility throughout your content.',
    bestUsedFor: ['Corporate blogs', 'Business websites', 'Annual reports', 'White papers', 'Consulting firms', 'B2B platforms'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 400, high: 400 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Bebas Neue', body: 'Source Sans 3', category: 'bold',
    justification: 'Bebas Neue is a condensed display font inspired by early 20th-century American advertising. Its all-caps, narrow letterforms create powerful vertical rhythms perfect for posters and headers. Source Sans 3\'s Adobe Origins and OpenType features provide the professional foundation needed for body text. This pairing channels vintage typography energy while maintaining modern web standards and exceptional cross-platform performance.',
    bestUsedFor: ['Retail marketing', 'Product launches', 'Promotional campaigns', 'Music festivals', 'Gym branding', 'Energy drinks'],
    headerWeight: { low: 400, medium: 400, high: 400 },
    bodyWeight: { low: 400, medium: 400, high: 400 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Poppins', body: 'Merriweather', category: 'friendly',
    justification: 'Poppins\' geometric, friendly curves paired with Merriweather\'s readable serif creates an approachable yet credible combination. The rounded sans-serif headers feel modern and welcoming, while the traditional serif body text adds editorial authority. This pairing works beautifully for content that needs to be both accessible and trustworthy, bridging casual and professional tones.',
    bestUsedFor: ['Content sites', 'Business blogs', 'Medium publications', 'Professional blogs', 'Knowledge bases', 'Resource libraries'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 400, high: 400 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Raleway', body: 'Lora', category: 'elegant',
    justification: 'Raleway\'s elegant sans-serif brings contemporary sophistication to headers, while Lora\'s brushed calligraphic influences add warmth and humanity to body text. This pairing creates interfaces that feel both modern and personal, perfect for creative professionals and lifestyle brands. The combination of geometric precision and organic flow produces visual interest while maintaining readability.',
    bestUsedFor: ['Designer portfolios', 'Creative studios', 'Lifestyle brands', 'Boutique shops', 'Personal branding', 'Creative blogs'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 400, high: 400 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'italic', high: 'italic' }
  },
  
  { 
    header: 'Nunito', body: 'Lora', category: 'friendly',
    justification: 'Nunito\'s rounded, friendly sans-serif creates approachable headlines, while Lora\'s well-balanced serif adds editorial credibility to body text. This pairing strikes an excellent balance between warmth and professionalism, making it ideal for brands that want to appear both trustworthy and accessible. The contrast creates visual hierarchy without feeling overly formal.',
    bestUsedFor: ['Family services', 'Healthcare providers', 'Educational content', 'Community organizations', 'Social platforms', 'Wellness brands'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 400, high: 400 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Space Grotesk', body: 'Inter', category: 'modern',
    justification: 'Space Grotesk brings distinctive geometric character to headlines with its unique letterforms based on Space Mono. Paired with Inter\'s interface-optimized design, this combination creates modern, tech-forward typography perfect for digital products. The slight quirks in Space Grotesk add personality while Inter maintains clarity and usability for body text.',
    bestUsedFor: ['Tech startups', 'Digital products', 'SaaS platforms', 'Modern websites', 'Innovation hubs', 'Tech blogs'],
    headerWeight: { low: 400, medium: 500, high: 700 },
    bodyWeight: { low: 400, medium: 400, high: 400 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Crimson Text', body: 'Open Sans', category: 'classic',
    justification: 'Crimson Text is inspired by the classic book typefaces of the Renaissance period, bringing literary heritage to digital content. Paired with Open Sans\' friendly, modern character, this combination bridges centuries of typography. Perfect for content that values tradition while maintaining contemporary accessibility and readability standards.',
    bestUsedFor: ['Literary websites', 'Book reviews', 'Historical content', 'Academic blogs', 'Classic literature', 'Traditional publishers'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 400, high: 400 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'italic' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'EB Garamond', body: 'Source Sans 3', category: 'classic',
    justification: 'EB Garamond is a digital revival of Claude Garamont\'s influential 16th-century typeface, bringing centuries of typographic excellence to the web. Paired with Source Sans 3\'s modern, professional letterforms, this combination bridges classical elegance and contemporary usability. The Old Style serif provides intellectual credibility and timeless beauty, while the clean sans-serif ensures comfortable reading on modern screens.',
    bestUsedFor: ['Academic journals', 'University websites', 'Research papers', 'Historical societies', 'Literary publications', 'Philosophy blogs'],
    headerWeight: { low: 500, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 400, high: 400 },
    headerStyle: { low: 'normal', medium: 'italic', high: 'italic' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Spectral', body: 'Work Sans', category: 'editorial',
    justification: 'Spectral was commissioned by Google Fonts specifically for digital reading, making it an excellent editorial typeface. Work Sans provides the neutral, professional sans-serif foundation. This pairing creates sophisticated editorial designs that feel both contemporary and timeless, perfect for long-form content and digital publications.',
    bestUsedFor: ['Online magazines', 'Digital publications', 'Long-form journalism', 'Content platforms', 'Editorial sites', 'Feature articles'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 400, high: 400 },
    headerStyle: { low: 'normal', medium: 'italic', high: 'italic' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Josefin Sans', body: 'Lora', category: 'elegant',
    justification: 'Josefin Sans is a geometric sans-serif inspired by 1930s lettering with a distinctive vintage geometric feel. Lora\'s well-crafted serif adds warmth and readability. This pairing creates interfaces with vintage sophistication and modern usability, perfect for brands wanting a distinctive, timeless aesthetic.',
    bestUsedFor: ['Vintage-inspired brands', 'Retro websites', 'Boutique businesses', 'Artisan products', 'Craft brands', 'Heritage businesses'],
    headerWeight: { low: 300, medium: 400, high: 600 },
    bodyWeight: { low: 400, medium: 400, high: 400 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Libre Baskerville', body: 'Source Sans 3', category: 'classic',
    justification: 'This pairing challenges conventional wisdom by placing the traditional serif font in the header position, reversing the typical serif-in-body pattern. Libre Baskerville brings Baskerville\'s classical beauty optimized for the web, while Source Sans 3 provides clean, modern body text. This unexpected arrangement works beautifully for thoughtful, intellectual content that values tradition and careful consideration over trendy modernism.',
    bestUsedFor: ['Philosophy blogs', 'Long-form essays', 'Literary criticism', 'Thoughtful commentary', 'Book clubs', 'Intellectual discourse'],
    headerWeight: { low: 400, medium: 400, high: 700 },
    bodyWeight: { low: 400, medium: 400, high: 400 },
    headerStyle: { low: 'normal', medium: 'italic', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Roboto Slab', body: 'Roboto', category: 'modern',
    justification: 'The Roboto family provides perfect superfamily harmony. Roboto Slab\'s mechanical skeleton with friendly curves creates distinctive headers, while Roboto maintains consistency in body text. Both fonts share Google\'s design DNA, creating cohesive interfaces with subtle contrast. This pairing is ideal for brands in the Google ecosystem or those wanting reliable, modern typography.',
    bestUsedFor: ['Android apps', 'Google products', 'Tech documentation', 'Modern websites', 'Digital platforms', 'Mobile experiences'],
    headerWeight: { low: 400, medium: 500, high: 700 },
    bodyWeight: { low: 400, medium: 400, high: 400 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Quicksand', body: 'Source Sans 3', category: 'friendly',
    justification: 'Quicksand features rounded geometric forms with equal stroke weights, creating a friendly, contemporary display face. Its circular construction feels modern and approachable while maintaining clear readability. Source Sans 3 grounds the pairing with Adobe\'s professional-grade sans-serif excellence. This combination works beautifully for brands targeting younger demographics or anyone wanting to project warmth, optimism, and contemporary design sensibility.',
    bestUsedFor: ['Children\'s products', 'Family apps', 'Educational games', 'Youth services', 'Friendly brands', 'Community platforms'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 400, high: 400 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Archivo Black', body: 'Lato', category: 'bold',
    justification: 'Archivo Black provides maximum impact with its ultra-bold, condensed letterforms designed for headlines. Lato\'s warm, approachable character ensures body text remains readable and friendly. This high-contrast pairing creates dramatic visual hierarchies perfect for promotional content, announcements, and attention-grabbing designs.',
    bestUsedFor: ['Promotions', 'Sale announcements', 'Event posters', 'Marketing campaigns', 'Special offers', 'Bold headlines'],
    headerWeight: { low: 400, medium: 400, high: 400 },
    bodyWeight: { low: 400, medium: 400, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Lora', body: 'Source Sans 3', category: 'editorial',
    justification: 'Lora was designed with brushed calligraphic influences that add warmth and humanity to digital text. These subtle personality traits make it perfect for headers that need to feel crafted and intentional. Source Sans 3 provides the clean, professional body text foundation. Together, they create an editorial aesthetic that feels both personal and polished, ideal for authors and content creators who want their voice to feel distinctive.',
    bestUsedFor: ['Personal blogs', 'Author websites', 'Writing platforms', 'Memoir sites', 'Creative writing', 'Storytelling'],
    headerWeight: { low: 500, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 400, high: 400 },
    headerStyle: { low: 'normal', medium: 'italic', high: 'italic' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Cinzel', body: 'Lato', category: 'elegant',
    justification: 'Cinzel is based on classical Roman proportions, bringing imperial gravitas and timeless elegance to headlines. Its capital-focused design makes it perfect for luxury brands and classical aesthetics. Lato provides the warm, readable foundation for body text. This pairing creates sophisticated interfaces with historical resonance, ideal for premium brands and cultural institutions.',
    bestUsedFor: ['Luxury brands', 'Museums', 'Classical music', 'Premium services', 'Historical sites', 'Elegant products'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 400, high: 400 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'League Spartan', body: 'Open Sans', category: 'modern',
    justification: 'League Spartan is a geometric sans-serif with bold, geometric character based on Futura. Its strong, geometric forms create impactful headlines with modernist aesthetics. Open Sans ensures body text remains friendly and accessible. This pairing creates bold, contemporary interfaces perfect for modern brands wanting to make strong visual statements.',
    bestUsedFor: ['Modern brands', 'Bold statements', 'Contemporary design', 'Geometric aesthetics', 'Minimalist sites', 'Design agencies'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 400, high: 400 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Pacifico', body: 'Source Sans 3', category: 'playful',
    justification: 'Pacifico is a brush script inspired by 1950s American surf culture, bringing retro California vibes and carefree energy to designs. Its thick brush strokes and flowing letterforms create distinctive, memorable headlines. Source Sans 3 provides the neutral, professional foundation that keeps content accessible despite the playful headers. Perfect for brands wanting to evoke fun, leisure, and vintage Americana while maintaining modern usability.',
    bestUsedFor: ['Surf shops', 'Beach resorts', 'Food trucks', 'Ice cream parlors', 'Summer camps', 'Leisure activities'],
    headerWeight: { low: 400, medium: 400, high: 400 },
    bodyWeight: { low: 400, medium: 400, high: 400 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Lobster', body: 'Lato', category: 'playful',
    justification: 'Lobster is a bold, retro script with chunky letterforms reminiscent of 1950s signage. Its distinctive personality creates memorable, fun headlines perfect for casual brands. Lato\'s neutral warmth keeps body text professional and readable. This pairing brings vintage charm and modern usability together, ideal for food, entertainment, and creative businesses.',
    bestUsedFor: ['Restaurants', 'Food blogs', 'Entertainment', 'Casual dining', 'Fun brands', 'Creative projects'],
    headerWeight: { low: 400, medium: 400, high: 400 },
    bodyWeight: { low: 400, medium: 400, high: 400 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  // === HIGH CONTRAST PAIRINGS ===
  
  { 
    header: 'Playfair Display', body: 'Raleway', category: 'elegant',
    justification: 'This pairing combines maximum elegance with maximum contrast. Playfair Display\'s dramatic high-contrast serifs create show-stopping headlines, while Raleway\'s elegant geometric sans-serif provides sophisticated yet readable body text. The combination feels luxurious and refined, perfect for high-end brands, fashion, and editorial content that demands attention and exudes class.',
    bestUsedFor: ['High fashion', 'Luxury magazines', 'Premium editorial', 'Upscale brands', 'Elegant portfolios', 'Luxury services'],
    headerWeight: { low: 500, medium: 700, high: 800 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'italic', high: 'italic' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Oswald', body: 'Lora', category: 'bold',
    justification: 'Oswald\'s condensed, industrial character creates powerful vertical impact, while Lora\'s warm serif adds humanity and readability to body text. This unexpected pairing combines strength with warmth, creating interfaces that are both commanding and approachable. The high contrast between condensed sans and flowing serif creates dynamic visual rhythms.',
    bestUsedFor: ['News sites', 'Sports media', 'Strong statements', 'Dynamic content', 'Bold publications', 'Impact-driven sites'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 400, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Abril Fatface', body: 'Open Sans', category: 'bold',
    justification: 'Abril Fatface\'s extreme contrast and theatrical presence demand attention, while Open Sans\' neutral friendliness ensures maximum accessibility in body text. This high-impact pairing creates editorial designs with magazine-quality aesthetics and modern usability. Perfect for content that needs to make bold visual statements while maintaining readability.',
    bestUsedFor: ['Editorial design', 'Fashion content', 'Lifestyle magazines', 'Bold marketing', 'Creative projects', 'Statement pieces'],
    headerWeight: { low: 400, medium: 400, high: 400 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Bebas Neue', body: 'Lato', category: 'bold',
    justification: 'Bebas Neue\'s ultra-condensed all-caps letterforms create maximum vertical impact, while Lato\'s warm, approachable character ensures body text feels friendly and accessible. This pairing combines advertising-strength headlines with humanist body text, perfect for promotional content, event marketing, and any design needing bold visual hierarchy.',
    bestUsedFor: ['Event marketing', 'Promotions', 'Advertising', 'Sports branding', 'Bold campaigns', 'High-impact content'],
    headerWeight: { low: 400, medium: 400, high: 400 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Cinzel', body: 'Open Sans', category: 'elegant',
    justification: 'Cinzel\'s classical Roman proportions bring imperial elegance and timeless sophistication to headlines. Open Sans provides the modern, accessible foundation for body text. This pairing bridges ancient and modern, creating interfaces with classical gravitas and contemporary usability, perfect for institutions, museums, and premium brands.',
    bestUsedFor: ['Cultural institutions', 'Premium brands', 'Classical content', 'Museums', 'Luxury services', 'Heritage brands'],
    headerWeight: { low: 500, medium: 700, high: 800 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Archivo Black', body: 'Open Sans', category: 'bold',
    justification: 'Archivo Black provides maximum boldness with ultra-heavy letterforms, while Open Sans ensures body text remains perfectly readable. This extreme contrast creates powerful visual hierarchies perfect for attention-grabbing designs. The pairing works excellently for promotional content, announcements, and any design needing dramatic typographic impact.',
    bestUsedFor: ['Promotions', 'Announcements', 'Sale events', 'Bold marketing', 'Impact campaigns', 'Attention-grabbing content'],
    headerWeight: { low: 400, medium: 400, high: 400 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'EB Garamond', body: 'Inter', category: 'classic',
    justification: 'EB Garamond\'s Renaissance elegance meets Inter\'s modern interface design. This pairing bridges centuries of typography, combining classical beauty with contemporary usability. The contrast between Old Style serif and geometric sans creates sophisticated interfaces perfect for academic content, research platforms, and intellectual pursuits.',
    bestUsedFor: ['Academic content', 'Research platforms', 'Scholarly articles', 'Universities', 'Intellectual content', 'Educational institutions'],
    headerWeight: { low: 500, medium: 700, high: 800 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'italic', high: 'italic' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Space Grotesk', body: 'Source Sans 3', category: 'modern',
    justification: 'Space Grotesk brings distinctive geometric character with unique quirks based on Space Mono. Source Sans 3 provides professional, clean body text. This pairing creates modern, tech-forward typography with personality, perfect for innovative brands and digital products wanting to stand out while maintaining professionalism.',
    bestUsedFor: ['Tech innovation', 'Digital products', 'Modern startups', 'Creative tech', 'Innovation platforms', 'Forward-thinking brands'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Bodoni Moda', body: 'Raleway', category: 'elegant',
    justification: 'Bodoni Moda represents the pinnacle of high-contrast Didone typography with dramatic thick-thin stroke variation. Raleway\'s elegant geometric sans provides sophisticated body text. This ultra-elegant pairing creates luxurious, fashion-forward interfaces perfect for high-end brands demanding maximum sophistication and visual drama.',
    bestUsedFor: ['High fashion', 'Luxury brands', 'Premium products', 'Elegant marketing', 'Upscale services', 'Sophisticated brands'],
    headerWeight: { low: 500, medium: 700, high: 900 },
    bodyWeight: { low: 400, medium: 300, high: 200 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'italic' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Cormorant', body: 'Work Sans', category: 'elegant',
    justification: 'Cormorant is a display serif inspired by Claude Garamont\'s designs with contemporary refinements. Work Sans provides the clean, professional sans-serif foundation. This pairing combines classical elegance with modern minimalism, creating sophisticated interfaces that feel both timeless and contemporary.',
    bestUsedFor: ['Elegant brands', 'Creative studios', 'Design agencies', 'Sophisticated content', 'Premium services', 'Refined aesthetics'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'italic', high: 'italic' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Manrope', body: 'Source Sans 3', category: 'modern',
    justification: 'Manrope is a modern geometric sans-serif with balanced proportions and open apertures optimized for digital interfaces. Its clean, contemporary character makes it perfect for tech-forward brands. Source Sans 3 provides the professional editorial foundation. Together, they create interfaces that feel cutting-edge yet trustworthy, ideal for modern digital products, SaaS platforms, and technology companies.',
    bestUsedFor: ['SaaS platforms', 'Tech products', 'Digital tools', 'Software services', 'Cloud platforms', 'Modern apps'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Playfair Display', body: 'Work Sans', category: 'elegant',
    justification: 'Playfair Display\'s theatrical high-contrast brings editorial drama, while Work Sans\' neutral professionalism ensures accessible body text. This combination creates magazine-quality layouts with modern usability, perfect for editorial content, lifestyle brands, and publications wanting sophisticated visual impact.',
    bestUsedFor: ['Magazines', 'Editorial content', 'Lifestyle publications', 'Premium content', 'Sophisticated blogs', 'Quality journalism'],
    headerWeight: { low: 500, medium: 700, high: 800 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'italic', high: 'italic' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Bitter', body: 'Source Sans 3', category: 'editorial',
    justification: 'Bitter is a contemporary slab serif designed specifically for comfortable reading on computer screens. Its sturdy serifs and slightly condensed letterforms create distinctive headers. Source Sans 3 ensures body text remains professional and accessible. This pairing works excellently for blogs, online publications, and content sites that need editorial credibility with modern usability and cross-platform compatibility.',
    bestUsedFor: ['Content blogs', 'Online magazines', 'News sites', 'Article platforms', 'Editorial content', 'Digital journalism'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Archivo', body: 'Lato', category: 'professional',
    justification: 'Archivo is a grotesque sans-serif designed for printing archival documents and published material. Its neutral character and excellent clarity make it perfect for professional, document-focused applications. Lato adds warmth to body text while maintaining professionalism. This pairing creates interfaces that feel authoritative and trustworthy while remaining approachable, ideal for professional services and official communications.',
    bestUsedFor: ['Legal documents', 'Official sites', 'Government portals', 'Professional services', 'Documentation', 'Formal communications'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Lexend', body: 'Source Sans 3', category: 'readable',
    justification: 'Lexend was specifically designed to improve reading proficiency, based on scientific research into readability and dyslexia-friendly design. Its unique letterforms and spacing optimize visual processing. Source Sans 3 complements this with professional, accessible body text. This pairing prioritizes maximum readability and accessibility, perfect for educational platforms, accessibility-focused products, and inclusive design.',
    bestUsedFor: ['Education platforms', 'Learning apps', 'Accessibility tools', 'Reading assistance', 'Dyslexia-friendly sites', 'Inclusive design'],
    headerWeight: { low: 400, medium: 500, high: 600 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Red Hat Display', body: 'Red Hat Text', category: 'friendly',
    justification: 'Red Hat Display and Red Hat Text form a carefully coordinated superfamily designed specifically for the Red Hat brand. Display provides impactful headers while Text ensures optimal readability in body copy. Both fonts share the same friendly, approachable character while being optimized for their respective roles. This pairing creates cohesive, professional interfaces with a warm, human touch.',
    bestUsedFor: ['Corporate branding', 'Tech companies', 'Open source projects', 'Enterprise software', 'Professional platforms', 'Business applications'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Epilogue', body: 'Inter', category: 'modern',
    justification: 'Epilogue is a contemporary sans-serif with elegant proportions and refined details perfect for modern digital products. Inter provides the interface-optimized foundation with extensive OpenType features. Together, they create sophisticated, professional typography systems ideal for startups, tech companies, and modern brands that value both aesthetics and functionality in their digital presence.',
    bestUsedFor: ['Tech startups', 'Modern SaaS', 'Digital agencies', 'Product launches', 'Innovation platforms', 'Contemporary brands'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Urbanist', body: 'Lato', category: 'modern',
    justification: 'Urbanist is a geometric sans-serif with contemporary styling and extensive weight range, perfect for modern, urban-focused brands. Its clean lines and balanced proportions create impactful headlines. Lato provides the warm, approachable body text. This pairing creates interfaces that feel both sophisticated and accessible, ideal for lifestyle brands, urban services, and contemporary digital products.',
    bestUsedFor: ['Urban lifestyle', 'City services', 'Modern retail', 'Contemporary brands', 'Lifestyle apps', 'Urban culture'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Chakra Petch', body: 'Work Sans', category: 'creative',
    justification: 'Chakra Petch is a loopless Thai-Latin typeface with unique geometric character and futuristic styling. Its distinctive letterforms create memorable, tech-forward headlines. Work Sans provides the neutral, professional body text optimized for screen reading. This pairing communicates innovation and technological sophistication while maintaining excellent readability, perfect for tech brands with global reach.',
    bestUsedFor: ['Tech innovation', 'Global platforms', 'Multilingual apps', 'Future tech', 'International brands', 'Modern technology'],
    headerWeight: { low: 500, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Fredoka', body: 'Nunito', category: 'playful',
    justification: 'Fredoka features rounded, friendly letterforms with a playful character perfect for brands targeting families and children. Its soft, approachable design creates welcoming headlines. Nunito complements this with its own rounded character while providing better readability for longer texts. Together, they create interfaces that feel warm, friendly, and inviting, ideal for educational, family, and community-focused applications.',
    bestUsedFor: ['Children\'s apps', 'Family services', 'Educational games', 'Community platforms', 'Parenting resources', 'Kids\' brands'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Outfit', body: 'Inter', category: 'minimal',
    justification: 'Outfit is a variable geometric sans-serif with clean, modern proportions perfect for contemporary digital products. Its balanced character and extensive weight range provide excellent versatility. Inter ensures body text maintains optimal interface clarity. This pairing creates minimalist, sophisticated typography systems ideal for modern applications, design systems, and brands prioritizing clean, functional aesthetics.',
    bestUsedFor: ['Design systems', 'Minimalist brands', 'Modern apps', 'Clean interfaces', 'Contemporary products', 'Digital design'],
    headerWeight: { low: 400, medium: 500, high: 600 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Sora', body: 'Open Sans', category: 'modern',
    justification: 'Sora is a contemporary sans-serif with slightly rounded corners creating approachable, modern headlines. Its balanced proportions and friendly character make it versatile for various contexts. Open Sans provides the trusted, professional body text foundation. This pairing creates interfaces that feel both contemporary and trustworthy, ideal for modern businesses and digital services wanting to appear established yet innovative.',
    bestUsedFor: ['Modern businesses', 'Digital services', 'Contemporary brands', 'Professional platforms', 'Service industries', 'Modern marketing'],
    headerWeight: { low: 400, medium: 500, high: 600 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'DM Sans', body: 'Inter', category: 'minimal',
    justification: 'DM Sans is a geometric sans-serif with low contrast and tall x-height optimized for UI design. Inter provides the comprehensive interface typography solution. Both fonts share minimalist sensibilities and interface optimization, creating cohesive, professional typography systems. This pairing excels in clean, functional designs where clarity and usability are paramount, perfect for modern applications and design systems.',
    bestUsedFor: ['UI/UX design', 'Interface design', 'Design systems', 'Web applications', 'Digital products', 'Minimal aesthetics'],
    headerWeight: { low: 400, medium: 500, high: 700 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Merriweather', body: 'Lato', category: 'readable',
    justification: 'Merriweather was designed for excellent on-screen readability with slightly condensed letterforms and sturdy serifs. Lato provides warm, approachable sans-serif body text. This pairing creates highly readable interfaces perfect for content-focused sites, blogs, and long-form reading experiences. Both fonts prioritize legibility and comfort for extended reading sessions.',
    bestUsedFor: ['Long-form content', 'Reading platforms', 'Content blogs', 'Article sites', 'Educational content', 'Documentation'],
    headerWeight: { low: 400, medium: 700, high: 900 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Readex Pro', body: 'Open Sans', category: 'readable',
    justification: 'Readex Pro is a variable font designed for exceptional readability with balanced proportions and clear character differentiation. Open Sans provides the friendly, accessible body text foundation. This pairing prioritizes reading comfort and accessibility, making it ideal for educational platforms, documentation, and any content requiring extended reading sessions.',
    bestUsedFor: ['Educational content', 'Documentation', 'Reading apps', 'Learning platforms', 'Accessible content', 'Study materials'],
    headerWeight: { low: 400, medium: 500, high: 600 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Source Serif 4', body: 'Source Sans 3', category: 'professional',
    justification: 'The Source superfamily provides perfect serif-sans harmony designed by Adobe. Source Serif 4 brings editorial gravitas to headers while Source Sans 3 ensures modern, accessible body text. Both fonts share design DNA, creating cohesive professional interfaces. This pairing excels in corporate communications, professional publishing, and content requiring both authority and readability.',
    bestUsedFor: ['Professional content', 'Corporate communications', 'Business publications', 'Technical writing', 'Professional blogs', 'Documentation'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'italic' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Schibsted Grotesk', body: 'Inter', category: 'readable',
    justification: 'Schibsted Grotesk was designed for the Norwegian media company with focus on readability and modern aesthetics. Inter provides the interface-optimized body text. This pairing creates clean, readable interfaces perfect for news platforms, content sites, and media applications requiring both impact and accessibility.',
    bestUsedFor: ['News platforms', 'Media sites', 'Content publishing', 'Digital journalism', 'Magazine sites', 'Editorial platforms'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Fraunces', body: 'Work Sans', category: 'creative',
    justification: 'Fraunces is a display serif with "wonky" characteristics and variable axes offering unique personality. Work Sans provides the clean, professional foundation. This pairing creates distinctive, creative interfaces perfect for brands wanting to stand out with unconventional typography while maintaining modern usability and professionalism.',
    bestUsedFor: ['Creative brands', 'Design studios', 'Unique products', 'Artistic content', 'Unconventional brands', 'Creative projects'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'italic', high: 'italic' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Atkinson Hyperlegible', body: 'Readex Pro', category: 'readable',
    justification: 'Both fonts prioritize maximum legibility and accessibility. Atkinson Hyperlegible was designed for low vision readers with distinctive letterforms, while Readex Pro optimizes reading comfort. This pairing creates exceptionally accessible interfaces perfect for inclusive design, healthcare platforms, and any application prioritizing universal accessibility.',
    bestUsedFor: ['Accessibility platforms', 'Healthcare sites', 'Senior services', 'Inclusive design', 'Vision assistance', 'Universal access'],
    headerWeight: { low: 400, medium: 700, high: 700 },
    bodyWeight: { low: 400, medium: 400, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Spectral', body: 'Rubik', category: 'modern',
    justification: 'Spectral is a serif specifically designed for digital reading with balanced proportions and excellent screen clarity. Rubik provides friendly, rounded sans-serif body text. This pairing creates modern, approachable interfaces that combine editorial sophistication with contemporary warmth, perfect for digital publications and content platforms.',
    bestUsedFor: ['Digital magazines', 'Online publications', 'Content platforms', 'Modern editorial', 'Reading apps', 'Blog platforms'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'italic', high: 'italic' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Commissioner', body: 'Inter', category: 'professional',
    justification: 'Commissioner is a low-contrast grotesque sans optimized for both headlines and UI elements. Inter provides the modern interface foundation. Both fonts share professional neutrality and interface optimization, creating cohesive, contemporary design systems perfect for modern applications, productivity tools, and professional platforms.',
    bestUsedFor: ['Professional apps', 'Productivity tools', 'Business platforms', 'Modern interfaces', 'Corporate products', 'Professional services'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Crimson Text', body: 'Lato', category: 'classic',
    justification: 'Crimson Text is inspired by classical Garamond designs with modern refinements for screen reading. Lato provides warm, approachable body text. This pairing creates timeless, sophisticated interfaces that bridge classical typography and modern usability, ideal for cultural institutions, academic content, and refined brands.',
    bestUsedFor: ['Academic content', 'Cultural institutions', 'Classical brands', 'Libraries', 'Scholarly publications', 'Heritage organizations'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'italic', high: 'italic' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Exo 2', body: 'Open Sans', category: 'modern',
    justification: 'Exo 2 is a geometric sans with technological character and futuristic styling. Open Sans provides friendly, accessible body text. This pairing creates tech-forward interfaces that feel both innovative and approachable, perfect for technology companies, digital products, and brands emphasizing innovation.',
    bestUsedFor: ['Tech companies', 'Innovation platforms', 'Digital products', 'Future tech', 'Modern services', 'Technology brands'],
    headerWeight: { low: 500, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Alegreya', body: 'Nunito Sans', category: 'elegant',
    justification: 'Alegreya is a typeface originally intended for literature with calligraphic touches and dynamic rhythm. Nunito Sans provides friendly, professional body text. This pairing creates warm, elegant interfaces perfect for literary content, creative writing platforms, and brands valuing both sophistication and approachability.',
    bestUsedFor: ['Literary platforms', 'Creative writing', 'Book publishers', 'Author websites', 'Writing apps', 'Literary journals'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'italic', high: 'italic' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Staatliches', body: 'Work Sans', category: 'bold',
    justification: 'Staatliches is a condensed, powerful display face with industrial strength. Work Sans provides clean, professional body text. This pairing creates impactful, modern interfaces with strong visual hierarchy, perfect for bold branding, advertising, and designs demanding immediate attention.',
    bestUsedFor: ['Bold branding', 'Advertising', 'Impact campaigns', 'Modern marketing', 'Event promotion', 'Attention-grabbing content'],
    headerWeight: { low: 400, medium: 400, high: 400 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Vollkorn', body: 'Source Sans 3', category: 'editorial',
    justification: 'Vollkorn is a classical text face with distinctive character designed for bread-and-butter work. Source Sans 3 ensures modern, accessible body text. This pairing creates professional editorial interfaces perfect for publishing, academic content, and professional writing requiring both character and readability.',
    bestUsedFor: ['Publishing platforms', 'Academic journals', 'Professional writing', 'Editorial content', 'Book publishers', 'Research platforms'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'italic' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Spartan', body: 'Inter', category: 'minimal',
    justification: 'Spartan is a geometric sans-serif with clean, balanced proportions inspired by Futura. Inter provides comprehensive interface typography. Both fonts prioritize clarity and modern aesthetics, creating minimalist design systems perfect for contemporary applications and brands valuing simplicity.',
    bestUsedFor: ['Minimalist design', 'Modern apps', 'Clean interfaces', 'Contemporary brands', 'Simple products', 'Modern services'],
    headerWeight: { low: 400, medium: 500, high: 700 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Libre Baskerville', body: 'Mulish', category: 'classic',
    justification: 'Libre Baskerville is a webfont optimized version of the classic Baskerville typeface. Mulish provides modern, friendly body text. This pairing creates timeless, sophisticated interfaces that combine classical elegance with contemporary usability, ideal for traditional brands with modern audiences.',
    bestUsedFor: ['Traditional brands', 'Professional services', 'Law firms', 'Financial advisors', 'Classic brands', 'Established businesses'],
    headerWeight: { low: 400, medium: 700, high: 700 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'italic', high: 'italic' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Kumbh Sans', body: 'Open Sans', category: 'professional',
    justification: 'Kumbh Sans is a geometric sans-serif with slightly rounded corners creating approachable professionalism. Open Sans provides friendly, accessible body text. This pairing creates professional yet welcoming interfaces perfect for business applications, corporate sites, and professional services wanting to appear both competent and approachable.',
    bestUsedFor: ['Business applications', 'Corporate websites', 'Professional platforms', 'Service industries', 'Consulting firms', 'B2B services'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Lilita One', body: 'Quicksand', category: 'playful',
    justification: 'Lilita One is a bold, friendly display font with rounded character. Quicksand provides gentle, approachable body text. This pairing creates cheerful, welcoming interfaces perfect for family brands, children\'s content, and any design prioritizing warmth and approachability.',
    bestUsedFor: ['Family brands', 'Children\'s products', 'Fun content', 'Playful brands', 'Kids\' services', 'Cheerful platforms'],
    headerWeight: { low: 400, medium: 400, high: 400 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Cabin', body: 'PT Sans', category: 'friendly',
    justification: 'Cabin is a humanist sans-serif with warm, approachable character. PT Sans provides the friendly, readable body text. Both fonts share humanist values and approachable aesthetics, creating welcoming interfaces perfect for community platforms, non-profits, and people-focused organizations.',
    bestUsedFor: ['Community platforms', 'Non-profits', 'Social organizations', 'People-focused brands', 'Civic platforms', 'Local services'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 400, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Noticia Text', body: 'Lato', category: 'editorial',
    justification: 'Noticia Text was designed specifically for newspapers with excellent readability at small sizes. Lato provides warm, approachable body text. This pairing creates highly readable, professional interfaces perfect for news platforms, journalism sites, and content requiring both authority and accessibility.',
    bestUsedFor: ['News platforms', 'Journalism sites', 'Media outlets', 'Current events', 'News aggregators', 'Press sites'],
    headerWeight: { low: 400, medium: 700, high: 700 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'italic' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Big Shoulders Display', body: 'Work Sans', category: 'bold',
    justification: 'Big Shoulders Display is a superfamily of condensed American Gothic typefaces with powerful presence. Work Sans provides clean, professional body text. This pairing creates bold, impactful interfaces with strong American design sensibilities, perfect for brands wanting to make bold statements.',
    bestUsedFor: ['Bold statements', 'American brands', 'Sports teams', 'Athletic brands', 'Strong messaging', 'Impact design'],
    headerWeight: { low: 500, medium: 700, high: 900 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Domine', body: 'Rubik', category: 'modern',
    justification: 'Domine is a contemporary serif with low contrast optimized for screens. Rubik provides friendly, rounded body text. This pairing creates modern, approachable interfaces that combine editorial credibility with contemporary friendliness, ideal for modern content platforms and digital publications.',
    bestUsedFor: ['Content platforms', 'Modern blogs', 'Digital publications', 'Online magazines', 'Media sites', 'News blogs'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Cardo', body: 'Open Sans', category: 'classic',
    justification: 'Cardo was designed for classicists and medievalists with distinctive character for extended reading. Open Sans provides friendly, accessible body text. This pairing creates scholarly, sophisticated interfaces perfect for academic content, historical publications, and intellectual pursuits.',
    bestUsedFor: ['Academic platforms', 'Historical content', 'Classical studies', 'Medieval content', 'Scholarly work', 'Research sites'],
    headerWeight: { low: 400, medium: 700, high: 700 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'italic', high: 'italic' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Heebo', body: 'Mulish', category: 'friendly',
    justification: 'Heebo is a Hebrew-Latin typeface with friendly, approachable character. Mulish provides modern, friendly body text. This pairing creates warm, welcoming interfaces with multilingual support, perfect for international platforms, diverse communities, and inclusive brands.',
    bestUsedFor: ['International platforms', 'Multilingual sites', 'Diverse communities', 'Global brands', 'Inclusive content', 'Worldwide services'],
    headerWeight: { low: 400, medium: 500, high: 600 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Alfa Slab One', body: 'Lato', category: 'bold',
    justification: 'Alfa Slab One is an ultra-bold slab serif with maximum visual impact. Lato provides warm, approachable body text. This extreme contrast creates powerful, attention-grabbing interfaces perfect for headlines, promotions, and any design needing dramatic typographic presence.',
    bestUsedFor: ['Headlines', 'Promotions', 'Sale events', 'Bold advertising', 'Attention-grabbing', 'Impact marketing'],
    headerWeight: { low: 400, medium: 400, high: 400 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'JetBrains Mono', body: 'Inter', category: 'professional',
    justification: 'JetBrains Mono is a typeface specifically designed for developers with increased letter height and clear character differentiation. Inter provides modern interface typography. This pairing creates professional, developer-focused interfaces perfect for code documentation, developer tools, and technical platforms.',
    bestUsedFor: ['Developer tools', 'Code documentation', 'Technical platforms', 'Programming resources', 'Developer portals', 'Tech education'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Neuton', body: 'Work Sans', category: 'elegant',
    justification: 'Neuton is a serif with low contrast and distinctive character. Work Sans provides clean, professional body text. This pairing creates sophisticated, minimalist interfaces perfect for elegant brands, refined aesthetics, and designs prioritizing understated sophistication.',
    bestUsedFor: ['Elegant brands', 'Refined aesthetics', 'Sophisticated design', 'Minimal luxury', 'Quality brands', 'Premium services'],
    headerWeight: { low: 400, medium: 700, high: 800 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'italic', high: 'italic' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Teko', body: 'Open Sans', category: 'modern',
    justification: 'Teko is a condensed, squarish sans-serif with modern, technical character. Open Sans provides friendly, accessible body text. This pairing creates contemporary, space-efficient interfaces perfect for data-heavy designs, dashboards, and applications requiring compact yet readable typography.',
    bestUsedFor: ['Dashboards', 'Data visualization', 'Analytics platforms', 'Technical interfaces', 'Compact design', 'Information-dense sites'],
    headerWeight: { low: 400, medium: 500, high: 600 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Passion One', body: 'Lato', category: 'bold',
    justification: 'Passion One is a bold, condensed display typeface with powerful presence. Lato provides warm, approachable body text. This pairing creates energetic, impactful interfaces perfect for sports brands, fitness platforms, and any design needing motivational, high-energy typography.',
    bestUsedFor: ['Sports brands', 'Fitness platforms', 'Athletic content', 'Energy brands', 'Motivational content', 'Performance brands'],
    headerWeight: { low: 400, medium: 700, high: 900 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'M PLUS Rounded 1c', body: 'Nunito', category: 'friendly',
    justification: 'M PLUS Rounded 1c features soft, rounded letterforms with Japanese design sensibilities. Nunito provides friendly, rounded body text. This pairing creates exceptionally warm, approachable interfaces perfect for friendly brands, community platforms, and designs prioritizing comfort and welcome.',
    bestUsedFor: ['Friendly brands', 'Community apps', 'Social platforms', 'Welcoming sites', 'People-first design', 'Approachable services'],
    headerWeight: { low: 400, medium: 500, high: 700 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Gelasio', body: 'Source Sans 3', category: 'professional',
    justification: 'Gelasio is an optimization of a classic Renaissance typeface for modern screens. Source Sans 3 provides professional, accessible body text. This pairing creates timeless, professional interfaces that bridge historical typography and contemporary design, perfect for professional services and established brands.',
    bestUsedFor: ['Professional services', 'Established brands', 'Business platforms', 'Corporate sites', 'Traditional businesses', 'Professional content'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'italic' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Chivo', body: 'Open Sans', category: 'modern',
    justification: 'Chivo is a grotesque sans-serif with strong character and excellent screen performance. Open Sans provides friendly, accessible body text. This pairing creates modern, confident interfaces perfect for bold brands, modern businesses, and designs requiring strong typographic presence.',
    bestUsedFor: ['Bold brands', 'Modern businesses', 'Confident messaging', 'Strong branding', 'Contemporary services', 'Modern products'],
    headerWeight: { low: 500, medium: 700, high: 800 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Old Standard TT', body: 'Lato', category: 'classic',
    justification: 'Old Standard TT reproduces classic typeface styles from 19th-century printing. Lato provides warm, modern body text. This pairing creates historically-informed, sophisticated interfaces perfect for traditional institutions, heritage brands, and content requiring classical gravitas.',
    bestUsedFor: ['Heritage brands', 'Traditional institutions', 'Historical content', 'Classic organizations', 'Established entities', 'Time-honored brands'],
    headerWeight: { low: 400, medium: 700, high: 700 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'italic', high: 'italic' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Questrial', body: 'Inter', category: 'minimal',
    justification: 'Questrial is a clean, minimal sans-serif with balanced proportions. Inter provides comprehensive interface typography. Both fonts prioritize simplicity and clarity, creating ultra-minimal design systems perfect for contemporary applications prioritizing function over decoration.',
    bestUsedFor: ['Minimal design', 'Clean interfaces', 'Simple products', 'Functional apps', 'Contemporary design', 'Clarity-focused sites'],
    headerWeight: { low: 400, medium: 400, high: 400 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Saira', body: 'Work Sans', category: 'modern',
    justification: 'Saira is a contemporary sans-serif with semi-condensed letterforms and modern character. Work Sans provides clean, professional body text. This pairing creates efficient, modern interfaces perfect for contemporary applications requiring space-efficient yet readable typography.',
    bestUsedFor: ['Modern applications', 'Contemporary services', 'Efficient design', 'Space-conscious sites', 'Modern platforms', 'Current trends'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Catamaran', body: 'Nunito Sans', category: 'friendly',
    justification: 'Catamaran is a Tamil-Latin typeface with friendly, approachable character. Nunito Sans provides friendly, professional body text. This pairing creates warm, welcoming interfaces with excellent multilingual support, perfect for international brands and diverse audiences.',
    bestUsedFor: ['International brands', 'Multilingual platforms', 'Global services', 'Diverse audiences', 'Worldwide reach', 'Cross-cultural content'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
  
  { 
    header: 'Prompt', body: 'Open Sans', category: 'modern',
    justification: 'Prompt is a Thai-Latin typeface with loopless design and contemporary character. Open Sans provides friendly, accessible body text. This pairing creates modern, international interfaces perfect for global platforms, multilingual content, and brands with worldwide reach.',
    bestUsedFor: ['Global platforms', 'Multilingual content', 'International services', 'Worldwide brands', 'Cross-border content', 'Global reach'],
    headerWeight: { low: 400, medium: 600, high: 700 },
    bodyWeight: { low: 400, medium: 300, high: 300 },
    headerStyle: { low: 'normal', medium: 'normal', high: 'normal' },
    bodyStyle: { low: 'normal', medium: 'normal', high: 'normal' }
  },
];

// Helper function to check if two fonts are compatible based on vibe
function areFontsCompatible(font1: GoogleFont, font2: GoogleFont, styleFilter?: string): boolean {
  if (!styleFilter || styleFilter === 'all') return true;
  
  // Check if either font matches the style filter
  return font1.vibe.includes(styleFilter) || font2.vibe.includes(styleFilter);
}

// Helper function to calculate contrast score between two fonts
function getContrastScore(headerFont: GoogleFont, bodyFont: GoogleFont): number {
  let score = 0;
  
  // Different categories = higher contrast
  if (headerFont.category !== bodyFont.category) {
    score += 3;
    
    // Specific high-contrast combinations
    if ((headerFont.category === 'display' || headerFont.category === 'serif') && 
        bodyFont.category === 'sans-serif') {
      score += 2;
    }
    if (headerFont.category === 'display' && bodyFont.category === 'serif') {
      score += 1;
    }
  }
  
  // Different vibes = moderate contrast
  const sharedVibes = headerFont.vibe.filter(v => bodyFont.vibe.includes(v));
  if (sharedVibes.length === 0) {
    score += 2;
  } else if (sharedVibes.length <= 2) {
    score += 1;
  }
  
  return score;
}

// Generate dynamic font pairing based on contrast level
export function getRandomFontPair(styleFilter?: string, contrastLevel: 'low' | 'medium' | 'high' = 'high'): {
  pair: FontPair;
  headerWeight: number;
  bodyWeight: number;
  headerStyle: string;
  bodyStyle: string;
} {
  // First, try to use curated pairings
  let availablePairings = fontPairings;
  
  if (styleFilter && styleFilter !== 'all') {
    availablePairings = fontPairings.filter(pair => 
      pair.category.toLowerCase() === styleFilter.toLowerCase()
    );
  }
  
  // If we have curated pairings available and it's appropriate for the contrast level
  if (availablePairings.length > 0 && Math.random() > 0.3) {
    const randomIndex = Math.floor(Math.random() * availablePairings.length);
    const pair = availablePairings[randomIndex];
    
    return {
      pair,
      headerWeight: pair.headerWeight[contrastLevel],
      bodyWeight: pair.bodyWeight[contrastLevel],
      headerStyle: pair.headerStyle[contrastLevel],
      bodyStyle: pair.bodyStyle[contrastLevel]
    };
  }
  
  // Otherwise, generate a dynamic pairing based on contrast level
  return generateDynamicPairing(styleFilter, contrastLevel);
}

function generateDynamicPairing(styleFilter: string | undefined, contrastLevel: 'low' | 'medium' | 'high'): {
  pair: FontPair;
  headerWeight: number;
  bodyWeight: number;
  headerStyle: string;
  bodyStyle: string;
} {
  let headerFont: GoogleFont;
  let bodyFont: GoogleFont;
  
  // Filter fonts by style if specified
  let availableFonts = styleFilter && styleFilter !== 'all' 
    ? googleFonts.filter(f => f.vibe.includes(styleFilter))
    : googleFonts;
  
  if (availableFonts.length === 0) {
    availableFonts = googleFonts;
  }
  
  switch (contrastLevel) {
    case 'low':
      // LOW CONTRAST: Same font or very similar fonts from same category
      headerFont = availableFonts[Math.floor(Math.random() * availableFonts.length)];
      
      // 70% chance to use same font, 30% chance to use similar font
      if (Math.random() < 0.7) {
        bodyFont = headerFont;
      } else {
        // Find similar font (same category, shared vibes)
        const similarFonts = availableFonts.filter(f => 
          f.category === headerFont.category &&
          f.vibe.some(v => headerFont.vibe.includes(v)) &&
          f.name !== headerFont.name
        );
        bodyFont = similarFonts.length > 0 
          ? similarFonts[Math.floor(Math.random() * similarFonts.length)]
          : headerFont;
      }
      break;
      
    case 'medium':
      // MEDIUM CONTRAST: Different fonts, but compatible (serif + sans, or same category with different vibes)
      headerFont = availableFonts[Math.floor(Math.random() * availableFonts.length)];
      
      // Find compatible fonts with moderate contrast
      const mediumContrastFonts = availableFonts.filter(f => {
        if (f.name === headerFont.name) return false;
        const contrastScore = getContrastScore(headerFont, f);
        return contrastScore >= 1 && contrastScore <= 4;
      });
      
      bodyFont = mediumContrastFonts.length > 0
        ? mediumContrastFonts[Math.floor(Math.random() * mediumContrastFonts.length)]
        : availableFonts[Math.floor(Math.random() * availableFonts.length)];
      break;
      
    case 'high':
    default:
      // HIGH CONTRAST: Maximum contrast - different categories, different vibes
      // Prefer display/serif headers with sans-serif body
      const headerCandidates = availableFonts.filter(f => 
        f.category === 'display' || f.category === 'serif' || 
        (f.category === 'sans-serif' && f.vibe.includes('bold'))
      );
      
      headerFont = headerCandidates.length > 0
        ? headerCandidates[Math.floor(Math.random() * headerCandidates.length)]
        : availableFonts[Math.floor(Math.random() * availableFonts.length)];
      
      // Find high contrast body fonts (different category, minimal vibe overlap)
      const highContrastFonts = availableFonts.filter(f => {
        if (f.name === headerFont.name) return false;
        const contrastScore = getContrastScore(headerFont, f);
        return contrastScore >= 3;
      });
      
      bodyFont = highContrastFonts.length > 0
        ? highContrastFonts[Math.floor(Math.random() * highContrastFonts.length)]
        : availableFonts.filter(f => f.name !== headerFont.name)[Math.floor(Math.random() * (availableFonts.length - 1))];
      break;
  }
  
  // Calculate weights based on contrast level and available weights
  const { headerWeight, bodyWeight, headerStyle, bodyStyle } = calculateWeightsAndStyles(
    headerFont, 
    bodyFont, 
    contrastLevel
  );
  
  // Generate justification
  const justification = generateJustification(headerFont, bodyFont, contrastLevel);
  
  // Determine category based on shared vibes
  const sharedVibes = headerFont.vibe.filter(v => bodyFont.vibe.includes(v));
  const category = styleFilter && styleFilter !== 'all' 
    ? styleFilter 
    : (sharedVibes.length > 0 ? sharedVibes[0] : headerFont.vibe[0]);
  
  const pair: FontPair = {
    header: headerFont.name,
    body: bodyFont.name,
    category,
    justification,
    bestUsedFor: generateBestUsedFor(headerFont, bodyFont),
    headerWeight: { low: headerWeight, medium: headerWeight, high: headerWeight },
    bodyWeight: { low: bodyWeight, medium: bodyWeight, high: bodyWeight },
    headerStyle: { low: headerStyle, medium: headerStyle, high: headerStyle },
    bodyStyle: { low: bodyStyle, medium: bodyStyle, high: bodyStyle }
  };
  
  return {
    pair,
    headerWeight,
    bodyWeight,
    headerStyle,
    bodyStyle
  };
}

function calculateWeightsAndStyles(
  headerFont: GoogleFont, 
  bodyFont: GoogleFont, 
  contrastLevel: 'low' | 'medium' | 'high'
): {
  headerWeight: number;
  bodyWeight: number;
  headerStyle: string;
  bodyStyle: string;
} {
  let headerWeight: number;
  let bodyWeight: number;
  let headerStyle = 'normal';
  let bodyStyle = 'normal';
  
  // Get available weights
  const headerWeights = headerFont.weights;
  const bodyWeights = bodyFont.weights;
  
  switch (contrastLevel) {
    case 'low':
      // Minimal weight difference (400/400 or 500/400)
      bodyWeight = bodyWeights.includes(400) ? 400 : bodyWeights[Math.floor(bodyWeights.length / 2)];
      
      if (headerFont.name === bodyFont.name) {
        // Same font - slight weight difference
        const possibleHeaderWeights = headerWeights.filter(w => w >= bodyWeight && w <= bodyWeight + 100);
        headerWeight = possibleHeaderWeights.length > 0 
          ? possibleHeaderWeights[0]
          : headerWeights.find(w => w > bodyWeight) || headerWeights[headerWeights.length - 1];
      } else {
        // Different but similar fonts - similar weights
        headerWeight = headerWeights.includes(bodyWeight) 
          ? bodyWeight 
          : headerWeights.find(w => w >= bodyWeight) || headerWeights[Math.floor(headerWeights.length / 2)];
      }
      break;
      
    case 'medium':
      // Moderate weight difference (600/400 or 700/400)
      bodyWeight = bodyWeights.includes(400) ? 400 : bodyWeights[Math.floor(bodyWeights.length / 3)];
      
      const mediumHeaderWeights = headerWeights.filter(w => w >= 500 && w <= 700);
      headerWeight = mediumHeaderWeights.length > 0
        ? mediumHeaderWeights[Math.floor(mediumHeaderWeights.length / 2)]
        : headerWeights[Math.floor(headerWeights.length * 0.6)];
      
      // 30% chance of italic header for serif fonts
      if (headerFont.category === 'serif' && headerFont.styles.includes('italic') && Math.random() < 0.3) {
        headerStyle = 'italic';
      }
      break;
      
    case 'high':
    default:
      // Maximum weight difference (700-900 / 300-400)
      bodyWeight = bodyWeights.includes(300) ? 300 : (bodyWeights.includes(400) ? 400 : bodyWeights[0]);
      
      const boldHeaderWeights = headerWeights.filter(w => w >= 700);
      headerWeight = boldHeaderWeights.length > 0
        ? boldHeaderWeights[Math.floor(boldHeaderWeights.length / 2)]
        : headerWeights[headerWeights.length - 1];
      
      // 50% chance of italic header for serif fonts in high contrast
      if (headerFont.category === 'serif' && headerFont.styles.includes('italic') && Math.random() < 0.5) {
        headerStyle = 'italic';
      }
      break;
  }
  
  return { headerWeight, bodyWeight, headerStyle, bodyStyle };
}

function generateJustification(headerFont: GoogleFont, bodyFont: GoogleFont, contrastLevel: string): string {
  if (headerFont.name === bodyFont.name) {
    return `Using ${headerFont.name} for both headers and body creates a cohesive, harmonious design system. The ${contrastLevel} contrast level uses subtle weight variations to establish hierarchy while maintaining visual consistency. This monochromatic approach is perfect for clean, unified interfaces.`;
  }
  
  const categoryDescription = headerFont.category === bodyFont.category
    ? `Both fonts share the ${headerFont.category} category, creating subtle visual harmony`
    : `Pairing ${headerFont.category} headers with ${bodyFont.category} body text creates dynamic contrast`;
  
  const contrastDescription = contrastLevel === 'high'
    ? 'This high-contrast pairing creates bold visual hierarchy with maximum impact'
    : contrastLevel === 'medium'
    ? 'This medium-contrast pairing balances distinction with harmony'
    : 'This low-contrast pairing creates subtle, sophisticated hierarchy';
  
  return `${categoryDescription}. ${contrastDescription}. ${headerFont.name} brings ${headerFont.vibe.slice(0, 2).join(' and ')} characteristics to headlines, while ${bodyFont.name} ensures ${bodyFont.vibe.slice(0, 2).join(' and ')} readability in body text.`;
}

function generateBestUsedFor(headerFont: GoogleFont, bodyFont: GoogleFont): string[] {
  const useCases: string[] = [];
  
  // Add use cases based on font vibes
  if (headerFont.vibe.includes('professional') || bodyFont.vibe.includes('professional')) {
    useCases.push('Corporate websites', 'Business presentations', 'Professional services');
  }
  if (headerFont.vibe.includes('elegant') || bodyFont.vibe.includes('elegant')) {
    useCases.push('Luxury brands', 'Premium products', 'Elegant portfolios');
  }
  if (headerFont.vibe.includes('modern') || bodyFont.vibe.includes('modern')) {
    useCases.push('Tech startups', 'Modern apps', 'Contemporary brands');
  }
  if (headerFont.vibe.includes('playful') || bodyFont.vibe.includes('playful')) {
    useCases.push('Creative projects', 'Fun brands', 'Youth-focused content');
  }
  if (headerFont.vibe.includes('editorial') || bodyFont.vibe.includes('editorial')) {
    useCases.push('Magazines', 'Blogs', 'Editorial content');
  }
  if (headerFont.vibe.includes('readable') || bodyFont.vibe.includes('readable')) {
    useCases.push('Long-form content', 'Educational platforms', 'Documentation');
  }
  
  // Ensure we have at least 3 use cases
  if (useCases.length < 3) {
    useCases.push('Web design', 'Digital content', 'Marketing materials');
  }
  
  return useCases.slice(0, 6);
}

export function getFontData(fontName: string): GoogleFont | undefined {
  return googleFonts.find(font => font.name === fontName);
}

// Keep track of loaded fonts to avoid duplicates
const loadedFonts = new Map<string, Set<string>>();

// Validation function to check for missing fonts in pairings
export function validateFontPairings(): { missingFonts: string[], valid: boolean } {
  const fontNames = new Set(googleFonts.map(f => f.name));
  const missingFonts = new Set<string>();
  
  fontPairings.forEach(pair => {
    if (!fontNames.has(pair.header)) {
      missingFonts.add(pair.header);
    }
    if (!fontNames.has(pair.body)) {
      missingFonts.add(pair.body);
    }
  });
  
  return {
    missingFonts: Array.from(missingFonts).sort(),
    valid: missingFonts.size === 0
  };
}

export function loadGoogleFont(fontName: string, weights: number[] = [400], styles: string[] = ['normal']): void {
  const fontData = getFontData(fontName);
  if (!fontData) return;

  const family = fontName.replace(/ /g, '+');
  const hasItalic = styles.includes('italic');
  
  // Build the weight list for Google Fonts API
  let weightParams: string[] = [];
  
  if (hasItalic) {
    // Format for italic support: ital,wght@0,weight1;0,weight2;1,weight1;1,weight2
    weights.forEach(weight => {
      weightParams.push(`0,${weight}`); // normal
      weightParams.push(`1,${weight}`); // italic
    });
    var styleParam = ':ital,wght@' + weightParams.join(';');
  } else {
    // Format for normal only: wght@weight1;weight2;weight3
    var styleParam = ':wght@' + weights.join(';');
  }
  
  const fontKey = `${family}${styleParam}`;
  
  // Check if this exact font configuration is already loaded
  if (loadedFonts.has(fontName)) {
    const loadedConfigs = loadedFonts.get(fontName)!;
    if (loadedConfigs.has(fontKey)) {
      return; // Already loaded
    }
    loadedConfigs.add(fontKey);
  } else {
    loadedFonts.set(fontName, new Set([fontKey]));
  }
  
  // Remove old font links for this family to avoid duplicates
  const existingLinks = document.querySelectorAll(`link[href*="family=${family}"]`);
  existingLinks.forEach(link => link.remove());
  
  const link = document.createElement('link');
  link.href = `https://fonts.googleapis.com/css2?family=${family}${styleParam}&display=swap`;
  link.rel = 'stylesheet';
  document.head.appendChild(link);
}
