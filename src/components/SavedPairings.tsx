import { useState, useEffect } from 'react';
import { Eye, Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { toast } from 'sonner@2.0.3';

const STORAGE_KEY = 'fontPairingStudio_savedPairings';

export interface SavedPairing {
  id: string;
  headerFont: string;
  bodyFont: string;
  headerWeight: number;
  bodyWeight: number;
  headerStyle: string;
  bodyStyle: string;
  headerSize: number;
  textColor: string;
  backgroundColor: string;
  buttonBgColor: string;
  buttonTextColor: string;
  savedAt: number;
}

interface SavedPairingsProps {
  onLoadPairing: (pairing: SavedPairing) => void;
  isDarkMode: boolean;
  onPairingsChange?: () => void;
  savedPairingsVersion: number;
}

export function SavedPairings({ onLoadPairing, isDarkMode, onPairingsChange, savedPairingsVersion }: SavedPairingsProps) {
  const [savedPairings, setSavedPairings] = useState<SavedPairing[]>([]);

  useEffect(() => {
    loadSavedPairings();
  }, [savedPairingsVersion]);

  const loadSavedPairings = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const pairings = JSON.parse(stored);
        setSavedPairings(pairings);
      }
    } catch (error) {
      console.error('Error loading saved pairings:', error);
    }
  };

  const deletePairing = (id: string) => {
    const pairingToDelete = savedPairings.find(p => p.id === id);
    const updatedPairings = savedPairings.filter(p => p.id !== id);
    setSavedPairings(updatedPairings);
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPairings));
      if (onPairingsChange) {
        onPairingsChange();
      }
      
      // Show toast with undo action
      toast.success('Font pairing removed!', {
        action: {
          label: 'Undo',
          onClick: () => {
            if (pairingToDelete) {
              try {
                const currentStored = localStorage.getItem(STORAGE_KEY);
                let currentPairings = currentStored ? JSON.parse(currentStored) : [];
                currentPairings.unshift(pairingToDelete);
                localStorage.setItem(STORAGE_KEY, JSON.stringify(currentPairings));
                setSavedPairings(currentPairings);
                if (onPairingsChange) {
                  onPairingsChange();
                }
                toast.success('Font pairing restored!', {
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
              } catch (error) {
                console.error('Error restoring pairing:', error);
                toast.error('Failed to restore pairing');
              }
            }
          }
        },
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
    } catch (error) {
      console.error('Error deleting pairing:', error);
      toast.error('Failed to remove font pairing');
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold">Saved Pairings</h3>
          <p className="text-xs text-muted-foreground">
            {savedPairings.length} of 20 saved
          </p>
        </div>
      </div>

      {/* Saved Pairings List */}
      {savedPairings.length === 0 ? (
        <Card className="border-dashed">
          <CardContent className="pt-6">
            <div className="text-center text-muted-foreground space-y-2">
              <Eye className="w-8 h-8 mx-auto opacity-20" />
              <p className="text-sm">No saved pairings yet</p>
              <p className="text-xs">Click the "Save Font Pairing" button in the preview to save your favorite font combinations</p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {savedPairings.map((pairing) => (
            <Card key={pairing.id} className="p-4 space-y-3 hover:shadow-lg transition-shadow">
              {/* Font Names */}
              <div className="space-y-1">
                <p 
                  className="font-semibold"
                  style={{ 
                    fontFamily: pairing.headerFont,
                    fontWeight: pairing.headerWeight,
                    fontStyle: pairing.headerStyle
                  }}
                >
                  {pairing.headerFont}
                </p>
                <p className="text-sm text-muted-foreground">&</p>
                <p 
                  className="text-sm"
                  style={{ 
                    fontFamily: pairing.bodyFont,
                    fontWeight: pairing.bodyWeight,
                    fontStyle: pairing.bodyStyle
                  }}
                >
                  {pairing.bodyFont}
                </p>
              </div>

              {/* Preview Text */}
              <div 
                className="p-3 rounded border"
                style={{ 
                  backgroundColor: pairing.backgroundColor,
                  color: pairing.textColor,
                  borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
                }}
              >
                <p 
                  className="mb-2"
                  style={{ 
                    fontFamily: pairing.headerFont,
                    fontWeight: pairing.headerWeight,
                    fontStyle: pairing.headerStyle,
                    fontSize: '18px'
                  }}
                >
                  The art of Typography
                </p>
                <p 
                  style={{ 
                    fontFamily: pairing.bodyFont,
                    fontWeight: pairing.bodyWeight,
                    fontStyle: pairing.bodyStyle,
                    fontSize: '12px',
                    lineHeight: '1.4'
                  }}
                >
                  Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed.
                </p>
              </div>

              {/* Font Info */}
              <div className="text-xs text-muted-foreground space-y-0.5">
                <p>Header: {pairing.headerWeight} {pairing.headerStyle !== 'normal' ? pairing.headerStyle : ''}</p>
                <p>Body: {pairing.bodyWeight} {pairing.bodyStyle !== 'normal' ? pairing.bodyStyle : ''}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button
                  onClick={() => onLoadPairing(pairing)}
                  variant="outline"
                  size="sm"
                  className="flex-1"
                >
                  <Eye className="w-3 h-3 mr-1" />
                  Preview
                </Button>
                <Button
                  onClick={() => deletePairing(pairing.id)}
                  variant="outline"
                  size="sm"
                  className="flex-1 hover:bg-destructive/10 hover:text-destructive hover:border-destructive"
                >
                  <Trash2 className="w-3 h-3 mr-1" />
                  Remove
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
