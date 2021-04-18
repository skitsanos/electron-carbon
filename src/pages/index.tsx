import React from 'react';
import {
    Button,
    Header,
    HeaderGlobalAction,
    HeaderGlobalBar,
    HeaderName,
    HeaderPanel,
    Tile
} from 'carbon-components-react';
import {AppSwitcher20} from '@carbon/icons-react';

export default () => <>
    <Header aria-label={'Application header'}>
        <HeaderName prefix={'Skitsanos'}>[My App]</HeaderName>

        <HeaderGlobalBar>
            <HeaderGlobalAction aria-label={'Switch'}
                                isActive={true}>
                <AppSwitcher20/>
            </HeaderGlobalAction>
        </HeaderGlobalBar>

        <HeaderPanel aria-label={'Panel'}
                     expanded={true}>
            Content here
        </HeaderPanel>
    </Header>

    <div className={'workspace'}>
            Electron <span id="electron-version"></span>
    </div>
</>;