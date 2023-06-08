/* eslint-disable @typescript-eslint/no-unused-vars */

'use strict';

import fast from '@f5devcentral/f5-fast-core';
import assert from 'assert';
import { RegExTree } from '../src/regex';
import path from 'path';
import { FsDataProvider } from '@f5devcentral/f5-fast-core/lib/data_provider';

const events = [];
const parsedFileEvents: any[] = []
const parsedObjEvents: any[] = []


describe('tgz unpacker tests', function () {

    before(async function () {
        // log test file name - makes it easer for troubleshooting
        console.log('       file:', __filename)

        // clear the events arrays
        parsedFileEvents.length = 0
        parsedObjEvents.length = 0

    });

    afterEach(function () {
        events.length = 0;
    })



    it(`load fast template set`, async () => {

        const localPath = path.join(__dirname, '..', 'templates', 'bigip-fast');

        const provider = new fast.FsTemplateProvider(localPath)
        provider.invalidateCache();
        
        console.log('localPath', localPath)

        const resp = await provider.fetch('http')
        .then((template) => {
            console.log(template.getParametersSchema());
            // console.log(template.render({
            //     var: "value",
            //     boolVar: false
            // }));
        })
        .catch(e => {
            console.log(e);
        })

        assert.ok(resp);
    })





});