import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Label from '../Label/Label.jsx';
import {radioButton} from './RadioGroup.module.scss';
import moment from 'moment';
import {injectIntl} from "react-intl";

const StartDateRadioGroup = props => {
    const {onChange} = props;
    const groupName = "startDateType";
    const date = moment().format("Do MMMM YYYY");
    return (<div>
        <div className={classNames(radioButton)}>
            <input
                type="radio"
                value="Today"
                name={groupName}
                onChange={onChange}
            />
            <Label translationKey="TODAY_LABEL" defaultValue="Today"/>&nbsp;|
            &nbsp;{date}
        </div>
        <div className={classNames(radioButton)}>
            <input
                type="radio"
                value="From"
                name={groupName}
                onChange={onChange}
            />
            <Label translationKey="FROM_LABEL" defaultValue="From"/>
        </div>
    </div>)
};

StartDateRadioGroup.propTypes = {
    intl: PropTypes.object.isRequired,
    onChange: PropTypes.func
};

export default injectIntl(StartDateRadioGroup);