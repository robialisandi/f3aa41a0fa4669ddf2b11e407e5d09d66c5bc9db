import Button from '.';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    background: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  background: '#F9423A',
  onClick: action('Klik'),
  children: 'ADD +',
};
