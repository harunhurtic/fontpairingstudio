import { Shuffle, ArrowLeftRight, Lock, Unlock, ChevronDown, ChevronUp, Type, Heart, ChevronsUpDown, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Slider } from './ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './ui/command';
import { styles, googleFonts, getFontData, loadGoogleFont } from '../utils/fonts';
import { cn } from './ui/utils';

interface FontControlsProps {
  selectedStyle: string;
  onStyleChange: (style: string) => void;
  onRandomize: () => void;
  headerFont: string;
  bodyFont: string;
  onHeaderFontChange: (font: string) => void;
  onBodyFontChange: (font: string) => void;
  headerWeight: number;
  bodyWeight: number;
  onHeaderWeightChange: (weight: number) => void;
  onBodyWeightChange: (weight: number) => void;
  headerStyle: string;
  bodyStyle: string;
  onHeaderStyleChange: (style: string) => void;
  onBodyStyleChange: (style: string) => void;
  headerSize: number;
  bodySize: number;
  onHeaderSizeChange: (size: number) => void;
  onBodySizeChange: (size: number) => void;
  onSwapFonts: () => void;
  styleContrast: string;
  onStyleContrastChange: (contrast: string) => void;
  isHeaderLocked: boolean;
  isBodyLocked: boolean;
  onHeaderLockToggle: () => void;
  onBodyLockToggle: () => void;
}

export function FontControls({
  selectedStyle,
  onStyleChange,
  onRandomize,
  headerFont,
  bodyFont,
  onHeaderFontChange,
  onBodyFontChange,
  headerWeight,
  bodyWeight,
  onHeaderWeightChange,
  onBodyWeightChange,
  headerStyle,
  bodyStyle,
  onHeaderStyleChange,
  onBodyStyleChange,
  headerSize,
  bodySize,
  onHeaderSizeChange,
  onBodySizeChange,
  onSwapFonts,
  styleContrast,
  onStyleContrastChange,
  isHeaderLocked,
  isBodyLocked,
  onHeaderLockToggle,
  onBodyLockToggle
}: FontControlsProps) {
  const [isExpanded, setIsExpanded] = useState(true); // Expanded by default
  const [headerFontOpen, setHeaderFontOpen] = useState(false);
  const [bodyFontOpen, setBodyFontOpen] = useState(false);
  const headerFontData = getFontData(headerFont);
  const bodyFontData = getFontData(bodyFont);

  // Load all fonts for dropdown preview
  useEffect(() => {
    googleFonts.forEach(font => {
      loadGoogleFont(font.name, [400], ['normal']);
    });
  }, []);

  return (
    <div className="space-y-6">
        {/* Style Selection */}
        <div className="space-y-2">
          <label htmlFor="style-select">Choose a Style</label>
          <Select value={selectedStyle} onValueChange={onStyleChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select a style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Styles</SelectItem>
              {styles.map(style => (
                <SelectItem key={style} value={style}>
                  {style.charAt(0).toUpperCase() + style.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Style Contrast */}
        <div className="space-y-2">
          <label htmlFor="contrast-select">Style Contrast</label>
          <Select value={styleContrast} onValueChange={onStyleContrastChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select contrast level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low Contrast - Similar styles</SelectItem>
              <SelectItem value="medium">Medium Contrast - Moderate difference</SelectItem>
              <SelectItem value="high">High Contrast - Very different styles</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground">
            Controls the visual contrast between your header and body fonts. Low: same/similar fonts with minimal weight differences. Medium: complementary fonts with moderate contrast. High: maximum visual impact with different styles and weights.
          </p>
        </div>

        {/* Generate Font Pairing Button */}
        <Button 
          onClick={onRandomize} 
          className="w-full dark:bg-white dark:text-black dark:hover:bg-gray-200" 
          size="lg"
          style={{ backgroundColor: '#4d2487', borderColor: '#4d2487', color: 'white' }}
        >
          <Shuffle className="w-4 h-4 mr-2" />
          Generate Font Pairing
        </Button>

        {/* Font Selection */}
        <div className="space-y-4">
          <label>Font Selection</label>
          
          {/* Header Font */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm text-muted-foreground">Header Font</label>
              <Button
                variant="outline"
                size="sm"
                onClick={onHeaderLockToggle}
                className={`flex items-center gap-1 ${isHeaderLocked ? 'bg-muted' : ''}`}
              >
                {isHeaderLocked ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
                {isHeaderLocked ? 'Locked' : 'Lock'}
              </Button>
            </div>
            <Popover open={headerFontOpen} onOpenChange={setHeaderFontOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={headerFontOpen}
                  className={cn("w-full justify-between", isHeaderLocked && "opacity-60")}
                  disabled={isHeaderLocked}
                  style={{ fontFamily: headerFont }}
                >
                  {headerFont}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[min(300px,calc(100vw-3rem))] p-0" align="start">
                <Command>
                  <CommandInput placeholder="Search fonts..." />
                  <CommandList className="max-h-[40vh]">
                    <CommandEmpty>No font found.</CommandEmpty>
                    <CommandGroup>
                      {googleFonts.map((font) => (
                        <CommandItem
                          key={font.name}
                          value={font.name}
                          onSelect={(currentValue) => {
                            onHeaderFontChange(currentValue);
                            setHeaderFontOpen(false);
                          }}
                          style={{ fontFamily: font.name }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              headerFont === font.name ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {font.name}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center">
            <Button 
              variant="outline" 
              size="sm"
              onClick={onSwapFonts}
              className="flex items-center gap-2"
            >
              <ArrowLeftRight className="w-3 h-3" />
              Swap Fonts
            </Button>
          </div>

          {/* Body Font */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm text-muted-foreground">Body Font</label>
              <Button
                variant="outline"
                size="sm"
                onClick={onBodyLockToggle}
                className={`flex items-center gap-1 ${isBodyLocked ? 'bg-muted' : ''}`}
              >
                {isBodyLocked ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
                {isBodyLocked ? 'Locked' : 'Lock'}
              </Button>
            </div>
            <Popover open={bodyFontOpen} onOpenChange={setBodyFontOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={bodyFontOpen}
                  className={cn("w-full justify-between", isBodyLocked && "opacity-60")}
                  disabled={isBodyLocked}
                  style={{ fontFamily: bodyFont }}
                >
                  {bodyFont}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[min(300px,calc(100vw-3rem))] p-0" align="start">
                <Command>
                  <CommandInput placeholder="Search fonts..." />
                  <CommandList className="max-h-[40vh]">
                    <CommandEmpty>No font found.</CommandEmpty>
                    <CommandGroup>
                      {googleFonts.map((font) => (
                        <CommandItem
                          key={font.name}
                          value={font.name}
                          onSelect={(currentValue) => {
                            onBodyFontChange(currentValue);
                            setBodyFontOpen(false);
                          }}
                          style={{ fontFamily: font.name }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              bodyFont === font.name ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {font.name}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Weight Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label>Header Weight</label>
            <Select value={headerWeight.toString()} onValueChange={(value) => onHeaderWeightChange(parseInt(value))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {headerFontData?.weights.map(weight => (
                  <SelectItem key={weight} value={weight.toString()}>
                    {weight}
                  </SelectItem>
                )) || [400].map(weight => (
                  <SelectItem key={weight} value={weight.toString()}>
                    {weight}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label>Body Weight</label>
            <Select value={bodyWeight.toString()} onValueChange={(value) => onBodyWeightChange(parseInt(value))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {bodyFontData?.weights.map(weight => (
                  <SelectItem key={weight} value={weight.toString()}>
                    {weight}
                  </SelectItem>
                )) || [400].map(weight => (
                  <SelectItem key={weight} value={weight.toString()}>
                    {weight}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>



        {/* Style Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label>Header Style</label>
            <Select value={headerStyle} onValueChange={onHeaderStyleChange}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {headerFontData?.styles.map(style => (
                  <SelectItem key={style} value={style}>
                    {style.charAt(0).toUpperCase() + style.slice(1)}
                  </SelectItem>
                )) || ['normal'].map(style => (
                  <SelectItem key={style} value={style}>
                    {style.charAt(0).toUpperCase() + style.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label>Body Style</label>
            <Select value={bodyStyle} onValueChange={onBodyStyleChange}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {bodyFontData?.styles.map(style => (
                  <SelectItem key={style} value={style}>
                    {style.charAt(0).toUpperCase() + style.slice(1)}
                  </SelectItem>
                )) || ['normal'].map(style => (
                  <SelectItem key={style} value={style}>
                    {style.charAt(0).toUpperCase() + style.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Size Controls */}
        <div className="space-y-4">
          <div className="space-y-2">
            <label>Header Size: {headerSize}px</label>
            <Slider
              value={[headerSize]}
              onValueChange={(value) => onHeaderSizeChange(value[0])}
              min={24}
              max={96}
              step={1}
              className="[&_[role=slider]]:bg-[#4d2487] [&_[role=slider]]:border-[#4d2487]"
            />
          </div>

          <div className="space-y-2">
            <label>Body Size: {bodySize}px</label>
            <Slider
              value={[bodySize]}
              onValueChange={(value) => onBodySizeChange(value[0])}
              min={12}
              max={24}
              step={1}
              className="[&_[role=slider]]:bg-[#4d2487] [&_[role=slider]]:border-[#4d2487]"
            />
          </div>
        </div>
    </div>
  );
}