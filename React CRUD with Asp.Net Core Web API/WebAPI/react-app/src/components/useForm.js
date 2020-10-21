import React, { useState, useEffect } from 'react';

/**
 * Handles common form operations (Could be used for all forms)
 * @augments {Component<Props, State>}
 * @returns values, setValues, handleInputChange
 */
const useForm = (initialFieldValues, validate = true) => {
	const [values, setValues] = useState(initialFieldValues);
	const [errors, setErrors] = useState({});

	const handleInputChange = e => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value
		})
	}

	return {
		values,
		setValues,
		handleInputChange,
		errors,
		setErrors
	};
}

export default useForm;