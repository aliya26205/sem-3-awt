function TextBox({ name, setName }) {
  return (
    <div>
      <label>Name: </label>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default TextBox;
