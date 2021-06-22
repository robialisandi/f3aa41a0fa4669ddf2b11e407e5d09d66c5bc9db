import { action } from '@storybook/addon-actions';
import Location from '.';

export default {
  title: 'Components/Location',
  component: Location,
};

const Template = (args) => <Location {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Tokopedia Tower',
  onClick: action('Klik'),
};
