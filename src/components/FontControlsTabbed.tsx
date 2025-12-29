import {
  Shuffle,
  ArrowUpDown,
  ArrowLeftRight,
  Lock,
  Unlock,
  ChevronDown,
  ChevronUp,
  Type,
  Heart,
  ChevronsUpDown,
  Check,
  RotateCcw,
  Info,
  Link2,
  Wand2,
  Sliders,
  AlignLeft,
  Sparkles,
  Ruler,
  Settings2,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Slider } from "./ui/slider";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { Checkbox } from "./ui/checkbox";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs";
import {
  styles,
  googleFonts,
  getFontData,
  loadGoogleFont,
} from "../utils/fonts";
import { cn } from "./ui/utils";
import { toast } from "sonner@2.0.3";

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
  isEditMode?: boolean;
  isGoldenRatioEnabled?: boolean;
  onGoldenRatioToggle?: (enabled: boolean) => void;
}

export function FontControlsTabbed(props: FontControlsProps) {
  const {
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
    onBodyLockToggle,
    isEditMode,
    isGoldenRatioEnabled,
    onGoldenRatioToggle,
  } = props;

  const [headerFontOpen, setHeaderFontOpen] = useState(false);
  const [bodyFontOpen, setBodyFontOpen] = useState(false);
  const headerFontData = getFontData(headerFont);
  const bodyFontData = getFontData(bodyFont);

  // Load all fonts for dropdown preview
  useEffect(() => {
    googleFonts.forEach((font) => {
      loadGoogleFont(font.name, [400], ["normal"]);
    });
  }, []);

  return (
    <Tabs defaultValue="pairing" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="pairing">
          <Shuffle className="w-4 h-4 mr-2" />
          Pairing
        </TabsTrigger>
        <TabsTrigger value="sizes">
          <Settings2 className="w-4 h-4 mr-2" />
          Sizes
        </TabsTrigger>
      </TabsList>

      {/* Tab 1: Pairing - Generate, then Font Selection, then Weights */}
      <TabsContent value="pairing" className="space-y-6 mt-6">
        {/* Generation Section */}
        <div className="space-y-4 pb-6 border-b">
          {/* Style Selection */}
          <div className="space-y-2">
            <label htmlFor="style-select">Choose a Style</label>
            <Select
              value={selectedStyle}
              onValueChange={onStyleChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Styles</SelectItem>
                {styles.map((style) => (
                  <SelectItem key={style} value={style}>
                    {style.charAt(0).toUpperCase() +
                      style.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Style Contrast */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="contrast-select">
                Style Contrast
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0"
                  >
                    <Info className="w-4 h-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-3">
                    <h4 className="font-semibold">
                      Style Contrast
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Controls the visual contrast between your
                      header and body fonts.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong className="text-foreground">
                          Low:
                        </strong>
                        <span className="text-muted-foreground">
                          {" "}
                          Same/similar fonts with minimal weight
                          differences.
                        </span>
                      </div>
                      <div>
                        <strong className="text-foreground">
                          Medium:
                        </strong>
                        <span className="text-muted-foreground">
                          {" "}
                          Complementary fonts with moderate
                          contrast.
                        </span>
                      </div>
                      <div>
                        <strong className="text-foreground">
                          High:
                        </strong>
                        <span className="text-muted-foreground">
                          {" "}
                          Maximum visual impact with different
                          styles and weights.
                        </span>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            <Select
              value={styleContrast}
              onValueChange={onStyleContrastChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select contrast level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">
                  Low Contrast - Similar styles
                </SelectItem>
                <SelectItem value="medium">
                  Medium Contrast - Moderate difference
                </SelectItem>
                <SelectItem value="high">
                  High Contrast - Very different styles
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Generate Font Pairing Button */}
          <Button
            onClick={onRandomize}
            className="w-full dark:bg-white dark:text-black dark:hover:bg-gray-200"
            size="lg"
            style={{
              backgroundColor: "#4d2487",
              borderColor: "#4d2487",
              color: "white",
            }}
          >
            <Shuffle className="w-4 h-4 mr-2" />
            Generate Font Pairing
          </Button>
        </div>

        {/* Font Selection */}
        <div className="space-y-3">
          <label>Font Selection</label>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-3 items-start">
            {/* Header Font */}
            <div className="space-y-2 min-w-0">
              <label className="text-sm text-muted-foreground">
                Header Font
              </label>
              <div className="flex gap-2 min-w-0 items-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    onHeaderLockToggle();
                    if (isHeaderLocked) {
                      toast.success("Header Font Unlocked", {
                        icon: (
                          <div
                            style={{
                              backgroundColor: "#4d2487",
                              borderRadius: "50%",
                              width: "20px",
                              height: "20px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Unlock
                              className="w-3 h-3"
                              style={{ color: "white" }}
                            />
                          </div>
                        ),
                      });
                    } else {
                      toast.success("Header Font Locked", {
                        icon: (
                          <div
                            style={{
                              backgroundColor: "#4d2487",
                              borderRadius: "50%",
                              width: "20px",
                              height: "20px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Lock
                              className="w-3 h-3"
                              style={{ color: "white" }}
                            />
                          </div>
                        ),
                      });
                    }
                  }}
                  className="shrink-0"
                  style={
                    isHeaderLocked
                      ? {
                          backgroundColor: "#4d2487",
                          color: "white",
                        }
                      : {}
                  }
                  title={
                    isHeaderLocked
                      ? "Unlock header font"
                      : "Lock header font"
                  }
                >
                  {isHeaderLocked ? (
                    <Lock className="w-4 h-4" />
                  ) : (
                    <Unlock className="w-4 h-4" />
                  )}
                </Button>
                <Popover
                  open={headerFontOpen}
                  onOpenChange={setHeaderFontOpen}
                >
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={headerFontOpen}
                      className={cn(
                        "flex-1 justify-between min-w-0",
                        isHeaderLocked && "opacity-60",
                      )}
                      disabled={isHeaderLocked}
                      style={{ fontFamily: headerFont }}
                    >
                      <span className="truncate">
                        {headerFont}
                      </span>
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-[min(300px,calc(100vw-3rem))] p-0"
                    align="start"
                  >
                    <Command className="[&_[cmdk-list]]:max-h-[40vh] [&_[cmdk-list]]:overflow-y-auto [&_[cmdk-list]]:overscroll-contain">
                      <CommandInput placeholder="Search fonts..." />
                      <CommandList>
                        <CommandEmpty>
                          No font found.
                        </CommandEmpty>
                        <CommandGroup>
                          {googleFonts.map((font) => (
                            <CommandItem
                              key={font.name}
                              value={font.name}
                              onSelect={(currentValue) => {
                                onHeaderFontChange(
                                  currentValue,
                                );
                                setHeaderFontOpen(false);
                              }}
                              style={{ fontFamily: font.name }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  headerFont === font.name
                                    ? "opacity-100"
                                    : "opacity-0",
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
              <label className="text-sm text-muted-foreground">
                Body Font
              </label>
              <div className="flex gap-2 min-w-0 items-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    onBodyLockToggle();
                    if (isBodyLocked) {
                      toast.success("Body Font Unlocked", {
                        icon: (
                          <div
                            style={{
                              backgroundColor: "#4d2487",
                              borderRadius: "50%",
                              width: "20px",
                              height: "20px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Unlock
                              className="w-3 h-3"
                              style={{ color: "white" }}
                            />
                          </div>
                        ),
                      });
                    } else {
                      toast.success("Body Font Locked", {
                        icon: (
                          <div
                            style={{
                              backgroundColor: "#4d2487",
                              borderRadius: "50%",
                              width: "20px",
                              height: "20px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Lock
                              className="w-3 h-3"
                              style={{ color: "white" }}
                            />
                          </div>
                        ),
                      });
                    }
                  }}
                  className="shrink-0 lg:hidden"
                  style={
                    isBodyLocked
                      ? {
                          backgroundColor: "#4d2487",
                          color: "white",
                        }
                      : {}
                  }
                  title={
                    isBodyLocked
                      ? "Unlock body font"
                      : "Lock body font"
                  }
                >
                  {isBodyLocked ? (
                    <Lock className="w-4 h-4" />
                  ) : (
                    <Unlock className="w-4 h-4" />
                  )}
                </Button>
                <Popover
                  open={bodyFontOpen}
                  onOpenChange={setBodyFontOpen}
                >
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={bodyFontOpen}
                      className={cn(
                        "flex-1 justify-between min-w-0",
                        isBodyLocked && "opacity-60",
                      )}
                      disabled={isBodyLocked}
                      style={{ fontFamily: bodyFont }}
                    >
                      <span className="truncate">
                        {bodyFont}
                      </span>
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-[min(300px,calc(100vw-3rem))] p-0"
                    align="start"
                  >
                    <Command className="[&_[cmdk-list]]:max-h-[40vh] [&_[cmdk-list]]:overflow-y-auto [&_[cmdk-list]]:overscroll-contain">
                      <CommandInput placeholder="Search fonts..." />
                      <CommandList>
                        <CommandEmpty>
                          No font found.
                        </CommandEmpty>
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
                                  bodyFont === font.name
                                    ? "opacity-100"
                                    : "opacity-0",
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
                      toast.success("Body Font Unlocked", {
                        icon: (
                          <div
                            style={{
                              backgroundColor: "#4d2487",
                              borderRadius: "50%",
                              width: "20px",
                              height: "20px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Unlock
                              className="w-3 h-3"
                              style={{ color: "white" }}
                            />
                          </div>
                        ),
                      });
                    } else {
                      toast.success("Body Font Locked", {
                        icon: (
                          <div
                            style={{
                              backgroundColor: "#4d2487",
                              borderRadius: "50%",
                              width: "20px",
                              height: "20px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Lock
                              className="w-3 h-3"
                              style={{ color: "white" }}
                            />
                          </div>
                        ),
                      });
                    }
                  }}
                  className="shrink-0 hidden lg:block"
                  style={
                    isBodyLocked
                      ? {
                          backgroundColor: "#4d2487",
                          color: "white",
                        }
                      : {}
                  }
                  title={
                    isBodyLocked
                      ? "Unlock body font"
                      : "Lock body font"
                  }
                >
                  {isBodyLocked ? (
                    <Lock className="w-4 h-4" />
                  ) : (
                    <Unlock className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Weight and Style Selection */}
        <div className="space-y-4">
          {/* Weight Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label>Header Weight</label>
              <Select
                value={headerWeight.toString()}
                onValueChange={(value) =>
                  onHeaderWeightChange(parseInt(value))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {headerFontData?.weights.map((weight) => (
                    <SelectItem
                      key={weight}
                      value={weight.toString()}
                    >
                      {weight}
                    </SelectItem>
                  )) ||
                    [400].map((weight) => (
                      <SelectItem
                        key={weight}
                        value={weight.toString()}
                      >
                        {weight}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label>Body Weight</label>
              <Select
                value={bodyWeight.toString()}
                onValueChange={(value) =>
                  onBodyWeightChange(parseInt(value))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {bodyFontData?.weights.map((weight) => (
                    <SelectItem
                      key={weight}
                      value={weight.toString()}
                    >
                      {weight}
                    </SelectItem>
                  )) ||
                    [400].map((weight) => (
                      <SelectItem
                        key={weight}
                        value={weight.toString()}
                      >
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
              <Select
                value={headerStyle}
                onValueChange={onHeaderStyleChange}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {headerFontData?.styles.map((style) => (
                    <SelectItem key={style} value={style}>
                      {style.charAt(0).toUpperCase() +
                        style.slice(1)}
                    </SelectItem>
                  )) ||
                    ["normal"].map((style) => (
                      <SelectItem key={style} value={style}>
                        {style.charAt(0).toUpperCase() +
                          style.slice(1)}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label>Body Style</label>
              <Select
                value={bodyStyle}
                onValueChange={onBodyStyleChange}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {bodyFontData?.styles.map((style) => (
                    <SelectItem key={style} value={style}>
                      {style.charAt(0).toUpperCase() +
                        style.slice(1)}
                    </SelectItem>
                  )) ||
                    ["normal"].map((style) => (
                      <SelectItem key={style} value={style}>
                        {style.charAt(0).toUpperCase() +
                          style.slice(1)}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </TabsContent>

      {/* Tab 2: Sizes - Font Sizes, Line Height, Letter Spacing */}
      <TabsContent value="sizes" className="space-y-6 mt-6">
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className={isEditMode ? "opacity-50" : ""}>
              Font Size
            </label>
            <Button
              variant="outline"
              size="sm"
              onClick={onResetTypography}
              className="flex items-center gap-2"
              disabled={isEditMode}
            >
              <RotateCcw className="w-3 h-3" />
              Reset to Default
            </Button>
          </div>
          {isEditMode && (
            <p className="text-xs text-muted-foreground mb-2">
              Font size controls are disabled during Edit Mode.
              Exit Edit Mode to adjust sizes.
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                className={`text-sm text-muted-foreground ${isEditMode ? "opacity-50" : ""}`}
              >
                Header: {headerSize}px
              </label>
              <Slider
                value={[headerSize]}
                onValueChange={(value) =>
                  onHeaderSizeChange(value[0])
                }
                min={12}
                max={100}
                step={1}
                className={`[&_[role=slider]]:bg-[#4d2487] [&_[role=slider]]:border-[#4d2487] ${isEditMode ? "opacity-50 pointer-events-none" : ""}`}
                disabled={isEditMode}
              />
            </div>
            <div className="space-y-2">
              <label
                className={`text-sm text-muted-foreground ${isEditMode ? "opacity-50" : ""}`}
              >
                Body: {bodySize}px
              </label>
              <Slider
                value={[bodySize]}
                onValueChange={(value) =>
                  onBodySizeChange(value[0])
                }
                min={12}
                max={100}
                step={1}
                className={`[&_[role=slider]]:bg-[#4d2487] [&_[role=slider]]:border-[#4d2487] ${isEditMode ? "opacity-50 pointer-events-none" : ""}`}
                disabled={isEditMode}
              />
            </div>
          </div>

          {/* Golden Ratio */}
          <div className="mt-3 p-3 border rounded-lg bg-muted/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Checkbox
                  id="golden-ratio"
                  checked={isGoldenRatioEnabled}
                  onCheckedChange={(checked) => {
                    onGoldenRatioToggle?.(checked as boolean);
                    if (checked) {
                      toast.success(
                        "Golden Ratio Enabled - Sizes Are Now Linked",
                        {
                          icon: (
                            <div
                              style={{
                                backgroundColor: "#4d2487",
                                borderRadius: "50%",
                                width: "20px",
                                height: "20px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Link2
                                className="w-3 h-3"
                                style={{ color: "white" }}
                              />
                            </div>
                          ),
                        },
                      );
                    } else {
                      toast.success(
                        "Golden Ratio Disabled - Sizes Are Independent",
                        {
                          icon: (
                            <div
                              style={{
                                backgroundColor: "#4d2487",
                                borderRadius: "50%",
                                width: "20px",
                                height: "20px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Link2
                                className="w-3 h-3"
                                style={{ color: "white" }}
                              />
                            </div>
                          ),
                        },
                      );
                    }
                  }}
                  disabled={isEditMode}
                  className="data-[state=checked]:bg-[#4d2487] data-[state=checked]:border-[#4d2487]"
                />
                <label
                  htmlFor="golden-ratio"
                  className={`text-sm font-medium flex items-center gap-2 cursor-pointer ${isEditMode ? "opacity-50" : ""}`}
                >
                  <Link2 className="w-4 h-4 text-[#4d2487]" />
                  <span>Link sizes with Golden Ratio?</span>
                </label>
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0"
                  >
                    <Info className="w-4 h-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-3">
                    <h4 className="font-semibold">
                      Typography & the Golden Ratio
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      The golden ratio (1.618) helps create
                      balanced, visually pleasing typography. To
                      choose a header size, multiply your body
                      text size by 1.618. For example, 12 pt
                      body text × 1.618 ≈ 19–20 pt headers. To
                      find body text from a header size, divide
                      the header size by 1.618.
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Even small adjustments using the golden
                      ratio can greatly improve readability and
                      visual flow, making your designs feel more
                      natural and harmonious.
                    </p>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {isGoldenRatioEnabled
                ? "When enabled, the larger size is kept and the smaller one is calculated."
                : "Enable this to link header and body sizes with the golden ratio (1.618)."}
            </p>
          </div>
        </div>

        <div>
          <label
            className={`block mb-3 ${isEditMode ? "opacity-50" : ""}`}
          >
            Line Height
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                className={`text-sm text-muted-foreground ${isEditMode ? "opacity-50" : ""}`}
              >
                Header: {headerLineHeight.toFixed(2)}
              </label>
              <Slider
                value={[headerLineHeight]}
                onValueChange={(value) =>
                  onHeaderLineHeightChange(value[0])
                }
                min={0.8}
                max={2}
                step={0.05}
                className={`[&_[role=slider]]:bg-[#4d2487] [&_[role=slider]]:border-[#4d2487] ${isEditMode ? "opacity-50 pointer-events-none" : ""}`}
                disabled={isEditMode}
              />
            </div>
            <div className="space-y-2">
              <label
                className={`text-sm text-muted-foreground ${isEditMode ? "opacity-50" : ""}`}
              >
                Body: {bodyLineHeight.toFixed(2)}
              </label>
              <Slider
                value={[bodyLineHeight]}
                onValueChange={(value) =>
                  onBodyLineHeightChange(value[0])
                }
                min={1}
                max={2.5}
                step={0.05}
                className={`[&_[role=slider]]:bg-[#4d2487] [&_[role=slider]]:border-[#4d2487] ${isEditMode ? "opacity-50 pointer-events-none" : ""}`}
                disabled={isEditMode}
              />
            </div>
          </div>
        </div>

        <div>
          <label
            className={`block mb-3 ${isEditMode ? "opacity-50" : ""}`}
          >
            Letter Spacing
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                className={`text-sm text-muted-foreground ${isEditMode ? "opacity-50" : ""}`}
              >
                Header:{" "}
                {(headerLetterSpacing * 1000).toFixed(0)} (
                {headerLetterSpacing >= 0 ? "+" : ""}
                {(headerLetterSpacing * 100).toFixed(1)}%)
              </label>
              <Slider
                value={[headerLetterSpacing]}
                onValueChange={(value) =>
                  onHeaderLetterSpacingChange(value[0])
                }
                min={-0.05}
                max={0.2}
                step={0.005}
                className={`[&_[role=slider]]:bg-[#4d2487] [&_[role=slider]]:border-[#4d2487] ${isEditMode ? "opacity-50 pointer-events-none" : ""}`}
                disabled={isEditMode}
              />
            </div>
            <div className="space-y-2">
              <label
                className={`text-sm text-muted-foreground ${isEditMode ? "opacity-50" : ""}`}
              >
                Body: {(bodyLetterSpacing * 1000).toFixed(0)} (
                {bodyLetterSpacing >= 0 ? "+" : ""}
                {(bodyLetterSpacing * 100).toFixed(1)}%)
              </label>
              <Slider
                value={[bodyLetterSpacing]}
                onValueChange={(value) =>
                  onBodyLetterSpacingChange(value[0])
                }
                min={-0.05}
                max={0.2}
                step={0.005}
                className={`[&_[role=slider]]:bg-[#4d2487] [&_[role=slider]]:border-[#4d2487] ${isEditMode ? "opacity-50 pointer-events-none" : ""}`}
                disabled={isEditMode}
              />
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}