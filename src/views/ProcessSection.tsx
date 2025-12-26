import { FC } from "react";
import SectionContainer from "@/ui/SectionContainer";
import IconCard from "@/components/IconCard";
import HandIcon from "@/ui/icons/HandIcon";
import MicrophoneIcon from "@/ui/icons/MicrophoneIcon";
import SendIcon from "@/ui/icons/SendIcon";

interface ProcessStep {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  title?: string;
  subtitle?: string;
  steps?: ProcessStep[];
}

const defaultSteps: ProcessStep[] = [
  {
    number: "1",
    icon: <HandIcon className="w-12 h-12" />,
    title: "Press & Hold",
    description: "Hold to record your message",
  },
  {
    number: "2",
    icon: <MicrophoneIcon className="w-12 h-12" />,
    title: "Talk Naturally",
    description: "Say the whole thing — short or long",
  },
  {
    number: "3",
    icon: <SendIcon className="w-12 h-12" />,
    title: "Release to Send",
    description: "Let go and it sends instantly",
  },
];

const ProcessSection: FC<ProcessSectionProps> = ({
  title = "How it Works",
  subtitle = "",
  steps = defaultSteps,
}) => {
  return (
    <SectionContainer sectionName="how-it-works" background="base">
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
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="relative z-10">
              {/* Number Badge */}
              <div className="inline-block bg-primary text-primary-content font-bold text-lg px-4 py-2 rounded-full mb-4">
                {step.number}
              </div>

              <IconCard
                icon={step.icon}
                title={step.title}
                description={step.description}
                variant="glass"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer Text */}
      <div className="text-center mt-12">
        <p className="text-base-content/60 text-sm">
          No time limit on messages · Web version included
        </p>
      </div>
    </SectionContainer>
  );
};

export default ProcessSection;
