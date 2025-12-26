import { FC } from "react";
import Image from "next/image";
import SectionContainer from "@/ui/SectionContainer";
import CheckmarkIcon from "@/ui/icons/CheckmarkIcon";

interface FeaturesSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: string[];
  demoLink?: {
    text: string;
    href: string;
  };
  image?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
}

const FeaturesSection: FC<FeaturesSectionProps> = ({
  title = "Say more, faster — without typing",
  subtitle = "Features",
  description = "HeyJ keeps conversations moving with a simple interaction loop: press, talk, release, sent. No editing screens. No extra steps.",
  features = [
    "Unlimited message length",
    "Web version for desktop",
    "Clean threads that stay focused",
  ],
  demoLink,
  image = "/screenshots/conversation.png",
  imageAlt = "HeyJ features",
  imagePosition = "right",
}) => {
  return (
    <SectionContainer sectionName="features" background="alt">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${imagePosition === "left" ? "lg:flex-row-reverse" : ""}`}>
        {/* Content */}
        <div className={imagePosition === "left" ? "lg:order-2" : ""}>
          {subtitle && (
            <p className="text-primary font-semibold text-sm md:text-base uppercase tracking-wider mb-2">
              {subtitle}
            </p>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content mb-6">
            {title}
          </h2>
          <p className="text-lg text-base-content/80 mb-8 leading-relaxed">
            {description}
          </p>

          {/* Features Checklist */}
          {features && features.length > 0 && (
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <CheckmarkIcon className="w-4 h-4 text-accent" />
                    </div>
                  </div>
                  <span className="text-base md:text-lg text-base-content/90">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* Demo Link */}
          {demoLink && (
            <a
              href={demoLink.href}
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
            >
              <span>{demoLink.text}</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          )}
        </div>

        {/* Image */}
        <div className={imagePosition === "left" ? "lg:order-1" : ""}>
          <div className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
            {/* Phone Image */}
            <Image
              src={image}
              alt={imageAlt}
              width={400}
              height={600}
              className="object-contain drop-shadow-2xl relative z-10"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Bottom fade to hide cut off */}
            <div className="absolute bottom-0 left-0 right-0 h-48 z-20 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-t from-base-200 from-0% via-base-200/70 via-50% to-transparent to-100%" />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default FeaturesSection;
