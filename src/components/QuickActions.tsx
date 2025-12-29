import { Palette, Download, Shuffle } from 'lucide-react';
import { Button } from './ui/button';

interface QuickActionsProps {
  onRandomizeColors: () => void;
  onUseFonts?: () => void;
  onRandomizeFonts?: () => void;
}

export function QuickActions({
  onRandomizeColors,
  onUseFonts,
  onRandomizeFonts
}: QuickActionsProps) {
  return (
    <div className="xl:hidden bg-muted/20 p-4 rounded-lg mb-4">
      <h4 className="font-medium mb-2 text-center">Quick Actions</h4>
      <div className="grid grid-cols-2 gap-2">
        {onRandomizeFonts && (
          <Button 
            onClick={onRandomizeFonts} 
            className="w-full" 
            size="sm"
            style={{ backgroundColor: '#4d2487', borderColor: '#4d2487', color: 'white' }}
          >
            <Shuffle className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Generate Fonts</span>
            <span className="sm:hidden">Fonts</span>
          </Button>
        )}
        <Button 
          onClick={onRandomizeColors} 
          className="w-full" 
          size="sm"
          style={{ backgroundColor: '#4d2487', borderColor: '#4d2487', color: 'white' }}
        >
          <Palette className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">Random Colors</span>
          <span className="sm:hidden">Colors</span>
        </Button>
        {onUseFonts && (
          <Button 
            onClick={onUseFonts} 
            className="w-full col-span-2" 
            size="sm"
            style={{ 
              backgroundColor: '#4d2487',
              borderColor: '#4d2487',
              color: 'white'
            }}
          >
            <Download className="w-4 h-4 mr-2" />
            Use Fonts
          </Button>
        )}
      </div>
    </div>
  );
}