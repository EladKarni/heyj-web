import { cn } from "@/util/utils";

type SectionContainerProps = {
  children: React.ReactNode;
  sectionName: string;
  isFullWidth?: boolean;
  sectionClasses?: string;
  innerContainerClasses?: string;
  background?: "none" | "base" | "alt" | "gradient" | "hero-gradient";
  noPadding?: boolean;
};

const SectionContainer = ({
  children,
  sectionName,
  sectionClasses,
  innerContainerClasses,
  isFullWidth,
  background = "none",
  noPadding = false,
}: SectionContainerProps) => {
  const backgroundClasses = {
    none: "",
    base: "bg-base-100",
    alt: "bg-base-200",
    gradient: "bg-gradient-to-b from-base-100 to-base-200",
    "hero-gradient": "bg-gradient-to-br from-[#FFB6A3] via-[#FF9580] to-[#FF8F76]",
  };

  return (
    <section
      id={sectionName}
      className={cn(
        "w-full scroll-mt-36",
        !noPadding && "py-16 md:py-24 lg:py-32",
        backgroundClasses[background],
        sectionClasses
      )}
    >
      <div
        className={cn(
          "mx-auto px-4",
          isFullWidth ? "max-w-full" : "max-w-7xl",
          innerContainerClasses
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
