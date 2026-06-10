# OMNI — Electrical Engineering Tools

A collection of static, browser-based calculators and reference tools for electrical design and verification, aligned with Australian and New Zealand standards (AS/NZS). No build step or server required — open `index.html` in a browser, or host the folder on any static web server.

## Featured Tools

- **Switchboard Sizer** (`switchboard.html`) — Interactive MSB layout designer with drag-drop modules
- **Switchroom Sizer** (`switchroom.html`) — Visual switchroom layout with working clearances per AS/NZS 3000 cl. 2.10
- **Cable Tray Sizer** (`cabletraysizing.html`) — Tray width/depth selection per AS/NZS 3000 cl. 3.9 and AS 3013
- **Lighting Search** (`lightingsearch.html`) — Multi-supplier lighting product search across Australian manufacturers

## Power

Meter Panel Sizer, Cable Sizing (AS/NZS 3008.1.1), Cable Weight, Maximum Demand (AS/NZS 3000 App. C), Diversity Factors, Fault Level (IEC 60909), Loop Impedance, Discrimination Check, Transformer Sizing, Generator Sizing (AS/NZS 3010), UPS Sizing (AS 62040), PV Sizing (AS/NZS 5033), PFC Sizing, Harmonics Analysis (AS/NZS 61000.3), Busbar Sizing (AS/NZS 61439), CT Sizing (AS 61869.2), Earthing Calculator, RCD Selector, SPD Sizing (AS/NZS 1768), IP/IK Rating Guide, Conduit Sizer

## Lighting

Lux Calculator (AS/NZS 1680.1), Lux Levels Reference, Emergency Lighting (AS 2293), Fire Interface Matrix (AS 1670.1 / AS 1668.1), Smoke Control, Essential Services (NCC Section E)

## Documentation

Load Schedule, Cable Schedule, Design Certificate, T&C Checklists (AS/NZS 3000 Section 8 / AS/NZS 3017), Site Inspection, Single Line Diagram builder, AS3000 Tips, Verification (`qa.html` — formulas and standards basis for every calculator)

## Reference Viewers

- **AS/NZS 3000 Viewer** (`as3000viewer.html`) — Wiring Rules with clause-level deep links (`as3000viewer.html#cl-2.6.3`)
- **NSW IR Viewer** (`nswirviewer.html`) — NSW Service & Installation Rules

## Architecture

- `omni-utils.js` — shared module: centralised navigation (`OmniNav.structure` — add new pages there), dark mode, localStorage save/load, toasts, validation, CSV export, keyboard shortcuts (Ctrl+S save, Ctrl+Enter calculate, Ctrl+P print)
- `style.css` — shared stylesheet with light/dark themes via CSS variables
- Each tool is a self-contained HTML page with inline JavaScript

## Key Standards

- AS/NZS 3000:2018 — Electrical installations (Wiring Rules)
- AS/NZS 3008.1.1 — Cable selection (current rating, voltage drop)
- AS/NZS 61439 — Low-voltage switchgear and controlgear assemblies
- AS 2293 — Emergency lighting; AS/NZS 1680 — Interior lighting
- AS 3013 — Electrical installations in fire-rated wiring systems

## License

© 2025 — For internal use
