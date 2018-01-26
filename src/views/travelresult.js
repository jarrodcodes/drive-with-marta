import React, { Component } from 'react';

class TravelResult extends Component {
    constructor(name) {
    super()
    this.name = name;
    }
    render() {

        return (
            <div className="card" style={{ width: 18 + 'rem' }}>
                <img className="card-img-top" src="https://maps.googleapis.com/maps/api/staticmap?size=400x400&maptype=roadmap&path=enc:kgmmEjd}aOzA@A\OjD~Bb@CNjATtEx@nCd@H@TDRDj@Jh@LrA^nAh@vAv@hAv@fJzGlJrHrIzGjAt@jAn@vErBtF`CjAn@hAv@dA|@`AdA|@jAx@nApJpPxKbQrB|C|@hAbAbAfA|@hAt@nAl@pAf@pA\tAVrAPvAJvAFtA?rNKxDMzDItM@dBAvAGlD[zZgDtAMnDQrNc@lYcAvACxABvAFtALjDd@hYbEvALvABdk@PhHF~PHvA@tAJrAXpAd@hAr@bAbAz@jAhEjHv@lA^b@b@\FFl@d@b@\DKLa@rAqC@CDKLULUXg@\g@|@gAz@kAbBwClAiCr@sApIwMr@sAf@}AZcBLgB?gBWqNGgBKgBOgBUeBy@cEuQ}z@y@gEs@iEq@iEk@kEg@mEe@kEyAyOScBYeB_@_Ba@}Ag@}Am@yAq@wAu@sAuB}C}LaQy@oAw@qAs@uAm@wAk@{Ag@}Ac@_B_@aB[cBi@iEcAcLc@kE_AoIuBeVKeBIiBCgB@gBBiBJgBPeBVcB\cB`@_BjEwOdAaEZaBTeBLgBFgB?iBEgBMgBSgBYcBa@_Bi@cBm@yAgPm\mAcCm@wAi@yAc@cBYcBQcBMgBaAmUKiBQeB[cBc@}AyAsDq@wAu@oA{@kAiAiAoA_AkAq@oAk@mKkE_DuAkAq@iAw@eA_AaAeA}@kAw@oAs@uAk@yAg@}Aa@aBYcBSeBMgBGiBAqE?a@@gG?sAB?" alt="Card image cap">
                </img>
                <div className="card-body">
                    <h5 className="card-title">{this.name.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        )
    }
}

export default (TravelResult);