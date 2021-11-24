import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {
  provideFASTDesignSystem,
  fastCard,
  fastButton,
  fastTextField,
  buttonStyles,
  fastRadio,
  fastRadioGroup,
  radioStyles
} from '@microsoft/fast-components';
import { css } from '@microsoft/fast-element';

if (environment.production) {
  enableProdMode();
}

provideFASTDesignSystem().register(
  fastCard(),
  fastButton({
    styles: (ctx, def) => css`
      ${buttonStyles(ctx, def as any)}
      :host([appearance="accent"]) button {
        background: blue;
      }
    `,
  }),
  fastTextField(),
  fastRadio({
    styles: (ctx, def) => css`
      ${  radioStyles
    (ctx, def as any)}
      :host([aria-checked="true"]) .control {
        background: blue;
      }
      :host([aria-checked="true"]:not([disabled])) .control:hover {
        background: blue;
      }
    `,
  }),
  fastRadioGroup()
);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
