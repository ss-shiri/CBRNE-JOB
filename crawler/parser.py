def parse_job_entry(raw_entry):
    """
    Normalize a raw job entry into a consistent dictionary structure.
    """
    return {
        "title": raw_entry.get("title", ""),
        "organization": raw_entry.get("organization", ""),
        "location": raw_entry.get("location", ""),
        "url": raw_entry.get("url", "")
    }
