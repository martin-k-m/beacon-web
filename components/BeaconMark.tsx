/** The Beacon lighthouse mark — a lit tower casting a signal. */
export function BeaconMark({
  size = 16,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      {/* signal light */}
      <circle cx="12" cy="6.5" r="2.2" fill="currentColor" />
      {/* light rays */}
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.7">
        <path d="M16.2 5l2.6-1.3" />
        <path d="M7.8 5 5.2 3.7" />
      </g>
      {/* tower */}
      <path
        d="M9.4 20.5 10.6 10h2.8l1.2 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9.9 15h4.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M8.8 20.5h6.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
