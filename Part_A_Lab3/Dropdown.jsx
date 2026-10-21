
function Dropdown({ value, onChange, options }) {
  return (
    <select value={value} onChange={onChange} required>
      <option value="">Select Course</option>

      {options.map((course) => (
        <option key={course} value={course}>
          {course}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
