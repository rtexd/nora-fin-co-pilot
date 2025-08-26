import { BackgroundGradient } from "./ui/background-gradient";

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
      <BackgroundGradient className="inline-block" containerClassName="inline-block">
        <h1 className={`nora-logo font-montserrat font-normal ${sizeClasses[size]} ${animated ? 'nora-glow' : ''} lowercase tracking-tight px-2`}>
          NORA
        </h1>
      </BackgroundGradient>
    </div>
  );
};