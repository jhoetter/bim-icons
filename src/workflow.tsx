/**
 * Workflow, coordination, and data management icons.
 *
 * Covers the project-management layer of BIM: worksharing (worksets, sync),
 * design exploration (options), contractor coordination (RFI, submittal),
 * scan data (point cloud), open formats (IFC), analysis (energy, QTO),
 * and model management concepts (LOD, scope box, digital twin).
 */
import { bimIcon } from './icon';

// ── Workset: folder-tab container grouping elements by discipline ──────────────
export const WorksetIcon = bimIcon(
  'WorksetIcon',
  <path d="M3 7H21V19H3z M3 7L3 4H10L12 7 M8 12H16 M8 15H13" />,
);

// ── Design option: shared stem branching into two alternative outcomes ────────
export const DesignOptionIcon = bimIcon(
  'DesignOptionIcon',
  <path d="M12 4V10 M12 10L7 19 M12 10L17 19 M5 16H9V20H5z M15 16H19V20H15z" />,
);

// ── Revision: document with corner tab + horizontal revision entry rows ────────
export const RevisionIcon = bimIcon(
  'RevisionIcon',
  <path d="M5 3H19V21H5z M5 3L8 3V6H5 M9 10H15 M9 13H13 M5 17H19 M8 18.5H16" />,
);

// ── RFI: document with question mark asking for design clarification ───────────
export const RFIIcon = bimIcon(
  'RFIIcon',
  <>
    <path d="M4 3H20V21H4z" />
    <path d="M10 9C10 7 14 7 14 10C14 13 12 13 12 15" />
    <path d="M12 17V18" />
  </>,
);

// ── Submittal: document with corner fold + stamp approval circle ───────────────
export const SubmittalIcon = bimIcon(
  'SubmittalIcon',
  <>
    <path d="M4 3H18V21H4z M18 3L22 7H18V3" />
    <path d="M7 10H15 M7 13H15 M7 16H11" />
    <circle cx="16" cy="17" r="4" />
    <path d="M14 17L15.5 18.5L18.5 15.5" />
  </>,
);

// ── Point cloud: scattered dot field representing 3D scan data ────────────────
// Uses near-zero-length paths with round caps to render as visible dots.
export const PointCloudIcon = bimIcon(
  'PointCloudIcon',
  <path
    d="M6 8v0 M11 6v0 M16 7v0 M20 10v0 M4 13v0 M9 15v0 M14 12v0 M18 15v0 M7 19v0 M12 20v0 M17 18v0 M21 14v0"
    strokeWidth={2.5}
  />,
);

// ── Digital twin: building outline with wireless signal arcs alongside ─────────
export const DigitalTwinIcon = bimIcon(
  'DigitalTwinIcon',
  <>
    <path d="M3 20H15V10H9V6H13L9 2L5 6H9V10H3z" />
    <path d="M18 7A5 5 0 0 1 18 17" />
    <path d="M20 10A2 2 0 0 1 20 14" />
  </>,
);

// ── Sync to central: two opposing circular arrows (rotate/refresh shape) ──────
export const SyncIcon = bimIcon(
  'SyncIcon',
  <path d="M4 12A8 8 0 0 1 18 6 M20 12A8 8 0 0 1 6 18 M18 6L15 3L18 3 M6 18L9 21L6 21" />,
);

// ── Transmittal: envelope with open flap indicating outgoing package ──────────
export const TransmittalIcon = bimIcon(
  'TransmittalIcon',
  <path d="M3 6H21V18H3z M3 6L12 13L21 6 M3 18L9 12 M21 18L15 12" />,
);

// ── IFC: building footprint with open-format link indicator arrow ──────────────
export const IFCIcon = bimIcon(
  'IFCIcon',
  <>
    <path d="M4 20H20 M6 20V8H18V20 M6 8L12 4L18 8 M10 14H14V20" />
    <path d="M18 5L22 5L22 9" />
    <path d="M22 5L19 8" />
  </>,
);

// ── LOD: three progressively taller boxes showing increasing detail ────────────
export const LODIcon = bimIcon(
  'LODIcon',
  <path d="M2 20H22 M3 15H8V20H3z M9 11H14V20H9z M15 7H21V20H15z M15 12H20 M15 16H20" />,
);

// ── Quantity takeoff: wide description column + narrow right quantity column ───
// 4 rows (vs ScheduleViewIcon's 3) + asymmetric vertical divider close to the
// right edge clearly signals "description | qty" table layout — distinct from
// the symmetric 3×3 schedule grid.
export const QuantityTakeoffIcon = bimIcon(
  'QuantityTakeoffIcon',
  <path d="M4 4H20V20H4z M4 9H20 M4 13H20 M4 17H20 M16 4V20" />,
);

// ── Energy model: lightning bolt indicating energy analysis mode ───────────────
export const EnergyModelIcon = bimIcon(
  'EnergyModelIcon',
  <path d="M14 2L6 14H12L10 22L18 10H12z" />,
);

// ── Scope box: 2D bounding rectangle controlling reference-plane extents ──────
// A solid outer boundary with dashed crosshairs signals a 2D extent-control box
// (grids/levels are clipped to this boundary). Clearly distinct from the 3D
// isometric SectionBoxIcon.
export const ScopeBoxIcon = bimIcon(
  'ScopeBoxIcon',
  <>
    <path d="M4 4H20V20H4z" />
    <path d="M12 4V20 M4 12H20" strokeDasharray="3 2" />
  </>,
);

// ── EPD: environmental product declaration document with leaf mark ───────────
export const EPDIcon = bimIcon(
  'EPDIcon',
  <>
    <path d="M5 3H17L21 7V21H5z M17 3V7H21" />
    <path d="M9 15C9 11 13 9 17 9C17 13 15 17 11 17C10 17 9 16 9 15z" />
    <path d="M10 16L15 11" />
  </>,
);

// ── Carbon impact: carbon cloud with downward impact indicator ───────────────
export const CarbonImpactIcon = bimIcon(
  'CarbonImpactIcon',
  <>
    <path d="M7 16H17A4 4 0 0 0 17 8C16 5 12 4 10 7A4 4 0 0 0 7 16z" />
    <path d="M12 16V22 M9 19L12 22L15 19" />
  </>,
);

// ── LCA export: life-cycle loop leaving as a downloadable document ───────────
export const LCAExportIcon = bimIcon(
  'LCAExportIcon',
  <>
    <path d="M5 12A7 7 0 0 1 17 7 M17 7H14 M17 7V4 M19 12A7 7 0 0 1 7 17 M7 17H10 M7 17V20" />
    <path d="M14 13H21V21H14z M17.5 11V17 M15.5 15L17.5 17L19.5 15" />
  </>,
);

// ── DIN 276: cost classification table with grouped hierarchy rows ───────────
export const DIN276Icon = bimIcon(
  'DIN276Icon',
  <path d="M4 4H20V20H4z M4 8H20 M4 12H20 M4 16H20 M9 4V20 M7 6H9 M7 10H9 M7 14H9 M7 18H9" />,
);

// ── BOQ: bill of quantities with quantity and total columns ─────────────────
export const BOQIcon = bimIcon(
  'BOQIcon',
  <path d="M4 4H20V20H4z M4 8H20 M4 12H20 M4 16H20 M13 4V20 M17 4V20 M6 6H11 M14 18H16 M18 18H19" />,
);

// ── Unit rate: pricing tag tied to a single measured unit ────────────────────
export const UnitRateIcon = bimIcon(
  'UnitRateIcon',
  <>
    <path d="M4 5H14L20 11L11 20L4 13z" />
    <circle cx="9" cy="10" r="1.5" />
    <path d="M14 9C12 9 12 12 14 12S16 15 14 15 M14 8V16" />
  </>,
);

// ── Package: construction work package box with sealed top flaps ─────────────
export const PackageIcon = bimIcon(
  'PackageIcon',
  <path d="M4 8L12 4L20 8V18L12 22L4 18z M4 8L12 12L20 8 M12 12V22 M8 6L16 10" />,
);

// ── Logistics: package moving along a routed delivery path ──────────────────
export const LogisticsIcon = bimIcon(
  'LogisticsIcon',
  <>
    <path d="M3 15H10V20H3z M14 4H21V9H14z" />
    <path d="M10 17H12A4 4 0 0 0 16 13V9 M18 11L16 9L14 11" />
  </>,
);

// ── Progress: schedule bars with completion check indicator ─────────────────
export const ProgressIcon = bimIcon(
  'ProgressIcon',
  <>
    <path d="M4 6H14 M4 11H18 M4 16H12" />
    <path d="M15 17L18 20L22 14" />
  </>,
);

// ── QA checklist: inspection checklist with pass/fail rows ──────────────────
export const QAChecklistIcon = bimIcon(
  'QAChecklistIcon',
  <>
    <path d="M5 3H19V21H5z M8 8L10 10L13 7 M8 14L10 16L13 13" />
    <path d="M15 9H17 M15 15H17" />
  </>,
);

// ── Selection set: dashed selection boundary grouping multiple elements ──────
export const SelectionSetIcon = bimIcon(
  'SelectionSetIcon',
  <>
    <path d="M4 4H20V20H4z" strokeDasharray="3 2" />
    <path d="M7 8H12V13H7z M13 11H17V17H13z" />
  </>,
);

// ── Review status: document review state with check and clock marker ─────────
export const ReviewStatusIcon = bimIcon(
  'ReviewStatusIcon',
  <>
    <path d="M5 3H19V21H5z M8 8H15 M8 12H13" />
    <circle cx="15" cy="16" r="4" />
    <path d="M15 14V16L17 17" />
  </>,
);
