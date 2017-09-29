import {InjectionToken} from '@angular/core';
import {UriConfig} from '../interfaces/uri-config';

export let URI_CONFIG = new InjectionToken<UriConfig>('uri.config');
