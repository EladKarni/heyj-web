import Image from "next/image";

type LogoProps = {
  height?: number;
  width?: number;
  "aria-label"?: string;
  className?: string;
};

const Logo = ({
  height = 60,
  width = 60,
  "aria-label": ariaLabel = "HeyJ Logo",
  className,
}: LogoProps) => (
  <Image
    src="/HeyJ-Logo.svg"
    alt={ariaLabel}
    width={width}
    height={height}
    className={className}
    priority
  />
);

export { Logo };
