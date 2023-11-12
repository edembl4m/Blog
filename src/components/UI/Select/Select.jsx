import React from 'react'

const Select = ({options, defaultValue, value, onCahange}) => {
  return (
    <select
        value={value}
        onChange={event => onCahange(event.target.value)}
    >
        <option disabled value="">{defaultValue}</option>
        {
            options.map(option =>
                <option key={option.value} value={option.value}>{option.name}</option>    
            )
        }
    </select>
  )
}

export default Select