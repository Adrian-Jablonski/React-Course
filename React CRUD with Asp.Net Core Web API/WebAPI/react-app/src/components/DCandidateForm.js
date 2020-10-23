import React, { useEffect, useState } from 'react';
import { Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField, withStyles } from '@material-ui/core';
import useForm from './useForm';
import * as actions from "../actions/dCandidate";
import { connect } from 'react-redux';
import { useToasts } from 'react-toast-notifications';

const styles = theme => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			minWidth: 200
		}
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 200
	},
	smMargin: {
		margin: theme.spacing(1)
	}
})

const initialFieldValues = {
	fullName: '',
	mobile: '',
	email: '',
	age: '',
	bloodGroup: '',
	address: ''
}

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

// https://dev.to/maxbvrn/react-props-auto-complete-in-vs-code-2ana
/**
 * DCandidateForm to add to database
 * @augments {Component<Props, State>}
 */
const DCandidateForm = ({ classes, dCandidateList, createDCandidate, updateDCandidate, currentId, setCurrentId }) => {
	const { addToast } = useToasts();
	const {
		values,
		setValues,
		handleInputChange,
		errors,
		setErrors,
		resetForm
	} = useForm(initialFieldValues, setCurrentId);

	const validate = () => {
		let temp = {};
		temp.fullName = values.fullName ? "" : "This field is required";
		temp.mobile = values.mobile ? "" : "This field is required";
		temp.bloodGroup = values.bloodGroup ? "" : "This field is required";
		temp.email = (/^$|.+@.+..+/).test(values.email) ? "" : "Email is not valid."
		setErrors({
			...temp
		})
		return Object.values(temp).every(x => x === ""); // Checks if every value in object is empty
	}

	const handleSubmit = e => {
		e.preventDefault();
		if (validate()) {
			const onSuccess = () => {
				addToast('Submitted successfully', {appearance: 'success'});
				resetForm();
			}
			if (currentId === 0) {
				createDCandidate(values, onSuccess)
			} else {
				updateDCandidate(currentId, values, onSuccess)
			}
		}
	}

	useEffect(() => {
		if (currentId !== 0) {
			setValues({
				...dCandidateList.find((x) => x.id === currentId)
			})
		}
	}, [currentId])

	return (
		<form autoComplete="off" noValidate className={classes.root}>
			<Grid container>
				<Grid item xs={6}>
					<TextField
						name="fullName"
						variant="outlined"
						label="Full Name"
						value={values.fullName}
						onChange={handleInputChange}
						// Conditionally added props into component
						{...(errors.fullName && {error: true, helperText: errors.fullName })}
					/>
					<TextField
						name="email"
						variant="outlined"
						label="Email"
						value={values.email}
						onChange={handleInputChange}
						{...(errors.email && {error: true, helperText: errors.email })}
					/>
					<FormControl variant="outlined"
						className={classes.formControl}
						{...(errors.bloodGroup && {error: true })}
					>
						<InputLabel>Blood Group</InputLabel>
						<Select
							name="bloodGroup"
							value={values.bloodGroup}
							onChange={handleInputChange}
						>
							<MenuItem value="">Select Blood Group</MenuItem>
							{bloodGroups.map((bloodGroup) => (
								<MenuItem
									key={bloodGroup}
									value={bloodGroup}
								>
									{bloodGroup}
								</MenuItem>
							)
							)}

						</Select>
						{errors.bloodGroup && <FormHelperText>{errors.bloodGroup}</FormHelperText>}
					</FormControl>
				</Grid>
				<Grid item xs={6}>
					<TextField
						name="mobile"
						variant="outlined"
						label="Mobile"
						value={values.mobile}
						onChange={handleInputChange}
						{...(errors.mobile && {error: true, helperText: errors.mobile })}
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
					<div>
						<Button
							className={classes.smMargin}
							variant="contained"
							color="primary"
							onClick={handleSubmit}
						>
							Submit
						</Button>
						<Button
							className={classes.smMargin}
							variant="contained"
							onClick={resetForm}
						>
							Reset
						</Button>
					</div>
				</Grid>
			</Grid>
		</form>
	);
}


const mapStateToProps = state => {
	return {
		dCandidateList: state.dCandidate.list
	}
}

const mapActionToProps = {
	createDCandidate: actions.create,
	updateDCandidate: actions.update
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(DCandidateForm));
