import Input from '.';

export default {
  title: 'Components/Form Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Type..',
  icon: 'assets/icons/pinned.svg',
};
