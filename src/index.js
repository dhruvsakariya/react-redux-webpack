import 'babel-polyfill';
import './styles/style.scss';
import {render} from 'react-dom';
import React from 'react';
import ProviderWrapper from './app';

render (
	<ProviderWrapper />,
	document.getElementById('root')
);