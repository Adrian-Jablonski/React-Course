import React, { useState, useEffect } from 'react';

/**
 * Handles common form operations (Could be used for all forms)
 * @augments {Component<Props, State>}
 * @returns values, setValues, handleInputChange
 */
const useForm = (initialFieldValues) => {
	const [values, setValues] = useState(initialFieldValues);

	const handleInputChange = e => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value
		})
	}
	return (
		values,
		setValues,
		handleInputChange
	);
}

export default useForm;