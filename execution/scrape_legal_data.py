import os
import json
from dotenv import load_dotenv
from firecrawl import FirecrawlApp

# Load .env variables
load_dotenv()

def scrape_daad_data():
    """
    Scrapes targeted DAAD/OHA resources using Firecrawl and writes the compiled markdown to .tmp.
    """
    # Initialize the Firecrawl client
    api_key = os.getenv("FIRECRAWL_API_KEY")
    if not api_key or api_key == "your_key_here":
        print("ERROR: FIRECRAWL_API_KEY is not set correctly in your .env file.")
        return

    app = FirecrawlApp(api_key=api_key)

    urls_to_scrape = [
        "https://www.michigan.gov/sos/all-services/driver-license-appeal-hearing",
        "https://www.grabellaw.com/michigan-driver-s-license-restoration.html",
        "https://www.kellykellylaw.com/michigan-driver-s-license-restoration", # Kelly Kelly Law
        "https://www.baronedefensefirm.com/drivers-license-restoration.html"
    ]

    compiled_markdown = []
    
    print(f"Starting Firecrawl scrape of {len(urls_to_scrape)} URLs...")

    for url in urls_to_scrape:
        print(f"Scraping: {url}...")
        try:
            # We use scrape_url rather than crawl as we just want the direct content
            scrape_result = app.scrape(url)
            markdown_content = getattr(scrape_result, 'markdown', '')
            
            if markdown_content:
                compiled_markdown.append(f"## Source: {url}\n\n{markdown_content}\n\n---")
                print(f"Successfully scraped: {url}")
            else:
                print(f"No markdown content retrieved for {url}")
        except Exception as e:
            print(f"Failed to scrape {url}: {e}")

    # Ensure .tmp exists
    os.makedirs(".tmp", exist_ok=True)
    
    output_path = ".tmp/daad_scraped_data.md"
    with open(output_path, "w", encoding="utf-8") as f:
        f.write("\n\n".join(compiled_markdown))
    
    print(f"\nScraping complete! Compiled data saved to {output_path}")

if __name__ == "__main__":
    scrape_daad_data()
