interface ButtonControlsProps {
  buttonRadius: string;
  buttonVariant: string;
  onButtonRadiusChange: (radius: string) => void;
  onButtonVariantChange: (variant: string) => void;
}

export function ButtonControls({
  buttonRadius,
  buttonVariant,
  onButtonRadiusChange,
  onButtonVariantChange
}: ButtonControlsProps) {
  const radiusOptions = [
    { value: 'none', label: 'None' },
    { value: 'sm', label: 'Small' },
    { value: 'md', label: 'Medium' },
    { value: 'lg', label: 'Large' },
    { value: 'xl', label: 'X-Large' },
    { value: 'full', label: 'Rounded' },
  ];

  const variantOptions = [
    { value: 'filled', label: 'Filled' },
    { value: 'outline', label: 'Outline' },
    { value: 'ghost', label: 'Ghost' },
  ];

  const getRadiusClass = (radius: string) => {
    switch (radius) {
      case 'none': return 'rounded-none';
      case 'sm': return 'rounded-sm';
      case 'md': return 'rounded-md';
      case 'lg': return 'rounded-lg';
      case 'xl': return 'rounded-xl';
      case 'full': return 'rounded-full';
      default: return 'rounded-md';
    }
  };

  return (
    <div className="space-y-6">
      {/* Border Radius */}
      <div className="space-y-2">
        <label>Border Radius</label>
        <div className="p-4 border rounded-lg bg-muted/20">
          <div className="flex flex-wrap gap-2">
            {radiusOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => onButtonRadiusChange(option.value)}
                className={`px-3 py-1.5 text-sm border transition-colors cursor-pointer flex items-center justify-center bg-foreground text-background border-foreground ${getRadiusClass(option.value)} ${
                  buttonRadius === option.value ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Button Style Preview */}
      <div className="space-y-2">
        <label>Button Style</label>
        <div className="p-4 border rounded-lg bg-muted/20">
          <div className="flex flex-wrap gap-2">
            {variantOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => onButtonVariantChange(option.value)}
                className={`px-3 py-1.5 text-sm border transition-colors cursor-pointer flex items-center justify-center ${
                  option.value === 'filled' 
                    ? 'bg-foreground text-background border-foreground' 
                    : option.value === 'outline'
                    ? 'bg-transparent text-foreground border-foreground'
                    : 'bg-transparent text-foreground border-transparent hover:bg-muted'
                } ${getRadiusClass(buttonRadius)} ${
                  buttonVariant === option.value ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
