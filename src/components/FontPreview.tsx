import { useEffect, useState } from 'react';
import { Edit, Check, RotateCcw, Shuffle, Heart, ArrowUpDown, Lock, Unlock } from 'lucide-react';
import { loadGoogleFont, getFontData } from '../utils/fonts';
import { checkContrast } from '../utils/contrast';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { toast } from 'sonner@2.0.3';

interface FontPreviewProps {
  headerFont: string;
  bodyFont: string;
  headerWeight: number;
  bodyWeight: number;
  headerStyle: string;
  bodyStyle: string;
  headerSize: number;
  bodySize: number;
  textColor: string;
  backgroundColor: string;
  headerText: string;
  bodyText: string;
  quoteText: string;
  buttonText: string;
  buttonRadius: string;
  buttonVariant: string;
  buttonBgColor: string;
  buttonTextColor: string;
  onHeaderTextChange: (text: string) => void;
  onBodyTextChange: (text: string) => void;
  onQuoteTextChange: (text: string) => void;
  onButtonTextChange: (text: string) => void;
  onResetToDefaults: () => void;
  onHeaderManuallyEdited: () => void;
  onRandomize: () => void;
  onSavePairing: () => void;
  isSaved: boolean;
  onSwapFonts: () => void;
  isHeaderLocked: boolean;
  isBodyLocked: boolean;
  onHeaderLockToggle: () => void;
  onBodyLockToggle: () => void;
  onUnsavePairing: () => void;
}

export function FontPreview({
  headerFont,
  bodyFont,
  headerWeight,
  bodyWeight,
  headerStyle,
  bodyStyle,
  headerSize,
  bodySize,
  textColor,
  backgroundColor,
  headerText,
  bodyText,
  quoteText,
  buttonText,
  buttonRadius,
  buttonVariant,
  buttonBgColor,
  buttonTextColor,
  onHeaderTextChange,
  onBodyTextChange,
  onQuoteTextChange,
  onButtonTextChange,
  onResetToDefaults,
  onHeaderManuallyEdited,
  onRandomize,
  onSavePairing,
  isSaved,
  onSwapFonts,
  isHeaderLocked,
  isBodyLocked,
  onHeaderLockToggle,
  onBodyLockToggle,
  onUnsavePairing
}: FontPreviewProps) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Temporary text states for editing
  const [tempHeaderText, setTempHeaderText] = useState(headerText);
  const [tempBodyText, setTempBodyText] = useState(bodyText);
  const [tempQuoteText, setTempQuoteText] = useState(quoteText);
  const [tempButtonText, setTempButtonText] = useState(buttonText);

  useEffect(() => {
    setTempHeaderText(headerText);
    setTempBodyText(bodyText);
    setTempQuoteText(quoteText);
    setTempButtonText(buttonText);
  }, [headerText, bodyText, quoteText, buttonText]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const headerFontData = getFontData(headerFont);
    const bodyFontData = getFontData(bodyFont);
    
    if (headerFontData) {
      // Load all available weights and styles, but ensure the selected ones are included
      const weightsToLoad = headerFontData.weights.includes(headerWeight) 
        ? headerFontData.weights 
        : [...headerFontData.weights, headerWeight].sort((a, b) => a - b);
      const stylesToLoad = headerFontData.styles.includes(headerStyle)
        ? headerFontData.styles
        : [...headerFontData.styles, headerStyle];
      loadGoogleFont(headerFont, weightsToLoad, stylesToLoad);
    }
    if (bodyFontData) {
      // Load all available weights and styles, but ensure the selected ones are included
      const weightsToLoad = bodyFontData.weights.includes(bodyWeight)
        ? bodyFontData.weights
        : [...bodyFontData.weights, bodyWeight].sort((a, b) => a - b);
      const stylesToLoad = bodyFontData.styles.includes(bodyStyle)
        ? bodyFontData.styles
        : [...bodyFontData.styles, bodyStyle];
      loadGoogleFont(bodyFont, weightsToLoad, stylesToLoad);
    }
  }, [headerFont, bodyFont, headerWeight, bodyWeight, headerStyle, bodyStyle]);

  const headerFontData = getFontData(headerFont);
  const bodyFontData = getFontData(bodyFont);
  
  const headerFontFamily = `"${headerFont}", ${headerFontData?.category === 'serif' ? 'serif' : 'sans-serif'}`;
  const bodyFontFamily = `"${bodyFont}", ${bodyFontData?.category === 'serif' ? 'serif' : 'sans-serif'}`;

  const handleSaveSection = (section: string) => {
    switch (section) {
      case 'header':
        onHeaderTextChange(tempHeaderText);
        onHeaderManuallyEdited();
        break;
      case 'body':
        onBodyTextChange(tempBodyText);
        break;
      case 'quote':
        onQuoteTextChange(tempQuoteText);
        break;
      case 'button':
        onButtonTextChange(tempButtonText);
        break;
    }
    setEditingSection(null);
  };

  const handleCancelSection = (section: string) => {
    switch (section) {
      case 'header':
        setTempHeaderText(headerText);
        break;
      case 'body':
        setTempBodyText(bodyText);
        break;
      case 'quote':
        setTempQuoteText(quoteText);
        break;
      case 'button':
        setTempButtonText(buttonText);
        break;
    }
    setEditingSection(null);
  };

  const getButtonClasses = () => {
    let classes = 'px-6 py-3 transition-colors duration-200 ';
    
    // Border radius
    switch (buttonRadius) {
      case 'none':
        classes += 'rounded-none ';
        break;
      case 'sm':
        classes += 'rounded-sm ';
        break;
      case 'md':
        classes += 'rounded-md ';
        break;
      case 'lg':
        classes += 'rounded-lg ';
        break;
      case 'xl':
        classes += 'rounded-xl ';
        break;
      case 'full':
        classes += 'rounded-full ';
        break;
      default:
        classes += 'rounded-md ';
    }

    // Variant styling
    switch (buttonVariant) {
      case 'filled':
        classes += 'border-2 ';
        break;
      case 'outline':
        classes += 'border-2 bg-transparent ';
        break;
      case 'ghost':
        classes += 'border-0 bg-transparent hover:bg-opacity-10 ';
        break;
      default:
        classes += 'border-2 ';
    }

    return classes;
  };

  const handleSectionClick = (section: string) => {
    if (isEditMode && editingSection !== section) {
      // Save current section if any
      if (editingSection) {
        handleSaveSection(editingSection);
      }
      setEditingSection(section);
    }
  };

  const toggleEditMode = () => {
    if (isEditMode && editingSection) {
      // Save current section when exiting edit mode
      handleSaveSection(editingSection);
    }
    setIsEditMode(!isEditMode);
    setEditingSection(null);
  };

  // Helper function to render contrast check badge
  const renderContrastBadge = (foreground: string, background: string, isLargeText: boolean = false) => {
    const contrast = checkContrast(foreground, background);
    const passes = isLargeText ? contrast.aaLarge : contrast.aa;
    
    return (
      <Badge 
        variant="outline"
        className={`text-xs ${
          passes
            ? 'bg-green-100 text-green-800 border-green-200'
            : 'bg-red-100 text-red-800 border-red-200'
        }`}
      >
        Color Contrast: {passes ? 'Pass' : 'Fail'} ({contrast.ratio}:1)
      </Badge>
    );
  };

  return (
    <div className="space-y-4">
      {/* Control Bar */}
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-xl font-semibold">Font Preview</h2>
        <div className="flex items-center gap-2">
          {/* Desktop: Generate + Save */}
          <Button 
            onClick={onRandomize} 
            className="hidden xl:flex items-center gap-2 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            style={{ backgroundColor: '#4d2487', borderColor: '#4d2487', color: 'white' }}
          >
            <Shuffle className="w-4 h-4" />
            Generate Font Pairing
          </Button>
          <Button
            variant={isSaved ? "default" : "outline"}
            onClick={isSaved ? onUnsavePairing : onSavePairing}
            className={`hidden xl:flex items-center gap-2 ${isSaved ? 'bg-[#b91c1c] hover:bg-[#991b1b] text-white dark:bg-white dark:text-black dark:hover:bg-gray-200' : ''}`}
            title={isSaved ? 'Remove from saved pairings' : 'Save this pairing'}
          >
            <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
            <span>{isSaved ? 'Font Pairing Saved' : 'Save Font Pairing'}</span>
          </Button>
          
          {/* Mobile: Only Save */}
          <Button
            variant={isSaved ? "default" : "outline"}
            size="sm"
            onClick={isSaved ? onUnsavePairing : onSavePairing}
            className={`xl:hidden flex items-center gap-2 whitespace-nowrap ${isSaved ? 'bg-[#b91c1c] hover:bg-[#991b1b] text-white dark:bg-white dark:text-black dark:hover:bg-gray-200' : ''}`}
            title={isSaved ? 'Remove from saved pairings' : 'Save this pairing'}
          >
            <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
            <span>{isSaved ? 'Saved' : 'Save Pairing'}</span>
          </Button>
        </div>
      </div>

      {/* Font Preview */}
      <div 
        className="p-8 rounded-lg transition-colors duration-300 border border-border relative"
        style={{ 
          backgroundColor,
          color: textColor,
          minHeight: '400px'
        }}
      >
        {/* Action Buttons - Top Right inside preview */}
        <div className="absolute top-4 right-4 z-10 flex gap-2 flex-wrap justify-end">
          <Button 
            onClick={onSwapFonts} 
            variant="outline" 
            size="sm"
            className="flex items-center gap-2 bg-white dark:bg-background"
            style={{
              borderColor: textColor
            }}
            title="Swap header and body fonts"
          >
            <ArrowUpDown className="w-4 h-4" />
            <span className="hidden sm:inline">Swap Fonts</span>
          </Button>
          <Button 
            onClick={onResetToDefaults} 
            variant="outline" 
            size="sm"
            className="flex items-center gap-2 bg-white dark:bg-background"
            style={{
              borderColor: textColor
            }}
          >
            <RotateCcw className="w-4 h-4" />
            <span className="hidden sm:inline">Reset Default Text</span>
          </Button>
          <Button 
            onClick={toggleEditMode} 
            variant={isEditMode ? "default" : "outline"}
            size="sm"
            className={`flex items-center gap-2 ${isEditMode ? 'dark:bg-white dark:text-black dark:hover:bg-gray-200' : 'bg-white dark:bg-background'}`}
            style={isEditMode ? { 
              backgroundColor: '#4d2487', 
              borderColor: '#4d2487', 
              color: 'white' 
            } : {
              borderColor: textColor
            }}
          >
            {isEditMode ? (
              <>
                <Check className="w-4 h-4" />
                <span className="hidden sm:inline">Done Editing</span>
              </>
            ) : (
              <>
                <Edit className="w-4 h-4" />
                <span className="hidden sm:inline">Edit Text</span>
              </>
            )}
          </Button>
        </div>

        {/* Header Section */}
        <div 
          className={`relative group mb-6 ${isEditMode ? 'cursor-pointer' : ''}`}
          onClick={() => handleSectionClick('header')}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="mb-2">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
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
                    className={`flex items-center gap-1 ${isHeaderLocked ? 'bg-muted' : ''}`}
                    title={isHeaderLocked ? 'Unlock header font' : 'Lock header font'}
                  >
                    {isHeaderLocked ? (
                      <Lock className="w-3 h-3" />
                    ) : (
                      <Unlock className="w-3 h-3" />
                    )}
                  </Button>
                  <span 
                    style={{
                      fontFamily: bodyFontFamily,
                      fontSize: '0.75rem',
                      opacity: 0.6,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    Header Text {isEditMode && `(${isMobile ? 'Tap' : 'Click'} to edit)`}
                  </span>
                </div>
                <div className="mt-1">
                  {renderContrastBadge(textColor, backgroundColor, true)}
                </div>
              </div>
              {editingSection === 'header' ? (
                <div className="p-3 rounded-md border-2 border-dashed" style={{ 
                  borderColor: textColor,
                  backgroundColor: `${textColor}10`
                }}>
                  <Input
                    value={tempHeaderText}
                    onChange={(e) => setTempHeaderText(e.target.value)}
                    className="border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    style={{
                      fontFamily: headerFontFamily,
                      fontWeight: headerWeight,
                      fontStyle: headerStyle,
                      fontSize: `${headerSize}px`,
                      lineHeight: '1.2',
                      color: textColor
                    }}
                    autoFocus
                  />
                </div>
              ) : (
                <h1 
                  style={{
                    fontFamily: headerFontFamily,
                    fontWeight: headerWeight,
                    fontStyle: headerStyle,
                    fontSize: `${headerSize}px`,
                    lineHeight: '1.2',
                    marginBottom: '0.5rem'
                  }}
                >
                  {headerText}
                </h1>
              )}
              {/* Font info under header */}
              <div className="mt-2">
                <p 
                  style={{
                    fontFamily: bodyFontFamily,
                    fontSize: '0.75rem',
                    opacity: 0.6,
                    margin: 0
                  }}
                >
                  {headerFont} • {headerFontData?.category || 'sans-serif'} • {headerWeight} • {headerStyle} • {headerSize}px • {headerFontData?.weights?.length || 0} weights
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Body Text Section */}
        <div 
          className={`relative group mb-6 ${isEditMode ? 'cursor-pointer' : ''}`}
          onClick={() => handleSectionClick('body')}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="mb-2">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
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
                    className={`flex items-center gap-1 ${isBodyLocked ? 'bg-muted' : ''}`}
                    title={isBodyLocked ? 'Unlock body font' : 'Lock body font'}
                  >
                    {isBodyLocked ? (
                      <Lock className="w-3 h-3" />
                    ) : (
                      <Unlock className="w-3 h-3" />
                    )}
                  </Button>
                  <span 
                    style={{
                      fontFamily: bodyFontFamily,
                      fontSize: '0.75rem',
                      opacity: 0.6,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    Body Text {isEditMode && `(${isMobile ? 'Tap' : 'Click'} to edit)`}
                  </span>
                </div>
                <div className="mt-1">
                  {renderContrastBadge(textColor, backgroundColor, false)}
                </div>
              </div>
              {editingSection === 'body' ? (
                <div className="p-3 rounded-md border-2 border-dashed" style={{ 
                  borderColor: textColor,
                  backgroundColor: `${textColor}10`
                }}>
                  <Textarea
                    value={tempBodyText}
                    onChange={(e) => setTempBodyText(e.target.value)}
                    className="border-0 bg-transparent p-0 min-h-[120px] focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
                    style={{
                      fontFamily: bodyFontFamily,
                      fontWeight: bodyWeight,
                      fontStyle: bodyStyle,
                      fontSize: `${bodySize}px`,
                      lineHeight: '1.6',
                      color: textColor
                    }}
                    autoFocus
                  />
                </div>
              ) : (
                <>
                  {bodyText.split('\\n\\n').map((paragraph, index) => (
                    <p 
                      key={index}
                      style={{
                        fontFamily: bodyFontFamily,
                        fontWeight: bodyWeight,
                        fontStyle: bodyStyle,
                        fontSize: `${bodySize}px`,
                        lineHeight: '1.6',
                        marginBottom: '0.5rem'
                      }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </>
              )}
              {/* Font info under body */}
              <div className="mt-2">
                <p 
                  style={{
                    fontFamily: bodyFontFamily,
                    fontSize: '0.75rem',
                    opacity: 0.6,
                    margin: 0
                  }}
                >
                  {bodyFont} • {bodyFontData?.category || 'sans-serif'} • {bodyWeight} • {bodyStyle} • {bodySize}px • {bodyFontData?.weights?.length || 0} weights
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        {quoteText && (
          <div 
            className={`relative group mb-6 ${isEditMode ? 'cursor-pointer' : ''}`}
            onClick={() => handleSectionClick('quote')}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span 
                    style={{
                      fontFamily: bodyFontFamily,
                      fontSize: '0.75rem',
                      opacity: 0.6,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    Quote {isEditMode && `(${isMobile ? 'Tap' : 'Click'} to edit)`}
                  </span>
                </div>
                {editingSection === 'quote' ? (
                  <div className="p-3 rounded-md border-2 border-dashed" style={{ 
                    borderColor: textColor,
                    backgroundColor: `${textColor}10`
                  }}>
                    <Input
                      value={tempQuoteText}
                      onChange={(e) => setTempQuoteText(e.target.value)}
                      className="border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      style={{
                        fontFamily: headerFontFamily,
                        fontWeight: headerWeight,
                        fontStyle: 'italic',
                        fontSize: '1.25rem',
                        lineHeight: '1.5',
                        color: textColor
                      }}
                      autoFocus
                    />
                  </div>
                ) : (
                  <blockquote 
                    style={{
                      fontFamily: headerFontFamily,
                      fontWeight: headerWeight,
                      fontStyle: 'italic',
                      fontSize: `${Math.round(bodySize * 1.25)}px`,
                      lineHeight: '1.5',
                      borderLeft: `4px solid ${textColor}`,
                      paddingLeft: '1rem',
                      marginBottom: '0',
                      opacity: 0.8
                    }}
                  >
                    "{quoteText}"
                  </blockquote>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Button Examples */}
        <div 
          className={`mb-8 ${isEditMode ? 'cursor-pointer' : ''}`}
          onClick={() => handleSectionClick('button')}
        >
          <div className="mb-2">
            <span 
              style={{
                fontFamily: bodyFontFamily,
                fontSize: '0.75rem',
                opacity: 0.6,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              Button {isEditMode && `(${isMobile ? 'Tap' : 'Click'} to edit)`}
            </span>
            <div className="mt-1">
              {(() => {
                if (buttonVariant === 'filled') {
                  // Filled button: check both text vs button bg AND button bg vs page bg
                  const textContrast = checkContrast(buttonTextColor, buttonBgColor);
                  const buttonContrast = checkContrast(buttonBgColor, backgroundColor);
                  const textPasses = textContrast.aa;
                  const buttonPasses = buttonContrast.aaLarge; // UI components need 3:1 (AA Large)
                  const bothPass = textPasses && buttonPasses;
                  
                  return (
                    <Badge 
                      variant="outline"
                      className={`text-xs ${
                        bothPass
                          ? 'bg-green-100 text-green-800 border-green-200'
                          : 'bg-red-100 text-red-800 border-red-200'
                      }`}
                    >
                      Color Contrast: {bothPass ? 'Pass' : 'Fail'} (Text: {textContrast.ratio}:1, Button: {buttonContrast.ratio}:1)
                    </Badge>
                  );
                } else if (buttonVariant === 'outline') {
                  // Outline button: check both text vs page bg AND outline vs page bg
                  const textContrast = checkContrast(buttonTextColor, backgroundColor);
                  const outlineContrast = checkContrast(buttonBgColor, backgroundColor);
                  const textPasses = textContrast.aa;
                  const outlinePasses = outlineContrast.aaLarge; // UI components need 3:1 (AA Large)
                  const bothPass = textPasses && outlinePasses;
                  
                  return (
                    <Badge 
                      variant="outline"
                      className={`text-xs ${
                        bothPass
                          ? 'bg-green-100 text-green-800 border-green-200'
                          : 'bg-red-100 text-red-800 border-red-200'
                      }`}
                    >
                      Color Contrast: {bothPass ? 'Pass' : 'Fail'} (Text: {textContrast.ratio}:1, Outline: {outlineContrast.ratio}:1)
                    </Badge>
                  );
                } else {
                  // Ghost button: check button text vs page background
                  return renderContrastBadge(buttonTextColor, backgroundColor, false);
                }
              })()}
            </div>
          </div>
          
          {editingSection === 'button' ? (
            <div className="mb-4 p-3 rounded-md border-2 border-dashed" style={{ 
              borderColor: textColor,
              backgroundColor: `${textColor}10`,
              maxWidth: '300px'
            }}>
              <Input
                value={tempButtonText}
                onChange={(e) => setTempButtonText(e.target.value)}
                className="border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                style={{
                  fontFamily: bodyFontFamily,
                  fontSize: '1rem',
                  color: textColor
                }}
                autoFocus
              />
            </div>
          ) : null}
          
          <button
            className={getButtonClasses()}
            style={{
              fontFamily: bodyFontFamily,
              fontWeight: Math.max(bodyWeight + 100, 500),
              fontStyle: bodyStyle,
              fontSize: '0.875rem',
              color: buttonTextColor,
              backgroundColor: buttonVariant === 'filled' ? buttonBgColor : 'transparent',
              borderColor: buttonVariant === 'outline' ? buttonBgColor : buttonVariant === 'ghost' ? 'transparent' : buttonBgColor
            }}
          >
            {buttonText}
          </button>
          
          {/* Font info under button */}
          <div className="mt-3">
            <p 
              style={{
                fontFamily: bodyFontFamily,
                fontSize: '0.75rem',
                opacity: 0.6,
                margin: 0
              }}
            >
              {bodyFont} • {bodyFontData?.category || 'sans-serif'} • {Math.max(bodyWeight + 100, 500)} • {bodyStyle} • Button
            </p>
          </div>
        </div>


      </div>
    </div>
  );
}
