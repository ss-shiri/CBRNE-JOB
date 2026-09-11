import requests
from bs4 import BeautifulSoup

def fetch_page(url):
    r = requests.get(url, timeout=10)
    return BeautifulSoup(r.text, "html.parser")

def extract_jobs(soup, keywords):
    results = []
    text = soup.get_text().lower()
    for kw in keywords:
        if kw.lower() in text:
            results.append(kw)
    return results
