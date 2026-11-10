import { SANTA_JULIANA, STATE_ACCENTS } from "./brazil-dots";
import { BRAZIL_STATES, BRAZIL_VIEWBOX, MINAS_GERAIS_CODE } from "./brazil-states";

interface BrazilMapProps {
  legendReach: string;
  legendOffice: string;
  className?: string;
}

const DOT_RADIUS = 6;
const LABEL = { width: 214, height: 40 };

/**
 * Mapa do Brasil com os estados visíveis, um ponto dourado em cada estado
 * (atendimento em qualquer lugar do país) e o marcador do escritório físico
 * em Santa Juliana-MG.
 */
export function BrazilMap({ legendReach, legendOffice, className = "" }: BrazilMapProps) {
  const { x, y } = SANTA_JULIANA;
  const labelX = x - LABEL.width / 2;
  const labelY = y + 18;

  return (
    <figure className={className}>
      <svg role="img" aria-labelledby="mapa-titulo" viewBox={BRAZIL_VIEWBOX} className="h-auto w-full overflow-visible">
        <title id="mapa-titulo">
          Mapa do Brasil com atendimento em todos os estados e escritório em Santa Juliana, Minas Gerais
        </title>

        <g stroke="#ffffff" strokeWidth={1.6} strokeLinejoin="round">
          {BRAZIL_STATES.map((state) => (
            <path
              key={state.code}
              d={state.d}
              className={state.code === MINAS_GERAIS_CODE ? "fill-gold-light" : "fill-map"}
            />
          ))}
        </g>

        {STATE_ACCENTS.map((dot, index) => (
          <g key={`${dot.x}-${dot.y}`}>
            {index % 3 === 0 && (
              <circle
                cx={dot.x}
                cy={dot.y}
                r={DOT_RADIUS * 0.7}
                className="origin-center fill-gold-strong [transform-box:fill-box] motion-safe:animate-[map-pulse_3.6s_ease-out_infinite]"
                style={{ animationDelay: `${(index / 3) * 0.4}s` }}
              />
            )}
            <circle cx={dot.x} cy={dot.y} r={DOT_RADIUS} className="fill-gold-strong" stroke="#ffffff" strokeWidth={2} />
          </g>
        ))}

        {/* Escritório: marcador em formato de pino, com rótulo. */}
        <g>
          <path
            d={`M${x} ${y} c-4 -9 -13 -14 -13 -24 a13 13 0 0 1 26 0 c0 10 -9 15 -13 24z`}
            className="fill-navy"
            stroke="#ffffff"
            strokeWidth={2.5}
            strokeLinejoin="round"
          />
          <circle cx={x} cy={y - 24} r={4.5} className="fill-gold" />
          <rect x={labelX} y={labelY} width={LABEL.width} height={LABEL.height} rx={20} className="fill-navy" />
          <text
            x={x}
            y={labelY + LABEL.height / 2}
            textAnchor="middle"
            dominantBaseline="central"
            className="fill-white text-[17px] font-bold"
          >
            Escritório · Santa Juliana
          </text>
        </g>
      </svg>

      <figcaption className="mt-6 flex flex-col items-center gap-2.5 text-[15px] text-muted sm:mt-8 sm:gap-3 sm:text-base sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8">
        <span className="flex items-center gap-2.5 whitespace-nowrap">
          <span aria-hidden="true" className="size-3 flex-none rounded-full bg-gold-strong" />
          {legendReach}
        </span>
        <span className="flex items-center gap-2.5 whitespace-nowrap">
          <span aria-hidden="true" className="size-3 flex-none rounded-full bg-navy" />
          {legendOffice}
        </span>
      </figcaption>
    </figure>
  );
}
