import { pageTitle } from 'ember-page-title';
import { WelcomePage } from 'ember-welcome-page';
import type { TOC } from '@ember/component/template-only';
<template>
  {{pageTitle "EmberViteApp"}}

  {{outlet}}

  {{! The following component displays Ember's default welcome message. }}
  <WelcomePage />
  {{! Feel free to remove this! }}
</template> satisfies TOC<void>
