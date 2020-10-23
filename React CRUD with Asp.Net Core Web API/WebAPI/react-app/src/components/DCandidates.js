import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles } from '@material-ui/core';
import { connect } from "react-redux";
import * as actions from "../actions/dCandidate";
import DCandidateForm from './DCandidateForm';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useToasts } from 'react-toast-notifications';

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
const DCandidate = ({ classes, dCandidateList, fetchAllDCandidates, deleteDCandidate }) => {
	const [currentId, setCurrentId] = useState(0);
	const { addToast } = useToasts();

	useEffect(() => {
		fetchAllDCandidates();
	}, [])

	const onDelete = id => {
		if (window.confirm("Are you sure to delete this record?")) {
			deleteDCandidate(id, () => {
				addToast('Deleted successfully', {appearance: 'info'});
			});
		}
	}

	return (
		<Paper className={classes.paper} elevation={3}>
			<Grid container>
				<Grid item xs={6}>
					<DCandidateForm
						// Equivalent to writing currentId={currentId} setCurrentId={setCurrentId}
						{...({currentId, setCurrentId})}
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
									<TableCell></TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{dCandidateList.map((record, index) => {
									return (
										<TableRow key={index} hover>
											<TableCell>{record.fullName}</TableCell>
											<TableCell>{record.mobile}</TableCell>
											<TableCell>{record.bloodGroup}</TableCell>
											<TableCell>
												<ButtonGroup variant="text">
													<Button>
														<EditIcon 
															color="primary"
															onClick={() => {
																setCurrentId(record.id);
															}}
														/>
													</Button>
													<Button>
														<DeleteIcon
															color="secondary"
															onClick={() => {
																onDelete(record.id)
															}}
														/>
													</Button>
												</ButtonGroup>
											</TableCell>
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
	fetchAllDCandidates: actions.fetchAll,
	deleteDCandidate: actions.deleteCandidate
}

// Styles from withStyles are accessed through the classes props
export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(DCandidate));
