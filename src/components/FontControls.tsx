import { Shuffle, ArrowUpDown, ArrowLeftRight, Lock, Unlock, ChevronDown, ChevronUp, Type, Heart, ChevronsUpDown, Check, RotateCcw } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Slider } from './ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './ui/command';
import { styles, googleFonts, getFontData, loadGoogleFont } from '../utils/fonts';
import { cn } from './ui/utils';
import { toast } from 'sonner@2.0.3';

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
  headerLineHeight: number;
  bodyLineHeight: number;
  onHeaderLineHeightChange: (lineHeight: number) => void;
  onBodyLineHeightChange: (lineHeight: number) => void;
  headerLetterSpacing: number;
  bodyLetterSpacing: number;
  onHeaderLetterSpacingChange: (spacing: number) => void;
  onBodyLetterSpacingChange: (spacing: number) => void;
  onSwapFonts: () => void;
  onResetTypography: () => void;
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
  headerLineHeight,
  bodyLineHeight,
  onHeaderLineHeightChange,
  onBodyLineHeightChange,
  headerLetterSpacing,
  bodyLetterSpacing,
  onHeaderLetterSpacingChange,
  onBodyLetterSpacingChange,
  onSwapFonts,
  onResetTypography,
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
        <div className="space-y-3">
          <label>Font Selection</label>
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-3 items-start">
            {/* Header Font */}
            <div className="space-y-2 min-w-0">
              <label className="text-sm text-muted-foreground">Header Font</label>
              <div className="flex gap-2 min-w-0 items-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    onHeaderLockToggle();
                    if (isHeaderLocked) {
                      toast.success('Header font unlocked', {
                        icon: (
                          <div
                            style={{
                              backgroundColor: '#4d2487',
                              borderRadius: '50%',
                              width: '20px',
                              height: '20px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <Unlock className="w-3 h-3" style={{ color: 'white' }} />
                          </div>
                        ),
                      });
                    } else {
                      toast.success('Header font locked', {
                        icon: (
                          <div
                            style={{
                              backgroundColor: '#4d2487',
                              borderRadius: '50%',
                              width: '20px',
                              height: '20px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <Lock className="w-3 h-3" style={{ color: 'white' }} />
                          </div>
                        ),
                      });
                    }
                  }}
                  className="shrink-0"
                  style={isHeaderLocked ? {
                    backgroundColor: '#4d2487',
                    color: 'white'
                  } : {}}
                  title={isHeaderLocked ? 'Unlock header font' : 'Lock header font'}
                >
                  {isHeaderLocked ? <Lock className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
                </Button>
                <Popover open={headerFontOpen} onOpenChange={setHeaderFontOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={headerFontOpen}
                      className={cn("flex-1 justify-between min-w-0", isHeaderLocked && "opacity-60")}
                      disabled={isHeaderLocked}
                      style={{ fontFamily: headerFont }}
                    >
                      <span className="truncate">{headerFont}</span>
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[min(300px,calc(100vw-3rem))] p-0" align="start">
                    <Command className="[&_[cmdk-list]]:max-h-[40vh] [&_[cmdk-list]]:overflow-y-auto [&_[cmdk-list]]:overscroll-contain">
                      <CommandInput placeholder="Search fonts..." />
                      <CommandList>
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
            </div>

            {/* Swap Button */}
            <div className="flex items-center justify-center lg:pt-7">
              <Button 
                variant="outline" 
                size="sm"
                onClick={onSwapFonts}
                className="flex items-center gap-2"
                title="Swap header and body fonts"
              >
                <ArrowUpDown className="w-4 h-4 lg:hidden" />
                <ArrowLeftRight className="w-4 h-4 hidden lg:block" />
                <span className="lg:hidden">Swap Fonts</span>
              </Button>
            </div>

            {/* Body Font */}
            <div className="space-y-2 min-w-0">
              <label className="text-sm text-muted-foreground">Body Font</label>
              <div className="flex gap-2 min-w-0 items-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    onBodyLockToggle();
                    if (isBodyLocked) {
                      toast.success('Body font unlocked', {
                        icon: (
                          <div
                            style={{
                              backgroundColor: '#4d2487',
                              borderRadius: '50%',
                              width: '20px',
                              height: '20px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <Unlock className="w-3 h-3" style={{ color: 'white' }} />
                          </div>
                        ),
                      });
                    } else {
                      toast.success('Body font locked', {
                        icon: (
                          <div
                            style={{
                              backgroundColor: '#4d2487',
                              borderRadius: '50%',
                              width: '20px',
                              height: '20px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <Lock className="w-3 h-3" style={{ color: 'white' }} />
                          </div>
                        ),
                      });
                    }
                  }}
                  className="shrink-0 lg:hidden"
                  style={isBodyLocked ? {
                    backgroundColor: '#4d2487',
                    color: 'white'
                  } : {}}
                  title={isBodyLocked ? 'Unlock body font' : 'Lock body font'}
                >
                  {isBodyLocked ? <Lock className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
                </Button>
                <Popover open={bodyFontOpen} onOpenChange={setBodyFontOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={bodyFontOpen}
                      className={cn("flex-1 justify-between min-w-0", isBodyLocked && "opacity-60")}
                      disabled={isBodyLocked}
                      style={{ fontFamily: bodyFont }}
                    >
                      <span className="truncate">{bodyFont}</span>
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[min(300px,calc(100vw-3rem))] p-0" align="start">
                    <Command className="[&_[cmdk-list]]:max-h-[40vh] [&_[cmdk-list]]:overflow-y-auto [&_[cmdk-list]]:overscroll-contain">
                      <CommandInput placeholder="Search fonts..." />
                      <CommandList>
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
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    onBodyLockToggle();
                    if (isBodyLocked) {
                      toast.success('Body font unlocked', {
                        icon: (
                          <div
                            style={{
                              backgroundColor: '#4d2487',
                              borderRadius: '50%',
                              width: '20px',
                              height: '20px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <Unlock className="w-3 h-3" style={{ color: 'white' }} />
                          </div>
                        ),
                      });
                    } else {
                      toast.success('Body font locked', {
                        icon: (
                          <div
                            style={{
                              backgroundColor: '#4d2487',
                              borderRadius: '50%',
                              width: '20px',
                              height: '20px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <Lock className="w-3 h-3" style={{ color: 'white' }} />
                          </div>
                        ),
                      });
                    }
                  }}
                  className="shrink-0 hidden lg:block"
                  style={isBodyLocked ? {
                    backgroundColor: '#4d2487',
                    color: 'white'
                  } : {}}
                  title={isBodyLocked ? 'Unlock body font' : 'Lock body font'}
                >
                  {isBodyLocked ? <Lock className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
                </Button>
              </div>
            </div>
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

        {/* Typography Controls */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-3">
              <label>Size</label>
              <Button 
                variant="outline" 
                size="sm"
                onClick={onResetTypography}
                className="flex items-center gap-2"
              >
                <RotateCcw className="w-3 h-3" />
                Reset Size & Spacing
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Header: {headerSize}px</label>
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
                <label className="text-sm text-muted-foreground">Body: {bodySize}px</label>
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

          <div>
            <label className="block mb-3">Line Height</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Header: {headerLineHeight.toFixed(2)}</label>
                <Slider
                  value={[headerLineHeight]}
                  onValueChange={(value) => onHeaderLineHeightChange(value[0])}
                  min={0.8}
                  max={2}
                  step={0.05}
                  className="[&_[role=slider]]:bg-[#4d2487] [&_[role=slider]]:border-[#4d2487]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Body: {bodyLineHeight.toFixed(2)}</label>
                <Slider
                  value={[bodyLineHeight]}
                  onValueChange={(value) => onBodyLineHeightChange(value[0])}
                  min={1}
                  max={2.5}
                  step={0.05}
                  className="[&_[role=slider]]:bg-[#4d2487] [&_[role=slider]]:border-[#4d2487]"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block mb-3">Letter Spacing</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Header: {(headerLetterSpacing * 1000).toFixed(0)} ({headerLetterSpacing >= 0 ? '+' : ''}{(headerLetterSpacing * 100).toFixed(1)}%)</label>
                <Slider
                  value={[headerLetterSpacing]}
                  onValueChange={(value) => onHeaderLetterSpacingChange(value[0])}
                  min={-0.05}
                  max={0.2}
                  step={0.005}
                  className="[&_[role=slider]]:bg-[#4d2487] [&_[role=slider]]:border-[#4d2487]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Body: {(bodyLetterSpacing * 1000).toFixed(0)} ({bodyLetterSpacing >= 0 ? '+' : ''}{(bodyLetterSpacing * 100).toFixed(1)}%)</label>
                <Slider
                  value={[bodyLetterSpacing]}
                  onValueChange={(value) => onBodyLetterSpacingChange(value[0])}
                  min={-0.05}
                  max={0.2}
                  step={0.005}
                  className="[&_[role=slider]]:bg-[#4d2487] [&_[role=slider]]:border-[#4d2487]"
                />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}