import { useState, forwardRef, useImperativeHandle, useRef, useEffect } from 'react';
import { Copy, Check, Download, ArrowRight, Code } from 'lucide-react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { toast } from 'sonner@2.0.3';

interface FontCodeProps {
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
  buttonRadius: string;
  buttonVariant: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
  initialExpanded?: boolean;
  onExpandChange?: (expanded: boolean) => void;
}

export interface FontCodeRef {
  scrollToAndOpen: () => void;
}

export const FontCode = forwardRef<FontCodeRef, FontCodeProps>((props, ref) => {
  const {
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
    buttonBgColor,
    buttonTextColor
  } = props;
  
  const cardRef = useRef<HTMLDivElement>(null);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [webMethod, setWebMethod] = useState<'html-css' | 'react' | 'tailwind'>('html-css');

  useImperativeHandle(ref, () => ({
    scrollToAndOpen: () => {
      setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }));

  const copyToClipboard = async (text: string, section: string) => {
    // Try modern Clipboard API first
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        setCopiedSection(section);
        setTimeout(() => setCopiedSection(null), 2000);
        toast.success('Copied to clipboard!', {
          icon: (
            <div style={{ 
              backgroundColor: '#4d2487', 
              borderRadius: '50%', 
              width: '20px', 
              height: '20px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
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
          )
        });
        return;
      }
    } catch (clipboardErr) {
      console.log('Clipboard API failed, using fallback:', clipboardErr);
      // Continue to fallback method
    }
    
    // Fallback to older method
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        
        if (successful) {
          setCopiedSection(section);
          setTimeout(() => setCopiedSection(null), 2000);
          toast.success('Copied to clipboard!', {
            icon: (
              <div style={{ 
                backgroundColor: '#4d2487', 
                borderRadius: '50%', 
                width: '20px', 
                height: '20px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
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
            )
          });
        } else {
          toast.error('Failed to copy. Please copy manually.');
        }
      } catch (err) {
        if (document.body.contains(textArea)) {
          document.body.removeChild(textArea);
        }
        toast.error('Failed to copy. Please copy manually.');
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
      toast.error('Failed to copy. Please copy manually.');
    }
  };

  // Generate Google Fonts URL
  const getGoogleFontsURL = () => {
    const headerParams = [];
    const bodyParams = [];
    
    // Header font parameters
    if (headerStyle === 'italic') {
      headerParams.push(`ital,wght@1,${headerWeight}`);
    } else {
      headerParams.push(`wght@${headerWeight}`);
    }
    
    // Body font parameters  
    if (bodyStyle === 'italic') {
      bodyParams.push(`ital,wght@1,${bodyWeight}`);
    } else {
      bodyParams.push(`wght@${bodyWeight}`);
    }
    
    const headerFontParam = `family=${headerFont.replace(/\s+/g, '+')}:${headerParams.join(';')}`;
    const bodyFontParam = `family=${bodyFont.replace(/\s+/g, '+')}:${bodyParams.join(';')}`;
    
    return `https://fonts.googleapis.com/css2?${headerFontParam}&${bodyFontParam}&display=swap`;
  };

  // Web methods
  const getHTMLLink = () => {
    return `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="${getGoogleFontsURL()}" rel="stylesheet">`;
  };

  const getCSSImport = () => {
    return `@import url('${getGoogleFontsURL()}');`;
  };

  const getWebCSS = () => {
    return `.header-font {
  font-family: "${headerFont}", ${headerFont.toLowerCase().includes('serif') ? 'serif' : 'sans-serif'};
  font-weight: ${headerWeight};
  font-style: ${headerStyle};
}

.body-font {
  font-family: "${bodyFont}", ${bodyFont.toLowerCase().includes('serif') ? 'serif' : 'sans-serif'};
  font-weight: ${bodyWeight};
  font-style: ${bodyStyle};
}`;
  };

  // React component
  const getReactCSSImport = () => {
    return `@import url('${getGoogleFontsURL()}');`;
  };

  const getReactComponent = () => {
    return `export function Example() {
  return (
    <>
      <h1 style={{ 
        fontFamily: '${headerFont}',
        fontWeight: ${headerWeight},
        fontStyle: '${headerStyle}'
      }}>
        Your Heading
      </h1>
      
      <p style={{ 
        fontFamily: '${bodyFont}',
        fontWeight: ${bodyWeight},
        fontStyle: '${bodyStyle}'
      }}>
        Your body text
      </p>
    </>
  );
}`;
  };

  // Tailwind config
  const getTailwindCSSImport = () => {
    return `@import url('${getGoogleFontsURL()}');`;
  };

  const getTailwindConfig = () => {
    return `// tailwind.config.js
export default {
  theme: {
    extend: {
      fontFamily: {
        header: ['${headerFont}', ${headerFont.toLowerCase().includes('serif') ? "'serif'" : "'sans-serif'"}],
        body: ['${bodyFont}', ${bodyFont.toLowerCase().includes('serif') ? "'serif'" : "'sans-serif'"}],
      },
    },
  },
}`;
  };

  const getTailwindUsage = () => {
    return `<h1 className="font-header">Your Heading</h1>
<p className="font-body">Your body text</p>`;
  };

  // Generate downloadable text file
  const getFontSpecText = () => {
    return `FONT PAIRING SPECIFICATION
========================

Font Pairing Studio developed and created by Harun Hurtic
Generated: ${new Date().toLocaleString()}

PAIRING INFORMATION
-------------------
Name: ${headerFont} + ${bodyFont}
Description: Font pairing from Font Pairing Studio

FONTS
-----
Header Font:
  Family: ${headerFont}
  Weight: ${headerWeight}
  Style: ${headerStyle}
  Google Fonts: https://fonts.google.com/specimen/${headerFont.replace(/\s+/g, '+')}

Body Font:
  Family: ${bodyFont}
  Weight: ${bodyWeight}
  Style: ${bodyStyle}
  Google Fonts: https://fonts.google.com/specimen/${bodyFont.replace(/\s+/g, '+')}

RECOMMENDED SIZES
-----------------
H1: ${headerSize}px
H2: ${Math.round(headerSize * 0.8)}px
H3: ${Math.round(headerSize * 0.65)}px
Body: ${bodySize}px
Small: ${Math.round(bodySize * 0.875)}px

RECOMMENDED LINE HEIGHTS
------------------------
Header: 1.2
Body: 1.6

COLORS
------
Text: ${textColor}
Background: ${backgroundColor}
Button Background: ${buttonBgColor || textColor}
Button Text: ${buttonTextColor || backgroundColor}

GOOGLE FONTS IMPORT
-------------------
${getGoogleFontsURL()}

CSS IMPLEMENTATION
------------------
${getWebCSS()}
`;
  };

  const downloadTXT = () => {
    const textContent = getFontSpecText();
    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${headerFont.replace(/\s+/g, '-')}-${bodyFont.replace(/\s+/g, '-')}-pairing.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success('Font pairing specification downloaded!', {
      icon: (
        <div style={{ 
          backgroundColor: '#4d2487', 
          borderRadius: '50%', 
          width: '20px', 
          height: '20px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
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
      )
    });
  };

  return (
    <div ref={cardRef} className="space-y-4">
      <Tabs defaultValue="web" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="web" className="flex items-center gap-2">
            <Code className="w-4 h-4" />
            Web
          </TabsTrigger>
          <TabsTrigger value="download" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download
          </TabsTrigger>
        </TabsList>
        
        {/* WEB TAB */}
        <TabsContent value="web" className="space-y-4">
          <div className="flex gap-2 pt-2 flex-wrap">
            <Button
              variant={webMethod === 'html-css' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setWebMethod('html-css')}
              className={webMethod === 'html-css' ? 'bg-[#4d2487] dark:bg-white dark:text-black hover:bg-[#3d1d6f] dark:hover:bg-gray-200 border-[#4d2487] dark:border-white text-white cursor-pointer' : 'cursor-pointer'}
            >
              HTML/CSS
            </Button>
            <Button
              variant={webMethod === 'react' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setWebMethod('react')}
              className={webMethod === 'react' ? 'bg-[#4d2487] dark:bg-white dark:text-black hover:bg-[#3d1d6f] dark:hover:bg-gray-200 border-[#4d2487] dark:border-white text-white cursor-pointer' : 'cursor-pointer'}
            >
              React
            </Button>
            <Button
              variant={webMethod === 'tailwind' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setWebMethod('tailwind')}
              className={webMethod === 'tailwind' ? 'bg-[#4d2487] dark:bg-white dark:text-black hover:bg-[#3d1d6f] dark:hover:bg-gray-200 border-[#4d2487] dark:border-white text-white cursor-pointer' : 'cursor-pointer'}
            >
              Tailwind
            </Button>
          </div>

          {webMethod === 'html-css' && (
            <div className="space-y-4">
              {/* HTML Link */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{'1. Add to <head> of your HTML'}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(getHTMLLink(), 'html-link')}
                    className="cursor-pointer"
                  >
                    {copiedSection === 'html-link' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </Button>
                </div>
                <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
                  <code>{getHTMLLink()}</code>
                </pre>
              </div>

              {/* CSS Import Alternative */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Or use @import in your CSS</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(getCSSImport(), 'css-import')}
                    className="cursor-pointer"
                  >
                    {copiedSection === 'css-import' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </Button>
                </div>
                <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
                  <code>{getCSSImport()}</code>
                </pre>
              </div>

              {/* CSS Classes */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">2. CSS classes to use the fonts</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(getWebCSS(), 'web-css')}
                    className="cursor-pointer"
                  >
                    {copiedSection === 'web-css' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </Button>
                </div>
                <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
                  <code>{getWebCSS()}</code>
                </pre>
              </div>
            </div>
          )}

          {webMethod === 'react' && (
            <div className="space-y-4">
              {/* CSS Import */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">1. Add to your CSS file</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(getReactCSSImport(), 'react-css-import')}
                    className="cursor-pointer"
                  >
                    {copiedSection === 'react-css-import' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </Button>
                </div>
                <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
                  <code>{getReactCSSImport()}</code>
                </pre>
              </div>

              {/* React Component */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">2. Use in your React component</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(getReactComponent(), 'react-component')}
                    className="cursor-pointer"
                  >
                    {copiedSection === 'react-component' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </Button>
                </div>
                <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
                  <code>{getReactComponent()}</code>
                </pre>
              </div>
            </div>
          )}

          {webMethod === 'tailwind' && (
            <div className="space-y-4">
              {/* CSS Import */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">1. Add to your globals.css</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(getTailwindCSSImport(), 'tailwind-css-import')}
                    className="cursor-pointer"
                  >
                    {copiedSection === 'tailwind-css-import' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </Button>
                </div>
                <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
                  <code>{getTailwindCSSImport()}</code>
                </pre>
              </div>

              {/* Tailwind Config */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">2. Configure in tailwind.config.js</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(getTailwindConfig(), 'tailwind-config')}
                    className="cursor-pointer"
                  >
                    {copiedSection === 'tailwind-config' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </Button>
                </div>
                <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
                  <code>{getTailwindConfig()}</code>
                </pre>
              </div>

              {/* Usage */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">3. Use in your components</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(getTailwindUsage(), 'tailwind-usage')}
                    className="cursor-pointer"
                  >
                    {copiedSection === 'tailwind-usage' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </Button>
                </div>
                <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
                  <code>{getTailwindUsage()}</code>
                </pre>
              </div>
            </div>
          )}
        </TabsContent>

        {/* DOWNLOAD TAB */}
        <TabsContent value="download" className="space-y-4 pt-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium">Download Font Specifications</h4>
              <p className="text-sm text-muted-foreground">
                Get a text file with all the details about this font pairing including font families, weights, styles, recommended sizes, and the Google Fonts import URL.
              </p>
              <Button onClick={downloadTXT} className="w-full cursor-pointer" style={{ backgroundColor: '#4d2487', borderColor: '#4d2487', color: 'white' }}>
                <Download className="w-4 h-4 mr-2" />
                Download Font Pairing Specification (.txt)
              </Button>
            </div>

            <div className="pt-4 border-t space-y-2">
              <h4 className="font-medium">Download from Google Fonts</h4>
              <p className="text-sm text-muted-foreground">
                Download the actual font files from Google Fonts to use them locally or in desktop applications like Figma.
              </p>
              <div className="space-y-2">
                <Button
                  className="w-full bg-[#4d2487] hover:bg-[#3d1d6f] text-white flex items-center justify-between gap-2 cursor-pointer"
                  onClick={() => {
                    window.open(`https://fonts.google.com/specimen/${headerFont.replace(/\s+/g, '+')}`, '_blank');
                  }}
                >
                  <span>Download {headerFont} Font</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  className="w-full bg-[#4d2487] hover:bg-[#3d1d6f] text-white flex items-center justify-between gap-2 cursor-pointer"
                  onClick={() => {
                    window.open(`https://fonts.google.com/specimen/${bodyFont.replace(/\s+/g, '+')}`, '_blank');
                  }}
                >
                  <span>Download {bodyFont} Font</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
});

FontCode.displayName = 'FontCode';
