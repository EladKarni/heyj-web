import { FC } from "react";
import SectionContainer from "@/ui/SectionContainer";
import ChatBubbleIcon from "@/ui/icons/ChatBubbleIcon";
import HeartIcon from "@/ui/icons/HeartIcon";
import SpeechBubbleIcon from "@/ui/icons/SpeechBubbleIcon";

interface UseCase {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface UseCasesSectionProps {
  title?: string;
  subtitle?: string;
  useCases?: UseCase[];
}

const defaultUseCases: UseCase[] = [
  {
    icon: <ChatBubbleIcon className="w-16 h-16" />,
    title: "Friends & Family",
    description: "On my way? \"Call later\", \"Heree the story\"",
  },
  {
    icon: <HeartIcon className="w-16 h-16" />,
    title: "Couples",
    description: "Little moments + updates without a phone call",
  },
  {
    icon: <SpeechBubbleIcon className="w-16 h-16" />,
    title: "Fast & No Clutter",
    description: "Clean threads, no noise. Just your conversations.",
  },
];

const UseCasesSection: FC<UseCasesSectionProps> = ({
  title = "Real feedback from happy HeyJ users",
  subtitle = "Use Cases",
  useCases = defaultUseCases,
}) => {
  return (
    <SectionContainer sectionName="use-cases" background="base">
      <div className="text-center mb-16">
        {subtitle && (
          <p className="text-primary font-semibold text-sm md:text-base uppercase tracking-wider mb-2">
            {subtitle}
          </p>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {useCases.map((useCase, index) => (
          <article
            key={index}
            className="bg-[#FFE5DC] dark:bg-base-200/60 rounded-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
          >
            {/* Icon */}
            <div className="flex justify-center mb-6 text-primary">
              {useCase.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-base-content mb-4">
              {useCase.title}
            </h3>

            {/* Description */}
            <p className="text-base-content/70 leading-relaxed">
              {useCase.description}
            </p>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
};

export default UseCasesSection;
