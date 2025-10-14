import { useState, useEffect, useRef } from "react";
import {
  Moon,
  Sun,
  Type,
  Palette,
  RectangleHorizontal,
  Code,
  Info,
  Download,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner@2.0.3";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./components/ui/tabs";
import { Card, CardContent } from "./components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { FontPreview } from "./components/FontPreview";
import { PairingJustification } from "./components/PairingJustification";
import { FontControls } from "./components/FontControls";
import { ColorControls } from "./components/ColorControls";
import { ButtonControls } from "./components/ButtonControls";
import { MobileControls } from "./components/MobileControls";
import { QuickActions } from "./components/QuickActions";
import { FontCode, FontCodeRef } from "./components/FontCode";
import {
  SavedPairings,
  SavedPairing,
} from "./components/SavedPairings";
import {
  getRandomFontPair,
  getFontData,
  googleFonts,
  fontPairings,
  validateFontPairings,
} from "./utils/fonts";
import { generateAccessibleColorPair, checkContrast } from "./utils/contrast";

export default function App() {
  // Validate font pairings on mount (development only)
  useEffect(() => {
    const validation = validateFontPairings();
    if (!validation.valid) {
      console.error(
        "❌ Missing fonts in googleFonts array:",
        validation.missingFonts,
      );
      console.error(
        "These fonts are referenced in pairings but not available in the font list.",
      );
    } else {
      console.log(
        "✅ All fonts in pairings are available in googleFonts array",
      );
      console.log(
        `📊 ${googleFonts.length} fonts, ${fontPairings.length} pairings`,
      );
    }
  }, []);

  const fontCodeRef = useRef<FontCodeRef>(null);
  const savedPairingsRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isInfoDialogOpen, setIsInfoDialogOpen] =
    useState(false);
  const [selectedStyle, setSelectedStyle] = useState("all");

  // Initialize with contrast-aware pairing
  const initialPairData = getRandomFontPair(undefined, "high");
  const [currentPair, setCurrentPair] = useState({
    header: initialPairData.pair.header,
    body: initialPairData.pair.body,
  });
  const [textColor, setTextColor] = useState("#1a1a1a");
  const [backgroundColor, setBackgroundColor] =
    useState("#ffffff");
  const [buttonBgColor, setButtonBgColor] = useState("#1a1a1a");
  const [buttonTextColor, setButtonTextColor] =
    useState("#ffffff");

  // Font weights, styles, and sizes (initialize with contrast-aware values)
  const [headerWeight, setHeaderWeight] = useState(
    initialPairData.headerWeight,
  );
  const [bodyWeight, setBodyWeight] = useState(
    initialPairData.bodyWeight,
  );
  const [headerStyle, setHeaderStyle] = useState(
    initialPairData.headerStyle,
  );
  const [bodyStyle, setBodyStyle] = useState(
    initialPairData.bodyStyle,
  );
  const [headerSize, setHeaderSize] = useState(40); // Size in pixels
  const [bodySize, setBodySize] = useState(16); // Size in pixels

  // Custom text content
  const defaultTexts = {
    header: "The Quick Brown Fox",
    body: "Typography is the art and technique of arranging type to make written language legible, readable and appealing when displayed. The arrangement of type involves selecting typefaces, point sizes, line lengths, line-spacing, and letter-spacing.\n\nGood typography establishes a strong visual hierarchy, provides a graphic balance to the website, and sets the product's overall tone. Typography should guide and inform your users, optimize readability and accessibility, and ensure an excellent user experience.",
    quote:
      "Typography is a beautiful group of letters, not a group of beautiful letters.",
    button: "Button",
  };

  const [headerText, setHeaderText] = useState(
    `${currentPair.header} & ${currentPair.body}`,
  );
  const [bodyText, setBodyText] = useState(defaultTexts.body);
  const [quoteText, setQuoteText] = useState(
    defaultTexts.quote,
  );
  const [buttonText, setButtonText] = useState(
    defaultTexts.button,
  );
  const [hasManuallyEditedHeader, setHasManuallyEditedHeader] =
    useState(false);

  // Button styling
  const [buttonRadius, setButtonRadius] = useState("md");
  const [buttonVariant, setButtonVariant] = useState("filled");

  // Style contrast level
  const [styleContrast, setStyleContrast] = useState("high");

  // Font locks
  const [isHeaderLocked, setIsHeaderLocked] = useState(false);
  const [isBodyLocked, setIsBodyLocked] = useState(false);

  // Controls for mobile sheet and font code expansion
  const [isMobileSheetOpen, setIsMobileSheetOpen] =
    useState(false);
  const [shouldExpandFontCode, setShouldExpandFontCode] =
    useState(false);
  const [mobileInitialTab, setMobileInitialTab] =
    useState("fonts");
  const [desktopCurrentTab, setDesktopCurrentTab] =
    useState("fonts");

  // Saved pairings state
  const [isSaved, setIsSaved] = useState(false);
  const [savedPairingsVersion, setSavedPairingsVersion] =
    useState(0);

  // Initialize font weights based on selected fonts
  useEffect(() => {
    const headerFontData = getFontData(currentPair.header);
    const bodyFontData = getFontData(currentPair.body);

    if (
      headerFontData &&
      !headerFontData.weights.includes(headerWeight)
    ) {
      setHeaderWeight(
        headerFontData.weights.includes(600)
          ? 600
          : headerFontData.weights[
              Math.floor(headerFontData.weights.length / 2)
            ],
      );
    }

    if (
      bodyFontData &&
      !bodyFontData.weights.includes(bodyWeight)
    ) {
      setBodyWeight(
        bodyFontData.weights.includes(400)
          ? 400
          : bodyFontData.weights[0],
      );
    }
  }, [currentPair.header, currentPair.body]);

  // Update header text when font pair changes (only if not manually edited)
  useEffect(() => {
    if (!hasManuallyEditedHeader) {
      setHeaderText(
        `${currentPair.header} & ${currentPair.body}`,
      );
    }
  }, [
    currentPair.header,
    currentPair.body,
    hasManuallyEditedHeader,
  ]);

  // Toggle dark mode
  // Toggle dark mode - only triggered by isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      setTextColor("#f5f5f5");
      setBackgroundColor("#1a1a1a");
      setButtonBgColor("#f5f5f5");
      // For outline/ghost buttons, use text color; for filled, use contrasting color
      if (buttonVariant === 'outline' || buttonVariant === 'ghost') {
        setButtonTextColor("#f5f5f5"); // Same as text color
      } else {
        setButtonTextColor("#1a1a1a");
      }
    } else {
      document.documentElement.classList.remove("dark");
      setTextColor("#1a1a1a");
      setBackgroundColor("#ffffff");
      setButtonBgColor("#1a1a1a");
      // For outline/ghost buttons, use text color; for filled, use contrasting color
      if (buttonVariant === 'outline' || buttonVariant === 'ghost') {
        setButtonTextColor("#1a1a1a"); // Same as text color
      } else {
        setButtonTextColor("#ffffff");
      }
    }
  }, [isDarkMode]);

  // Automatically adjust button text color when variant changes (without resetting background)
  useEffect(() => {
    if (buttonVariant === 'ghost' || buttonVariant === 'outline') {
      // For outline/ghost buttons, use the page text color
      setButtonTextColor(textColor);
    } else {
      // For filled buttons, use contrasting color against button background
      const contrast = checkContrast(textColor, buttonBgColor);
      if (contrast.aa) {
        setButtonTextColor(textColor);
      } else {
        setButtonTextColor(backgroundColor);
      }
    }
  }, [buttonVariant]);

  const handleRandomize = () => {
    let newPairData;
    let attempts = 0;
    const maxAttempts = 10;

    // Respect font locks - only randomize unlocked fonts
    if (isHeaderLocked && isBodyLocked) {
      // Both locked, nothing to randomize
      return;
    }

    // Determine contrast level for pairing selection
    const contrastLevel =
      styleContrast === "custom"
        ? "medium"
        : (styleContrast as "low" | "medium" | "high");

    if (isHeaderLocked && !isBodyLocked) {
      // Only randomize body font
      const bodyFonts = googleFonts.filter(
        (font) => font.name !== currentPair.header,
      );
      const randomBodyFont =
        bodyFonts[Math.floor(Math.random() * bodyFonts.length)];
      setCurrentPair({
        header: currentPair.header,
        body: randomBodyFont.name,
      });

      if (!isBodyLocked) {
        const bodyFontData = getFontData(randomBodyFont.name);
        if (bodyFontData) {
          setBodyWeight(
            bodyFontData.weights.includes(400)
              ? 400
              : bodyFontData.weights[0],
          );
          setBodyStyle(bodyFontData.styles[0]);
        }
      }
      return;
    } else if (!isHeaderLocked && isBodyLocked) {
      // Only randomize header font
      const headerFonts = googleFonts.filter(
        (font) => font.name !== currentPair.body,
      );
      const randomHeaderFont =
        headerFonts[
          Math.floor(Math.random() * headerFonts.length)
        ];
      setCurrentPair({
        header: randomHeaderFont.name,
        body: currentPair.body,
      });

      if (!isHeaderLocked) {
        const headerFontData = getFontData(
          randomHeaderFont.name,
        );
        if (headerFontData) {
          setHeaderWeight(
            headerFontData.weights.includes(600)
              ? 600
              : headerFontData.weights[
                  Math.floor(headerFontData.weights.length / 2)
                ],
          );
          setHeaderStyle(headerFontData.styles[0]);
        }
      }
      return;
    } else {
      // Both unlocked, randomize both using contrast-aware pairing
      do {
        newPairData = getRandomFontPair(
          selectedStyle === "all" ? undefined : selectedStyle,
          contrastLevel,
        );
        attempts++;
      } while (
        attempts < maxAttempts &&
        newPairData.pair.header === currentPair.header &&
        newPairData.pair.body === currentPair.body
      );
    }

    // Set new pair and apply contrast-aware weights and styles
    setCurrentPair({
      header: newPairData.pair.header,
      body: newPairData.pair.body,
    });

    // Apply weights and styles based on contrast level (only for unlocked fonts)
    if (!isHeaderLocked) {
      setHeaderWeight(newPairData.headerWeight);
      setHeaderStyle(newPairData.headerStyle);
    }

    if (!isBodyLocked) {
      setBodyWeight(newPairData.bodyWeight);
      setBodyStyle(newPairData.bodyStyle);
    }
  };

  const handleRandomizeColors = () => {
    const {
      textColor: newTextColor,
      backgroundColor: newBackgroundColor,
    } = generateAccessibleColorPair();
    setBackgroundColor(newBackgroundColor);
    setTextColor(newTextColor);
    // Make button background the same as text color
    setButtonBgColor(newTextColor);
    // For outline/ghost buttons, use text color; for filled, use contrasting color
    if (buttonVariant === 'outline' || buttonVariant === 'ghost') {
      setButtonTextColor(newTextColor); // Same as text color
    } else {
      setButtonTextColor(newBackgroundColor); // Contrasting color
    }
  };

  const handleHeaderFontChange = (font: string) => {
    setCurrentPair((prev) => ({ ...prev, header: font }));
    const fontData = getFontData(font);
    if (fontData) {
      setHeaderWeight(
        fontData.weights.includes(600)
          ? 600
          : fontData.weights[
              Math.floor(fontData.weights.length / 2)
            ],
      );
      setHeaderStyle(fontData.styles[0]);
    }
  };

  const handleBodyFontChange = (font: string) => {
    setCurrentPair((prev) => ({ ...prev, body: font }));
    const fontData = getFontData(font);
    if (fontData) {
      setBodyWeight(
        fontData.weights.includes(400)
          ? 400
          : fontData.weights[0],
      );
      setBodyStyle(fontData.styles[0]);
    }
  };

  const handleResetToDefaults = () => {
    setHeaderText(
      `${currentPair.header} & ${currentPair.body}`,
    );
    setBodyText(defaultTexts.body);
    setQuoteText(defaultTexts.quote);
    setButtonText(defaultTexts.button);
    setHasManuallyEditedHeader(false);
  };

  const handleSwapFonts = () => {
    const tempHeaderFont = currentPair.header;
    const tempHeaderWeight = headerWeight;
    const tempHeaderStyle = headerStyle;

    setCurrentPair((prev) => ({
      header: prev.body,
      body: prev.header,
    }));

    // Swap weights and styles too
    setHeaderWeight(bodyWeight);
    setBodyWeight(tempHeaderWeight);
    setHeaderStyle(bodyStyle);
    setBodyStyle(tempHeaderStyle);
  };

  const handleHeaderLockToggle = () => {
    setIsHeaderLocked(!isHeaderLocked);
  };

  const handleBodyLockToggle = () => {
    setIsBodyLocked(!isBodyLocked);
  };

  const handleScrollToFontCode = () => {
    // On mobile, open the sheet and set to code tab
    if (window.innerWidth < 1280) {
      console.log("Setting mobile tab to code");
      setMobileInitialTab("code");
      setIsMobileSheetOpen(true);
      console.log("Sheet opened, initialTab should be code");
    } else {
      // On desktop, scroll to the code section
      if (fontCodeRef.current) {
        fontCodeRef.current.scrollToAndOpen();
      }
    }
  };

  const handleLoadSavedPairing = (pairing: SavedPairing) => {
    setCurrentPair({
      header: pairing.headerFont,
      body: pairing.bodyFont,
    });
    setHeaderWeight(pairing.headerWeight);
    setBodyWeight(pairing.bodyWeight);
    setHeaderStyle(pairing.headerStyle);
    setBodyStyle(pairing.bodyStyle);
    setHeaderSize(pairing.headerSize);
    setTextColor(pairing.textColor);
    setBackgroundColor(pairing.backgroundColor);
    setButtonBgColor(pairing.buttonBgColor);
    setButtonTextColor(pairing.buttonTextColor);

    // Scroll to the font preview area
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Check if current pairing is saved
  useEffect(() => {
    const checkIfSaved = () => {
      try {
        const stored = localStorage.getItem(
          "fontPairingStudio_savedPairings",
        );
        if (stored) {
          const pairings = JSON.parse(stored);
          const exists = pairings.some(
            (p: SavedPairing) =>
              p.headerFont === currentPair.header &&
              p.bodyFont === currentPair.body,
          );
          setIsSaved(exists);
        } else {
          setIsSaved(false);
        }
      } catch (error) {
        console.error(
          "Error checking if pairing is saved:",
          error,
        );
        setIsSaved(false);
      }
    };
    checkIfSaved();
  }, [
    currentPair.header,
    currentPair.body,
    savedPairingsVersion,
  ]);

  const handleSavePairing = () => {
    try {
      const stored = localStorage.getItem(
        "fontPairingStudio_savedPairings",
      );
      let pairings = stored ? JSON.parse(stored) : [];

      // Save - add it
      if (pairings.length >= 20) {
        toast.error(
          "You can only save up to 20 pairings. Please delete some before adding more.",
          {
            icon: (
              <div
                style={{
                  backgroundColor: "#ef4444",
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                !
              </div>
            ),
          },
        );
        return;
      }

      const newPairing: SavedPairing = {
        id: Date.now().toString(),
        headerFont: currentPair.header,
        bodyFont: currentPair.body,
        headerWeight,
        bodyWeight,
        headerStyle,
        bodyStyle,
        headerSize,
        textColor,
        backgroundColor,
        buttonBgColor,
        buttonTextColor,
        savedAt: Date.now(),
      };
      pairings.unshift(newPairing);
      localStorage.setItem(
        "fontPairingStudio_savedPairings",
        JSON.stringify(pairings),
      );
      setSavedPairingsVersion((v) => v + 1);

      // Show success toast with action to view saved pairings
      toast.success("Font pairing saved!", {
        action: {
          label: "Show my saved pairings",
          onClick: () => {
            savedPairingsRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          },
        },
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
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 6L5 9L10 3"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ),
      });
    } catch (error) {
      console.error("Error saving pairing:", error);
      toast.error(
        "Failed to save pairing. Storage might be full.",
      );
    }
  };

  const scrollToFontCode = () => {
    fontCodeRef.current?.scrollToAndOpen();
  };

  const handleStyleContrastChange = (contrast: string) => {
    setStyleContrast(contrast);
    // Note: Style contrast changes will be applied when "Generate Font Pairing" is clicked
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster />
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">
              Font Pairing{" "}
              <span
                className={!isDarkMode ? "text-[#4d2487]" : ""}
              >
                Studio
              </span>
            </h1>
            <p className="text-sm text-muted-foreground">
              Discover perfect font combinations with Google
              Fonts
            </p>
          </div>

          <div className="flex gap-2">
            <Dialog
              open={isInfoDialogOpen}
              onOpenChange={setIsInfoDialogOpen}
            >
              <DialogTrigger asChild>
                <Button variant="outline" size="icon">
                  <Info className="w-4 h-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">
                    About Font Pairing Studio
                  </DialogTitle>
                  <DialogDescription className="sr-only">
                    Information about Font Pairing Studio
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6 pt-4">
                  <section>
                    <h3 className="font-semibold text-lg mb-2">
                      About
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Easily discover beautiful, accessible font
                      combinations using Google Fonts. With{" "}
                      {googleFonts.length} fonts and{" "}
                      {fontPairings.length} curated pairings
                      based on both professional recommendations
                      and typography principles, find the
                      perfect typography fast and easy while
                      ensuring WCAG 2.1 accessibility
                      compliance.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-semibold text-lg mb-2">
                      Features
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                      <div className="flex gap-2">
                        <span className="text-[#4d2487] dark:text-white">
                          ✓
                        </span>
                        <span>
                          {googleFonts.length} Google Fonts
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-[#4d2487] dark:text-white">
                          ✓
                        </span>
                        <span>
                          {fontPairings.length} Curated Pairings
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-[#4d2487] dark:text-white">
                          ✓
                        </span>
                        <span>
                          Low/Medium/High Style Contrast
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-[#4d2487] dark:text-white">
                          ✓
                        </span>
                        <span>13 Style Categories</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-[#4d2487] dark:text-white">
                          ✓
                        </span>
                        <span>WCAG 2.1 AA/AAA Checking</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-[#4d2487] dark:text-white">
                          ✓
                        </span>
                        <span>Inline Text Editing</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-[#4d2487] dark:text-white">
                          ✓
                        </span>
                        <span>Header & Body Size Controls</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-[#4d2487] dark:text-white">
                          ✓
                        </span>
                        <span>
                          Weight & Style Customization
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-[#4d2487] dark:text-white">
                          ✓
                        </span>
                        <span>Button Style & Preview</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-[#4d2487] dark:text-white">
                          ✓
                        </span>
                        <span>Accessible Color Picker</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-[#4d2487] dark:text-white">
                          ✓
                        </span>
                        <span>Save Up to 20 Font Pairings</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-[#4d2487] dark:text-white">
                          ✓
                        </span>
                        <span>Font Lock Feature</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-[#4d2487] dark:text-white">
                          ✓
                        </span>
                        <span>Dark Mode Support</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-[#4d2487] dark:text-white">
                          ✓
                        </span>
                        <span>
                          Export Code Snippets & Download Fonts
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-[#4d2487] dark:text-white">
                          ✓
                        </span>
                        <span>Mobile-Optimized UI</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-[#4d2487] dark:text-white">
                          ✓
                        </span>
                        <span>
                          Pairing Info and Justifications
                        </span>
                      </div>
                    </div>
                  </section>

                  <section className="pt-4 border-t">
                    <h3 className="font-semibold text-lg mb-2">
                      Disclaimer
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Font pairing recommendations include
                      expert curations from professional
                      typography resources, combined with
                      AI-generated suggestions based on
                      established design principles and font
                      characteristics. Font pairing is
                      inherently subjective, so what works for
                      one project may not suit another. Use this
                      tool as inspiration, while combining them
                      with your design judgment.
                    </p>
                  </section>

                  <section className="pt-4 border-t space-y-3">
                    <p className="text-sm text-muted-foreground italic">
                      Developed with{" "}
                      <span className="text-[#4d2487] dark:text-[#4d2487]">
                        💜
                      </span>{" "}
                      for designers and developers who believe
                      that beautiful, accessible typography
                      should be easy to create and implement.
                    </p>
                    <div className="text-xs text-muted-foreground">
                      <p>
                        Developed and created by{" "}
                        <a
                          href="https://hurtic.net"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#4d2487] dark:text-white hover:underline font-semibold"
                        >
                          Harun Hurtic
                        </a>
                      </p>
                    </div>
                  </section>
                </div>
              </DialogContent>
            </Dialog>

            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Font Preview - Takes up more space */}
          <div className="xl:col-span-2 pb-20 xl:pb-0 space-y-4">
            <QuickActions
              onRandomizeColors={handleRandomizeColors}
              onUseFonts={handleScrollToFontCode}
              onRandomizeFonts={handleRandomize}
            />
            <FontPreview
              headerFont={currentPair.header}
              bodyFont={currentPair.body}
              headerWeight={headerWeight}
              bodyWeight={bodyWeight}
              headerStyle={headerStyle}
              bodyStyle={bodyStyle}
              headerSize={headerSize}
              bodySize={bodySize}
              textColor={textColor}
              backgroundColor={backgroundColor}
              headerText={headerText}
              bodyText={bodyText}
              quoteText={quoteText}
              buttonText={buttonText}
              buttonRadius={buttonRadius}
              buttonVariant={buttonVariant}
              buttonBgColor={buttonBgColor}
              buttonTextColor={buttonTextColor}
              onHeaderTextChange={setHeaderText}
              onBodyTextChange={setBodyText}
              onQuoteTextChange={setQuoteText}
              onButtonTextChange={setButtonText}
              onResetToDefaults={handleResetToDefaults}
              onHeaderManuallyEdited={() =>
                setHasManuallyEditedHeader(true)
              }
              onRandomize={handleRandomize}
              onSavePairing={handleSavePairing}
              isSaved={isSaved}
              onSwapFonts={handleSwapFonts}
              isHeaderLocked={isHeaderLocked}
              isBodyLocked={isBodyLocked}
              onHeaderLockToggle={handleHeaderLockToggle}
              onBodyLockToggle={handleBodyLockToggle}
              onUnsavePairing={() => {
                try {
                  const stored = localStorage.getItem(
                    "fontPairingStudio_savedPairings",
                  );
                  let pairings = stored
                    ? JSON.parse(stored)
                    : [];
                  const existingIndex = pairings.findIndex(
                    (p: SavedPairing) =>
                      p.headerFont === currentPair.header &&
                      p.bodyFont === currentPair.body,
                  );
                  if (existingIndex >= 0) {
                    // Store the removed pairing for undo
                    const removedPairing =
                      pairings[existingIndex];
                    pairings.splice(existingIndex, 1);
                    localStorage.setItem(
                      "fontPairingStudio_savedPairings",
                      JSON.stringify(pairings),
                    );
                    setSavedPairingsVersion((v) => v + 1);

                    // Show toast with undo action
                    toast.success("Font pairing removed", {
                      action: {
                        label: "Undo",
                        onClick: () => {
                          try {
                            const currentStored =
                              localStorage.getItem(
                                "fontPairingStudio_savedPairings",
                              );
                            let currentPairings = currentStored
                              ? JSON.parse(currentStored)
                              : [];
                            currentPairings.unshift(
                              removedPairing,
                            );
                            localStorage.setItem(
                              "fontPairingStudio_savedPairings",
                              JSON.stringify(currentPairings),
                            );
                            setSavedPairingsVersion(
                              (v) => v + 1,
                            );
                            toast.success(
                              "Font pairing restored!",
                              {
                                icon: (
                                  <div
                                    style={{
                                      backgroundColor:
                                        "#4d2487",
                                      borderRadius: "50%",
                                      width: "20px",
                                      height: "20px",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <svg
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M2 6L5 9L10 3"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </div>
                                ),
                              },
                            );
                          } catch (error) {
                            console.error(
                              "Error restoring pairing:",
                              error,
                            );
                            toast.error(
                              "Failed to restore pairing",
                            );
                          }
                        },
                      },
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
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2 6L5 9L10 3"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      ),
                    });
                  }
                } catch (error) {
                  console.error(
                    "Error unsaving pairing:",
                    error,
                  );
                  toast.error("Failed to remove pairing");
                }
              }}
            />
            <PairingJustification
              headerFont={currentPair.header}
              bodyFont={currentPair.body}
            />
            <div ref={savedPairingsRef}>
              <SavedPairings
                onLoadPairing={handleLoadSavedPairing}
                isDarkMode={isDarkMode}
                onPairingsChange={() =>
                  setSavedPairingsVersion((v) => v + 1)
                }
                savedPairingsVersion={savedPairingsVersion}
              />
            </div>
          </div>

          {/* Controls Sidebar - Hidden on mobile */}
          <div className="hidden xl:block">
            <Card>
              <CardContent className="p-6">
                <Tabs
                  value={desktopCurrentTab}
                  onValueChange={setDesktopCurrentTab}
                  className="w-full"
                >
                  {/* Tab Header - shows on narrower screens */}
                  <div className="mb-4 2xl:hidden">
                    <h3 className="text-lg font-semibold">
                      {desktopCurrentTab === "fonts" && "Fonts"}
                      {desktopCurrentTab === "colors" &&
                        "Colors"}
                      {desktopCurrentTab === "buttons" &&
                        "Buttons"}
                      {desktopCurrentTab === "code" &&
                        "Use Fonts"}
                    </h3>
                  </div>
                  <TabsList className="grid w-full grid-cols-4 mb-6">
                    <TabsTrigger
                      value="fonts"
                      className="flex items-center gap-2"
                    >
                      <Type className="w-4 h-4" />
                      <span className="hidden 2xl:inline">
                        Fonts
                      </span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="colors"
                      className="flex items-center gap-2"
                    >
                      <Palette className="w-4 h-4" />
                      <span className="hidden 2xl:inline">
                        Colors
                      </span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="buttons"
                      className="flex items-center gap-2"
                    >
                      <RectangleHorizontal className="w-4 h-4" />
                      <span className="hidden 2xl:inline">
                        Buttons
                      </span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="code"
                      className="flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      <span className="hidden 2xl:inline">
                        Use Fonts
                      </span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="fonts" className="mt-0">
                    <FontControls
                      selectedStyle={selectedStyle}
                      onStyleChange={setSelectedStyle}
                      onRandomize={handleRandomize}
                      headerFont={currentPair.header}
                      bodyFont={currentPair.body}
                      onHeaderFontChange={
                        handleHeaderFontChange
                      }
                      onBodyFontChange={handleBodyFontChange}
                      headerWeight={headerWeight}
                      bodyWeight={bodyWeight}
                      onHeaderWeightChange={setHeaderWeight}
                      onBodyWeightChange={setBodyWeight}
                      headerStyle={headerStyle}
                      bodyStyle={bodyStyle}
                      onHeaderStyleChange={setHeaderStyle}
                      onBodyStyleChange={setBodyStyle}
                      headerSize={headerSize}
                      bodySize={bodySize}
                      onHeaderSizeChange={setHeaderSize}
                      onBodySizeChange={setBodySize}
                      onSwapFonts={handleSwapFonts}
                      styleContrast={styleContrast}
                      onStyleContrastChange={
                        handleStyleContrastChange
                      }
                      isHeaderLocked={isHeaderLocked}
                      isBodyLocked={isBodyLocked}
                      onHeaderLockToggle={
                        handleHeaderLockToggle
                      }
                      onBodyLockToggle={handleBodyLockToggle}
                    />
                  </TabsContent>

                  <TabsContent value="colors" className="mt-0">
                    <ColorControls
                      textColor={textColor}
                      backgroundColor={backgroundColor}
                      buttonBgColor={buttonBgColor}
                      buttonTextColor={buttonTextColor}
                      buttonVariant={buttonVariant}
                      onTextColorChange={setTextColor}
                      onBackgroundColorChange={
                        setBackgroundColor
                      }
                      onButtonBgColorChange={setButtonBgColor}
                      onButtonTextColorChange={
                        setButtonTextColor
                      }
                      onRandomizeColors={handleRandomizeColors}
                    />
                  </TabsContent>

                  <TabsContent value="buttons" className="mt-0">
                    <ButtonControls
                      buttonRadius={buttonRadius}
                      buttonVariant={buttonVariant}
                      onButtonRadiusChange={setButtonRadius}
                      onButtonVariantChange={setButtonVariant}
                    />
                  </TabsContent>

                  <TabsContent value="code" className="mt-0">
                    <FontCode
                      ref={fontCodeRef}
                      headerFont={currentPair.header}
                      bodyFont={currentPair.body}
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
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer Info */}
        <footer className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            All fonts are served from Google Fonts. Contrast
            ratios follow WCAG 2.1 accessibility guidelines.
          </p>
          <p className="mt-2">
            Current pairing:{" "}
            <strong>{currentPair.header}</strong> ×{" "}
            <strong>{currentPair.body}</strong>
          </p>
          <p className="mt-2">
            {googleFonts.length} fonts • {fontPairings.length}{" "}
            curated pairings available
          </p>
          <p className="mt-4 pt-4 border-t">
            Developed and created with 💜 by{" "}
            <a
              href="https://hurtic.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4d2487] dark:text-[#9d6dd4] hover:underline font-medium"
            >
              Harun Hurtic
            </a>
          </p>
        </footer>
      </main>

      {/* Mobile Controls */}
      <MobileControls
        selectedStyle={selectedStyle}
        onStyleChange={setSelectedStyle}
        onRandomize={handleRandomize}
        headerFont={currentPair.header}
        bodyFont={currentPair.body}
        onHeaderFontChange={handleHeaderFontChange}
        onBodyFontChange={handleBodyFontChange}
        headerWeight={headerWeight}
        bodyWeight={bodyWeight}
        onHeaderWeightChange={setHeaderWeight}
        onBodyWeightChange={setBodyWeight}
        headerStyle={headerStyle}
        bodyStyle={bodyStyle}
        onHeaderStyleChange={setHeaderStyle}
        onBodyStyleChange={setBodyStyle}
        headerSize={headerSize}
        bodySize={bodySize}
        onHeaderSizeChange={setHeaderSize}
        onBodySizeChange={setBodySize}
        buttonRadius={buttonRadius}
        buttonVariant={buttonVariant}
        onButtonRadiusChange={setButtonRadius}
        onButtonVariantChange={setButtonVariant}
        textColor={textColor}
        backgroundColor={backgroundColor}
        buttonBgColor={buttonBgColor}
        buttonTextColor={buttonTextColor}
        onTextColorChange={setTextColor}
        onBackgroundColorChange={setBackgroundColor}
        onButtonBgColorChange={setButtonBgColor}
        onButtonTextColorChange={setButtonTextColor}
        onRandomizeColors={handleRandomizeColors}
        onSwapFonts={handleSwapFonts}
        styleContrast={styleContrast}
        onStyleContrastChange={handleStyleContrastChange}
        isHeaderLocked={isHeaderLocked}
        isBodyLocked={isBodyLocked}
        onHeaderLockToggle={handleHeaderLockToggle}
        onBodyLockToggle={handleBodyLockToggle}
        isOpen={isMobileSheetOpen}
        onOpenChange={(open) => {
          setIsMobileSheetOpen(open);
          // Reset to fonts tab when closing
          if (!open) {
            setTimeout(() => setMobileInitialTab("fonts"), 300);
          }
        }}
        shouldExpandFontCode={shouldExpandFontCode}
        onFontCodeExpandChange={setShouldExpandFontCode}
        initialTab={mobileInitialTab}
      />

      <Toaster />
    </div>
  );
}