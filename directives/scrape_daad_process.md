# DAAD / OHA Legal Requirements Scraping Directive

## Goal
Retrieve specific, actionable intelligence regarding the process of restoring a revoked driver's license in Michigan through the Driver Assessment and Appeal Division (DAAD), now known as the Office of Hearings and Administrative Oversight (OHA).

## Inputs
- Top target URLs to scrape:
  1. https://www.michigan.gov/sos/all-services/driver-license-appeal-hearing
  2. Selected top law firm websites specializing in Michigan license restoration (e.g., Grabel & Associates, Kelly & Kelly, Barone Defense).

## Execution Strategy
The deterministic python script (`execution/scrape_legal_data.py`) will accept a list of URLs, use Firecrawl to scrape their Markdown representation, parse it, and export the compiled text into `.tmp/daad_scraped_data.md`. 

## Data Extraction Targets
When the orchestrator reads `.tmp/daad_scraped_data.md`, we must isolate the following critical information:
1. **Substance Abuse Evaluation (SOS-258):** Who must fill it out, what the evaluator will ask, and its validity timeframe.
2. **12-Panel Urinalysis:** The exact drug screen requirements and testing parameters.
3. **Reference Letters:** Number of required letters, notarization requirements, and specific questions the authors must address.
4. **Ignition Interlock:** Details regarding the BAIID (Breath Alcohol Ignition Interlock Device) requirement if applicable.

## Output
Produce a fully processed expert dossier: `knowledgebase/DAAD_EXPERT_GUIDE.md`.
