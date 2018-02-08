import React from 'react';
import {shallow, mount} from 'enzyme';

import StatusSection from './aural-status';

describe('<StatusSection />', () => {
	it('Renders without crashing', () => {
        shallow(<StatusSection />);
    });

})