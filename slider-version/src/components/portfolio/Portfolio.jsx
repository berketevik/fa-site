import React from 'react';
import PortfolioData from '@/assets/jsonData/portfolio/PortfolioData.json'
import SinglePortfolio from './SinglePortfolio';

const Portfolio = () => {
    return (
            <div className="container">
                <div className="content">
                    <div className="row align-center">
                        <div className="col-lg-1 info">
                            <h2 className="curbe-title">Projelerimiz</h2>
                        </div>
                        <div className="col-lg-10 offset-lg-1 thumb">
                            <div id="portfolio-grid" className="gallery-items colums-3">
                                {PortfolioData.map(portfolio =>
                                    <SinglePortfolio portfolio={portfolio} key={portfolio.id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Portfolio;