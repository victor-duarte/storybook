import { Text } from "../components/Text";

export default {
  argTypes: {
    color: { control: "color" },
  },
  component: Text,
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: {
      values: [
        { name: "blue", value: "#00f" },
        { name: "green", value: "#0f0" },
        { name: "red", value: "#f00" },
        { name: "yellow", value: "#ff0" },
      ],
    },
  },
  title: "Custom/Text",
};

const Template = (args) => <Text {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: "Primary Title",
  tag: "h1",
};

export const Secondary = Template.bind({});

Secondary.args = {
  label: "Secondary Title",
  tag: "h2",
};

export const Paragraph = Template.bind({});

Paragraph.args = {
  color: "red",
  label: "Paragraph",
  tag: "p",
};

export const Default = Template.bind({});

Default.args = {
  label: "Default",
};
