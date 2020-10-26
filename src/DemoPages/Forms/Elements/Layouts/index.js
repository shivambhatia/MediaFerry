import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import PageTitle from '../../../../Layout/AppMain/PageTitle';

import Tabs, {TabPane} from 'rc-tabs';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

// Examples

import FormGrid from './Examples/FormGrid';
import FormGridFormRow from './Examples/FormGridFormRow';

class FormElementsLayouts extends React.Component {

    render() {
        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    
                    <FormGrid/>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}

export default FormElementsLayouts;



