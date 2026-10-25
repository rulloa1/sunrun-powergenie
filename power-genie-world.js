// Power Genie configuration for the Scroll World engine.
// Reuses the existing rendered chain; mobile clips retain landscape framing.
    mountScrollWorld(document.getElementById('world'), {
      brand: { name: 'The Power Genie', href: '#top', logo: 'assets/brand/power-genie-lockup.webp' },
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
          title: 'Solar, Beautifully Done',
          body: 'Sleek all-black panels that look as good as they perform. Professionally installed, backed by a 25-year warranty.',
          tags: ['Premium Panels', 'Expert Install', '25-Year Warranty']
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
          title: 'Battery Backup',
          body: 'Store excess energy for peak hours, storm season and grid emergencies. Keep your lights — and your AC — on when the grid goes dark.',
          tags: ['Backup Power', 'Peak Savings', 'Grid Independence']
        },
        {
          id: 'home',
          label: 'Home',
          still: 'assets/stills/04-home.webp',
          stillMobile: 'assets/stills/04-home-m.webp',
          clip: 'assets/vid/encoded/04-home-dive.mp4',
          clipMobile: 'assets/vid/mobile/04-home-dive.mp4',
          accent: '#FFF8F0',
          eyebrow: 'Power Everything',
          title: 'Your Home, Powered',
          body: 'Run the AC through a Houston summer, charge your EV, and live comfortably — all on clean energy you generate.',
          tags: ['Lower Bills', 'EV Ready', 'Smart Home']
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
          title: 'Your Neighborhood',
          body: 'Join Houston families going solar. Build a cleaner, more resilient community together.',
          tags: ['Local Impact', 'Growing Network', 'Cleaner Future']
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
          title: 'Go Solar Today',
          body: 'See how much your Houston home can save. Get a free, customized quote in minutes.',
          cta: {
            primary: { label: 'Get Your Free Quote', href: '#quote' },
            secondary: { label: 'Learn More', href: '#sun' }
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
