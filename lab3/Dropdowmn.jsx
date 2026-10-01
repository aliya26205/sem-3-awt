function Dropdown({ course, setCourse }) {
  return (
    <div>
      <label>Course: </label>

      <select
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      >
        <option value="">Select Course</option>
        <option value="MCA">MCA</option>
        <option value="BCA">BCA</option>
        <option value="MBA">MBA</option>
      </select>
    </div>
  );
}

export default Dropdown;
