import { useEffect, useState } from 'react';
import { Edit, Check, RotateCcw, Shuffle, Heart, ArrowUpDown, Lock, Unlock, LayoutGrid, CreditCard, Globe, Presentation, Smartphone, BookOpen, Signpost, FileText, User } from 'lucide-react';
import { loadGoogleFont, getFontData } from '../utils/fonts';
import { checkContrast } from '../utils/contrast';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
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
  headerLineHeight: number;
  bodyLineHeight: number;
  headerLetterSpacing: number;
  bodyLetterSpacing: number;
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
  headerLineHeight,
  bodyLineHeight,
  headerLetterSpacing,
  bodyLetterSpacing,
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
  const [visualizationType, setVisualizationType] = useState<string>('default');
  
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
      <div className="space-y-3 xl:space-y-0">
        {/* Title on its own line on mobile */}
        <h2 className="text-xl font-semibold xl:hidden">Font Preview</h2>
        
        {/* Desktop: Single line with title, dropdown, and buttons */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3 flex-wrap">
            <h2 className="text-xl font-semibold hidden xl:block">Font Preview</h2>
            <Select value={visualizationType} onValueChange={setVisualizationType}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Visualize as..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">
                  <div className="flex items-center gap-2">
                    <LayoutGrid className="w-4 h-4" />
                    <span>Default Preview</span>
                  </div>
                </SelectItem>
                <SelectItem value="business-card">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4" />
                    <span>Business Card</span>
                  </div>
                </SelectItem>
                <SelectItem value="website">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    <span>Website</span>
                  </div>
                </SelectItem>
                <SelectItem value="slide-deck">
                  <div className="flex items-center gap-2">
                    <Presentation className="w-4 h-4" />
                    <span>Slide Deck</span>
                  </div>
                </SelectItem>
                <SelectItem value="mobile-app">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4" />
                    <span>Mobile App</span>
                  </div>
                </SelectItem>
                <SelectItem value="book">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span>Book Cover</span>
                  </div>
                </SelectItem>
                <SelectItem value="billboard">
                  <div className="flex items-center gap-2">
                    <Signpost className="w-4 h-4" />
                    <span>Billboard</span>
                  </div>
                </SelectItem>
                <SelectItem value="resume">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>Resume</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
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
              <span>{isSaved ? 'Saved' : 'Save'}</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Font Preview */}
      {visualizationType === 'default' ? (
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
            <span className="hidden lg:inline">Swap Fonts</span>
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
            <span className="hidden lg:inline">Reset Default Text</span>
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
                <span className="hidden lg:inline">Done Editing</span>
              </>
            ) : (
              <>
                <Edit className="w-4 h-4" />
                <span className="hidden lg:inline">Edit Text</span>
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
                <div className="flex flex-col md:flex-row md:items-center gap-2">
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
                      className="flex items-center gap-1 bg-white dark:bg-background"
                      style={isHeaderLocked ? {
                        backgroundColor: '#4d2487',
                        borderColor: textColor,
                        color: 'white'
                      } : {
                        borderColor: textColor
                      }}
                      title={isHeaderLocked ? 'Unlock header font' : 'Lock header font'}
                    >
                      {isHeaderLocked ? (
                        <Lock className="w-3 h-3" />
                      ) : (
                        <Unlock className="w-3 h-3" />
                      )}
                    </Button>
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                      <span 
                        style={{
                          fontSize: '0.75rem',
                          opacity: 0.6,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em'
                        }}
                      >
                        Header Text
                      </span>
                      {isEditMode && (
                        <span 
                          style={{
                            fontSize: '0.75rem',
                            opacity: 0.6,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                          }}
                        >
                          ({isMobile ? 'Tap' : 'Click'} to edit)
                        </span>
                      )}
                    </div>
                  </div>
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
                      lineHeight: headerLineHeight,
                      letterSpacing: `${headerLetterSpacing}em`,
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
                    lineHeight: headerLineHeight,
                    letterSpacing: `${headerLetterSpacing}em`,
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
                <div className="flex flex-col md:flex-row md:items-center gap-2">
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
                      className="flex items-center gap-1 bg-white dark:bg-background"
                      style={isBodyLocked ? {
                        backgroundColor: '#4d2487',
                        borderColor: textColor,
                        color: 'white'
                      } : {
                        borderColor: textColor
                      }}
                      title={isBodyLocked ? 'Unlock body font' : 'Lock body font'}
                    >
                      {isBodyLocked ? (
                        <Lock className="w-3 h-3" />
                      ) : (
                        <Unlock className="w-3 h-3" />
                      )}
                    </Button>
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                      <span 
                        style={{
                          fontSize: '0.75rem',
                          opacity: 0.6,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em'
                        }}
                      >
                        Body Text
                      </span>
                      {isEditMode && (
                        <span 
                          style={{
                            fontSize: '0.75rem',
                            opacity: 0.6,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                          }}
                        >
                          ({isMobile ? 'Tap' : 'Click'} to edit)
                        </span>
                      )}
                    </div>
                  </div>
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
                      lineHeight: bodyLineHeight,
                      letterSpacing: `${bodyLetterSpacing}em`,
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
                        lineHeight: bodyLineHeight,
                        letterSpacing: `${bodyLetterSpacing}em`,
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
                        fontFamily: bodyFontFamily,
                        fontWeight: bodyWeight,
                        fontStyle: 'italic',
                        fontSize: `${Math.round(bodySize * 1.25)}px`,
                        lineHeight: bodyLineHeight,
                        letterSpacing: `${bodyLetterSpacing}em`,
                        color: textColor
                      }}
                      autoFocus
                    />
                  </div>
                ) : (
                  <blockquote 
                    style={{
                      fontFamily: bodyFontFamily,
                      fontWeight: bodyWeight,
                      fontStyle: 'italic',
                      fontSize: `${Math.round(bodySize * 1.25)}px`,
                      lineHeight: bodyLineHeight,
                      letterSpacing: `${bodyLetterSpacing}em`,
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
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                <span 
                  style={{
                    fontSize: '0.75rem',
                    opacity: 0.6,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  Button
                </span>
                {isEditMode && (
                  <span 
                    style={{
                      fontSize: '0.75rem',
                      opacity: 0.6,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    ({isMobile ? 'Tap' : 'Click'} to edit)
                  </span>
                )}
              </div>
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
              letterSpacing: `${bodyLetterSpacing}em`,
              color: buttonTextColor,
              backgroundColor: buttonVariant === 'filled' ? buttonBgColor : 'transparent',
              borderColor: buttonVariant === 'outline' ? buttonBgColor : buttonVariant === 'ghost' ? 'transparent' : buttonBgColor
            }}
          >
            {buttonText}
          </button>
          
          {/* Font info under button */}
          <div className="mt-2">
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
      ) : visualizationType === 'business-card' ? (
        <div 
          className="p-8 rounded-lg transition-colors duration-300 border border-border relative overflow-hidden bg-muted/20"
          style={{ 
            minHeight: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div 
            className="w-full max-w-md aspect-[3.5/2] border-2 rounded-lg p-6 flex flex-col justify-between shadow-lg" 
            style={{ 
              backgroundColor,
              color: textColor,
              borderColor: textColor + '20'
            }}
          >
            <div>
              <h3 
                style={{ 
                  fontFamily: headerFontFamily,
                  fontWeight: headerWeight,
                  fontStyle: headerStyle,
                  fontSize: '24px',
                  letterSpacing: `${headerLetterSpacing}em`,
                  marginBottom: '4px'
                }}
              >
                {headerText.split(' ')[0] || 'Your Name'}
              </h3>
              <p 
                style={{ 
                  fontFamily: bodyFontFamily,
                  fontWeight: bodyWeight,
                  fontStyle: bodyStyle,
                  fontSize: '14px',
                  letterSpacing: `${bodyLetterSpacing}em`,
                  opacity: 0.8
                }}
              >
                {bodyText.split('.')[0] || 'Professional Title'}
              </p>
            </div>
            <div 
              style={{ 
                fontFamily: bodyFontFamily,
                fontWeight: bodyWeight,
                fontStyle: bodyStyle,
                fontSize: '12px',
                opacity: 0.7
              }}
            >
              <p>email@example.com</p>
              <p>+1 (555) 123-4567</p>
              <p>website.com</p>
            </div>
          </div>
        </div>
      ) : visualizationType === 'website' ? (
        <div 
          className="rounded-lg transition-colors duration-300 border border-border relative overflow-hidden"
          style={{ 
            backgroundColor,
            color: textColor,
            minHeight: '500px'
          }}
        >
          <div className="p-6 border-b border-current/10">
            <div className="flex items-center justify-between">
              <h1 
                style={{ 
                  fontFamily: headerFontFamily,
                  fontWeight: headerWeight,
                  fontStyle: headerStyle,
                  fontSize: '28px',
                  letterSpacing: `${headerLetterSpacing}em`
                }}
              >
                {headerText.split(' ')[0] || 'Brand'}
              </h1>
              <div 
                className="flex gap-6"
                style={{ 
                  fontFamily: bodyFontFamily,
                  fontWeight: bodyWeight,
                  fontStyle: bodyStyle,
                  fontSize: '14px'
                }}
              >
                <span>Home</span>
                <span>About</span>
                <span>Services</span>
                <span>Contact</span>
              </div>
            </div>
          </div>
          <div className="p-12">
            <h2 
              style={{ 
                fontFamily: headerFontFamily,
                fontWeight: headerWeight,
                fontStyle: headerStyle,
                fontSize: `${headerSize}px`,
                lineHeight: headerLineHeight,
                letterSpacing: `${headerLetterSpacing}em`,
                marginBottom: '16px'
              }}
            >
              {headerText}
            </h2>
            <p 
              style={{ 
                fontFamily: bodyFontFamily,
                fontWeight: bodyWeight,
                fontStyle: bodyStyle,
                fontSize: `${bodySize}px`,
                lineHeight: bodyLineHeight,
                letterSpacing: `${bodyLetterSpacing}em`,
                marginBottom: '24px'
              }}
            >
              {bodyText}
            </p>
            <button
              className={getButtonClasses()}
              style={{
                fontFamily: bodyFontFamily,
                fontWeight: bodyWeight,
                backgroundColor: buttonVariant === 'filled' ? buttonBgColor : 'transparent',
                color: buttonVariant === 'filled' ? buttonTextColor : buttonBgColor,
                borderColor: buttonBgColor
              }}
            >
              {buttonText}
            </button>
          </div>
        </div>
      ) : visualizationType === 'slide-deck' ? (
        <div 
          className="p-12 rounded-lg transition-colors duration-300 border border-border relative"
          style={{ 
            backgroundColor,
            color: textColor,
            minHeight: '500px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <h1 
            style={{ 
              fontFamily: headerFontFamily,
              fontWeight: headerWeight,
              fontStyle: headerStyle,
              fontSize: `${Math.max(headerSize * 1.5, 56)}px`,
              lineHeight: headerLineHeight,
              letterSpacing: `${headerLetterSpacing}em`,
              marginBottom: '24px'
            }}
          >
            {headerText}
          </h1>
          <p 
            style={{ 
              fontFamily: bodyFontFamily,
              fontWeight: bodyWeight,
              fontStyle: bodyStyle,
              fontSize: `${bodySize + 2}px`,
              maxWidth: '600px',
              lineHeight: bodyLineHeight,
              letterSpacing: `${bodyLetterSpacing}em`
            }}
          >
            {bodyText.substring(0, 120)}...
          </p>
          <div 
            className="absolute bottom-8 right-8"
            style={{ 
              fontFamily: bodyFontFamily,
              fontSize: '14px',
              opacity: 0.5
            }}
          >
            01
          </div>
        </div>
      ) : visualizationType === 'mobile-app' ? (
        <div 
          className="rounded-lg transition-colors duration-300 border border-border relative overflow-hidden mx-auto"
          style={{ 
            backgroundColor,
            color: textColor,
            maxWidth: '375px',
            minHeight: '667px'
          }}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="w-6 h-6 flex items-center justify-center">
                <User className="w-5 h-5" style={{ color: textColor }} />
              </div>
              <h1 
                style={{ 
                  fontFamily: headerFontFamily,
                  fontWeight: headerWeight,
                  fontStyle: headerStyle,
                  fontSize: '20px',
                  letterSpacing: `${headerLetterSpacing}em`
                }}
              >
                {headerText.split(' ')[0]}
              </h1>
              <div className="w-6 h-6"></div>
            </div>
            <h2 
              style={{ 
                fontFamily: headerFontFamily,
                fontWeight: headerWeight,
                fontStyle: headerStyle,
                fontSize: `${headerSize * 0.8}px`,
                lineHeight: headerLineHeight,
                letterSpacing: `${headerLetterSpacing}em`,
                marginBottom: '12px'
              }}
            >
              {headerText}
            </h2>
            <p 
              style={{ 
                fontFamily: bodyFontFamily,
                fontWeight: bodyWeight,
                fontStyle: bodyStyle,
                fontSize: `${bodySize}px`,
                lineHeight: bodyLineHeight,
                letterSpacing: `${bodyLetterSpacing}em`,
                marginBottom: '24px'
              }}
            >
              {bodyText}
            </p>
            <button
              className={getButtonClasses()}
              style={{
                fontFamily: bodyFontFamily,
                fontWeight: bodyWeight,
                backgroundColor: buttonVariant === 'filled' ? buttonBgColor : 'transparent',
                color: buttonVariant === 'filled' ? buttonTextColor : buttonBgColor,
                borderColor: buttonBgColor,
                display: 'inline-block'
              }}
            >
              {buttonText}
            </button>
          </div>
        </div>
      ) : visualizationType === 'book' ? (
        <div 
          className="rounded-lg transition-colors duration-300 border border-border relative overflow-hidden mx-auto"
          style={{ 
            backgroundColor,
            color: textColor,
            maxWidth: '400px',
            minHeight: '600px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '48px'
          }}
        >
          <div 
            style={{ 
              fontFamily: bodyFontFamily,
              fontSize: '14px',
              marginBottom: '32px',
              opacity: 0.7
            }}
          >
            {bodyText.split(' ').slice(0, 2).join(' ').toUpperCase()}
          </div>
          <h1 
            style={{ 
              fontFamily: headerFontFamily,
              fontWeight: headerWeight,
              fontStyle: headerStyle,
              fontSize: `${Math.max(headerSize * 1.2, 48)}px`,
              marginBottom: '24px',
              lineHeight: headerLineHeight,
              letterSpacing: `${headerLetterSpacing}em`
            }}
          >
            {headerText}
          </h1>
          <p 
            style={{ 
              fontFamily: bodyFontFamily,
              fontWeight: bodyWeight,
              fontStyle: bodyStyle,
              fontSize: `${bodySize}px`,
              marginBottom: '48px',
              fontStyle: 'italic',
              lineHeight: bodyLineHeight,
              letterSpacing: `${bodyLetterSpacing}em`,
              opacity: 0.8
            }}
          >
            {quoteText || bodyText.substring(0, 60)}
          </p>
          <div 
            style={{ 
              fontFamily: bodyFontFamily,
              fontSize: '16px',
              marginTop: 'auto'
            }}
          >
            Author Name
          </div>
        </div>
      ) : visualizationType === 'billboard' ? (
        <div 
          className="p-12 rounded-lg transition-colors duration-300 border border-border relative"
          style={{ 
            backgroundColor,
            color: textColor,
            minHeight: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <h1 
            style={{ 
              fontFamily: headerFontFamily,
              fontWeight: headerWeight,
              fontStyle: headerStyle,
              fontSize: `${Math.max(headerSize * 2, 72)}px`,
              marginBottom: '16px',
              lineHeight: headerLineHeight,
              letterSpacing: `${headerLetterSpacing}em`
            }}
          >
            {headerText.split(' ').slice(0, 3).join(' ')}
          </h1>
          <p 
            style={{ 
              fontFamily: bodyFontFamily,
              fontWeight: bodyWeight,
              fontStyle: bodyStyle,
              fontSize: `${bodySize + 4}px`,
              maxWidth: '600px',
              lineHeight: bodyLineHeight,
              letterSpacing: `${bodyLetterSpacing}em`
            }}
          >
            {bodyText.split('.')[0]}
          </p>
        </div>
      ) : visualizationType === 'resume' ? (
        <div 
          className="p-8 rounded-lg transition-colors duration-300 border border-border relative"
          style={{ 
            backgroundColor,
            color: textColor,
            minHeight: '600px'
          }}
        >
          <div className="mb-8 pb-4 border-b border-current/20">
            <h1 
              style={{ 
                fontFamily: headerFontFamily,
                fontWeight: headerWeight,
                fontStyle: headerStyle,
                fontSize: `${headerSize * 1.2}px`,
                lineHeight: headerLineHeight,
                letterSpacing: `${headerLetterSpacing}em`,
                marginBottom: '8px'
              }}
            >
              {headerText.split(' ').slice(0, 2).join(' ') || 'Your Name'}
            </h1>
            <p 
              style={{ 
                fontFamily: bodyFontFamily,
                fontWeight: bodyWeight,
                fontStyle: bodyStyle,
                fontSize: `${bodySize}px`,
                letterSpacing: `${bodyLetterSpacing}em`,
                opacity: 0.8
              }}
            >
              email@example.com • +1 (555) 123-4567 • linkedin.com/in/yourname
            </p>
          </div>
          
          <div className="mb-6">
            <h2 
              style={{ 
                fontFamily: headerFontFamily,
                fontWeight: headerWeight,
                fontStyle: headerStyle,
                fontSize: `${headerSize * 0.6}px`,
                lineHeight: headerLineHeight,
                letterSpacing: `${headerLetterSpacing}em`,
                marginBottom: '12px'
              }}
            >
              Professional Summary
            </h2>
            <p 
              style={{ 
                fontFamily: bodyFontFamily,
                fontWeight: bodyWeight,
                fontStyle: bodyStyle,
                fontSize: `${bodySize}px`,
                lineHeight: bodyLineHeight,
                letterSpacing: `${bodyLetterSpacing}em`
              }}
            >
              {bodyText}
            </p>
          </div>
          
          <div>
            <h2 
              style={{ 
                fontFamily: headerFontFamily,
                fontWeight: headerWeight,
                fontStyle: headerStyle,
                fontSize: `${headerSize * 0.6}px`,
                lineHeight: headerLineHeight,
                letterSpacing: `${headerLetterSpacing}em`,
                marginBottom: '12px'
              }}
            >
              Experience
            </h2>
            <div className="mb-4">
              <h3 
                style={{ 
                  fontFamily: bodyFontFamily,
                  fontWeight: Math.min(bodyWeight + 200, 900),
                  fontSize: `${bodySize + 2}px`,
                  marginBottom: '4px'
                }}
              >
                Job Title • Company Name
              </h3>
              <p 
                style={{ 
                  fontFamily: bodyFontFamily,
                  fontWeight: bodyWeight,
                  fontStyle: bodyStyle,
                  fontSize: `${bodySize - 1}px`,
                  opacity: 0.7,
                  marginBottom: '8px'
                }}
              >
                2020 - Present
              </p>
              <p 
                style={{ 
                  fontFamily: bodyFontFamily,
                  fontWeight: bodyWeight,
                  fontStyle: bodyStyle,
                  fontSize: `${bodySize}px`,
                  lineHeight: 1.6
                }}
              >
                {bodyText.substring(0, 100)}...
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
