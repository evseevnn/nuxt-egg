'use strict';
const { Nuxt, Builder } = require('nuxt');
const NUXT = Symbol('Application#nuxt');
const { loadNuxtConfig } = require('../../lib/utils');
module.exports = {
  get nuxt() {
    if (!this[NUXT]) {
      const config = loadNuxtConfig(this.config);
      this[NUXT] = new Nuxt(config);
      if (config.dev) {
        new Builder(this[NUXT]).build();
      }
    }
    return this[NUXT];
  },
};
