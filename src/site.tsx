/**
 * Site and civil engineering icons.
 *
 * Covers terrain, site boundaries, parking, planting, roads, and the
 * north-arrow orientation marker that appears on virtually every sheet.
 */
import { bimIcon } from './icon';

// ── Topography: three wavy contour lines stacked at different elevations ──────
export const TopoIcon = bimIcon(
  'TopoIcon',
  <path d="M2 18C6 16 8 14 12 14s6 2 10 4 M2 13C6 11 8 9 12 9s6 2 10 4 M2 8C6 6 8 4 12 4s6 2 10 4" />,
);

// ── Property line: outer cadastral boundary with inner building setback ────────
export const PropertyLineIcon = bimIcon(
  'PropertyLineIcon',
  <path d="M3 3H21V21H3z M8 8H16V16H8z" />,
);

// ── Parking space: bay outline with letter P ──────────────────────────────────
// The P is drawn as: vertical stroke + top horizontal + semicircular bowl.
export const ParkingSpaceIcon = bimIcon(
  'ParkingSpaceIcon',
  <>
    <path d="M3 3H21V21H3z" />
    <path d="M8 6V18 M8 6H14A4 4 0 0 1 14 14H8" />
  </>,
);

// ── Planting / tree: canopy circle with 8-direction radial tick marks ─────────
export const PlantingIcon = bimIcon(
  'PlantingIcon',
  <>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 4V8 M12 16V20 M4 12H8 M16 12H20 M6.3 6.3L8.8 8.8 M17.7 6.3L15.2 8.8 M8.8 15.2L6.3 17.7 M15.2 15.2L17.7 17.7" />
  </>,
);

// ── Road / access route: twin-line roadway with centre dashes ─────────────────
export const RoadIcon = bimIcon('RoadIcon', <path d="M2 9H22V15H2z M8 12H10 M14 12H16" />);

// ── Retaining wall: wall section with diagonal earth hatching behind ──────────
export const RetainingWallIcon = bimIcon(
  'RetainingWallIcon',
  <path d="M10 4V20H14V4z M3 20H21 M14 6H20 M14 9H18 M14 12H20 M14 15H18 M14 18H20" />,
);

// ── North arrow: solid half-arrowhead pointing up + south stem ───────────────
// Left half filled (dark), right half open — the universal "N" arrow convention.
export const NorthArrowIcon = bimIcon(
  'NorthArrowIcon',
  <path d="M12 2L7 14L12 10L17 14z M12 10V22" />,
);

// ── Site: property boundary with building pad and contour context ─────────────
export const SiteIcon = bimIcon(
  'SiteIcon',
  <>
    <path d="M3 5L9 3L21 7L18 21L5 19z" />
    <path d="M8 14H14V19H8z M8 14L11 11L14 14" />
    <path d="M4 9C8 7 11 8 15 10S20 11 21 9" />
  </>,
);

// ── Toposolid subdivision: terrain contour field with a bounded subdivision ──
export const ToposolidSubdivisionIcon = bimIcon(
  'ToposolidSubdivisionIcon',
  <>
    <path d="M2 18C6 16 8 14 12 14s6 2 10 4 M2 9C6 7 8 5 12 5s6 2 10 4" />
    <path d="M6 12L11 8L18 12L16 18L8 18z" />
  </>,
);

// ── Terrain point: surveyed spot point sitting on a contour line ─────────────
export const TerrainPointIcon = bimIcon(
  'TerrainPointIcon',
  <>
    <path d="M3 16C7 14 9 12 13 12s5 2 8 4" />
    <circle cx="12" cy="10" r="2" />
    <path d="M12 4V8 M12 12V16 M8 10H10 M14 10H16" />
  </>,
);

// ── Terrain pad: flat building pad embedded in surrounding contours ──────────
export const TerrainPadIcon = bimIcon(
  'TerrainPadIcon',
  <>
    <path d="M2 7C6 5 8 4 12 4s6 1 10 3 M2 18C6 16 8 15 12 15s6 1 10 3" />
    <path d="M6 10H18V15H6z" />
  </>,
);

// ── Terrain split: contour surface divided by a split line ───────────────────
export const TerrainSplitIcon = bimIcon(
  'TerrainSplitIcon',
  <>
    <path d="M2 8C6 6 8 5 12 5s6 1 10 3 M2 16C6 14 8 13 12 13s6 1 10 3" />
    <path d="M12 3V21 M9 9L12 12L9 15 M15 9L12 12L15 15" />
  </>,
);

// ── Graded region: existing dashed grade transitioning to proposed grade ─────
export const GradedRegionIcon = bimIcon(
  'GradedRegionIcon',
  <>
    <path d="M3 8C7 6 10 6 14 8S19 10 21 8" strokeDasharray="3 2" />
    <path d="M3 16C7 13 10 13 14 15S19 18 21 15" />
    <path d="M6 11L8 14 M12 10L12 14 M18 11L16 14" />
  </>,
);

// ── Project base point: project datum target with building reference ─────────
export const ProjectBasePointIcon = bimIcon(
  'ProjectBasePointIcon',
  <>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 4V8 M12 16V20 M4 12H8 M16 12H20" />
    <path d="M5 20H9V16H7V14L5 16z" />
  </>,
);

// ── Site origin: absolute site coordinate origin with X/Y axes ───────────────
export const SiteOriginIcon = bimIcon(
  'SiteOriginIcon',
  <>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 3V21 M3 12H21 M18 9L21 12L18 15 M9 6L12 3L15 6" />
  </>,
);
