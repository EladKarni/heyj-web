import { FC } from "react";

interface ZipperIconProps {
  className?: string;
}

const ZipperIcon: FC<ZipperIconProps> = ({ className = "w-full h-auto" }) => {
  return (
    <svg
      viewBox="0 0 1200 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
    >
      {/* Zipper teeth on left side */}
      <g className="zipper-teeth-left">
        {Array.from({ length: 15 }).map((_, i) => (
          <rect
            key={`left-${i}`}
            x={580 - i * 40}
            y={50 + (i % 2) * 10}
            width="30"
            height="15"
            rx="3"
            fill="#999"
            opacity="0.6"
          />
        ))}
      </g>

      {/* Zipper teeth on right side */}
      <g className="zipper-teeth-right">
        {Array.from({ length: 15 }).map((_, i) => (
          <rect
            key={`right-${i}`}
            x={620 + i * 40}
            y={50 + (i % 2) * 10}
            width="30"
            height="15"
            rx="3"
            fill="#999"
            opacity="0.6"
          />
        ))}
      </g>

      {/* Zipper pull/slider */}
      <g className="zipper-pull">
        <circle cx="600" cy="60" r="25" fill="#666" />
        <circle cx="600" cy="60" r="18" fill="#888" />
        <circle cx="600" cy="60" r="8" fill="#aaa" />
        <rect x="595" y="85" width="10" height="25" rx="5" fill="#666" />
      </g>

      {/* Center track/tape */}
      <rect x="590" y="0" width="10" height="50" fill="#555" opacity="0.4" />
      <rect x="590" y="110" width="10" height="10" fill="#555" opacity="0.4" />
    </svg>
  );
};

export default ZipperIcon;
