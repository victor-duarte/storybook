export const Text = (props) => {
  const { label, tag: Tag, color } = props;

  if (Tag) {
    return <Tag style={color && { color }}>{label}</Tag>;
  }

  return <span style={color && { color }}>{label}</span>;
};
