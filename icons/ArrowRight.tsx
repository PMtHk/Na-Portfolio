export default function ArrowRight({
  width,
  height,
  fill = "#FFFFFF",
  className,
}: {
  width: string;
  height: string;
  fill?: string;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M4 12H20M20 12L16 8M20 12L16 16"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
