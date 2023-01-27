/*!
    @e53e04ac/string-template/index.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

import { EventEmitter } from 'event-emitter';
import { hold } from 'hold';
import { unwrap } from 'hold';

/** @type {import('.').StringTemplate.Constructor} */
const constructor = ((options) => {

    const _options = ({
        template: hold(() => {
            return unwrap(options.template);
        }),
        variables: hold(() => {
            return unwrap(options.variables);
        }),
    });

    /** @type {import('.').StringTemplate._Self} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
        variableMap: hold(() => {
            const it = new Map();
            for (const variable of _options.variables()) {
                if (it.has(variable.name)) {
                    throw new Error(`Conflict: "${variable.name}"`);
                }
                it.set(variable.name, variable.value);
            }
            return it;
        }),
    });

    /** @type {import('.').StringTemplate.Self} */
    const self = ({
        ...EventEmitter({}),
        _StringTemplate: (() => {
            return _self;
        }),
        build: hold(async () => {
            return _options.template().replace(/(?<!\$)\$\$\{([0-9A-Za-z\-_.]+)\}/g, (substring, name, offset, template) => {
                const value = _self.variableMap().get(name);
                if (value == null) {
                    throw new Error(`NotFound: "${name}"`);
                }
                return value;
            });
        }),
    });

    return self;

});

/** @type {import('.').StringTemplate.Companion} */
const companion = ({});

/** @type {import('.').StringTemplate.ConstructorWithCompanion} */
const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as StringTemplate };
