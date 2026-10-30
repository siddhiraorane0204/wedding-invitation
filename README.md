# Wedding Invitation — React + Vite

A responsive, single-page wedding invitation inspired by the supplied reference video.

## Included
- Animated invitation cover / opening
- Wedding details and live countdown
- Haldi, Mehendi, Wedding and Reception event cards
- Click-to-open photo gallery
- Background music play/pause control
- RSVP form (front-end demo only)
- Google Maps search link
- Mobile navigation and responsive layout

## Requirements
- Node.js (LTS recommended)
- npm
- Visual Studio Code

## Run in VS Code
1. Extract the ZIP file.
2. Open the extracted `wedding-invitation` folder in VS Code.
3. Open Terminal → New Terminal.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Make it your own
Edit `src/data.js`:
- Change bride and groom names.
- Change the wedding date and date label.
- Change venue, address and Google Maps search query.
- Change event details and gallery photo URLs.

Important: `date` must be a valid JavaScript date string. Example:
`2027-10-30T18:00:00+05:30`

## Add background music
Put an MP3 file at:
`public/music/wedding-music.mp3`

Use music you own or have permission to use. Visitors must click Play because browsers generally block autoplay with sound.

## RSVP limitation
The included RSVP form validates fields and displays a confirmation message, but it does NOT send or save responses. To collect real guest responses, connect a backend/API or a form service and store submissions securely.

## Google Maps
The venue button opens a Google Maps search for the sample venue. Update `mapQuery` in `src/data.js` to your real venue name or address.

## Build for production
Run:
`npm run build`

Vite creates the production website in the `dist` folder.

To test the production build locally:
`npm run preview`


## Theme update
This version uses a Royal Burgundy & Gold palette (burgundy, antique gold, and ivory) and the RSVP section/navigation has been removed.
