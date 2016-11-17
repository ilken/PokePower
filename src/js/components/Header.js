import React from 'react';

export default class Header extends React.Component {
	render () {
		return (
            <nav className="navbar navbar-inverse navbar-fixed-top top-nav-collapse" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button"
                                className="navbar-toggle"
                                data-toggle="collapse"
                                data-target=".navbar-ex1-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand" href="#">PokePower</a>
                    </div>
                </div>
            </nav>
		);
	}
}
