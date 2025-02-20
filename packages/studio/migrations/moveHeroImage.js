import { defineMigration, patch, at, setIfMissing, unset } from 'sanity/migrate';

export default defineMigration({
  title: 'Copy heroImage to hero.image and remove heroImage',
  documentTypes: ['soloGuidePage'], // only apply to certain document types
  migrate: {
    document(doc, context) {
      return [at('hero.image', setIfMissing(doc.heroImage)), at('heroImage', unset())];
    },
  },
});
