/**
 * TechMeshBackground — constellation / connected-node network backdrop.
 *
 * Inspired by worldscienceforum.org — scattered nodes connected by thin
 * lines, concentrated on page edges, fading toward the centre.
 *
 * Fixed position, z-0, fully static SVG — no JS runtime cost.
 */

interface TechMeshBackgroundProps {
  opacity?: number;
  colors?: { red?: string; green?: string; blue?: string };
}

/* ── Node data: [x%, y%, radius, color-key] ────────────────────────── */
type CKey = "b" | "r" | "g" | "c";
type Node = [number, number, number, CKey];

// Left cluster (blue/cyan) — concentrated on x: 0–30%
const leftNodes: Node[] = [
  // Large feature nodes
  [4, 12, 8, "c"],   [12, 30, 7, "b"],  [6, 50, 9, "c"],
  [15, 70, 8, "b"],   [3, 85, 7, "c"],
  // Medium nodes
  [8, 5, 5, "b"],    [18, 15, 5, "b"],   [10, 22, 4, "b"],
  [22, 28, 5, "b"],  [2, 35, 4, "c"],    [16, 40, 5, "b"],
  [8, 45, 4, "b"],   [20, 48, 4, "b"],   [5, 58, 5, "c"],
  [14, 55, 4, "b"],  [22, 60, 4, "b"],   [10, 65, 5, "b"],
  [3, 75, 4, "c"],   [18, 78, 5, "b"],   [8, 82, 4, "b"],
  [20, 85, 4, "b"],  [12, 92, 5, "b"],   [6, 95, 4, "c"],
  // Small accent dots
  [25, 10, 3, "b"],  [28, 35, 3, "b"],   [26, 55, 3, "b"],
  [24, 75, 3, "b"],  [27, 90, 3, "b"],   [1, 20, 3, "c"],
  [1, 60, 3, "c"],   [25, 45, 3, "b"],
];

// Right cluster (red/pink) — concentrated on x: 70–100%
const rightNodes: Node[] = [
  // Large feature nodes
  [92, 15, 8, "r"],  [85, 40, 7, "r"],   [95, 55, 9, "r"],
  [82, 75, 8, "r"],  [90, 90, 7, "r"],
  // Medium nodes
  [88, 8, 5, "r"],   [78, 18, 5, "r"],   [96, 22, 4, "r"],
  [80, 32, 5, "r"],  [98, 35, 4, "r"],   [86, 45, 5, "r"],
  [76, 48, 4, "r"],  [94, 50, 4, "r"],   [82, 58, 5, "r"],
  [90, 62, 4, "r"],  [78, 68, 4, "r"],   [96, 70, 5, "r"],
  [84, 80, 4, "r"],  [75, 82, 5, "r"],   [98, 85, 4, "r"],
  [88, 95, 4, "r"],  [80, 92, 5, "r"],   [95, 78, 4, "r"],
  // Small accent dots
  [72, 12, 3, "r"],  [74, 38, 3, "r"],   [73, 60, 3, "r"],
  [75, 85, 3, "r"],  [72, 95, 3, "r"],   [99, 45, 3, "r"],
  [99, 70, 3, "r"],  [74, 52, 3, "r"],
];

// Green accents — scattered more broadly
const greenNodes: Node[] = [
  [30, 15, 4, "g"],  [38, 35, 3, "g"],  [45, 55, 4, "g"],
  [32, 72, 3, "g"],  [62, 18, 3, "g"],  [55, 42, 4, "g"],
  [68, 62, 3, "g"],  [50, 82, 4, "g"],  [35, 92, 3, "g"],
  [60, 88, 3, "g"],  [42, 22, 3, "g"],  [52, 70, 3, "g"],
  [48, 8, 3, "g"],   [58, 30, 3, "g"],
];

/** Build edges between nodes within a max distance */
function buildEdges(nodes: Node[], maxDist: number): [number, number][] {
  const edges: [number, number][] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i][0] - nodes[j][0];
      const dy = nodes[i][1] - nodes[j][1];
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < maxDist) {
        edges.push([i, j]);
      }
    }
  }
  return edges;
}

// Pre-compute edges (within ~18% viewport distance for denser mesh)
const leftEdges = buildEdges(leftNodes, 18);
const rightEdges = buildEdges(rightNodes, 18);

// Cross markers positions: [x%, y%, color-key]
const crosses: [number, number, CKey][] = [
  [22, 20, "b"],  [8, 42, "b"],   [16, 72, "b"],  [10, 88, "c"],
  [74, 28, "r"],  [92, 48, "r"],  [82, 72, "r"],  [88, 88, "r"],
  [38, 32, "g"],  [52, 58, "g"],  [46, 85, "g"],  [58, 15, "g"],
  [30, 55, "g"],  [62, 35, "g"],  [44, 68, "g"],
];

export function TechMeshBackground({
  opacity = 0.55,
  colors,
}: TechMeshBackgroundProps) {
  const red = colors?.red ?? "#047857";
  const green = colors?.green ?? "#10B981";
  const blue = colors?.blue ?? "#047857";
  const cyan = "#06b6d4";

  const colorMap: Record<CKey, string> = { b: blue, r: red, g: green, c: cyan };

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* ── Bold radial glows behind clusters ─────────────────────── */}
      {/* Left blue glow — large, prominent */}
      <div
        className="absolute -left-[5%] top-0 h-[70%] w-[45%] rounded-full"
        style={{
          background: `radial-gradient(ellipse at 25% 40%, ${blue}40 0%, ${blue}20 30%, ${blue}0A 55%, transparent 75%)`,
        }}
      />
      <div
        className="absolute -left-[5%] bottom-0 h-[55%] w-[40%] rounded-full"
        style={{
          background: `radial-gradient(ellipse at 20% 60%, ${cyan}30 0%, ${cyan}15 35%, transparent 65%)`,
        }}
      />
      {/* Right red/pink glow — large, prominent */}
      <div
        className="absolute -right-[5%] top-[5%] h-[65%] w-[45%] rounded-full"
        style={{
          background: `radial-gradient(ellipse at 75% 35%, ${red}35 0%, ${red}18 30%, ${red}08 55%, transparent 75%)`,
        }}
      />
      <div
        className="absolute -right-[5%] bottom-[5%] h-[50%] w-[40%] rounded-full"
        style={{
          background: `radial-gradient(ellipse at 80% 65%, ${red}28 0%, ${red}12 35%, transparent 65%)`,
        }}
      />
      {/* Center subtle green wash */}
      <div
        className="absolute left-[25%] top-[20%] h-[60%] w-[50%] rounded-full"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${green}0C 0%, transparent 60%)`,
        }}
      />

      {/* ── Main constellation SVG ────────────────────────────────── */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Fade masks — strongest at edges, fading toward center */}
          <linearGradient id="tmb-fade-left" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="40%" stopColor="white" stopOpacity="0.8" />
            <stop offset="70%" stopColor="white" stopOpacity="0.2" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="tmb-fade-right" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="40%" stopColor="white" stopOpacity="0.8" />
            <stop offset="70%" stopColor="white" stopOpacity="0.2" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="tmb-mask-left">
            <rect x="0" y="0" width="55" height="100" fill="url(#tmb-fade-left)" />
          </mask>
          <mask id="tmb-mask-right">
            <rect x="45" y="0" width="55" height="100" fill="url(#tmb-fade-right)" />
          </mask>
        </defs>

        {/* ── Left cluster: edges ──────────────────────────────────── */}
        <g mask="url(#tmb-mask-left)">
          {leftEdges.map(([i, j], idx) => (
            <line
              key={`le-${idx}`}
              x1={leftNodes[i][0]}
              y1={leftNodes[i][1]}
              x2={leftNodes[j][0]}
              y2={leftNodes[j][1]}
              stroke={leftNodes[i][3] === "c" || leftNodes[j][3] === "c" ? cyan : blue}
              strokeOpacity="0.6"
              strokeWidth="0.25"
            />
          ))}
          {/* Left nodes */}
          {leftNodes.map(([x, y, r, c], idx) => {
            const col = c === "c" ? cyan : blue;
            const isBig = r >= 7;
            const isMed = r >= 4;
            return (
              <g key={`ln-${idx}`}>
                {/* Soft glow behind large nodes */}
                {isBig && (
                  <circle
                    cx={x}
                    cy={y}
                    r={r * 0.8}
                    fill={col}
                    fillOpacity="0.12"
                  />
                )}
                {/* Main filled circle */}
                <circle
                  cx={x}
                  cy={y}
                  r={r * 0.35}
                  fill={col}
                  fillOpacity={isBig ? 0.85 : isMed ? 0.7 : 0.5}
                />
                {/* Stroke ring on medium+ nodes */}
                {isMed && (
                  <circle
                    cx={x}
                    cy={y}
                    r={r * 0.55}
                    fill="none"
                    stroke={col}
                    strokeOpacity="0.35"
                    strokeWidth="0.1"
                  />
                )}
              </g>
            );
          })}
        </g>

        {/* ── Right cluster: edges ─────────────────────────────────── */}
        <g mask="url(#tmb-mask-right)">
          {rightEdges.map(([i, j], idx) => (
            <line
              key={`re-${idx}`}
              x1={rightNodes[i][0]}
              y1={rightNodes[i][1]}
              x2={rightNodes[j][0]}
              y2={rightNodes[j][1]}
              stroke={red}
              strokeOpacity="0.5"
              strokeWidth="0.25"
            />
          ))}
          {/* Right nodes */}
          {rightNodes.map(([x, y, r], idx) => {
            const isBig = r >= 7;
            const isMed = r >= 4;
            return (
              <g key={`rn-${idx}`}>
                {isBig && (
                  <circle
                    cx={x}
                    cy={y}
                    r={r * 0.8}
                    fill={red}
                    fillOpacity="0.1"
                  />
                )}
                <circle
                  cx={x}
                  cy={y}
                  r={r * 0.35}
                  fill={red}
                  fillOpacity={isBig ? 0.75 : isMed ? 0.6 : 0.4}
                />
                {isMed && (
                  <circle
                    cx={x}
                    cy={y}
                    r={r * 0.55}
                    fill="none"
                    stroke={red}
                    strokeOpacity="0.3"
                    strokeWidth="0.1"
                  />
                )}
              </g>
            );
          })}
        </g>

        {/* ── Green accent nodes (no mask — full spread) ───────────── */}
        {greenNodes.map(([x, y, r], idx) => (
          <g key={`gn-${idx}`}>
            <circle
              cx={x}
              cy={y}
              r={r * 0.3}
              fill={green}
              fillOpacity="0.55"
            />
            {r >= 4 && (
              <circle
                cx={x}
                cy={y}
                r={r * 0.5}
                fill="none"
                stroke={green}
                strokeOpacity="0.25"
                strokeWidth="0.08"
              />
            )}
          </g>
        ))}

        {/* ── Cross / plus markers ─────────────────────────────────── */}
        {crosses.map(([x, y, c], idx) => (
          <g key={`cr-${idx}`} opacity="0.45">
            <line
              x1={x - 1.2}
              y1={y}
              x2={x + 1.2}
              y2={y}
              stroke={colorMap[c]}
              strokeWidth="0.12"
            />
            <line
              x1={x}
              y1={y - 1.2}
              x2={x}
              y2={y + 1.2}
              stroke={colorMap[c]}
              strokeWidth="0.12"
            />
          </g>
        ))}

        {/* ── Scattered small dots ───────────────────────────────── */}
        {[
          [15, 3, "b"], [7, 18, "c"], [22, 40, "b"], [4, 58, "c"], [18, 85, "b"], [25, 65, "b"],
          [28, 48, "b"], [12, 15, "c"], [20, 55, "b"], [6, 38, "c"],
          [85, 4, "r"], [78, 25, "r"], [92, 42, "r"], [96, 60, "r"], [82, 88, "r"], [75, 70, "r"],
          [98, 30, "r"], [86, 65, "r"], [79, 50, "r"], [94, 80, "r"],
          [40, 10, "g"], [55, 45, "g"], [50, 75, "g"], [60, 22, "g"], [35, 60, "g"], [65, 90, "g"],
          [48, 38, "g"], [42, 82, "g"], [58, 12, "g"], [52, 58, "g"],
        ].map(([x, y, c], idx) => (
          <circle
            key={`td-${idx}`}
            cx={x as number}
            cy={y as number}
            r="0.22"
            fill={colorMap[c as CKey]}
            fillOpacity="0.45"
          />
        ))}
      </svg>
    </div>
  );
}
