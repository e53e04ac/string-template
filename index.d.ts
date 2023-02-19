/*!
    @e53e04ac/string-template/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { EventEmitter } from 'event-emitter';
import { Get } from 'hold';
import { ValueOrGet } from 'hold';

export declare namespace StringTemplate {

    type Options = {
        readonly template: ValueOrGet<string>;
        readonly variables: ValueOrGet<{
            readonly name: string;
            readonly value: string;
        }[]>;
    };

    type EventSpecs = Record<never, never>;

    type _Self = {
        readonly options: Get<Options>;
        readonly _options: Get<unknown>;
        readonly variableMap: Get<Map<string, string>>;
    };

    type Self = EventEmitter<EventSpecs> & {
        readonly _StringTemplate: Get<_Self>;
        readonly build: Get<Promise<string>>;
    };

    type Constructor = {
        (options: Options): Self;
    };

    type Companion = Record<never, never>;

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type StringTemplate = StringTemplate.Self;

export declare const StringTemplate: StringTemplate.ConstructorWithCompanion;
