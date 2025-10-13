import React, { useState } from 'react';
import { Settings, Type, Palette, RectangleHorizontal, Code, Download } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from './ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { FontControls } from './FontControls';
import { ButtonControls } from './ButtonControls';
import { ColorControls } from './ColorControls';
import { FontCode } from './FontCode';

interface MobileControlsProps {
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
  buttonRadius: string;
  buttonVariant: string;
  onButtonRadiusChange: (radius: string) => void;
  onButtonVariantChange: (variant: string) => void;
  textColor: string;
  backgroundColor: string;
  buttonBgColor: string;
  buttonTextColor: string;
  onTextColorChange: (color: string) => void;
  onBackgroundColorChange: (color: string) => void;
  onButtonBgColorChange: (color: string) => void;
  onButtonTextColorChange: (color: string) => void;
  onRandomizeColors: () => void;
  onSwapFonts: () => void;
  styleContrast: string;
  onStyleContrastChange: (contrast: string) => void;
  isHeaderLocked: boolean;
  isBodyLocked: boolean;
  onHeaderLockToggle: () => void;
  onBodyLockToggle: () => void;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  shouldExpandFontCode?: boolean;
  onFontCodeExpandChange?: (expanded: boolean) => void;
  initialTab?: string;
}

export function MobileControls({
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
  buttonRadius,
  buttonVariant,
  onButtonRadiusChange,
  onButtonVariantChange,
  textColor,
  backgroundColor,
  buttonBgColor,
  buttonTextColor,
  onTextColorChange,
  onBackgroundColorChange,
  onButtonBgColorChange,
  onButtonTextColorChange,
  onRandomizeColors,
  onSwapFonts,
  styleContrast,
  onStyleContrastChange,
  isHeaderLocked,
  isBodyLocked,
  onHeaderLockToggle,
  onBodyLockToggle,
  isOpen: controlledIsOpen,
  onOpenChange,
  shouldExpandFontCode,
  onFontCodeExpandChange,
  initialTab = "fonts"
}: MobileControlsProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("fonts");
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  const setIsOpen = onOpenChange || setInternalIsOpen;

  // Sync currentTab with initialTab when it changes
  React.useEffect(() => {
    console.log("initialTab changed to:", initialTab);
    setCurrentTab(initialTab);
  }, [initialTab]);

  const getTabTitle = () => {
    switch (currentTab) {
      case "fonts":
        return "Fonts";
      case "colors":
        return "Colors";
      case "buttons":
        return "Buttons";
      case "code":
        return "Use Fonts";
      default:
        return "Fonts";
    }
  };

  return (
    <div className="xl:hidden fixed bottom-6 right-6 z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button 
            size="lg" 
            className="rounded-full shadow-lg h-14 w-14"
            style={{ backgroundColor: '#4d2487', borderColor: '#4d2487', color: 'white' }}
          >
            <Settings className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[90vh] overflow-y-auto px-6 pb-6">
          <SheetHeader className="mb-6">
            <SheetTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Controls
            </SheetTitle>
            <SheetDescription>
              Adjust font pairing, colors, and styling options
            </SheetDescription>
          </SheetHeader>
          <div>
            <Tabs value={currentTab} className="w-full" onValueChange={setCurrentTab}>
              <div className="mb-4">
                <h3 className="text-lg font-semibold">{getTabTitle()}</h3>
              </div>
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="fonts" className="flex items-center gap-2">
                  <Type className="w-4 h-4" />
                  <span className="hidden sm:inline">Fonts</span>
                </TabsTrigger>
                <TabsTrigger value="colors" className="flex items-center gap-2">
                  <Palette className="w-4 h-4" />
                  <span className="hidden sm:inline">Colors</span>
                </TabsTrigger>
                <TabsTrigger value="buttons" className="flex items-center gap-2">
                  <RectangleHorizontal className="w-4 h-4" />
                  <span className="hidden sm:inline">Buttons</span>
                </TabsTrigger>
                <TabsTrigger value="code" className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Use Fonts</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="fonts" className="mt-0">
                <FontControls
                  selectedStyle={selectedStyle}
                  onStyleChange={onStyleChange}
                  onRandomize={onRandomize}
                  headerFont={headerFont}
                  bodyFont={bodyFont}
                  onHeaderFontChange={onHeaderFontChange}
                  onBodyFontChange={onBodyFontChange}
                  headerWeight={headerWeight}
                  bodyWeight={bodyWeight}
                  onHeaderWeightChange={onHeaderWeightChange}
                  onBodyWeightChange={onBodyWeightChange}
                  headerStyle={headerStyle}
                  bodyStyle={bodyStyle}
                  onHeaderStyleChange={onHeaderStyleChange}
                  onBodyStyleChange={onBodyStyleChange}
                  headerSize={headerSize}
                  bodySize={bodySize}
                  onHeaderSizeChange={onHeaderSizeChange}
                  onBodySizeChange={onBodySizeChange}
                  onSwapFonts={onSwapFonts}
                  styleContrast={styleContrast}
                  onStyleContrastChange={onStyleContrastChange}
                  isHeaderLocked={isHeaderLocked}
                  isBodyLocked={isBodyLocked}
                  onHeaderLockToggle={onHeaderLockToggle}
                  onBodyLockToggle={onBodyLockToggle}
                />
              </TabsContent>

              <TabsContent value="colors" className="mt-0">
                <ColorControls
                  textColor={textColor}
                  backgroundColor={backgroundColor}
                  buttonBgColor={buttonBgColor}
                  buttonTextColor={buttonTextColor}
                  buttonVariant={buttonVariant}
                  onTextColorChange={onTextColorChange}
                  onBackgroundColorChange={onBackgroundColorChange}
                  onButtonBgColorChange={onButtonBgColorChange}
                  onButtonTextColorChange={onButtonTextColorChange}
                  onRandomizeColors={onRandomizeColors}
                />
              </TabsContent>

              <TabsContent value="buttons" className="mt-0">
                <ButtonControls
                  buttonRadius={buttonRadius}
                  buttonVariant={buttonVariant}
                  onButtonRadiusChange={onButtonRadiusChange}
                  onButtonVariantChange={onButtonVariantChange}
                />
              </TabsContent>

              <TabsContent value="code" className="mt-0">
                <FontCode
                  headerFont={headerFont}
                  bodyFont={bodyFont}
                  headerWeight={headerWeight}
                  bodyWeight={bodyWeight}
                  headerStyle={headerStyle}
                  bodyStyle={bodyStyle}
                  headerSize={headerSize}
                  textColor={textColor}
                  backgroundColor={backgroundColor}
                  buttonRadius={buttonRadius}
                  buttonVariant={buttonVariant}
                  buttonBgColor={buttonBgColor}
                  buttonTextColor={buttonTextColor}
                />
              </TabsContent>
            </Tabs>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
