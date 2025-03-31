import { FaRunning } from 'react-icons/fa';

export default {
  title: 'CTA',
  name: 'cta',
  type: 'object',
  icon: FaRunning,
  description: 'A pre-designed CTA will appear on page. Dismiss to continue.',
  fields: [
    {
      name: 'idTag',
      title: 'ID',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
      description:
        'Add ID to the selected string. Please only use alphanumeric characters and hypen and do not start the string with a number.',
    },
    {
      name: 'title',
      title: 'CTA Title',
      type: 'string',
      initialValue: 'CONTACT US TODAY FOR A FREE PAINTING QUOTE',
    },
    {
      name: 'cta',
      title: 'CTA',
      type: 'string',
      initialValue: 'A pre-designed CTA will appear on page. Dismiss to continue.',
      readOnly: true,
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Pre-designed CTA',
      };
    },
  },
};
