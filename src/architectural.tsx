/**
 * Architectural element icons — Phase 2 additions.
 *
 * Covers the architectural elements not in the original drawing-tool set:
 * ceilings, openings, shafts, ramps, massing, curtain wall components,
 * skylights, and partition walls.
 */
import { bimIcon } from './icon';

// ── Ceiling: thin slab cross-section with pendant suspension hangers ──────────
// Viewed in section — the thin horizontal slab with downward hanger lines
// shows a suspended ceiling floating above the room space below.
export const CeilingIcon = bimIcon(
  'CeilingIcon',
  <path d="M2 8H22V11H2z M4 11V17 M8 11V17 M12 11V17 M16 11V17 M20 11V17 M3 17H21" />,
);

// ── Generic opening: element boundary with voided cutout marked with X ────────
export const OpeningIcon = bimIcon(
  'OpeningIcon',
  <path d="M4 4H20V20H4z M8 8H16V16H8z M8 8L16 16 M16 8L8 16" />,
);

// ── Shaft opening: multi-storey vertical void with angled corner cut lines ────
export const ShaftOpeningIcon = bimIcon(
  'ShaftOpeningIcon',
  <path d="M5 2H19V22H5z M9 6H15V18H9z M5 2L9 6 M19 2L15 6 M5 22L9 18 M19 22L15 18" />,
);

// ── Ramp: plan boundary with slope diagonal and direction arrow ───────────────
export const RampIcon = bimIcon(
  'RampIcon',
  <path d="M3 5H21V19H3z M3 5L21 19 M15 12L21 5L21 12" />,
);

// ── Conceptual mass: stepped building massing silhouette ─────────────────────
// The stepped pyramid shape signals early-design volumetric massing.
export const MassIcon = bimIcon('MassIcon', <path d="M3 20H21V10H17V6H13V3H11V6H7V10H3z" />);

// ── Mass box: conceptual mass as a simple isometric volume ───────────────────
export const MassBoxIcon = bimIcon(
  'MassBoxIcon',
  <path d="M4 9L12 4L20 9V18L12 22L4 18z M4 9L12 13L20 9 M12 13V22" />,
);

// ── Mass extrusion: profile pushed along a direction into a volume ───────────
export const MassExtrusionIcon = bimIcon(
  'MassExtrusionIcon',
  <path d="M4 8H10V16H4z M10 8L17 5H21V13L10 16 M17 5V13 M14 10H22 M19 7L22 10L19 13" />,
);

// ── Mass revolution: profile revolved around a vertical axis ─────────────────
export const MassRevolutionIcon = bimIcon(
  'MassRevolutionIcon',
  <>
    <path d="M12 3V21" strokeDasharray="3 2" />
    <path d="M8 6C4 8 4 16 8 18 M8 6H12 M8 18H12 M8 6C11 10 11 14 8 18" />
    <path d="M15 6A6 6 0 0 1 15 18 M17 9L15 6L13 9" />
  </>,
);

// ── Family blend: two profiles lofted between different elevations ───────────
export const FamilyBlendIcon = bimIcon(
  'FamilyBlendIcon',
  <>
    <path d="M6 7H14L18 11H10z M4 17H12L20 13H12z" />
    <path d="M6 7L4 17 M14 7L12 17 M18 11L20 13 M10 11L12 13" />
  </>,
);

// ── Family sweep: profile carried along a curved path ────────────────────────
export const FamilySweepIcon = bimIcon(
  'FamilySweepIcon',
  <>
    <path d="M5 17C8 8 15 8 19 5" />
    <path d="M16 4L19 5L18 8" />
    <path d="M4 14H8V18H4z" />
  </>,
);

// ── Swept blend: path sweep interpolating between start/end profiles ─────────
export const FamilySweptBlendIcon = bimIcon(
  'FamilySweptBlendIcon',
  <>
    <path d="M5 17C8 9 15 9 19 6" />
    <path d="M4 14H8V18H4z M16 4H21V9H16z" />
    <path d="M8 16C11 13 14 10 16 7" strokeDasharray="3 2" />
  </>,
);

// ── Curtain panel: single glazing unit with frame reveals and glazing X ───────
export const CurtainPanelIcon = bimIcon(
  'CurtainPanelIcon',
  <path d="M5 4H19V20H5z M7 4V20 M17 4V20 M5 6H19 M5 18H19 M5 4L19 20" />,
);

// ── Mullion: T-profile cross-section — wide flange + narrow web ───────────────
// Plan/section view of a curtain-wall mullion member. Clearly distinct from
// the old plus-sign shape.
export const MullionIcon = bimIcon('MullionIcon', <path d="M8 4H16V8H14V20H10V8H8z" />);

// ── Skylight: plan glazing unit with diagonal X + sun above ──────────────────
export const SkyLightIcon = bimIcon(
  'SkyLightIcon',
  <>
    <circle cx="12" cy="3" r="2" />
    <path d="M12 5V7 M5 8H19V17H5z M5 8L19 17 M19 8L5 17" />
  </>,
);

// ── Partition: room boundary split by a thin (non-structural) dividing wall ───
// Two spaces separated by a thin wall — clearly distinct from the structural
// WallIcon (two parallel lines) and the old resize-cursor-like arrow shape.
export const PartitionIcon = bimIcon(
  'PartitionIcon',
  <>
    <path d="M2 4H22V20H2z" />
    <path d="M11 4H13V20H11z" />
  </>,
);

// ── Area: measured plan area with centroid marker and boundary hatch ─────────
export const AreaIcon = bimIcon(
  'AreaIcon',
  <>
    <path d="M4 5H20V19H4z" />
    <path d="M4 19L18 5 M8 19L20 7 M4 15L14 5" />
    <path d="M12 10V14 M10 12H14" />
  </>,
);

// ── Plan region: local view-range region inside a plan view boundary ─────────
export const PlanRegionIcon = bimIcon(
  'PlanRegionIcon',
  <>
    <path d="M3 4H21V20H3z" />
    <path d="M7 8H17V16H7z" strokeDasharray="3 2" />
    <path d="M7 12H17 M12 8V16" />
  </>,
);
