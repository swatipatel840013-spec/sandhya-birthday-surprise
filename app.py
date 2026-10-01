"""
Birthday Surprise website launcher
Run:
    pip install flask
    python app.py
Then open http://127.0.0.1:5000
"""
from flask import Flask, send_from_directory
from pathlib import Path

BASE = Path(__file__).resolve().parent
app = Flask(__name__, static_folder=str(BASE))

@app.get("/")
def home():
    return send_from_directory(BASE, "index.html")

@app.get("/<path:name>")
def static_files(name):
    return send_from_directory(BASE, name)

if __name__ == "__main__":
    app.run(debug=True)
