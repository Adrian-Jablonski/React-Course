import React, { useState, useEffect } from 'react';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles } from '@material-ui/core';
import { connect } from "react-redux";
import * as actions from "../actions/dCandidate";
import DCandidateForm from './DCandidateForm';

const styles = theme => ({
	root: {
		// Class override in material UI
		"& .MuiTableCell-head" : {
			fontSize: "1.25rem"
		}
	},
	paper: {
		margin: theme.spacing(2),
		padding: theme.spacing(2)
	}
})

// https://dev.to/maxbvrn/react-props-auto-complete-in-vs-code-2ana
/**
 * DCandidate component
 * @augments {Component<Props, State>}
 */
const DCandidate = ({ classes, dCandidateList, fetchAllDCandidates }) => {
	useEffect(() => {
		fetchAllDCandidates();
	}, [])
	return (
		<Paper className={classes.paper} elevation={3}>
			<Grid container>
				<Grid item xs={6}>
					<DCandidateForm
						
					/>
				</Grid>
				<Grid item xs={6}>
					<TableContainer>
						<Table>
							<TableHead className={classes.root}>
								<TableRow>
									<TableCell>Name</TableCell>
									<TableCell>Mobile</TableCell>
									<TableCell>Blood Group</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{dCandidateList.map((record, index) => {
									return (
										<TableRow key={index} hover>
											<TableCell>{record.fullName}</TableCell>
											<TableCell>{record.mobile}</TableCell>
											<TableCell>{record.bloodGroup}</TableCell>
										</TableRow>
									)
								})}
							</TableBody>
						</Table>
					</TableContainer>
				</Grid>
			</Grid>
		</Paper>
	);
}

const mapStateToProps = state => {
	return {
		dCandidateList: state.dCandidate.list
	}
}

const mapActionToProps = {
	fetchAllDCandidates: actions.fetchAll
}

// Styles from withStyles are accessed through the classes props
export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(DCandidate));
