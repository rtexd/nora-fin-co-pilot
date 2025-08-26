
interface NoraLogoProps {
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export const NoraLogo = ({
  size = 'lg',
  animated = true
}: NoraLogoProps) => {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-[32px]'
  };

  return (
    <div className="text-left">
      <h1 className={`nora-logo font-montserrat font-normal ${sizeClasses[size]} ${animated ? 'nora-glow' : ''} lowercase tracking-tight`}>
        NORA
      </h1>
    </div>
  );
};
