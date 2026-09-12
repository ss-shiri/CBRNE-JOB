def parse_job_entry(entry):
    return {
        "title": entry.get("title", ""),
        "organization": entry.get("organization", ""),
        "location": entry.get("location", ""),
        "url": entry.get("url", ""),
        "category": entry.get("category", "general")
    }
