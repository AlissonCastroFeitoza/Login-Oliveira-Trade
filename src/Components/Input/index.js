import * as inputestilo from './style'

function Input({ type, placeholder, value, onChange }) {
  return (
    <inputestilo.Input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  )
}

export default Input