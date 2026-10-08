import OfficeApp from '@/components/office/OfficeApp'
import { SITE } from '@/lib/site'
import { SKILLS } from '@/lib/data'

// ProfilePage + Person structured data: tells Google this site is the canonical
// home of *this* Rohan Kumar and links it to the same person's other profiles.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      alternateName: [SITE.handle, 'therohankumar'],
      inLanguage: 'en',
    },
    {
      '@type': 'ProfilePage',
      '@id': `${SITE.url}/#profile`,
      url: SITE.url,
      name: SITE.title,
      isPartOf: { '@id': `${SITE.url}/#website` },
      mainEntity: { '@id': `${SITE.url}/#person` },
      dateModified: new Date().toISOString(),
    },
    {
      '@type': 'Person',
      '@id': `${SITE.url}/#person`,
      name: SITE.name,
      givenName: 'Rohan',
      familyName: 'Kumar',
      alternateName: [SITE.handle, 'रोहन कुमार'],
      url: SITE.url,
      email: `mailto:${SITE.email}`,
      jobTitle: SITE.jobTitle,
      description: SITE.description,
      worksFor: { '@type': 'Organization', name: SITE.employer },
      homeLocation: {
        '@type': 'Place',
        address: { '@type': 'PostalAddress', addressLocality: SITE.city, addressCountry: SITE.country },
      },
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'Manipal University Jaipur' },
        { '@type': 'CollegeOrUniversity', name: 'Indira Gandhi National Open University' },
      ],
      knowsAbout: Object.values(SKILLS).flat(),
      sameAs: SITE.sameAs,
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <OfficeApp />
    </>
  )
}
