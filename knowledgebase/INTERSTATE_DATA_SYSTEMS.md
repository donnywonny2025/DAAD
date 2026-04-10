# Interstate Data Sharing: Michigan ↔ Florida ↔ Arizona
## How the Backend Systems Connect (and Where They Don't)

---

## The Three Systems That Move Data Between States

### 1. Driver License Compact (DLC)
**What it does:** Member states automatically report traffic convictions committed by out-of-state drivers back to the driver's home state.

| State | DLC Member? | Impact |
|---|---|---|
| **Michigan** | ❌ **NO** | Michigan does NOT automatically receive traffic convictions from other states via DLC. This is huge. |
| **Florida** | ✅ Yes | Florida reports outbound convictions to other DLC member states |
| **Arizona** | ✅ Yes | Arizona reports outbound convictions to other DLC member states |

**What this means for Jeff:** Because Michigan opted out of the DLC, Florida and Arizona do NOT automatically send traffic conviction data to Michigan. A Florida traffic ticket or minor offense wouldn't be auto-reported to the Michigan SOS the way it would between two DLC member states.

**BUT:** FL and AZ are both DLC members with each other, so anything between those two states DOES auto-report.

---

### 2. National Driver Register (NDR) / Problem Driver Pointer System (PDPS)
**What it does:** A federal pointer system that flags individuals with revocations, suspensions, cancellations, or denials in ANY state. ALL 50 states participate — including Michigan.

| What it catches | What it misses |
|---|---|
| License revocations | Minor traffic tickets |
| License suspensions | Non-moving violations |
| License cancellations | Infractions that didn't result in suspension/revocation |
| Serious traffic convictions (DUI, vehicular homicide, etc.) | Dismissed charges |

**What this means for Jeff:** Michigan's original revocation IS in the PDPS. That's the "hold" that theoretically should have prevented FL from issuing a license. The fact that FL issued one anyway means there was a gap in the PDPS query at that time — common in the early 2000s when the system was less reliable.

---

### 3. AAMVA State-to-State (S2S) Verification Service
**What it does:** Modern real-time electronic verification system. When someone applies for a license, the state queries S2S to check if the applicant holds a license in any other state.

- **Launched:** Post-2010, with widespread adoption through REAL ID compliance
- **Coverage:** Majority of states now participating as of 2026
- **Purpose:** "One Driver, One License, One Record" — prevents dual-licensing

**What this means for Jeff:** This system was NOT operational when Jeff got his FL license in the early 2000s. It exists now, which means today the loophole is closed. But historically, when Jeff obtained that FL license, S2S didn't exist and interstate verification was manual and inconsistent.

---

## State-by-State Backend Systems

### Michigan — Secretary of State (SOS)
- **Database:** SOS maintains its own internal driving record system
- **Not in DLC** — isolated from automatic interstate conviction sharing
- **Does participate in NDR/PDPS** — revocations/suspensions are shared nationally
- **Now in S2S** — modern applications are cross-checked
- **Key query tool for hearing officer:** Certified Michigan driving record only
- **LEIN** (Law Enforcement Information Network) is separate — criminal history, not driving record

### Florida — DHSMV (Department of Highway Safety & Motor Vehicles)
- **Database:** DAVID (Driver and Vehicle Information Database) — law enforcement access only
- **Public records:** DHSMV online portal for driving record requests
- **In DLC** — outbound convictions reported to other member states (but NOT Michigan since MI isn't in DLC)
- **In NDR/PDPS** — revocations/suspensions shared
- **In S2S** — modern cross-state verification active
- **"Adjudication Withheld"** — Florida-specific. Judge finds you guilty but withholds adjudication = NOT a conviction = NOT reported outbound

### Arizona — MVD (Motor Vehicle Division)
- **Database:** AZ MVD maintains its own system
- **Public records:** azmvdnow.gov for driving record requests
- **In DLC** — outbound convictions reported to other member states (but NOT Michigan)
- **In NDR/PDPS** — revocations/suspensions shared
- **In S2S** — modern cross-state verification active

---

## The Critical Gap: Early 2000s vs. Now

| Feature | Early 2000s (when Jeff got FL license) | 2026 (now) |
|---|---|---|
| PDPS reliability | Inconsistent, manual queries, gaps | Automated, real-time |
| S2S system | Did not exist | Nationwide deployment |
| DLC coverage | Existed but MI not a member | Still exists, MI still not a member |
| Interstate data quality | Poor — delay days to months | Near real-time in most cases |
| Dual licensing detection | Weak | Strong |

---

## What This Means for Jeff's Case

1. **Michigan doesn't auto-receive FL/AZ traffic data** — because MI isn't in the DLC. Minor FL/AZ infractions likely never reached Michigan.

2. **The NDR catches the big stuff** — revocations, suspensions, DUI convictions. Those cross state lines regardless of DLC membership.

3. **The FL license was possible because of a 2000s-era system gap** — PDPS queries were inconsistent, S2S didn't exist, and interstate verification was manual. This is a systemic explanation, not a "Jeff outsmarted the system" narrative.

4. **Pulling your own records is the only way to know for sure** — we need to see exactly what Michigan's SOS has = what the hearing officer will see. Everything else is informed speculation.

---

## How to Pull Records from Each State

| State | Method | URL / Contact |
|---|---|---|
| **Michigan** | MiLogin online portal | [milogin.michigan.gov](https://milogin.michigan.gov) |
| **Florida** | DHSMV online or mail | [flhsmv.gov/driver-licenses-id-cards/driving-record-check/](https://www.flhsmv.gov/driver-licenses-id-cards/driving-record-check/) |
| **Arizona** | MVD online | [azmvdnow.gov](https://azmvdnow.gov/) |
| **NDR/PDPS** | Mail-in (notarized) or electronic | [nhtsa.gov/content/ndr](https://www.nhtsa.gov/content/ndr) — Mail: 1200 New Jersey Ave SE, Washington DC 20590 |

---

*Last Updated: April 9, 2026*
*Sources: AAMVA, Ballotpedia, NHTSA, FLHSMV, michigan.gov, defense attorney publications*
