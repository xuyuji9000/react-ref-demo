import React, { Component } from "react";

class CustomTextInput extends Component
{
    constructor(props)
    {
        super(props);
        this.focus = this.focus.bind(this);
    }

    /**
     * get ref
     */
    focus()
    {
        var newText = this.refs.newText;
        newText.focus();
    }

    render()
    {
        return (
            <div>
                <input
                    type="text"
                    ref="newText"
                ></input>
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focus}
                ></input>
            </div>
        );
    }
}

export default CustomTextInput;
