function TextBox({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Enter student name"
      value={value}
      onChange={onChange}
      required
    />
  );
}

export default TextBox;
