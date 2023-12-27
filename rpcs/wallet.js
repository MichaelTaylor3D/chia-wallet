const { callAndAwaitChiaRPC } = require("./rpc-base");
const { defaultConfig } = require("../utils/api-utils");

class Wallet {
  constructor(config = {}) {
    this.config = { ...defaultConfig, ...config };
  }

  getConfig() {
    return this.config;
  }

  setConfig(config) {
    this.config = { ...this.config, ...config };
  }

  getLoggedInFingerprint(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.datalayer_host}/get_logged_in_fingerprint`,
      params,
      this.config,
      options
    );
  }
}

module.exports = Wallet;