import { defineMigration, patch, at, setIfMissing, set } from 'sanity/migrate';

export default defineMigration({
  title: 'Update hero defaults',
  documentTypes: ['redirects'], // only apply to certain document types
  migrate: {
    document(doc, context) {},
  },
});
