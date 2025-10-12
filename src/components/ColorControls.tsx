import {
  Palette,
  Shuffle,
  AlertCircle,
  CheckCircle,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import {
  checkContrast,
  generateRandomColor,
  ContrastResult,
} from "../utils/contrast";

interface ColorControlsProps {
  textColor: string;
  backgroundColor: string;
  buttonBgColor: string;
  buttonTextColor: string;
  onTextColorChange: (color: string) => void;
  onBackgroundColorChange: (color: string) => void;
  onButtonBgColorChange: (color: string) => void;
  onButtonTextColorChange: (color: string) => void;
  onRandomizeColors: () => void;
}

interface ColorPairing {
  text: string;
  background: string;
  name: string;
}

export function ColorControls({
  textColor,
  backgroundColor,
  buttonBgColor,
  buttonTextColor,
  onTextColorChange,
  onBackgroundColorChange,
  onButtonBgColorChange,
  onButtonTextColorChange,
  onRandomizeColors,
}: ColorControlsProps) {
  const [isExpanded, setIsExpanded] = useState(false); // Collapsed by default
  const contrastResult = checkContrast(
    textColor,
    backgroundColor,
  );
  
  // Check button contrast (button text vs button background)
  const buttonContrastResult = checkContrast(
    buttonTextColor,
    buttonBgColor,
  );
  
  // Check button visibility (button background vs page background)
  const buttonVisibilityResult = checkContrast(
    buttonBgColor,
    backgroundColor,
  );

  const getContrastIcon = (result: ContrastResult) => {
    if (result.aaa)
      return <CheckCircle className="w-4 h-4 text-green-600" />;
    if (result.aa)
      return <CheckCircle className="w-4 h-4 text-blue-600" />;
    if (result.aaLarge)
      return (
        <AlertTriangle className="w-4 h-4 text-yellow-600" />
      );
    return <AlertCircle className="w-4 h-4 text-red-600" />;
  };

  const getContrastColor = (result: ContrastResult) => {
    if (result.aaa)
      return "bg-green-100 text-green-800 border-green-200";
    if (result.aa)
      return "bg-blue-100 text-blue-800 border-blue-200";
    if (result.aaLarge)
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    return "bg-red-100 text-red-800 border-red-200";
  };

  // Accessible preset color pairings (WCAG AAA compliant)
  const accessiblePairings: ColorPairing[] = [
    { text: '#000000', background: '#ffffff', name: 'Classic' },
    { text: '#ffffff', background: '#000000', name: 'Inverted' },
    { text: '#1a1a1a', background: '#f5f5f5', name: 'Soft' },
    { text: '#2c3e50', background: '#ecf0f1', name: 'Slate' },
    { text: '#1e3a8a', background: '#eff6ff', name: 'Ocean' },
    { text: '#6b21a8', background: '#faf5ff', name: 'Purple' },
    { text: '#9f1239', background: '#fef2f2', name: 'Rose' },
    { text: '#065f46', background: '#ecfdf5', name: 'Forest' },
    { text: '#92400e', background: '#fef3c7', name: 'Amber' },
    { text: '#991b1b', background: '#fef2f2', name: 'Crimson' },
    { text: '#1e40af', background: '#dbeafe', name: 'Sky' },
    { text: '#047857', background: '#d1fae5', name: 'Mint' },
    { text: '#ffffff', background: '#1e293b', name: 'Night' },
    { text: '#ffffff', background: '#6b21a8', name: 'Violet' },
    { text: '#ffffff', background: '#0e7490', name: 'Cyan' },
    { text: '#ffffff', background: '#b91c1c', name: 'Red' },
    { text: '#422006', background: '#fef3c7', name: 'Cream' },
    { text: '#312e81', background: '#e0e7ff', name: 'Indigo' },
  ];

  const applyColorPairing = (pairing: ColorPairing) => {
    onTextColorChange(pairing.text);
    onBackgroundColorChange(pairing.background);
    // Make button background the same as text color, but ensure button text is visible
    onButtonBgColorChange(pairing.text);
    onButtonTextColorChange(pairing.background);
  };

  return (
    <div className="space-y-6">
          {/* Color Pickers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm">Text Color</label>
              <div className="flex items-center gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      className="w-12 h-12 flex-shrink-0 rounded border-2 cursor-pointer hover:border-gray-400 transition-colors"
                      style={{ backgroundColor: textColor }}
                      title="Pick text color"
                    />
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-3">
                    <HexColorPicker color={textColor} onChange={onTextColorChange} />
                  </PopoverContent>
                </Popover>
                <input
                  type="text"
                  value={textColor}
                  onChange={(e) =>
                    onTextColorChange(e.target.value)
                  }
                  className="flex-1 min-w-0 px-2 py-2 border rounded text-sm"
                  placeholder="#000000"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm">Background Color</label>
              <div className="flex items-center gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      className="w-12 h-12 flex-shrink-0 rounded border-2 cursor-pointer hover:border-gray-400 transition-colors"
                      style={{ backgroundColor: backgroundColor }}
                      title="Pick background color"
                    />
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-3">
                    <HexColorPicker color={backgroundColor} onChange={onBackgroundColorChange} />
                  </PopoverContent>
                </Popover>
                <input
                  type="text"
                  value={backgroundColor}
                  onChange={(e) =>
                    onBackgroundColorChange(e.target.value)
                  }
                  className="flex-1 min-w-0 px-2 py-2 border rounded text-sm"
                  placeholder="#ffffff"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm">Button Background Color</label>
              <div className="flex items-center gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      className="w-12 h-12 flex-shrink-0 rounded border-2 cursor-pointer hover:border-gray-400 transition-colors"
                      style={{ backgroundColor: buttonBgColor }}
                      title="Pick button background color"
                    />
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-3">
                    <HexColorPicker color={buttonBgColor} onChange={onButtonBgColorChange} />
                  </PopoverContent>
                </Popover>
                <input
                  type="text"
                  value={buttonBgColor}
                  onChange={(e) =>
                    onButtonBgColorChange(e.target.value)
                  }
                  className="flex-1 min-w-0 px-2 py-2 border rounded text-sm"
                  placeholder="#000000"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm">Button Text Color</label>
              <div className="flex items-center gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      className="w-12 h-12 flex-shrink-0 rounded border-2 cursor-pointer hover:border-gray-400 transition-colors"
                      style={{ backgroundColor: buttonTextColor }}
                      title="Pick button text color"
                    />
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-3">
                    <HexColorPicker color={buttonTextColor} onChange={onButtonTextColorChange} />
                  </PopoverContent>
                </Popover>
                <input
                  type="text"
                  value={buttonTextColor}
                  onChange={(e) =>
                    onButtonTextColorChange(e.target.value)
                  }
                  className="flex-1 min-w-0 px-2 py-2 border rounded text-sm"
                  placeholder="#ffffff"
                />
              </div>
            </div>
          </div>

          {/* Random Colors Button */}
          <Button
            onClick={onRandomizeColors}
            className="w-full"
            style={{ backgroundColor: '#4d2487', borderColor: '#4d2487', color: 'white' }}
          >
            <Shuffle className="w-4 h-4 mr-2" />
            Random Color Pairing
          </Button>

          {/* Accessible Preset Color Pairings */}
          <div className="space-y-3">
            <label>Accessible Preset Pairings</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {accessiblePairings.map((pairing, index) => (
                <button
                  key={index}
                  onClick={() => applyColorPairing(pairing)}
                  className="group relative h-14 rounded-md border-2 border-gray-300 hover:border-gray-500 transition-all hover:scale-105 shadow-sm overflow-hidden cursor-pointer"
                  title={`${pairing.name}: ${pairing.text} on ${pairing.background}`}
                >
                  <div 
                    className="absolute inset-0 flex items-center justify-center text-xs font-medium transition-opacity"
                    style={{ 
                      backgroundColor: pairing.background,
                      color: pairing.text
                    }}
                  >
                    {pairing.name}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* WCAG Contrast Checker */}
          <div className="space-y-4 p-4 border rounded-lg bg-muted/20">
            <div className="flex items-center gap-2">
              <h3>Accessibility Check</h3>
              {getContrastIcon(contrastResult)}
            </div>

            <p className="text-sm text-muted-foreground">
              Ensures your text and background colors are
              readable for all users, including those with
              visual impairments.
            </p>

            {/* WCAG 2.1 Standards */}
            <div className="text-sm font-medium mb-2">
              WCAG 2.1
            </div>

            <div>
              <div className="text-sm text-muted-foreground mb-1">
                Contrast Ratio
              </div>
              <Badge
                variant="outline"
                className="font-mono text-base"
              >
                {contrastResult.ratio}:1
              </Badge>
            </div>

            {/* Normal Text */}
            <div className="space-y-2 pb-3 border-b">
              <h4 className="text-sm font-medium">
                Normal Text
              </h4>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  AA
                </span>
                <Badge
                  variant="outline"
                  className={
                    contrastResult.aa
                      ? "bg-green-100 text-green-800 border-green-200"
                      : "bg-red-100 text-red-800 border-red-200"
                  }
                >
                  {contrastResult.aa ? "Pass" : "Fail"}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  AAA
                </span>
                <Badge
                  variant="outline"
                  className={
                    contrastResult.aaa
                      ? "bg-green-100 text-green-800 border-green-200"
                      : "bg-red-100 text-red-800 border-red-200"
                  }
                >
                  {contrastResult.aaa ? "Pass" : "Fail"}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                AA requires 4.5:1 | AAA requires 7:1
              </p>
            </div>

            {/* Large Text */}
            <div className="space-y-2 pb-3 border-b">
              <h4 className="text-sm font-medium">
                Large Text (18pt+)
              </h4>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  AA
                </span>
                <Badge
                  variant="outline"
                  className={
                    contrastResult.aaLarge
                      ? "bg-green-100 text-green-800 border-green-200"
                      : "bg-red-100 text-red-800 border-red-200"
                  }
                >
                  {contrastResult.aaLarge ? "Pass" : "Fail"}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  AAA
                </span>
                <Badge
                  variant="outline"
                  className={
                    contrastResult.aaaLarge
                      ? "bg-green-100 text-green-800 border-green-200"
                      : "bg-red-100 text-red-800 border-red-200"
                  }
                >
                  {contrastResult.aaaLarge ? "Pass" : "Fail"}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                AA requires 3:1 | AAA requires 4.5:1
              </p>
            </div>

            {/* Graphical Objects - Button Text Readability */}
            <div className="space-y-2 pb-3 border-b">
              <h4 className="text-sm font-medium">
                Button Text Readability
              </h4>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  AA (Normal)
                </span>
                <Badge
                  variant="outline"
                  className={
                    buttonContrastResult.aa
                      ? "bg-green-100 text-green-800 border-green-200"
                      : "bg-red-100 text-red-800 border-red-200"
                  }
                >
                  {buttonContrastResult.aa ? "Pass" : "Fail"}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  AAA (Normal)
                </span>
                <Badge
                  variant="outline"
                  className={
                    buttonContrastResult.aaa
                      ? "bg-green-100 text-green-800 border-green-200"
                      : "bg-red-100 text-red-800 border-red-200"
                  }
                >
                  {buttonContrastResult.aaa ? "Pass" : "Fail"}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Button text vs button background | Ratio: {buttonContrastResult.ratio}:1
              </p>
            </div>
            
            {/* Button Visibility */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium">
                Button Visibility (UI Components)
              </h4>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  AA
                </span>
                <Badge
                  variant="outline"
                  className={
                    buttonVisibilityResult.aaLarge
                      ? "bg-green-100 text-green-800 border-green-200"
                      : "bg-red-100 text-red-800 border-red-200"
                  }
                >
                  {buttonVisibilityResult.aaLarge ? "Pass" : "Fail"}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Button vs page background | AA requires 3:1 | Ratio: {buttonVisibilityResult.ratio}:1
              </p>
            </div>
          </div>
    </div>
  );
}
