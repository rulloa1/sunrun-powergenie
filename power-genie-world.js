// Power Genie configuration for the Scroll World engine.
// Reuses the existing rendered chain; mobile clips retain landscape framing.
mountScrollWorld(document.getElementById('world'), {
  brand: { name: 'THE POWER GENIE', href: '#top', logo: 'assets/brand/power-genie-lockup.webp' },
  mobileClipsUseDesktopFraming: true,
  idle: false, // Scroll alone controls the camera; no opening rewind loop.
  diveScroll: 1.3,
  connScroll: 0.45,
  hint: 'scroll to explore',
  nav: true,
  atmosphere: true,
  cta: { label: 'Get a Quote', href: '#quote' },

  sections: [
    {
      id: 'sun',
      scroll: 1.6,
      linger: 0.3,
      label: 'The Source',
      still: 'assets/stills/01-sun.webp',
      stillMobile: 'assets/stills/01-sun-m.webp',
      clip: 'assets/vid/encoded/01-sun-dive.mp4',
      clipMobile: 'assets/vid/mobile/01-sun-dive.mp4',
      accent: '#FF6B00',
      eyebrow: 'Where It Begins',
      title: 'A brighter way to power home.',
      body: 'Every second, the sun releases more energy than humanity has used in all of history. The Power Genie brings that power home to Houston.',
      tags: ['Solar Energy', 'Battery Storage'],
      cta: { primary: { label: 'Explore Your Solar Options', href: '#quote' } }
    },
    {
      id: 'roof',
      label: 'Your Roof',
      still: 'assets/stills/02-roof.webp',
      stillMobile: 'assets/stills/02-roof-m.webp',
      clip: 'assets/vid/encoded/02-roof-dive.mp4',
      clipMobile: 'assets/vid/mobile/02-roof-dive.mp4',
      accent: '#0066CC',
      eyebrow: 'Capture The Light',
      title: 'Put your roof to work.',
      body: 'Sleek rooftop solar systems designed to capture abundant Texas sunlight, professionally installed and backed by comprehensive manufacturer and workmanship warranties.',
      tags: ['Clean Energy', 'Custom Design', 'Quality Hardware']
    },
    {
      id: 'battery',
      label: 'Storage',
      still: 'assets/stills/03-battery.webp',
      stillMobile: 'assets/stills/03-battery-m.webp',
      clip: 'assets/vid/encoded/03-battery-dive.mp4',
      clipMobile: 'assets/vid/mobile/03-battery-dive.mp4',
      accent: '#4CAF50',
      eyebrow: 'Store & Protect',
      title: 'Power beyond daylight.',
      body: 'Store excess solar energy to help power your home during evening peak rates and severe weather. Paired battery storage keeps essential circuits running when the grid faces disruptions.',
      tags: ['Backup Power', 'Peak Savings', 'Resilient Storage']
    },
    {
      id: 'home',
      label: 'Home',
      still: 'assets/stills/04-home.webp',
      stillMobile: 'assets/stills/04-home-m.webp',
      clip: 'assets/vid/encoded/04-home-dive.mp4',
      clipMobile: 'assets/vid/mobile/04-home-dive.mp4',
      accent: '#87dbff',
      eyebrow: 'Power Everything',
      title: 'Energy for everyday life.',
      body: 'Power everyday comforts through Houston heat waves and daily routines with solar energy generated right on your property.',
      tags: ['Everyday Comfort', 'EV Readiness', 'Smart Energy']
    },
    {
      id: 'community',
      label: 'Community',
      still: 'assets/stills/05-community.webp',
      stillMobile: 'assets/stills/05-community-m.webp',
      clip: 'assets/vid/encoded/05-community-dive.mp4',
      clipMobile: 'assets/vid/mobile/05-community-dive.mp4',
      accent: '#4CAF50',
      eyebrow: 'Join The Movement',
      title: 'A brighter neighborhood.',
      body: 'Every home producing clean power contributes to a stronger, more resilient Texas energy grid and cleaner local communities.',
      tags: ['Local Resilience', 'Clean Generation', 'Houston Energy']
    },
    {
      id: 'cta',
      scroll: 1.6,
      linger: 0.3,
      label: 'Get Started',
      still: 'assets/stills/06-cta.webp',
      stillMobile: 'assets/stills/06-cta-m.webp',
      clip: 'assets/vid/encoded/06-cta-dive.mp4',
      clipMobile: 'assets/vid/mobile/06-cta-dive.mp4',
      accent: '#FF6B00',
      eyebrow: 'Your Turn',
      title: 'Explore what solar could do for your home.',
      body: 'Discover customized solar and battery configurations tailored to your roof, energy usage, and budget. Get your personalized quote through Sunrun.',
      cta: {
        primary: { label: 'Get Your Free Quote', href: '#quote' },
        secondary: { label: 'Explore The Journey', href: '#sun' }
      }
    }
  ],

  connectorsMobile: [
    'assets/vid/mobile/c01-sun-roof.mp4',
    'assets/vid/mobile/c02-roof-battery.mp4',
    'assets/vid/mobile/c03-battery-home.mp4',
    'assets/vid/mobile/c04-home-community.mp4',
    'assets/vid/mobile/c05-community-cta.mp4'
  ],

  connectors: [
    'assets/vid/encoded/c01-sun-roof.mp4',
    'assets/vid/encoded/c02-roof-battery.mp4',
    'assets/vid/encoded/c03-battery-home.mp4',
    'assets/vid/encoded/c04-home-community.mp4',
    'assets/vid/encoded/c05-community-cta.mp4'
  ]
});
