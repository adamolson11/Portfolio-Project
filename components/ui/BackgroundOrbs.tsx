export default function BackgroundOrbs() {
  // Decorative shapes; small, low-cost SVGs
  return (
    <div aria-hidden className="absolute inset-0 -z-10 opacity-40">
      <svg className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#eef2ff" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#g)" />
      </svg>
    </div>
  );
}