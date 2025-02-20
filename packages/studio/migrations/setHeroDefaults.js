import { defineMigration, patch, at, setIfMissing, set } from 'sanity/migrate';

export default defineMigration({
  title: 'Update hero defaults',
  documentTypes: ['soloGuidePage'], // only apply to certain document types
  migrate: {
    document(doc, context) {
      return [at('hero.layout', set('lrHero')), at('hero.feature', set('image'))];
    },
  },
});
