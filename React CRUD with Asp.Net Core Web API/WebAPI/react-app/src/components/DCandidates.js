import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import * as actions from "../actions/dCandidate";

const DCandidate = ({ dCandidateList, fetchAllDCandidates }) => {
	useEffect(() => {
		fetchAllDCandidates();
	}, [])
	console.log(dCandidateList);
	return (
		<div>
			DCandidate
		</div>
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

export default connect(mapStateToProps, mapActionToProps)(DCandidate);
