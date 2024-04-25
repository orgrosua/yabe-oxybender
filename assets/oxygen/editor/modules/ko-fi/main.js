/**
 * @module ko-fi
 * @package Yabe Oxybender
 * @since 1.0.1
 * @author Joshua Gugun Siagian <suabahasa@gmail.com>
 * 
 * Add a Ko-fi button to the oxygen panel.
 */

import { logger } from '../../logger.js';
import './style.scss';
import toolbar_item from './toolbar-item.html?raw';

const oxygenToolbarSelector = '#oxygen-toolbar ul.group-wrapper.right';

const coffee = localStorage.getItem('yabe-oxybender-ko-fi') ?? -1;

if (coffee === -1 || (coffee !== 'done' && coffee !== 'never' && new Date() > new Date(coffee))) {
    // create element from html string
    const koFiButtonHtml = document.createRange().createContextualFragment(`${toolbar_item}`);

    // add the button to the oxygen toolbar as the first item
    const oxygenToolbar = document.querySelector(oxygenToolbarSelector);
    oxygenToolbar.insertBefore(koFiButtonHtml, oxygenToolbar.firstChild);

    document.getElementById('oxybender-ko-fi').addEventListener('click', (el) => {
        const date = new Date();
        date.setDate(date.getDate() + 7);
        localStorage.setItem('yabe-oxybender-ko-fi', date);
        window.open('https://ko-fi.com/Q5Q75XSF7', '_blank');
        document.getElementById('oxybender-ko-fi').remove();
    });
}

logger('Module loaded!', { module: 'ko-fi' });
