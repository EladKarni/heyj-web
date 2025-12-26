import { FC, ReactNode } from "react";
import Image from "next/image";
import CTAButton from "@/ui/CTAButton";
import SectionContainer from "@/ui/SectionContainer";
import clsx from "clsx";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  phoneImage?: string;
  instructionText?: string;
  children?: ReactNode;
  className?: string;
}

const HeroSection: FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  phoneImage,
  instructionText,
  children,
  className,
}) => {
  return (
    <SectionContainer
      sectionName="hero"
      background="hero-gradient"
      sectionClasses={clsx(
        "relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden",
        className
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="text-left">
          {subtitle && (
            <p className="text-primary-content/80 font-semibold text-sm md:text-base uppercase tracking-wider mb-4 animate-fade-in">
              {subtitle}
            </p>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-content mb-6 leading-tight animate-fade-in-up">
            {title}
          </h1>

          {description && (
            <p className="text-lg md:text-xl text-primary-content/90 mb-8 md:mb-10 leading-relaxed animate-fade-in-up animation-delay-200">
              {description}
            </p>
          )}

          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 items-start animate-fade-in-up animation-delay-400">
              {primaryCTA && (
                <CTAButton href={primaryCTA.href} size="lg" variant="primary">
                  {primaryCTA.text}
                </CTAButton>
              )}
              {secondaryCTA && (
                <CTAButton href={secondaryCTA.href} size="lg" variant="ghost" className="border-primary-content text-primary-content hover:bg-white hover:text-primary border-2">
                  {secondaryCTA.text}
                </CTAButton>
              )}
            </div>
          )}

          {instructionText && (
            <p className="text-sm text-primary-content/60 mt-6 animate-fade-in-up animation-delay-500">
              {instructionText}
            </p>
          )}

          {children && (
            <div className="mt-12 animate-fade-in-up animation-delay-600">
              {children}
            </div>
          )}
        </div>

        {/* Right Column - Phone Mockup */}
        {phoneImage && (
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center animate-fade-in animation-delay-400">
            <Image
              src={phoneImage}
              alt="HeyJ app interface"
              width={300}
              height={600}
              priority
              className="object-contain drop-shadow-2xl"
            />
          </div>
        )}
      </div>
    </SectionContainer>
  );
};

export default HeroSection;
