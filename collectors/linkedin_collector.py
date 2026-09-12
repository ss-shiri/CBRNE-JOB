import requests
from bs4 import BeautifulSoup

def collect_from_linkedin():
    url = "https://www.linkedin.com/jobs/search?keywords=CBRNE"
    soup = BeautifulSoup(requests.get(url).text, "html.parser")

    jobs = []
    for item in soup.select(".base-card"):
        jobs.append({
            "title": item.select_one(".base-search-card__title").get_text(strip=True),
            "organization": item.select_one(".base-search-card__subtitle").get_text(strip=True),
            "location": item.select_one(".job-search-card__location").get_text(strip=True),
            "url": item.select_one("a")["href"],
            "category": "general"
        })
    return jobs
