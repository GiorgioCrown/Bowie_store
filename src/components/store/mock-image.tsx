import { cn } from "@/lib/utils";

type Props = {
  hue?: number;
  kind?: "guitar" | "bass" | "shirt" | "person" | "banner";
  className?: string;
  label?: string;
};

const shapes: Record<string, string> = {
  guitar:
    "M60 190 L100 150 L112 162 L170 90 L158 78 L168 68 L210 40 L222 52 L184 92 L172 100 L124 174 L136 186 L96 226 Q60 240 50 210 Z",
  bass: "M52 196 L96 156 L110 170 L176 104 L162 90 L172 80 L222 36 L232 46 L190 96 L182 108 L130 180 L142 192 L100 232 Q58 244 52 196 Z",
  shirt: "M70 50 L110 36 Q150 70 190 36 L230 50 L260 100 L226 118 L214 100 L214 230 L86 230 L86 100 L74 118 L40 100 Z",
  person: "M150 50 a34 34 0 1 1 -0.1 0 Z M80 240 Q80 150 150 140 Q220 150 220 240 Z",
  banner: "M0 200 L60 120 L110 170 L170 80 L240 180 L300 110 L300 240 L0 240 Z",
};

export function MockImage({ hue = 0, kind = "guitar", className, label }: Props) {
  const id = `g-${kind}-${hue}`;
  return (
    <svg
      viewBox="0 0 300 260"
      role="img"
      aria-label={label ?? "Imagen de muestra"}
      preserveAspectRatio="xMidYMid slice"
      className={cn("h-full w-full", className)}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={`hsl(${hue} 70% 28%)`} />
          <stop offset="1" stopColor={`hsl(${hue} 60% 8%)`} />
        </linearGradient>
        <radialGradient id={`${id}-r`} cx="0.7" cy="0.2" r="0.8">
          <stop offset="0" stopColor="white" stopOpacity="0.18" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="300" height="260" fill={`url(#${id})`} />
      <rect width="300" height="260" fill={`url(#${id}-r)`} />
      <path d={shapes[kind]} fill="rgba(255,255,255,0.14)" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
    </svg>
  );
}
