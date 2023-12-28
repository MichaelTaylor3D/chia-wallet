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

  getLoggedInFingerprint(options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.wallet_host}/get_logged_in_fingerprint`,
      {},
      this.config,
      options
    );
  }

  getPrivateKey(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.wallet_host}/get_private_key`,
      params,
      this.config,
      options
    );
  }

  pushTx(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.wallet_host}/push_tx`,
      params,
      this.config,
      options
    );
  }

  getCoinRecords(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.wallet_host}/get_coin_records`,
      params,
      this.config,
      options
    );
  }

  getCoinRecordsByName(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.wallet_host}/get_coin_records_by_names`,
      params,
      this.config,
      options
    );
  }

  getSpendableCoins(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.wallet_host}/get_spendable_coins`,
      params,
      this.config,
      options
    );
  }
}

module.exports = Wallet;