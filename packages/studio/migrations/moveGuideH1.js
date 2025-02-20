import { defineMigration, patch, at, setIfMissing, unset } from 'sanity/migrate';

export default defineMigration({
  title: 'Copy H1 data to new Hero H1 structure',
  documentTypes: ['soloGuidePage'], // only apply to certain document types
  migrate: {
    document(doc, context) {
      return [at('hero.h1', setIfMissing(doc.h1)), at('h1', unset())];
    },
  },
});
