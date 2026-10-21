
function CountryDropdown({ country, setCountry }) {
  return (
    <select
      value={country}
      onChange={(e) => setCountry(e.target.value)}
    >
      <option value="">Select Country</option>
      <option value="India">India</option>
      <option value="France">France</option>
      <option value="Japan">Japan</option>
      <option value="Australia">Australia</option>
    </select>
  );
}

export default CountryDropdown;
