import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Logo } from 'components/Logo';

const Wrapper = styled.div`
	padding: 1rem;
`;

const LogoWrap = styled.div`
	transform: scale(0.4);
	display: flex;
	justify-content: space-around;
	margin-top: -50px;
`;

class Login extends React.Component {
	state = {
		error: null,
	};

	checkToken = () => {
		const {
			match: {
				params: { token },
			},
		} = this.props;
		if (token) {
			return fetch('https://api.dontpester.com/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					token,
				}),
			})
				.then(res => res.json())
				.then(resp => {
					if (resp.message === 'okay') {
						return window.location.replace(
							`dontpester://login/${resp.token}`,
						);
					}
					return this.setState({ error: resp.error });
				})
				.catch(e => this.setState({ error: e.toString() }));
		}
		return this.setState({ error: 'This link seems to be expired' });
	};

	componentDidMount() {
		this.checkToken();
	}

	render() {
		const { error } = this.state;
		return (
			<div className="container">
				<div className="row">
					<div className="col-12">
						<LogoWrap>
							<Logo />
						</LogoWrap>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<Wrapper>
							{error && (
								<p className="text-danger text-center">
									{error}
								</p>
							)}
						</Wrapper>
					</div>
				</div>
			</div>
		);
	}
}

Login.propTypes = {
	match: PropTypes.object,
};

export default Login;
