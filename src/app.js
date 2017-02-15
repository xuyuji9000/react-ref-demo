import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";

import store from "./store";
import CustomTextInput from "./components/CustomTextInput";

render(
    <CustomTextInput></CustomTextInput>,
    document.getElementById('root')
);
