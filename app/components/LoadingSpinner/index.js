import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Spinner = styled.div`
	display: flex;
	justify-content: space-around;
	width: 64px;
	height: 64px;
	margin: 0 auto;
	&:after {
		content: '';
		display: block;
		width: 46px;
		height: 46px;
		margin: 1px;
		border-radius: 50%;
		border: 3px solid #3742fa;
		border-color: #3742fa transparent #3742fa transparent;
		animation: lds-dual-ring 1.2s linear infinite;
	}
	@keyframes lds-dual-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

const LoadingSpinner = ({ message }) => (
	<div className="container h-100">
		<div className="row d-block h-100">
			<div className="col-12">
				<h4 className="text-center pt-3">{message}</h4>
				<Spinner />
			</div>
		</div>
	</div>
);

export { LoadingSpinner };

LoadingSpinner.propTypes = {
	message: PropTypes.string,
};
