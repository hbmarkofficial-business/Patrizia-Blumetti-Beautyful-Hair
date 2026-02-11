import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Friseursalon Bergisch Gladbach | Patrizia Blumetti Beautyful Hair</title>
        <meta
          name="description"
          content="Besuche unseren Premium Friseursalon Patrizia Blumetti Beautyful Hair in Bergisch Gladbach für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Friseursalon, Herrenfriseur, Damenfriseur, Haarschnitt, Bartpflege, Rasur, Bergisch Gladbach"
        />
        <link rel="canonical" href="https://gentlemanscut.de" />

        {/* Open Graph */}
        <meta property="og:title" content="Patrizia Blumetti Beautyful Hair | Premium Friseursalon Bergisch Gladbach" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege in Bergisch Gladbach bei Patrizia Blumetti Beautyful Hair."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gentlemanscut.de" />
        <meta property="og:image" content="https://gentlemanscut.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Patrizia Blumetti Beautyful Hair | Premium Friseursalon Bergisch Gladbach" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und professionelles Styling."
        />
        <meta name="twitter:image" content="https://gentlemanscut.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HairSalon",
            "name": "Patrizia Blumetti Beautyful Hair",
            "image": "https://gentlemanscut.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Mutzer Str. 15",
              "addressLocality": "Bergisch Gladbach",
              "postalCode": "51467",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "50.9918",
              "longitude": "7.1293"
            },
            "url": "https://gentlemanscut.de",
            "telephone": "+49 1577 4460986",
            "openingHours": "Di-Fr 09:00-18:00, Do 09:00-19:00, Sa 08:00-14:00",
            "priceRange": "€€",
            "servesCuisine": "Friseursalon Services",
            "sameAs": [
              "https://www.facebook.com/patriziablumetti",
              "https://www.instagram.com/patriziablumetti"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;

