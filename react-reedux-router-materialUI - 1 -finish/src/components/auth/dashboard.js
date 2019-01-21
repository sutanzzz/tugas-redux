import withRoot from '../theme/withRoot'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'
import ProductHero from '../../components/layouts/productHero'
import ProductValue from '../../components/layouts/productValue'
import ProductCategories from '../../components/layouts/productCategories'
import ProductHowItWork from '../../components/layouts/productHowItWork'
import ProductCTA from '../../components/layouts/productCTA'
import ProductSmokingHero from '../../components/layouts/productSmokingHero'

class Dasboard extends Component {
    render() {

        const { auth } = this.props;

        if(!auth.uid) return <Redirect to='/signin' />
        return(
            <div className="Dashboard">
                <ProductHero />
                <ProductValue />
                <ProductCategories />
                <ProductHowItWork />
                <ProductCTA />
                <ProductSmokingHero />
            </div>
        );
    }
} 

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth
    }
}

export default compose(
    withRoot,
    connect(mapStateToProps))
    (Dasboard);