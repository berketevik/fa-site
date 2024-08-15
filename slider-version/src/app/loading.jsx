import React from 'react';

const Loading = () => {
    return (
        <>
            <div id="preloader">
                <div id="ambrox-preloader" className="ambrox-preloader">
                    <div className="animation-preloader">
                        <div className="spinner"></div>
                        <div className="txt-loading">
                            <span data-text-preloader="A" className="letters-loading">
                                F
                            </span>
                            <span data-text-preloader="M" className="letters-loading">
                                A
                            </span>
                            <span data-text-preloader="B" className="letters-loading">
                                M
                            </span>
                            <span data-text-preloader="R" className="letters-loading">
                                İ
                            </span>
                            <span data-text-preloader="O" className="letters-loading">
                                M
                            </span>
                            <span data-text-preloader="X" className="letters-loading">
                                A
                            </span>
                            <span data-text-preloader="O" className="letters-loading">
                                R
                            </span>
                            <span data-text-preloader="X" className="letters-loading">
                                L
                            </span>
                            <span data-text-preloader="O" className="letters-loading">
                                I
                            </span>
                            <span data-text-preloader="X" className="letters-loading">
                                K
                            </span>
                        </div>
                    </div>
                    <div className="loader">
                        <div className="row">
                            <div className="col-3 loader-section section-left">
                                <div className="bg"></div>
                            </div>
                            <div className="col-3 loader-section section-left">
                                <div className="bg"></div>
                            </div>
                            <div className="col-3 loader-section section-right">
                                <div className="bg"></div>
                            </div>
                            <div className="col-3 loader-section section-right">
                                <div className="bg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Loading;