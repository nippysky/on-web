import CodeDialog from "src/components/shared/CodeDialog";
const DefaultsliderCode = () => {
    return (
        <>
            <CodeDialog>
                {`

import * as React from 'react';
import { Slider } from '@mui/material';

<Slider defaultValue={30}  />
`}
            </CodeDialog>
        </>
    );
};

export default DefaultsliderCode;