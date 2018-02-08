import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessSection from './aural-status';

describe('<GuessSection />', () => {
	it('Renders without crashing', () => {
        shallow(<GuessSection />);
    });

})