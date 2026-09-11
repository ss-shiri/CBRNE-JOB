## Keywords
All CBRNE-related terminology is stored in `data/keywords/`.

## Contribution
Pull requests are welcome.
def parse_job_entry(raw_entry):
    return {
        "title": raw_entry.get("title", ""),
        "organization": raw_entry.get("org", ""),
        "location": raw_entry.get("location", ""),
        "url": raw_entry.get("url", "")
    }
