import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Lightbulb } from 'lucide-react';
import { getFontData, fontPairings } from '../utils/fonts';

interface PairingJustificationProps {
  headerFont: string;
  bodyFont: string;
}

export function PairingJustification({
  headerFont,
  bodyFont
}: PairingJustificationProps) {
  const headerFontData = getFontData(headerFont);
  const bodyFontData = getFontData(bodyFont);

  const getPairingJustification = (header: string, body: string, headerData: any, bodyData: any) => {
    // First, try to find this exact pairing in our curated list
    const curatedPairing = fontPairings.find(p => 
      p.header === header && p.body === body
    );
    
    if (curatedPairing) {
      // Use the curated justification
      return {
        main: curatedPairing.justification,
        category: curatedPairing.category
      };
    }
    
    // Fallback to generic justifications
    const headerCategory = headerData?.category || 'sans-serif';
    const bodyCategory = bodyData?.category || 'sans-serif';
    
    let main = '';
    let category = 'modern';
    
    if (header === body) {
      // Same font pairing
      main = `Monochromatic pairing using ${header} creates perfect harmony. Low weight difference maintains visual cohesion while establishing subtle hierarchy through size and weight variations.`;
      category = 'minimal';
    } else if (headerCategory === bodyCategory) {
      if (headerCategory === 'serif') {
        main = `Elegant serif pairing creates sophisticated, timeless aesthetic. Both fonts share typographic roots, establishing visual harmony while offering distinct character.`;
        category = 'classic';
      } else if (headerCategory === 'sans-serif') {
        main = `Modern sans-serif pairing delivers clean, contemporary feel. Creates unified visual language with strong hierarchy through weight and size contrast.`;
        category = 'modern';
      } else {
        main = `Fonts share the same style, creating visual harmony while offering distinct character for different text roles.`;
        category = 'playful';
      }
    } else {
      if ((headerCategory === 'serif' && bodyCategory === 'sans-serif') || 
          (headerCategory === 'sans-serif' && bodyCategory === 'serif')) {
        main = `Classic contrast pairing. ${header} (${headerCategory}) with ${body} (${bodyCategory}) creates strong visual hierarchy while maintaining excellent readability.`;
        category = 'professional';
      } else {
        main = `Contrast between ${headerCategory} and ${bodyCategory} creates visual interest and clear hierarchy. Unique character with personality.`;
        category = 'creative';
      }
    }
    
    return { main, category };
  };

  const justification = getPairingJustification(headerFont, bodyFont, headerFontData, bodyFontData);

  // Get the full pairing data for best used for
  const curatedPairing = fontPairings.find(p => 
    p.header === headerFont && p.body === bodyFont
  );
  
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="w-5 h-5" />
          Why This Pairing Works
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-base leading-relaxed">
            {justification.main}
          </p>
          
          {curatedPairing && curatedPairing.bestUsedFor && curatedPairing.bestUsedFor.length > 0 && (
            <div>
              <h5 className="text-xs uppercase tracking-wider mb-2 opacity-70">
                Best Used For
              </h5>
              <div className="flex flex-wrap gap-2">
                {curatedPairing.bestUsedFor.map((use, idx) => (
                  <span 
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full border border-border bg-muted/20"
                  >
                    {use}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
