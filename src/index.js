'use strict';

import "@babel/polyfill";

import togglePopup from './modules/togglePopup';
import sendForm from './modules/sendForm';
import accordeon from './modules/accordeon';
import clickButton from './modules/clickButton';
import calc from './modules/calc';

const DataObj = new Object();

togglePopup();

accordeon();

calc(10000, DataObj);

clickButton();

sendForm(DataObj);