# SANDHYA • KUCHUPUCHU • BETTU — Birthday Surprise

## Easiest way
1. Keep the whole folder together.
2. Double-click `index.html` to open it in a browser.
3. The website has 10 connected webpages.

## Python/Flask way
Install Flask:
`pip install flask`

Then:
`python app.py`

Open:
`http://127.0.0.1:5000`

## Customize the final photo page
You have two easy choices:
- Open page 10 and click "Choose My Picture" for a temporary browser preview.
- For a permanent picture, put your image in `assets/` and edit the `<img>` on page10.html, for example:
  `<img src="assets/my-photo.jpg" alt="Sandhya birthday memory">`

## Files
- index.html = first surprise/gate
- page2.html ... page10.html = 9 more pages
- styles.css = all design/animations
- script.js = popups, progress bar, photo preview, interactions
- app.py = optional Python Flask launcher
- assets/card1.svg ... card10.svg = 10 greeting-card images
- assets/couple_hidden_faces.svg = face-hidden couple illustration
- assets/romantic_lights.mp4 = local abstract romantic-light video (if generated)

## Notes
The website uses Google Fonts via an online stylesheet. If offline, the fallback fonts still work.
