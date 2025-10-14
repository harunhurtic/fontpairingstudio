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
        category: curatedPairing.category,
        bestUsedFor: curatedPairing.bestUsedFor
      };
    }
    
    // Fallback to generic justifications
    const headerCategory = headerData?.category || 'sans-serif';
    const bodyCategory = bodyData?.category || 'sans-serif';
    
    let main = '';
    let category = 'modern';
    let bestUsedFor: string[] = [];
    
    if (header === body) {
      // Same font pairing
      main = `Monochromatic pairing using ${header} creates perfect harmony. Low weight difference maintains visual cohesion while establishing subtle hierarchy through size and weight variations.`;
      category = 'minimal';
      bestUsedFor = ['Minimalist websites', 'Design systems', 'Modern interfaces', 'Clean layouts'];
    } else if (headerCategory === bodyCategory) {
      if (headerCategory === 'serif') {
        main = `Elegant serif pairing creates sophisticated, timeless aesthetic. Both fonts share typographic roots, establishing visual harmony while offering distinct character.`;
        category = 'classic';
        bestUsedFor = ['Editorial content', 'Publishing', 'Literary websites', 'Classic brands', 'Premium content'];
      } else if (headerCategory === 'sans-serif') {
        main = `Modern sans-serif pairing delivers clean, contemporary feel. Creates unified visual language with strong hierarchy through weight and size contrast.`;
        category = 'modern';
        bestUsedFor = ['Tech companies', 'Modern websites', 'Digital products', 'SaaS platforms', 'Startups'];
      } else if (headerCategory === 'display') {
        main = `Bold display pairing creates dramatic impact and memorable visual identity. Both fonts bring unique personality while maintaining cohesive style.`;
        category = 'creative';
        bestUsedFor = ['Creative projects', 'Marketing campaigns', 'Event branding', 'Bold statements', 'Eye-catching designs'];
      } else if (headerCategory === 'handwriting') {
        main = `Handwritten pairing adds personal touch and human warmth. Both fonts create friendly, approachable atmosphere with organic character.`;
        category = 'friendly';
        bestUsedFor = ['Personal brands', 'Craft businesses', 'Casual content', 'Friendly apps', 'Creative ventures'];
      } else {
        main = `Fonts share the same style, creating visual harmony while offering distinct character for different text roles.`;
        category = 'creative';
        bestUsedFor = ['Creative projects', 'Unique brands', 'Artistic content', 'Experimental designs'];
      }
    } else {
      if ((headerCategory === 'serif' && bodyCategory === 'sans-serif') || 
          (headerCategory === 'sans-serif' && bodyCategory === 'serif')) {
        main = `Classic contrast pairing. ${header} (${headerCategory}) with ${body} (${bodyCategory}) creates strong visual hierarchy while maintaining excellent readability.`;
        category = 'professional';
        bestUsedFor = ['Business websites', 'Professional blogs', 'Corporate content', 'Editorial design', 'Traditional brands'];
      } else if ((headerCategory === 'display' && bodyCategory === 'sans-serif') ||
                 (headerCategory === 'display' && bodyCategory === 'serif')) {
        main = `Bold display headlines paired with readable body text create powerful visual impact. Strong contrast draws attention while maintaining excellent legibility.`;
        category = 'bold';
        bestUsedFor = ['Marketing sites', 'Landing pages', 'Product launches', 'Event promotions', 'Bold campaigns'];
      } else if (headerCategory === 'handwriting' || bodyCategory === 'handwriting') {
        main = `Handwritten elements add personal, human touch while contrasting fonts maintain professional readability. Perfect balance of warmth and clarity.`;
        category = 'friendly';
        bestUsedFor = ['Personal websites', 'Small businesses', 'Creative services', 'Friendly brands', 'Welcoming content'];
      } else if (headerCategory === 'monospace' || bodyCategory === 'monospace') {
        main = `Monospace typography brings technical precision and code-like aesthetic. Contrast creates unique character perfect for tech and developer-focused content.`;
        category = 'creative';
        bestUsedFor = ['Developer tools', 'Tech blogs', 'Code documentation', 'Digital products', 'Tech startups'];
      } else {
        main = `Contrast between ${headerCategory} and ${bodyCategory} creates visual interest and clear hierarchy. Unique character with personality.`;
        category = 'creative';
        bestUsedFor = ['Creative projects', 'Unique designs', 'Artistic content', 'Experimental brands', 'Bold ideas'];
      }
    }
    
    return { main, category, bestUsedFor };
  };

  const justification = getPairingJustification(headerFont, bodyFont, headerFontData, bodyFontData);
  
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
          
          {justification.bestUsedFor && justification.bestUsedFor.length > 0 && (
            <div>
              <h5 className="text-xs uppercase tracking-wider mb-2 opacity-70">
                Best Used For
              </h5>
              <div className="flex flex-wrap gap-2">
                {justification.bestUsedFor.map((use, idx) => (
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
