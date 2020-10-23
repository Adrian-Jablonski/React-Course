import React, { useState, useEffect } from 'react';

/**
 * Handles common form operations (Could be used for all forms)
 * @augments {Component<Props, State>}
 * @returns values, setValues, handleInputChange
 */
const useForm = (initialFieldValues, setCurrentId) => {
	const [values, setValues] = useState(initialFieldValues);
	const [errors, setErrors] = useState({});

	const handleInputChange = e => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value
		})
	}

	const resetForm = () => {
		setValues({
			initialFieldValues
		})
		setErrors({});
		setCurrentId(0);
	}

	return {
		values,
		setValues,
		handleInputChange,
		errors,
		setErrors,
		resetForm
	};
}

export default useForm;