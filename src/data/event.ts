// Everything you may want to edit lives here.

const address = 'No. 20, 2nd Cross Street, Columbuthurai, Jaffna.';
const mapQuery = 'No. 20, 2nd Cross Street, Columbuthurai, Jaffna, Sri Lanka';

export const event = {
  babyEn: 'Divesh',
  babyTa: 'திவேஷ்',
  hostsTa: 'திரு. திருமதி. சண்முகராஜா குடும்பத்தினர்',
  hostsEn: 'The Shanmugarajah Family',

  // Ceremony start, Sri Lanka time (UTC+05:30)
  startISO: '2026-11-05T10:00:00+05:30',
  endISO: '2026-11-05T13:00:00+05:30',
  dateText: '05 / 11 / 2026',
  dayTa: 'வியாழக்கிழமை',
  dayEn: 'Thursday, 5 November 2026',
  timeText: '10.00 AM',

  address,
  // Replace with your exact Google Maps pin link if you have one (then regenerate the QR)
  mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`,
  mapEmbed: `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=16&output=embed`,

  siteUrl: 'https://divesh.shanraj.com',
};

const fmt = (iso: string) => new Date(iso).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');

export const calendar = {
  google:
    'https://calendar.google.com/calendar/render?action=TEMPLATE' +
    `&text=${encodeURIComponent(`தொட்டில் விழா`)}` +
    `&dates=${fmt(event.startISO)}/${fmt(event.endISO)}` +
    `&details=${encodeURIComponent(`அன்புடன் அழைக்கின்றோம்.\n${event.siteUrl}`)}` +
    `&location=${encodeURIComponent(event.address)}`,
  ics: [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//divesh.shanraj.com//Invite//EN',
    'BEGIN:VEVENT',
    `UID:thottil-vizha-divesh@shanraj.com`,
    `DTSTAMP:${fmt('2026-10-27T00:00:00Z')}`,
    `DTSTART:${fmt(event.startISO)}`,
    `DTEND:${fmt(event.endISO)}`,
    `SUMMARY:தொட்டில் விழா`,
    `LOCATION:${event.address.replace(/,/g, '\\,')}`,
    `DESCRIPTION:${event.siteUrl}`,
    'BEGIN:VALARM',
    'TRIGGER:-P1D',
    'ACTION:DISPLAY',
    'DESCRIPTION:நாளை தொட்டில் விழா',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n'),
};
