import { action } from '@storybook/addon-actions';
import Suggest from '.';

export default {
  title: 'Components/Suggest',
  component: Location,
};

const Template = (args) => <Suggest {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Kulina',
  address: 'Jalan Tulodong Atas 28, Senayan Kebayoran Baru',
  onClick: action('klic'),
};
