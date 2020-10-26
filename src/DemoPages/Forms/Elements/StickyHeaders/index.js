import React, {Fragment} from 'react'

import PageTitle from '../../../../Layout/AppMain/PageTitle';

// Examples

import FormStickyBasic from './Examples/Basic';

class FormElementsSticky extends React.Component {

    render() {
        return (
            <FormStickyBasic/>
            // <Fragment>
            //     <PageTitle
            //         heading="Projects"
            //         subheading="Add sticky headers in forms sections!"
            //         icon="lnr-map text-info"
            //     />
            //     <FormStickyBasic/>
            // </Fragment>
        )
    }
}

export default FormElementsSticky;



