import { CSSProperties } from "react";

export default function ArrowLeft({
  className = "",
  style = {},
}: {
  className?: string;
  style: CSSProperties;
}) {
  return (
    <svg
      width="90"
      height="90"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M71.25 45H18.75"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinejoin="round"
      />
      <path
        d="M45 71.25L18.75 45L45 18.75"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinejoin="round"
      />
    </svg>
  );
}
