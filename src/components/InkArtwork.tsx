import type { GalleryImage } from "../types";

// Ilustraciones vectoriales de dirección visual; se reemplazan por fotos desde data/site.ts.
export default function InkArtwork({
  motif,
}: {
  motif: GalleryImage["motif"];
}) {
  return (
    <svg
      className={`ink-art ink-art-${motif}`}
      viewBox="0 0 400 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g className="art-guides" stroke="currentColor" strokeWidth="0.6">
        <circle cx="200" cy="220" r="150" />
        <circle cx="200" cy="220" r="118" strokeDasharray="2 9" />
        <path d="M200 28V412M20 220H380" />
        <path d="M85 65h12m-6-6v12M303 375h12m-6-6v12" />
      </g>
      <g stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
        {motif === "sigil" && (
          <>
            <path
              fill="currentColor"
              d="M200 68c-8 74-27 94-69 119l30 8-32 66 51-28-10 110 30-48 30 48-10-110 51 28-32-66 30-8c-42-25-61-45-69-119Z"
            />
            <path d="M172 119C67 116 59 217 105 280l-3-55 40 12M228 119c105-3 113 98 67 161l3-55-40 12M200 323v47m-15-19h30" />
            <path stroke="#18151f" d="m200 135-13 79 13 60 13-60-13-79Z" />
          </>
        )}
        {motif === "blade" && (
          <>
            <path d="m200 61 24 42-10 139-14 105-14-105-10-139 24-42Z" />
            <path fill="currentColor" d="M200 74v255l14-93 8-130-22-32Z" />
            <path d="M142 146q58 33 116 0l-13 31h-90l-13-31ZM191 347h18v35h-18z" />
            <path
              d="M161 201c-48 5-34 57-10 74 43 30 108 2 91-37-10-24-44-30-62-18-28 19 0 46 26 61 31 18 20 51-17 58"
              strokeWidth="6"
            />
            <path d="m151 105-10-17m108 17 10-17M200 390v14" />
          </>
        )}
        {motif === "butterfly" && (
          <>
            <path d="M200 202c-41-77-115-110-132-102-19 61 36 127 93 145-54-4-83 37-56 79 47 17 78-27 95-80 17 53 48 97 95 80 27-42-2-83-56-79 57-18 112-84 93-145-17-8-91 25-132 102Z" />
            <path
              d="M194 218C154 161 110 132 88 125c1 44 48 84 95 105M206 218c40-57 84-86 106-93-1 44-48 84-95 105M180 255c-34 1-66 27-57 47 26 1 49-22 57-47Zm40 0c34 1 66 27 57 47-26 1-49-22-57-47Z"
              fill="currentColor"
            />
            <path d="M200 197v87m0-84-19-40m19 40 19-40M178 351h44m-22-21v42" />
            <circle cx="200" cy="142" r="18" />
            <path d="m200 77 6 12-6 12-6-12 6-12Z" fill="currentColor" />
          </>
        )}
        {motif === "orbit" && (
          <>
            <circle cx="200" cy="220" r="80" />
            <ellipse
              cx="200"
              cy="220"
              rx="144"
              ry="46"
              transform="rotate(-40 200 220)"
            />
            <ellipse
              cx="200"
              cy="220"
              rx="144"
              ry="46"
              transform="rotate(40 200 220)"
            />
            <path
              fill="currentColor"
              d="m200 151 13 55 49 14-49 14-13 55-13-55-49-14 49-14 13-55Z"
            />
            <circle cx="101" cy="144" r="8" fill="currentColor" />
            <circle cx="300" cy="302" r="6" fill="currentColor" />
          </>
        )}
        {motif === "botanical" && (
          <>
            <path d="M196 365c46-126-42-150 14-279" />
            <path
              fill="currentColor"
              d="M200 148c-54-9-59-48-46-64 37 7 43 33 46 64Zm-10 54c-51-8-75-40-64-64 39 3 60 25 64 64Zm6 57c-58-2-79-27-81-54 43-2 75 13 81 54Zm5 60c-51 6-75-17-83-41 45-5 68 8 83 41ZM202 163c47-3 70-29 64-56-41 3-56 28-64 56Zm-11 69c51-5 76-31 72-59-45 2-66 32-72 59Zm12 64c48-3 75-31 69-57-40 0-62 24-69 57Z"
            />
            <circle cx="214" cy="71" r="6" />
          </>
        )}
        {motif === "star" && (
          <>
            <path
              fill="currentColor"
              d="m200 72 23 101 79-57-57 81 92 23-92 23 57 81-79-57-23 101-23-101-79 57 57-81-92-23 92-23-57-81 79 57 23-101Z"
            />
            <circle cx="200" cy="220" r="47" stroke="#17151b" />
            <path
              d="m200 187 10 23 23 10-23 10-10 23-10-23-23-10 23-10 10-23Z"
              fill="#17151b"
            />
            <circle cx="200" cy="220" r="100" />
          </>
        )}
      </g>
    </svg>
  );
}
