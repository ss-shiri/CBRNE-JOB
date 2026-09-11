import json

def load_keywords(path):
    with open(path, "r") as f:
        return [line.strip() for line in f.readlines()]

def save_output(data, path):
    with open(path, "w") as f:
        json.dump(data, f, indent=2)
