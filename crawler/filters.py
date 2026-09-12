def filter_by_keywords(job, keywords):
    text = f"{job['title']} {job['organization']} {job['location']}".lower()
    return any(kw.lower() in text for kw in keywords)
