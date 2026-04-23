# LV Main Switchboard Sizing and Layout (80–800 A) for Australian Commercial/Industrial Installations
## Executive summary
This report sets out a practical, clause‑referenced methodology for sizing and configuring low‑voltage main switchboards (MSBs) from 80 A to 800 A for 400/230 V, 50 Hz MEN systems in Australian commercial and industrial buildings.
It aligns with AS/NZS 3000:2018 (including Amendment 2) for installation, maximum demand, and switchboard access, and with AS/NZS 61439.1/.2 for assemblies rated above 125 A or with prospective short‑circuit current above 10 kA.
[^1][^2][^3][^4][^5]

Key elements covered are:

- Required input data and how maximum demand drives main incomer and busbar ratings (AS/NZS 3000 Clause 2.2 and Table 2.1).
[^2][^6][^1]
- When and how AS/NZS 61439 must be applied for distribution boards and main switchboards (>125 A or >10 kA short‑circuit), and how design verification is demonstrated.
[^7][^8][^4][^5]
- Stepwise busbar sizing (current, temperature rise, short‑circuit withstand) with reference to AS/NZS 61439.1 Clause 5.3 (rated current) and Clause 10.10/10.11 (temperature rise and short‑circuit verification), including the optional use of Annex N for busbar current‑carrying capacity by calculation.
[^9][^10][^8][^11][^7]
- Forms of internal separation (Forms 1, 2, 3, 4 and sub‑variants such as Form 2b, 3b, 3bih) as defined in AS/NZS 61439, and their impact on safety, maintainability, cost, and envelope dimensions.
[^12][^13][^14]
- Typical physical section dimensions, device types, and busbar arrangements for main incomer ratings of 80, 125, 160, 250, 400, 630, and 800 A, with indoor IP2X and higher enclosures.
[^15][^3][^16][^17]
- Two worked examples illustrating end‑to‑end design: a 250 A Form 2b, front‑only MSB, and a 630 A/800 A Form 3bih, front and rear access MSB.
[^3][^18][^11][^2]

Throughout, mandatory requirements from AS/NZS 3000 and AS/NZS 61439 are distinguished from good practice guidance and manufacturer‑specific data, which must be used for final validation.
[^10][^5][^1][^7]

***
## 1. Design inputs and data required
A main switchboard design must start from an explicit data set; AS/NZS 3000 Clause 1.7 requires that an electrical installation be designed to comply with the whole Standard, and Clause 2.2 requires assessment of maximum demand before sizing upstream equipment.
### 1.1 Load and maximum demand data (AS/NZS 3000 Clause 2.2)
Required inputs are:

- Connected loads by category (lighting, socket outlets, motors, HVAC, fixed appliances, lifts, EV chargers, etc.) with rated current or kW/kVA.
[^2][^6]
- Diversity factors per AS/NZS 3000 Table 2.1 where applicable (e.g. for lighting, socket outlets, discharge lighting, motors), or by engineering assessment under Clause 2.2.2 when load profiles are non‑standard.
[^1][^19][^2]
- Coincidence of major loads (e.g. simultaneous operation of chillers, pumps, process lines) for engineering assessment per Clause 2.2.2.
[^6][^2]
- Any DNSP service and installation rules that constrain maximum demand, power factor or connection arrangement.
[^20][^21]

The diversified maximum demand current at the MSB, \(I_{MD}\), is derived from Table 2.1 methods or an engineering assessment consistent with Clause 2.2.2.
### 1.2 Supply and short‑circuit data
Obtain from the DNSP or site power study:

- Supply voltage and earthing system (400/230 V, MEN TN‑C‑S assumed here).
[^21]
- Utility fault level at the point of common coupling or transformer secondary rating and impedance, to calculate prospective short‑circuit current at the MSB.
[^18]
- Utility constraints on maximum allowable inrush and fault contribution if parallel generators or embedded networks are present.
[^22][^18]

For MSB design, three quantities are required at the board’s incoming terminals:

- Initial symmetrical short‑circuit current \(I_{k}''\) (r.m.s.) used to size breaking capacity of protective devices.
[^18]
- Peak short‑circuit current \(i_{p}\) used to verify dynamic busbar withstand and support design.
[^18]
- Thermal short‑circuit withstand current \(I_{th}\) for the fault clearance time, used to verify busbar and conductor thermal capacity.
### 1.3 Installation environment
For an indoor plant room / switchroom installation:

- Location: indoor, controlled access switchroom, not exposed to direct weather.
[^3][^23]
- Ambient temperature: 40 °C is a conservative design basis; note that AS/NZS 61439 base ratings generally assume 35–40 °C and permit higher internal busbar temperatures subject to temperature‑rise verification.
[^9][^7][^11]
- Pollution degree: usually Pollution Degree 3 for industrial and commercial switchrooms, affecting creepage distances and insulation requirements under AS/NZS 61439.
[^15][^10]
- Environmental factors: dust, moisture, chemical contamination, and potential mechanical impact; higher IP or special construction may be required in harsh or dusty plant rooms.
### 1.4 Enclosure IP rating and construction (AS/NZS 3000 Clause 4.4)
AS/NZS 3000 Clause 4.4 sets requirements for switchboard construction, including minimum IP ratings and protection of live parts.
[^15][^24]

Typical assumptions for indoor MSBs:

- Minimum IP2X (IP20) for indoor boards under normal conditions to provide finger‑proof protection against live parts; IP2XC where exposure to tools or public access is possible.
[^16][^15]
- Higher IP (e.g. IP31/IP42) where condensation, dripping water or dust are expected; exact selection per risk assessment and room conditions.
[^15][^16]
- IP2X must be maintained with doors closed, and protection against direct contact (IPXXB/IP2X) between segregated compartments is expected so that a test finger cannot access live parts from adjacent spaces.
### 1.5 Form of separation
The required internal form of separation is a key design input, often specified by the client or site standard.
[^12][^25]

Common choices in Australian commercial/industrial practice are:

- Form 1 (no internal separation) – rarely used for MSBs except very small boards.
[^14][^12]
- Form 2b – busbars separated from functional units and external terminals, with terminals also separated from busbars.
[^26][^14]
- Form 3b – busbars separated; functional units separated from each other; terminals in separate but shared termination space.
[^12][^14]
- Form 3bih – Form 3b where some separation is achieved using insulated busbars ("i") and component housings ("h") instead of only metallic partitions.
[^13][^14]
- Form 4a/4b – highest segregation; usually reserved for critical process or data‑centre boards.
[^14][^12]

AS/NZS 3000 requires at least Form 3b or better for boards rated at 800 A or greater or where arcing fault risk is high, via Clause 2.5.5 (arcing fault protection) referencing internal separation options in AS/NZS 61439.
### 1.6 Access, cable entry, metering and future provision
Required physical/functional inputs include:

- Access: front‑only or front‑and‑rear access; front‑only boards require more depth and carefully arranged cableways, while front‑and‑rear access allows shallower sections but requires more room depth.
[^27][^3]
- Cable entry: top or bottom (or both), including space for cable bending radii and glands; minimum bending radii are typically specified as a multiple of cable diameter by manufacturers (often 8–12×D for LV power cables).
[^28][^29][^30]
- Metering: CT/VT chambers, revenue metering, and site metering panels including access requirements for DNSP meters, where applicable.
[^24][^27]
- Space for control, automation and communication equipment, including control power supplies, protection relays and network panels.
[^5][^24]
- Allowance for future feeders and spare ways, typically 20–30% spare busbar and physical capacity depending on project requirements.
[^31][^25]

***
## 2. Current rating steps and typical contexts (80–800 A)
AS/NZS 3000 Amendment 2 and associated guidance make AS/NZS 61439 (or legacy AS/NZS 3439) assemblies mandatory when connected load exceeds 125 A per phase or prospective fault current exceeds 10 kA.
### 2.1 Overview of mandated assembly standard
Under AS/NZS 3000:2018 Amendment 2 and industry guidance:

- Switchboard assemblies with total connected load exceeding 125 A r.m.s per phase or prospective fault current greater than 10 kA at the point of installation must comply with an assembly standard – AS/NZS 61439 (or historical AS/NZS 3439 during the transition).
[^4][^32][^5]
- Assemblies ≤125 A and ≤10 kA may instead demonstrate suitability to withstand mechanical, thermal and electrical stresses by other means, but compliance with AS/NZS 61439 is still considered best practice.
[^5][^4]
- AS/NZS 61439 requires design verification (type testing/comparison/calculation) and routine verification for all compliant assemblies.
### 2.2 Typical rating steps and application context
The following table summarises the main incomer rating steps and typical Australian usage.
Values are indicative only and must be checked against project‑specific maximum demand and fault studies.
[^3][^4][^18]

| Main incomer rating | Typical application context (Australia) | Typical LV MSB fault level range at incomer | Notes |
|---------------------|-----------------------------------------|---------------------------------------------|-------|
| 80 A | Small commercial tenancy MSB; small standalone building; small workshop | 6–10 kA (often limited by small transformer or long LV mains) | Often below 125 A and 10 kA, may not require AS/NZS 61439 but still must satisfy AS/NZS 3000. [^4][^5] |
| 125 A | Small to medium tenancy or small building MSB with limited plant | 10–15 kA (near small 315–500 kVA transformer or longer LV run) | Above 125 A typically pulls board into AS/NZS 61439 regime; fault may still be below 25 kA. [^4][^18] |
| 160 A | Medium commercial tenancy; small plant MSB | 15–20 kA | Almost always within AS/NZS 61439 scope; often service by ≤500–750 kVA transformer. [^4][^18] |
| 250 A | Small building MSB; larger tenancy; light industrial | 20–25 kA | Typical for 500–750 kVA transformer with short LV run; 25 kA assembly ratings are common in commercial practice. [^18] |
| 400 A | Medium commercial building MSB; small industrial facility | 20–35 kA | Often supplied from 750–1000 kVA transformer, switchboard ratings of 36 kA or higher are typical. [^18] |
| 630 A | Large commercial or mid‑size industrial MSB, sometimes with embedded generation | 25–35 kA (higher where multiple transformers or generators operate in parallel) | 36–50 kA assemblies common for industrial boards; fault levels must be calculated rather than assumed. [^18] |
| 800 A | Large commercial campus MSB; industrial main board; central plant MSB | 25–50 kA+ depending on transformer size and configuration | Arcing fault protection, internal separation (Form 3b or better), and switchroom egress requirements apply at or above 800 A under AS/NZS 3000 Clause 2.5.5 and 2.10. [^3][^33][^34] |

***
## 3. Busbar and conductor sizing methodology
Busbar design must satisfy both AS/NZS 3000 (general safety, connection of equipment) and AS/NZS 61439.1/.2 (rated current, temperature rise, and short‑circuit withstand) for boards above the 125 A / 10 kA thresholds.
### 3.1 Relevant AS/NZS 61439.1 clauses
Key clauses in AS/NZS 61439.1 that drive busbar and assembly sizing are:

- Clause 5.3 – Rated currents (InA for assembly, Inc for circuits, and In for devices).
[^7][^35]
- Clause 10.10 – Verification of temperature‑rise limits, with options for verification by test, comparison or assessment (calculation) depending on assembly rating and configuration.
[^8][^36][^7]
- Clause 10.11 – Verification of short‑circuit withstand strength, including arrangements for testing or comparison with a tested reference design.
[^36][^7][^8]
- Annex D (Table D.1) – Summary of characteristics to be design‑verified (including temperature rise and short‑circuit) and acceptable verification methods (test, comparison, assessment).
[^7][^8]
- Annex N – Informative method to determine the current‑carrying capacity of copper busbars by calculation in the absence of suitable tested data.
### 3.2 Step‑by‑step current‑rating methodology
The recommended sequence for each MSB rating step is:

1. Determine maximum demand current \(I_{MD}\) at the MSB using AS/NZS 3000 Clause 2.2 and Table 2.1 or an engineering assessment per Clause 2.2.2.
[^1][^2]
2. Select a main incomer device rated at or above \(I_{MD}\), with a margin for future growth (commonly 20–25%) where justified by client requirements.
[^2][^24]
3. Nominate the assembly rated current InA as at least equal to the incomer setting (or prospective future incomer setting), and not less than the highest outgoing feeder group demand.
[^7][^35]
4. Select preliminary busbar cross‑section(s) using:
   - Manufacturer’s tested busbar ratings for a suitable enclosure and temperature‑rise class (preferred), or
   - Conservative current density methods (e.g. ≈1.2 A/mm² for copper busbar at 40 °C in enclosed conditions), checked against Annex N or manufacturer data.
[^9][^37][^38][^39]
5. Verify that selected busbars satisfy temperature‑rise limits for the required InA by one of the verification routes allowed in Clause 10.10 (test, comparison or calculation using IEC 60890 / Annex N within its applicability range).
[^8][^11][^9][^7]
6. Calculate short‑circuit parameters at the MSB (\(I_{k}''\), \(i_{p}\), \(I_{th}\)) from the power system model or DNSP data, then check against assembly short‑circuit rating (Icw, Ipk, Icc) obtained from the manufacturer’s design verification records.
[^18][^7][^8]
7. Confirm busbar spans, support spacing and bracing arrangements are within the limits inherently covered by the tested design or design‑verification extrapolation (shorter spans and greater phase spacing can increase withstand rating, as described in NHP’s technical guidance on busbars under AS/NZS 61439).
### 3.3 Influence of short‑circuit level, span and thermal constraints
Short‑circuit level, busbar span, and enclosure thermal environment interact as follows:

- Higher prospective \(I_{k}''\) and \(i_{p}\) increase electrodynamic forces, requiring larger busbar cross‑sections and/or closer support spacing to limit mechanical stress and deflection.
[^18][^11]
- Longer unsupported spans between busbar supports reduce dynamic withstand; reducing span (I1) or increasing spacing between phases (a) can be used to maintain or improve ratings relative to a tested reference design.
[^9][^11]
- Enclosure thermal constraints (limited ventilation, high ambient, dark paint, compartmentalisation) raise internal air temperature, reducing allowable current for given busbar sizes unless validated by temperature‑rise tests using the same enclosure and internal arrangement.
### 3.4 Example copper busbar configurations (80–800 A)
The following example busbar sizes are indicative only, based on typical copper busbar current ratings from manufacturer data and industry guidance (assumed 40 °C ambient and temperature‑rise within AS/NZS 61439 Table 6 limits); they must be checked against the chosen type‑tested system and Annex N where used.
[^9][^37][^40][^17][^38]

| Incomer rating | Indicative main busbar configuration (Cu) | Approx. continuous current capability (enclosed, 40 °C, indicative) | Neutral arrangement | Earth arrangement | Comments |
|----------------|-------------------------------------------|--------------------------------------------------------------------|---------------------|-------------------|----------|
| 80 A | 1 × 20×5 mm per phase | ≈100–120 A based on ≈1.2–1.5 A/mm², consistent with small busbar rating tables | 1 × 20×5 mm (full size) | 1 × 20×5 mm earth bar | Often replaced by cable bus (e.g. 25–35 mm²) in very small boards; still design‑verify if 61439 is claimed. [^37][^41][^38] |
| 125 A | 1 × 25×5 mm per phase | ≈150–180 A | 1 × 25×5 mm (full size) | 1 × 20×5 mm | Simple bar set, short spans (≤300 mm) generally sufficient for ≤15 kA. [^37][^41][^38] |
| 160 A | 1 × 30×5 mm per phase | ≈180–220 A | 1 × 30×5 mm | 1 × 20×5 mm | Good for 160 A assemblies at moderate fault levels (≤20 kA) when tested; check manufacturer DVR. [^37][^40][^17] |
| 250 A | 1 × 30×10 mm per phase | ≈300–350 A; note some manufacturers rate 30×10 mm Cu around 400–630 A in free air, derated in enclosures. [^40][^17][^42] | 1 × 30×10 mm | 1 × 25×6 or 1 × 30×5 mm | Widely used as a main busbar in smaller MSBs, often with Icw 25–36 kA for 1 s subject to support design. |
| 400 A | 2 × 30×10 mm per phase (stacked) | ≈500–700 A depending on enclosure and verification route (tested vs Annex N); NHP examples show 30×10 mm bars used at several hundred amps with suitable temperature rise margins. [^9][^40][^38] | 2 × 30×10 mm (full or reduced to ~0.5–1.0× phase as justified) | 1 × 30×5 or 1 × 25×6 mm | Provides both thermal headroom and higher short‑circuit strength via doubled section modulus. |
| 630 A | 2 × 40×10 mm per phase or 3 × 30×10 mm per phase | Typically in 800–1000 A thermal class depending on DV; supports configured for ≥36 kA Icw. [^9][^40][^38] | 2 × 40×10 mm or 2 × 30×10 mm (often 0.5–1.0× phase; increase for heavy harmonics) | 1–2 × 30×10 mm earth bar | Common for large commercial/industrial MSBs; check Annex N only within its stated limits and always prefer manufacturer DV data. [^9][^11] |
| 800 A | 3 × 40×10 mm per phase or 2 × 50×10 mm per phase | Often validated for 1000–1250 A main busbar currents; short‑circuit ratings 36–65 kA depending on tested system. [^9][^7][^38] | 2–3 × 40×10 mm (full size for heavy harmonics; at least 0.5–1.0× phase for general use) | 2 × 30×10 mm earth bar | At this level, de‑facto requirement to use a fully tested 61439 system with manufacturer‑specified busbar kits and support arrangements. [^7][^5]

These configurations are examples only; the actual permitted InA and short‑circuit withstand are defined by the assembly manufacturer’s design‑verification records (DVR) and must not be extrapolated beyond their documented limits.
[^7][^8][^5][^9]

***
## 4. Forms of separation (Form 1–4, 2b, 3b, 3bih)
### 4.1 Concept and definitions under AS/NZS 61439
AS/NZS 61439 defines "form of separation" to describe how busbars, functional units and external terminals are separated to reduce risk of contact with live parts and limit propagation of faults.
[^12][^13]

Main categories are:

- Form 1 – No internal separation between busbars, functional units and terminals.
[^14][^12]
- Form 2 – Busbars separated from functional units; terminals for external conductors may or may not be separated from busbars.
[^26][^14]
- Form 3 – Busbars separated; functional units separated from busbars and from terminals; terminals may be in a common compartment.
[^12][^14]
- Form 4 – Busbars and functional units separated; terminals for each functional unit are also separated from other functional units’ terminals.
[^13][^14][^12]

Sub‑variants (2a/2b, 3a/3b, 4a/4b) and suffixes "i" and "h" indicate details of where terminals are located and whether separation uses insulation or component housings instead of solely rigid partitions.
### 4.2 Form 2b
Characteristics:

- Busbars are separated from functional units and from external terminals.
[^26][^14]
- Terminals for external conductors are separated from busbars but may share space with multiple circuits.
[^14][^26]

Typical construction:

- Main and distribution busbars behind a segregated busbar chamber (often rear or top of board) with metallic or insulated barriers.
[^25][^43]
- Functional units (e.g. MCCBs) grouped on front face with a common cableway; outgoing cable terminals are in an accessible zone that is separated from busbars by barriers but not necessarily from each other.
[^12][^26]

Implications:

- Safety: Protection against direct contact with busbars; some exposure of live terminals remains when doors are open.
[^43][^26]
- Maintainability: Outage of a section may be needed to safely work on outgoing circuits because terminals for multiple circuits share space; suitable for small to medium MSBs where outage risk is acceptable.
[^12][^14]
- Cost and dimensions: Less complex partitions; narrower enclosures; efficient use of cable space; lowest cost among segregated forms.
### 4.3 Form 3b
Characteristics:

- Busbars separated from functional units and terminals.
[^12][^14]
- Functional units each separated from other functional units.
[^14][^12]
- Terminals for external conductors separated from busbars and located in compartments separated from functional units but may share termination space with other circuits.
[^12][^14]

Typical construction:

- Vertical busbar riser in a dedicated chamber.
[^25][^12]
- Each outgoing MCCB or switch in its own cubicle with internal barrier to busbars; terminations often accessible via a vertical cable chamber that is separated from functional units by plates or partitions.
[^25][^12]

Implications:

- Safety: Improved over Form 2b, as each device is in a dedicated compartment; faults in one functional unit are better contained.
[^13][^12]
- Maintainability: Allows isolation of individual circuits while others remain energised, but cable chamber work may still expose multiple circuits’ terminations.
[^14][^12]
- Cost and dimensions: More partitions and doors than Form 2b; greater section widths and depths; widely adopted for boards ≥800 A following AS/NZS 3000 guidance.
### 4.4 Form 3bih (use of "i" and "h")
Suffixes used in switchboard practice have the following meanings:

- "i" – Separation achieved partly by insulation (e.g. fully insulated busbars, shrouded terminals) instead of only rigid metallic barriers.
[^13][^14]
- "h" – Separation achieved partly by component housings (e.g. moulded‑case devices) considered as providing internal barriers.
[^14][^13]

Form 3bih therefore means:

- Busbars separated from functional units and terminals; functional units in segregated compartments as per Form 3b.
[^12][^13]
- Further separation partly achieved by insulated busbars and the housings of plug‑in or withdrawable devices, reducing the number of sheet‑metal partitions.
[^13][^14]

Typical construction:

- Insulated main busbars (e.g. heat‑shrunk or epoxy‑coated) in their own chamber with periodic supports.
[^11][^13]
- Functional units using withdrawable or plug‑in MCCBs or ACBs, where the device housing contributes to separation; supplementary barriers or shrouds provided at terminals.
[^14][^13]

Implications:

- Safety: Comparable functional segregation to Form 3b/4a depending on details; reduced likelihood of arcing faults propagating between compartments when combined with proper IP2X segregation between enclosures.
[^43][^12][^13]
- Maintainability: High; withdrawable units and segregated busbars enable maintenance on one feeder while others remain energised, subject to site procedures.
[^13][^14]
- Cost and dimensions: Often more compact than pure metal‑partitioned designs because insulation and housings reduce the need for additional sheet‑metal barriers; material cost may be higher due to insulated busbars and specialised assemblies.
[^17][^13]

Effect on compartment sizes and cable space:

- Form 2b: Larger common cableways, smaller device compartments; easier cable dressing but less segregation at terminations.
[^26][^14]
- Form 3b: Individual device cubicles increase minimum section width; cableways must be sized for segregated risers and sufficient termination room.
[^25][^12]
- Form 3bih: Similar or slightly reduced section widths compared with full metallic Form 3b at the same rating because device housings and insulation handle some separation requirements; however, rear access and deeper enclosures are common to maintain adequate cable space.
[^17][^13]

***
## 5. Section layout and physical dimensions (80–800 A)
### 5.1 AS/NZS 3000 working space and access (Clause 2.10)
AS/NZS 3000 Clause 2.10 sets minimum clearances and access arrangements around switchboards to ensure safe operation and emergency egress.
[^3][^23][^44]

Typical requirements include:

- Minimum 1.0 m clear distance from all accessible faces of a closed switchboard in non‑domestic installations; may be reduced to 0.6 m in domestic situations.
[^44][^3]
- Unimpeded space of at least 0.6 m around switchboards with doors open and equipment racked out.
[^27][^23][^3]
- Two emergency exit paths spaced well apart where a switchboard is rated at ≥800 A or is more than 3 m long, unless at least 3 m clear space is provided in front of the board.
[^33][^27][^3]
- Switchroom openings/doors at least 0.9 m wide and 2.2 m high.
[^23][^27][^3]

These requirements directly influence the feasible board width and depth, especially for 630–800 A boards and above.
### 5.2 Typical section dimensions by rating and form
The following table provides indicative section sizes for indoor MSBs with a nominal height of 2200–2300 mm, designed for front‑only (small ratings) or front‑and‑rear access (higher ratings, especially with Form 3b/3bih).
Dimensions are based on common manufacturer dimensioning practices for LV switchboards and may vary by vendor; they are intended as starting points rather than prescriptive values.
[^3][^45]

| Incomer rating | Form | Typical section width W (mm) | Typical section height H (mm) | Typical section depth D (mm) | Notes/assumptions |
|----------------|------|------------------------------|--------------------------------|-------------------------------|-------------------|
| 80 A | 2b | 400–600 | 2000–2200 | 300–400 | Often a single multi‑function section incorporating incomer and a small number of outgoing ways; front‑only access; bottom or top cable entry with modest cable sizes (≤35 mm²). |
| 80 A | 3b | 600 | 2000–2200 | 400–500 | Additional partitions and segregated device compartments; recommended only where client insists on segregation. |
| 80 A | 3bih | 600 | 2000–2200 | 500 | Rare at this rating; typically only where the board is part of a modular system extending to higher ratings. |
| 125 A | 2b | 600 | 2000–2200 | 400–500 | Front‑only access; cableway sized for 35–70 mm² cables; likely IP2X/IP31. |
| 125 A | 3b | 600–800 | 2000–2200 | 500 | Individual device compartments; increased depth to accommodate segregated cableways. |
| 125 A | 3bih | 600–800 | 2000–2200 | 500–600 | Use where a modular 61439 system is selected for future expansion to higher ratings. |
| 160 A | 2b | 600–800 | 2000–2200 | 400–500 | Suitable for medium tenant MSBs; cable bending space for 70–95 mm² conductors required. |
| 160 A | 3b | 800 | 2000–2200 | 500–600 | Single incomer/section may also house main meter panel and limited number of outgoing MCCBs. |
| 160 A | 3bih | 800 | 2000–2200 | 600 | Most suppliers provide a common cubicle size at and above 160–250 A, often 800 mm wide, 600–800 mm deep. |
| 250 A | 2b | 800 | 2200–2300 | 500–600 | Front‑only board possible; need allowance for 95–120 mm² cables; ensure cable gland plates and cable entry zones provide required bending radius. |
| 250 A | 3b | 800–1000 | 2200–2300 | 600 | Separate incomer, busbar and outgoing sections; cableways sized for multiple 95–120 mm² feeders. |
| 250 A | 3bih | 800–1000 | 2200–2300 | 600–800 | Often part of modular 61439 assembly; rear access recommended for easier cabling above ~120 mm². |
| 400 A | 2b | 800–1000 | 2200–2300 | 600 | Practical limit for simple Form 2b on MSB; good for medium buildings with many outgoing MCCBs up to 160–250 A. |
| 400 A | 3b | 1000–1200 | 2200–2300 | 600–800 | Larger depth allows vertical riser and separate cable chamber; front‑and‑rear access beneficial. |
| 400 A | 3bih | 1000–1200 | 2200–2300 | 800 | Insulated busbars and withdrawable units often require extra depth; common in modular systems. |
| 630 A | 2b | 1000–1200 | 2200–2300 | 600–800 | Increasingly uncommon; AS/NZS 3000 arcing fault and reliability considerations usually drive Form 3b or better above 630 A. |
| 630 A | 3b | 1200–1400 | 2200–2300 | 800 | Typical main incomer cubicle for 630 A ACB/MCCB with adjacent bus section and cable chamber; front‑and‑rear access strongly recommended. |
| 630 A | 3bih | 1200–1600 | 2200–2300 | 800–1000 | Modular withdrawable system with insulated busbars; additional depth for cable terminations (e.g. 2×240–300 mm²) and shrouding. |
| 800 A | 2b | 1200–1400 | 2200–2300 | 800 | Rare; above 800 A, industry practice and AS/NZS 3000 Clause 2.5.5 favour Form 3b or better due to arcing‑fault risk and maintenance considerations. |
| 800 A | 3b | 1400–1600 | 2200–2300 | 800–1000 | One or more ACB incomers and bus couplers; substantial cable chamber for large multi‑core or parallel single‑core cables; often part of multi‑section main board. |
| 800 A | 3bih | 1400–1800 | 2200–2300 | 1000 | Typically modular LV switchgear with fully insulated busbars and withdrawable feeders; rear access and 1.0 m minimum working space front and rear are common in dedicated switchrooms. |

Depths above 800 mm are often needed to accommodate large diameter cables and minimum bending radii (e.g. 10×D for some LV power cables), which can result in 300–600 mm bending radius for 95–300 mm² cables.
[^28][^46][^30]

***
## 6. Main incomer and protective device selection
### 6.1 Device types by rating step
Common incoming device types in Australian commercial and industrial MSBs include:

- 80–160 A: Moulded‑case circuit‑breakers (MCCBs) to AS/NZS 60947 series; occasionally switch‑fuse units for motor/control applications.
[^24][^7]
- 160–400 A: MCCBs or compact air circuit‑breakers (ACBs) where higher breaking capacity or more advanced protection functions (L/S/I/G) are required.
[^7][^24]
- 630–800 A: ACBs are typical for MSBs; large MCCBs may be used at 630 A where short‑circuit ratings and discrimination requirements permit.
[^8][^7]
- Fuse‑switch incomers are sometimes used where very high breaking capacity and strong current limitation are desired; these can improve busbar short‑circuit performance due to reduced let‑through energy.
### 6.2 Rating and frame size selection
Selection steps for each rating step (80–800 A) are:

1. Choose a protective device with frame size and rated current In at or above \(I_{MD}\), applying a design margin (commonly 20–25%) for future loads.
[^2][^24]
2. Confirm device breaking capacity (Icu/Ics) at the MSB installation point is not less than the calculated \(I_{k}''\); if reduced by current‑limiting upstream breakers or fuses, the combination must be validated by manufacturer tables or certified coordination data.
[^7][^18]
3. For ACBs, configure long‑time, short‑time, instantaneous and earth‑fault settings to provide coordination with downstream MCCBs/MCBs and to satisfy AS/NZS 3000 protection requirements (overload, short‑circuit and earth‑fault).
[^24][^21]
4. Where future uprating is anticipated (e.g. initial 630 A device with provision for 800 A later), busbars and enclosure must be sized and type‑tested or verified for the higher rating from day one; the main protective device may be installed initially at the lower rating.
### 6.3 Discrimination/selectivity and coordination
AS/NZS 3000 Clause 2.5.7 (Reliability of supply) and guidance material emphasise discrimination between protective devices, particularly for high‑current circuits and safety services.
[^34][^21]

- For circuits rated ≥800 A, discrimination is required at least up to the arcing‑fault level, and up to the upstream device instantaneous setting.
[^34]
- For circuits between 250 A and 800 A, discrimination is required at least on overload curves and is recommended up to arcing‑fault levels.
[^34]
- Below 250 A, discrimination on overload curves is recommended but not mandatory, although good engineering practice is to achieve selectivity where feasible.
[^21][^34]

Coordination involves:

- Selecting main ACB/MCCB time‑current curves to be slower than downstream MCCBs/MCBs in the overload and short‑time regions, using manufacturer selectivity tables.
[^7][^8]
- Ensuring downstream device Icu/Ics values are not exceeded by local fault levels at their point of installation.
[^18]
- Considering back‑up protection where smaller downstream devices rely on an upstream device to clear high‑level faults.
[^7][^18]

***
## 7. Neutral and earth bar sizing and arrangement
### 7.1 MEN requirements at the MSB (AS/NZS 3000 Clause 5.6)
The main switchboard in an MEN system includes the main earthing terminal or bar and the MEN connection between neutral and earth.
[^1][^21]

Key implications:

- The neutral bar and earth bar must be adequately sized to carry prospective earth‑fault currents and return currents without exceeding temperature limits.
[^18][^1]
- MEN connection and main earthing conductor sizes are determined in accordance with AS/NZS 3000 Section 5 and, where applicable, AS/NZS 3008 for cable sizing.
### 7.2 Neutral bar sizing guidance
Neutral sizing should consider both fundamental load balance and harmonic content from non‑linear loads (IT, LED lighting, variable‑speed drives):

- For predominantly linear three‑phase loads, a neutral bar cross‑section equal to full‑size phase busbars up to 160–250 A and at least 50–100% of phase busbar section above that is common practice, subject to manufacturer ratings.
[^38][^39]
- Where significant third‑harmonic and triplen harmonics are expected (e.g. large office IT load, electronic ballasts), a full‑size or even oversized neutral (up to 1.5× phase cross‑section) may be warranted to handle cumulative neutral currents.
[^2][^38]
- Neutral bars must have sufficient termination points for all outgoing circuits (one conductor per terminal unless multi‑conductor terminals are type‑tested), plus spare terminals for future circuits and additional MEN connections if required.
### 7.3 Earth bar sizing guidance
Earth bar design should consider:

- Connection of the main earthing conductor sized per AS/NZS 3000 Section 5 and AS/NZS 3008 short‑circuit and thermal limits.
[^1][^47]
- Terminals for all final circuit protective earthing conductors (PECs) and bonding conductors.
[^21][^1]
- Cross‑section typically ≥50% of phase busbar cross‑section for LV MSBs up to 800 A, with a minimum practical width (e.g. 25×6 or 30×5 mm Cu) to provide mechanical strength and adequate termination space; larger earthing bars (e.g. 30×10 or dual bars) used where many terminations exist.
[^37][^38]

Arrangement considerations:

- For Form 2b, a single earth bar accessible from the front, with insulated supports and mechanically robust terminations, is usually adequate.
[^26][^43]
- For Forms 3b and 3bih, segregation may require separate earth bars or segregated sections to maintain form requirements, especially where earth conductors are routed in dedicated cableways.
[^12][^13][^14]

***
## 8. Thermal management and enclosure considerations
### 8.1 Temperature‑rise limits and verification (AS/NZS 61439.1 Clause 10.10)
AS/NZS 61439.1 defines maximum permissible temperature rises for busbars, terminals and air within the enclosure, usually relative to a reference ambient of 35–40 °C, with busbars allowed to operate at elevated absolute temperatures provided other equipment limits are respected.
[^9][^7][^11]

Key points:

- Temperature‑rise verification (Clause 10.10) can be performed by test, comparison with a tested design or assessment using calculation methods (IEC 60890 and Annex N) within defined current limits (e.g. up to 3150 A for some methods).
[^7][^8][^36][^11]
- Annex N may yield more conservative current ratings than type‑tests for the same busbar, highlighting the importance of using the manufacturer’s documented verification route.
[^11][^9]
- The overall assembly current rating InA is constrained by the most limiting component (often device terminals, internal conductors, or enclosure heat dissipation), not busbars alone.
### 8.2 Enclosure construction and ventilation
Thermal behaviour of the MSB is strongly influenced by enclosure details:

- Sheet steel thickness and structural bracing affect heat paths and thermal mass; heavier construction can retain more heat, potentially increasing internal temperatures unless well ventilated.
[^7][^38]
- Ventilation (natural or forced) can materially improve internal temperature, especially for heavily loaded boards at 630–800 A; some 61439 systems include tested ventilation kits as part of the type‑tested configuration.
[^38][^7]
- Paint colour has a greater impact for outdoor boards; for indoor switchrooms, it is usually secondary to ventilation and load density.
[^7][^38]
- Compartmentalisation (higher forms of separation) restricts air circulation and may reduce allowable current for the same busbar configuration, which must be reflected in the type‑tested ratings.
### 8.3 Good‑practice derating and when to rely on testing
For heavily loaded boards at 630–800 A:

- Limit continuous loading of main busbars to around 80–90% of their tested InA rating where ambient regularly approaches or exceeds 40 °C, unless the tested data explicitly covers the higher ambient.
[^7][^38]
- Avoid stacking multiple high‑loss devices (e.g. ACBs, large MCCBs) in the same vertical section without dedicated ventilation or manufacturer validation.
[^8][^7]

Where:

- Enclosure design deviates materially from the type‑tested configuration (e.g. different height, depth, compartment arrangement), or
- Aggregate device losses, ambient temperature, or derating factors fall outside the assumptions of the tested design,

full type‑testing or a documented design‑verification assessment is required, not just simple calculation.
[^5][^11][^7][^8]

***
## 9. Worked example 1 – 250 A MSB, Form 2b, front‑only access
### 9.1 Input data and assumptions
Assume a small commercial building MSB with:

- Supply: 400/230 V, MEN system, supplied from a 500 kVA, 11/0.4 kV transformer with 6% impedance located adjacent to the switchroom.
[^18]
- Installation: Indoor switchroom, 40 °C design ambient, indoor normal environment, Pollution Degree 3.
[^15][^7]
- Maximum demand calculation per AS/NZS 3000 Clause 2.2 using diversified loads (lighting, power, HVAC, lifts) leads to \(I_{MD} = 190\) A at the MSB, including an allowance for future load.
[^2][^6]
- Client requires 25% spare capacity on the MSB.
[^2]
- Prospective fault level at MSB from transformer short‑circuit calculation is approximately 20–22 kA.
### 9.2 Maximum demand and main rating selection
1. Using AS/NZS 3000 Table 2.1 demand factors for lighting, socket outlets, and motors plus engineering assessment for lifts/HVAC per Clause 2.2.2, the diversified maximum demand is found to be 190 A.
[^1][^2]
2. Applying a 25% growth margin gives a design current of approximately 240 A.
[^2]
3. Select a 250 A MCCB incomer with adjustable long‑time trip set at or below 250 A.
[^24][^7]
4. Nominate the assembly rated current InA as 250 A to align with the incomer rating.
### 9.3 Busbar sizing and short‑circuit checks
- Select copper main busbars: 1 × 30×10 mm per phase (3‑pole), with 1 × 30×10 mm neutral and 1 × 25×6 mm earth bar.
[^40][^38]
- From typical busbar rating tables, 30×10 mm Cu can carry well above 250 A in still or enclosure air when temperature‑rise limits are met; some guidance shows 30×10 mm bars used at up to 400–630 A in specific arrangements.
[^17][^42][^40]
- Confirm via manufacturer 61439 design‑verification data (or Annex N) that 30×10 mm bars in the selected enclosure and support spacing meet temperature‑rise limits at 250 A and thermal short‑circuit withstand at 22 kA for 1 s.
[^9][^7][^11]

Short‑circuit check:

- Using \(S_n = 500\) kVA, \(U_n = 0.4\) kV, \(u_k = 6%\), a simple transformer formula \(I_{k}'' \approx \frac{S_n}{\sqrt{3} U_n u_k}\) gives ≈12 kA at the transformer; where supply is very close and other contributions apply, a conservative 20–22 kA may be assumed as per typical MSB fault level ranges.
[^18]
- The MSB and incomer MCCB must have at least 25 kA short‑circuit rating (Icu/Ics and Icw) at 0.4 kV.
### 9.4 Device selection and coordination
- Select a 250 A MCCB with Icu ≥ 25 kA at 415 V; configure long‑time, short‑time and instantaneous settings to coordinate with downstream MCCBs/MCBs.
[^7][^8]
- Ensure downstream devices at distribution boards have breaking capacities consistent with their local fault levels, typically 6–10 kA depending on cable length.
### 9.5 Form of separation and enclosure layout
- Form: 2b selected as adequate for this rating and building type.
[^26][^12]
- Enclosure: front‑only access board, IP31 enclosure, nominal height 2200 mm, width 800 mm for main section, depth 600 mm.
[^15][^3]
- Internal arrangement:
  - Top or rear main busbar chamber with 30×10 mm Cu bars.
  - Front‑mounted 250 A MCCB incomer, group of MCCBs for outgoing feeders, and a common cableway.
  - Cable entry bottom for incoming mains (e.g. 2×120 mm² Cu) and outgoing feeders (e.g. 25–95 mm² Cu), bending radius per cable manufacturer data (usually ≥8–12×D).
### 9.6 Compliance notes
- Maximum demand: Calculated and documented as per AS/NZS 3000 Clause 2.2 and (where applicable) Clause 2.2.2 engineering assessment.
[^1][^2]
- Switchboard standard: As the board exceeds 125 A but is below 10 kA if located further from the transformer, or meets the 125 A threshold regardless, it is prudent to specify compliance with AS/NZS 61439.1/.2 in accordance with Appendix K guidance.
[^27][^4][^5]
- Access and clearances: Minimum 1.0 m working space in front of the switchboard and 0.6 m with doors open, as per Clause 2.10; only one exit is required if the board is rated below 800 A and shorter than 3 m.
[^3][^44]

***
## 10. Worked example 2 – 630/800 A MSB, Form 3bih, front and rear access
### 10.1 Input data and assumptions
Assume a large commercial building or light industrial facility with:

- Supply: 1000 kVA, 11/0.4 kV transformer with 5% impedance located adjacent to the MSB.
[^18]
- Prospective fault level at MSB: ≈28 kA from transformer contribution alone, consistent with typical 20–35 kA MSB levels; parallel sources would increase this.
[^18]
- Ambient: 40 °C; indoor switchroom with controlled access, Pollution Degree 3.
[^15][^7]
- Maximum demand: diversified load calculation per AS/NZS 3000 Clause 2.2 indicates \(I_{MD} = 520\) A, with anticipated future growth to 700 A.
[^2][^6]
- Client requirements: Form 3bih internal separation; modular 61439 assembly; front and rear access; provision for future uprating from 630 A to 800 A incomer.
### 10.2 Maximum demand and main rating selection
1. Using Table 2.1 and engineering assessment for large HVAC and process loads under Clause 2.2.2, \(I_{MD}\) is estimated at 520 A.
[^1][^2]
2. Allowing for future loads and the client’s requirement, select design current ≈700 A.
[^2]
3. Initially install a 630 A ACB incomer (In = 630 A) with long‑time setting matched to current load profile; design busbars and assembly for an ultimate 800 A rating so that a future upgrade to an 800 A ACB only requires device change.
[^7][^5]
4. Nominate the assembly InA as 800 A, with verification data from the 61439 system supplier.
### 10.3 Busbar sizing and short‑circuit verification
Busbar selection:

- Choose 3 × 40×10 mm Cu per phase for main horizontal busbars, supported at intervals consistent with the manufacturer’s tested system, with 2 × 40×10 mm neutral (full‑size neutral for harmonic loads) and 2 × 30×10 mm earth bars.
[^40][^38][^39]
- Manufacturer data and Annex N calculations indicate such a busbar set can support 800–1000 A continuous current in an enclosed LV switchboard, depending on ventilation and configuration.
[^9][^11][^38]

Short‑circuit calculations:

- From transformer parameters (1000 kVA, 5%, 400 V), \(I_{k}''\) at the transformer terminals is approximately 28.9 kA; the actual MSB fault current will be similar given a short LV run.
[^18]
- Assembly is specified with Icw ≥ 36 kA for 1 s and peak withstand Ipk ≥ 80 kA, consistent with common 61439 switchboard ranges.
[^7][^5]

Verification:

- Rely on manufacturer 61439 design‑verification documentation demonstrating temperature‑rise compliance (Clause 10.10) and short‑circuit withstand (Clause 10.11) for the chosen busbar configuration and compartment layout.
### 10.4 Device selection and discrimination
- Main incomer: 630 A ACB with Icu/Ics ≥ 36 kA at 415 V, with L/S/I/G functions and adjustable settings; future provision for 800 A ACB with same frame and busbar connections.
[^7][^8]
- Bus coupler (if present): identical or similar ACB with coordinated settings for transfer and parallel operation.
[^7]
- Downstream feeders: MCCBs sized 100–400 A supplying sub‑mains to distribution boards and large plant; selectivity tables from the ACB/MCCB manufacturer used to configure main and feeder protections for discrimination at least up to arcing‑fault levels, consistent with Clause 2.5.7 guidance.
### 10.5 Form 3bih implementation and layout
Form of separation:

- Form 3bih implemented using insulated main busbars in a dedicated busbar chamber and withdrawable MCCB/ACB modules where the moulded housings contribute to separation (suffix "h").
[^13][^14]
- Additional insulated shrouds and shaped barriers used at outgoing terminals (suffix "i").
[^14][^13]

Physical arrangement (indicative dimensions):

- Incomer section: width ≈1400–1600 mm, height 2200–2300 mm, depth 1000 mm.
[^3][^45]
- Bus coupler / outgoing sections: similar section sizes, arranged in line to create a multi‑section board >3 m long.
[^45]
- Front and rear access with:
  - Front: doors for incomer ACB, bus coupler, and outgoing MCCBs.
  - Rear: dedicated cable terminations and cableways; gland plates at bottom for 3–4 parallel single‑core cables per phase (e.g. 2×240–300 mm²) for incomers and large feeders, with bending radius sized per manufacturer data (e.g. ≥10×D).
### 10.6 Access and switchroom requirements
Given the board is rated at ≥800 A and length >3 m:

- Provide at least 1.0 m clear working space in front of the board and 0.6 m around it with doors open and equipment racked out.
[^27][^3]
- Provide two independent emergency exit paths spaced well apart, or at least 3 m of clear space in front of the switchboard if only one exit is available, in accordance with Clause 2.10.
[^3][^33][^27]
- Ensure switchroom doors are at least 0.9 m wide and 2.2 m high.
### 10.7 Compliance notes
- Maximum demand: Documented per AS/NZS 3000 Clause 2.2 with engineering assessment (2.2.2) for large process loads.
[^1][^2]
- Switchboard standard: MSB must be AS/NZS 61439.1/.2 compliant because connected load exceeds 125 A and fault level exceeds 10 kA; this is mandated under AS/NZS 3000 Amendment 2 and associated guidance.
[^27][^4][^5]
- Internal separation: Form 3bih selected to satisfy AS/NZS 3000 Clause 2.5.5 expectation for internal segregation for boards ≥800 A to limit arcing‑fault risks.
[^12][^13][^34]
- Design verification: 61439 design‑verification records kept on file covering temperature‑rise, dielectric strength, short‑circuit withstand, mechanical operation and other characteristics listed in Annex D/Table D.1.
[^7][^8][^5]

***
## 11. Summary tables and design checklist
### 11.1 Summary – typical dimensions by rating and form
The following condensed table summarises typical section dimensions suitable as a starting point for MSB layout design.
Values assume indoor, IP2X or better, 2200–2300 mm nominal height, and commercial‑grade 61439 assemblies.
[^15][^3][^16][^45]

| Incomer rating | Form 2b – W×H×D (mm) | Form 3b – W×H×D (mm) | Form 3bih – W×H×D (mm) | Notes |
|----------------|------------------------|------------------------|-------------------------|-------|
| 80 A | 400–600 × 2000–2200 × 300–400 | 600 × 2000–2200 × 400–500 | 600 × 2000–2200 × 500 | Small boards; front‑only access; often one or two sections. |
| 125 A | 600 × 2000–2200 × 400–500 | 600–800 × 2000–2200 × 500 | 600–800 × 2000–2200 × 500–600 | Tenant or small building MSBs; IP2X/IP31 typical. |
| 160 A | 600–800 × 2000–2200 × 400–500 | 800 × 2000–2200 × 500–600 | 800 × 2000–2200 × 600 | Medium tenant or small plant boards. |
| 250 A | 800 × 2200–2300 × 500–600 | 800–1000 × 2200–2300 × 600 | 800–1000 × 2200–2300 × 600–800 | Small building MSBs; 25–36 kA fault levels common. |
| 400 A | 800–1000 × 2200–2300 × 600 | 1000–1200 × 2200–2300 × 600–800 | 1000–1200 × 2200–2300 × 800 | Medium commercial MSBs. |
| 630 A | 1000–1200 × 2200–2300 × 600–800 | 1200–1400 × 2200–2300 × 800 | 1200–1600 × 2200–2300 × 800–1000 | Large commercial/industrial MSBs; front and rear access. |
| 800 A | 1200–1400 × 2200–2300 × 800 | 1400–1600 × 2200–2300 × 800–1000 | 1400–1800 × 2200–2300 × 1000 | High‑current MSBs; ar

---

## References

1. [[PDF] AS/NZS 3000:2018 - Power and Cables](https://www.powerandcables.com/wp-content/uploads/2019/07/AS-NZ-3000-2018-Australian-New-Zealand-Wiring-Rules.pdf) - AS/NZS 3000:2018. 2. PREFACE. This Standard was prepared by the Joint ... 2.2.2 Maximum demand ...

2. [Maximum Demand Calculation per AS/NZS 3000:2018 Clause 2.2 ...](https://ecalpro.com/docs/maximum-demand-calculation-asnzs-3000) - AS/NZS 3000:2018 Clause 2.2.2 permits the maximum demand to be determined by engineering assessment ...

3. [Wiring Rules AS NZS 3000:2018 – Key Updates to the Standard and ...](https://www.gses.com.au/wiringrulesasnzs3000/) - AS/NZS 3000:2018 specifies significant clarifications to the protection requirements of residual cur...

4. [New switchboard design standards for Australia and New Zealand](https://www.acsolarwarehouse.com/blog/news-7/new-switchboard-design-standards-for-australia-and-new-zealand-246) - How to comply with the new switchboard standard AS/NZS 61439 for either residential and commercial s...

5. [AS/NZS 61439 Information and Enclosures from B&R](https://www.brenclosures.com.au/br-61439/) - AS/NZS 61439 is the new series of standards for low-voltage (LV) switchgear and control gear assembl...

6. [Calculating maximum demand for EV chargers in apartment ...](https://electricalconnection.com.au/calculating-maximum-demand-for-ev-chargers-in-apartment-complexes/) - AS/NZS 3000:2018 Clause 2.2.2 states that: “The maximum demand may be assessed where – (i) the elect...

7. [[PDF] AS/NZS 61439 standard update - NHP](https://www.nhp.com.au/public/assets/pim/Original/10027/Cubic-ASNZS-61439-Standard-Update-Brochure.pdf) - For example electrical components terminal and air temperature limits. Page 6. 6. AS/NZS 61439.1 – A...

8. [[PDF] BE Switchcraft implementing AS/NZS 61439:2016](https://beswitchcraft.com.au/wp-content/uploads/BES-Overview-61439-UPDATE-29-Sept-2020.pdf) - Although not a compulsory item within AS/NZS 61439:2016, BE Switchcraft follows the guidelines provi...

9. [[PDF] Technical News - NHP New Zealand](https://www.nhpnz.co.nz/-/media/Project/NHP/Sites/Shared/White-Papers/Files/NHPTNL78.pdf?rev=097a7b41ab3d49bba1ff1d7b06915a66) - In comparison, the new AS/NZS 61439.1 Table 6 note (g) allows for the main busbar to operate at 105K...

10. [[PDF] AS/NZS 61439.1:2016 Low-voltage switchgear and controlgear ...](https://www.elecenghub.com/NewSamples/AS/182136194/AS-NZS-61439.1-2016-1.pdf) - This Standard was issued in draft form for comment as DR AS/NZS 61439.1:2014. ... Rated current of t...

11. [[PDF] Technical News - NHP](https://www.nhp.com.au/-/media/Project/NHP/Sites/Shared/White-Papers/Files/NHPTNL78.pdf) - the absence of tested verification, Annex N from AS/NZS61439.1 can also be used to determine the cur...

12. [Understanding Switchboard Form of Separation, AS/NZS61439](https://sparkycalc.com/blog/understanding-switchboard-form-of-separation-as-nzs61439/) - The standard specifies four main types of separation methods: Form 1, Form 2, Form 3, and Form 4. Ea...

13. [AS/NZS 3000:2018 Wiring Rules - ElecEngHub](https://www.elecenghub.com/NewSamples/AS/111564781/AS-NZS-3000-2018-1.pdf) - 9 Illustration of basic clearances for switchboard access has been updated ... and minimum clearance...

14. [Switchboard Segregation Forms Explained | PDF - Scribd](https://ro.scribd.com/document/598902335/Switchboard-Forms-of-Segregation-Explained) - (1)

15. [AS/NZS 3000:2018 Wiring Rules — The 10 Clauses Engineers ...](https://ecalpro.com/ur/standards/as-nzs-3000/key-clauses) - AS/NZS 3000:2018, Clause 4.4 sets requirements for switchboard construction ... Access and Working S...

16. [FAQs - NESMA](https://nesma.org.au/faqs/) - Main Switchboard Design. What is the Australian standard for main switchboards? Current Australian s...

17. [[PDF] Busbar Systems - Siemens Industry Online Support](https://cache.industry.siemens.com/dl/files/647/109750647/att_945652/v1/LV10_102017_Chap11_EN_web_201803231221189171.pdf) - Current-carrying capacity values for 30 x 10 mm flat bars acc. to. DIN 43671, depending on ambient a...

18. [Short Circuit Calculations: The 3 Numbers Every Engineer Must ...](https://ecalpro.com/blog/short-circuit-calculation-three-numbers-switchboard) - Every switchboard has a fault rating stamped on its nameplate — typically 25kA, 35kA, 50kA, or 65kA....

19. [[PDF] Electrical Fact Sheet Split Air-Conditioning Units - Access Canberra](https://www.accesscanberra.act.gov.au/__data/assets/pdf_file/0005/2250257/Split-Air-conditioning-units.pdf) - For the purposes of AS/NZS 3000:2018 Clause 2.2.2 Maximum Demand and Appendix C2. Maximum Demand. Th...

20. [How to calculate maximum demand based on AS/NZS 3000](https://www.cleantechcontrols.com.au/how-to-calculate-maximum-demand-based-on-as-nzs-3000/) - In AS/NZS 3000:2018, Section 2.2.2 flags maximum demand as a ... Your DNSP's Service & Installation ...

21. [Electrical Installations: Wiring Rules | Building It Right - HIA](https://hia.com.au/resources-and-advice/building-it-right/australian-standards/articles/electrical-installations-wiring-rules) - AS/NZS 3000:2018 sets out the requirements for the design, construction and verification of electric...

22. [Update: changes for switchboards with a connected load exceeding ...](https://www.worksafe.qld.gov.au/news-and-events/newsletters/esafe-newsletters/esafe-editions/esafe-electrical/2022-newsletters/october-2022/update-changes-for-switchboards-with-a-connected-load-exceeding-125-amps-or-subject-to-a-fault-level-of-10ka-or-greater) - The use of either AS/NZS 3439 or AS/NZS 61439 for low voltage switchgear and control gear assemblies...

23. [Electrical Installation Wiring Rules (AS/NZS 3000:2018) Updates](https://www.pmv.net.au/electrical-installation-wiring-rules-as-nzs-30002018-updates/) - Updated Electrical Installation Wiring Rules (AS/NZS 3000:2018) includes changes to reflect new tech...

24. [AS/NZS 3000 Switchboard Rules – Complete Guide for Compliance ...](https://www.cleantechcontrols.com.au/switchboard-rules/) - 1. What Is a Switchboard Under AS/NZS 3000? Types of Distribution Systems · 2. When Is a Switchboard...

25. [[DOC] Type Specification for Large Low Voltage Switchboards](https://pw-cdn.watercorporation.com.au/-/media/watercorp/documents/about-us/suppliers-and-contractors/resources/design-standards/ds26-17-type-specification-for-large-low-voltage-switchboards.docx?la=en&rev=44496fc73a004d718a4a26e952441fad&hash=6039B49A9C671AEC3607A3D4F0F69FDE) - ... AS/NZS 61439.1 clause 8.4.2.2, except that powder coating insulation shall not be permitted. (d)...

26. [Guide to form type | BS EN 61439-2 | Forms of Separation](https://www.sandfordelectrical.co.uk/guide-to-form-type) - Form 2B. Separation of the busbars from the functional units, with terminals for external conductors...

27. [[PDF] FAQ'S - New AS/NZS 3000:2018 Wiring Rules - Dara SwitchBoards](https://electricalswitchboards.com.au/wp-content/uploads/2019/02/New-Wiring-Rule_Print.pdf) - AS/NZS 3000:2018 now provides appendix K which references the new switchboard standard. Q: As per th...

28. [Understanding The Minimum Bend Radius of Cables - CableHero](https://www.cablehero.com.au/the-minimum-bend-radius-of-cables) - In simple terms, the minimum bend radius is what the cable manufacturers specify as the smallest all...

29. [How to apply a bending radius correctly?](https://www.nexans.nl/en/business/Building-Territories/Building/Distributors/Bending-radius.html) - The bending radius is usually expressed as a multiple of the outer diameter of the cable, for exampl...

30. [[PDF] Resistance Values & Bending Radius - apec cables](https://apeccables.com.au/products/Electrical%20Data%20Resistance%20Values%20&%20Bending%20Radius.pdf) - The above table covers the recommended minimum bending radius for single core or multicore cables fo...

31. [[PDF] Annexure B - LV Switchboards - Snowy Hydro](https://www.snowyhydro.com.au/wp-content/uploads/2023/12/Annexure-B-LV-Switchboards.pdf) - Switchboard assembly that has been designed to AS/NZS 61439.1 appendix ZC with tests completed as pe...

32. [AS/NZS 61439 Electrical Enclosure Assembly](https://www.ipenclosures.com.au/electrical-enclosures-as61439/) - AS/NZS 61439 applies to low voltage switchgear and controlgear assemblies ... 125 A or a prospective...

33. [[PDF] AS/NZS 3000: WHAT HAS CHANGED? - Electrical connection](https://electricalconnection.com.au/wp-content/uploads/sites/2/2019/03/Wiring-Rules-2018-V2.pdf) - Requirements for the use of AFDDs differ between Australia and NZ, so please refer to Clauses 2.9.6 ...

34. [AS/NZS 3000 Wiring Rules Overview | PDF | Electrical Wiring - Scribd](https://www.scribd.com/document/393562226/ESV-Wiring-Rules-Presentation-2008) - The document provides an overview of key changes in the Australian/New Zealand Wiring Rules standard...

35. [[PDF] Low-voltage switchgear and controlgear assemblies - Accuris ...](https://store.accuristech.com/products/preview/3063650) - AS/NZS 61439.1:2016 will also remain current for ... 3.0), Low-voltage switchgear and controlgear as...

36. [[PDF] IS YOUR POWER BOARD TESTED TO AS61439?](https://powersafe.net.au/wp-content/uploads/Test-Checklist-March-2021-LR.pdf) - 10.10. Verification of temperature rise. For AS61439.4 outdoor assemblies have to be tested. Verific...

37. [Copper Busbar Rating | Austral Wright Metals](https://www.australwright.com.au/technical-data/advice/copper-busbar-rating/) - Copper Busbar Rating Table. Download Our Copper Busbar Rating Table as PDF. GET A QUOTE. Busbar Size...

38. [[PDF] The Power of Copper - NHP](https://www.nhp.com.au/-/media/Project/NHP/Sites/Shared/White-Papers/Files/NHPTNL57.pdf) - IEC61439-1 allows a maximum temperature rise of 105° K. As a consequence, European ratings for bus b...

39. [Designing Reliable Electrical System: How to Size and Select ...](https://www.linkedin.com/pulse/designing-reliable-electrical-system-how-size-select-busbars-pandey-tb4uf) - An 800 A main board at 16 kA may use 2×30×5 mm Cu busbars. The same 800 A board at 80 kA may require...

40. [[PDF] COPPER BUSBAR RATING - Austral Wright Metals](https://www.australwright.com.au/wp-content/uploads/2019/01/Copper-Busbar-Rating-Table-Austral-Wright-Metals.pdf) - 30 x 10. 300. 2.678. 57.4. 720. 825. 700. 795. 22,500. 2,500. 1,500. 500. 40 x 10. 400 ... COPPER BU...

41. [Bus Bar Size Calculator](https://www.allumiax.com/bus-bar-size-calculator) - Copper, 1.2 Amp/mm², Panels and board ; Aluminum, 0.8 Amp/mm², Panels and board ; Galvanized steel, ...

42. [[PDF] Charts & tables](https://www.em.co.za/site/Catalogue%20PDFs/2020-Charts%20_%20Tables.pdf) - 30 x 10 busbar can under normal operating conditions be loaded with 630A. A correction factor k2 of ...

43. [Switchboard internal segregation and IP rating | Energy Safe Victoria](https://www.energysafe.vic.gov.au/update/safety/switchboard-internal-segregation-and-ip-rating) - The switchboard enclosure did not comply with the relevant Australian Standards, in particular AS/NZ...

44. [[PDF] New Wiring Rules AS/NZS 3000 – Are you ready for the change?](https://www.agcoombs.com.au/wp-content/uploads/2018/10/Advisory_Note_New_Wiring_Rules_ASNZS-3000%E2%80%93Are_you-_eady_or_the_change_2.pdf) - The new edition also requires a minimum of 1m minimum clearance in front of a switchboard. (without ...

45. [LV Switchboard Dimension Guide | PDF - Scribd](https://www.scribd.com/document/530054770/LV-Switchboard-Dimensioning-Guide) - This document provides guidelines for dimensioning main low voltage switchboards from Schneider, Sie...

46. [[PDF] Technical cable guide - Prysmian Australia](https://australia.prysmian.com/sites/australia.prysmian.com/files/media/documents/TechCG_2015-AU-v4_LOWRES.pdf) - Bending radius, installed: Refers to minimum bending radius to which the cable can be subjected to i...

47. [AS/NZS 3008 – What Are the Best Practices for Cable Sizing?](https://www.cleantechcontrols.com.au/as-nzs-3008-what-are-the-best-practices-for-cable-sizing/) - AS/NZS 3008 - Want to ensure safe cable installations? Discover key tips on sizing, derating, and en...

