import React, {Component} from "react";
import {components} from "react-select";
import AsyncSelect from "react-select/async";
import {searchIcon, resetSelectContainer} from './Dropdown.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {injectIntl} from "react-intl";

const IndicatorSeparator = () => null;
const ValueContainer = ({ children, ...props }) => {
    return (
        components.ValueContainer && (
            <components.ValueContainer {...props}>
                {!!children && (
                    <i
                        className={classNames("fa", "fa-search", searchIcon)}
                        aria-hidden="true"
                    />
                )}
                {children}
            </components.ValueContainer>
        )
    );
};

const Dropdown = (props) => {
    const {loadOptions, placeholder, onChange, intl} = props;
    const noOptionsMessage = intl.formatMessage({id: 'dropdown.no-options-message', defaultMessage: 'Type to search'});

    return (
        <div data-testid="asyncSelect">
            <AsyncSelect
                cacheOptions
                className={classNames(resetSelectContainer, 'react-select-container')}
                classNamePrefix="react-select"
                components={{IndicatorSeparator, ValueContainer}}
                loadOptions={loadOptions}
                noOptionsMessage={() => noOptionsMessage}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
}

export default Dropdown;

Dropdown.propTypes = {
    loadOptions: PropTypes.func,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
};
