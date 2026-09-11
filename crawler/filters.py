def filter_by_keywords(job_text, keywords):
    job_text = job_text.lower()
    return any(kw.lower() in job_text for kw in keywords)
