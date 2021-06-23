import DatePicker from '.';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
};

const Template = (args) => <DatePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  getSelectedDay: action('Klik'),
  labelFormat: 'MMM',
  color: '#374e8c',
  endDate: 120,
};
