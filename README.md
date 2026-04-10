# DAAD — License Restoration Case Management

**Kerr v. Michigan SOS — OHA License Appeal**

A personal case management system for navigating Michigan's Office of Hearings and Administrative Oversight (OHA) license restoration process. Built as a half-screen portal with a research knowledgebase and document library.

---

## Quick Start

Double-click **DAAD Portal.app** on the Desktop, or open `portal/index.html` in Chrome.

---

## Project Structure

```
DAAD/
├── portal/                    # Web-based case dashboard
│   ├── index.html             # Main portal interface
│   ├── styles.css             # Michigan State-branded dark theme
│   ├── app.js                 # To-Do, Evidence, Docs, KB rendering
│   ├── logo.png               # Custom case logo
│   └── docs/                  # Court forms, templates, case files
│       └── INDEX.md           # Document tracker
│
├── knowledgebase/             # Research & legal analysis
│   ├── DAAD_COMPLETE_PROCESS.md       # Full OHA hearing process guide
│   ├── JEFF_CASE_NARRATIVE.md         # Personal history & FL license strategy
│   ├── RECORD_VISIBILITY_REFERENCE.md # What shows on records (and what doesn't)
│   ├── INTERSTATE_DATA_SYSTEMS.md     # MI ↔ FL ↔ AZ backend data sharing
│   ├── LEGAL_RESEARCH_CASELAW.md      # Law evolution, case law, sobriety court
│   ├── ALTERNATIVE_PATHWAYS.md        # Novel strategies, Road to Restoration
│   ├── DAAD_LEGAL_ANALYSIS.md         # Legal analysis notes
│   └── DAAD_EXPERT_GUIDE.md           # Scraped expert guidance
│
├── directives/                # Operating instructions & research plans
│   ├── case_persona.md                # AI persona rules for this project
│   ├── case_law_research_plan.md      # 6-track targeted case law research plan
│   └── scrape_daad_process.md         # Scraping directive for MI.gov
│
├── execution/                 # Python scripts
│   └── scrape_legal_data.py           # Firecrawl-based legal scraper
│
├── AGENTS.md                  # 3-layer architecture instructions
├── .env                       # API keys (gitignored)
└── .gitignore                 # Protects .env, .tmp/, etc.
```

---

## Portal Features

- **To-Do — Immediate**: Priority action items with localStorage persistence
- **Required Evidence**: OHA hearing checklist (5 items, checkable)
- **Resources & Contacts**: Jennifer Stewart, CallieBea Bowers, MiLogin, DAIS
- **Documents & Forms**: Direct links to SOS-257/258, DAIS, state record portals
- **Knowledgebase**: All 8 research documents accessible from the portal
- **Case Reference**: Personal info, case number, D&A testing details

---

## Knowledgebase Summary

| Document | Contents |
|---|---|
| **DAAD Complete Process** | Step-by-step hearing process, forms, timelines |
| **Jeff's Case Narrative** | Personal history, 1999 OUIL context, FL license strategy |
| **Record Visibility** | What SOS sees vs. doesn't — dismissed charges, pending cases, ICHAT vs. SOS |
| **Interstate Data Systems** | DLC membership, NDR/PDPS, S2S — how MI/FL/AZ do (and don't) share data |
| **Legal Research** | Law evolution 1999→2026, habitual offender rules, hardship analysis |
| **Alternative Pathways** | Road to Restoration clinics, constitutional arguments, Clean Slate Act, caregiver strategy |

---

## Key Contacts

| Name | Role | Phone |
|---|---|---|
| Jennifer Stewart | Counselor — Arbor Circle (Allegan) | (269) 673-1896 |
| CallieBea Bowers | Probation — 57th District Court | (269) 673-0460 |
| OHAO (Hearings) | Michigan SOS | 888-767-6424 |
| Road to Restoration | Free clinics | MDOS-R2R@Michigan.gov |

---

## Next Steps

1. ✅ Portal built and functional
2. ✅ Knowledgebase compiled (8 docs)
3. ✅ Persona codified
4. ⬜ Pull certified MI driving record via MiLogin
5. ⬜ Attend Road to Restoration clinic (Battle Creek Jun 24 / GR Aug 4)
6. ⬜ Execute case law research plan (6 tracks)
7. ⬜ Pull FL and AZ state records
8. ⬜ Request NDR/PDPS
9. ⬜ Build support letter templates
10. ⬜ Draft hearing testimony outline

---

*Last updated: April 9, 2026*
