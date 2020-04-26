import React from 'react'

const Ask = () => {
    return (
        <div className="row">
            <div className="col s12">
                <div className="card #43a047 green darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Ask a question</span>
                        <div>
                            <div className="input-field">
                                <input
                                    placeholder="Enter email"
                                    id="email"
                                    type="text"
                                    name="email"
                                    className="yellow-input"

                                />
                                <label htmlFor="email">Title</label>
                            </div>
                            <div className="input-field">
                                <input
                                    placeholder="Enter password"
                                    id="password"
                                    type="password"
                                    name="password"
                                    className="yellow-input"

                                />
                                <label htmlFor="email">Text</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button
                            className="btn yellow darken-4"
                            style={{marginRight: 10}}

                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Ask