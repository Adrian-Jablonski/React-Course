import React, { useState } from 'react';
import { Grid, TextField } from '@material-ui/core';
import useForm from './useForm';

const initialFieldValues = {
	fullName: '',
	mobile: '',
	email: '',
	age: '',
	bloodGroup: '',
	address: ''
}

// https://dev.to/maxbvrn/react-props-auto-complete-in-vs-code-2ana
/**
 * DCandidateForm to add to database
 * @augments {Component<Props, State>}
 */
const DCandidateForm = () => {
	const {
		values,
		setValues,
		handleInputChange
	} = useForm(initialFieldValues);

	return (
		<form autoComplete="off" noValidate>
			<Grid container>
				<Grid item xs={6}>
					<TextField
						name="fullName"
						variant="outlined"
						label="Full Name"
						value={values.fullName}
						onChange={handleInputChange}
					/>
					<TextField
						name="email"
						variant="outlined"
						label="Email"
						value={values.email}
						onChange={handleInputChange}
					/>
					<div>bloodGroup</div>
				</Grid>
				<Grid item xs={6}>
					<TextField
						name="mobile"
						variant="outlined"
						label="Mobile"
						value={values.mobile}
						onChange={handleInputChange}
					/>
					<TextField
						name="age"
						variant="outlined"
						label="Age"
						value={values.age}
						onChange={handleInputChange}
					/>
					<TextField
						name="address"
						variant="outlined"
						label="Address"
						value={values.address}
						onChange={handleInputChange}
					/>
				</Grid>
			</Grid>
		</form>
	);
}

export default DCandidateForm;
