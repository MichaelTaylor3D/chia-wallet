const { callAndAwaitChiaRPC } = require("./rpc-base");
const { defaultConfig } = require("../utils/api-utils");
const walletUtils = require("./wallet-utils");

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

  get utils() {
    return walletUtils;
  }

  getLoggedInFingerprint(options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.wallet_host}/get_logged_in_fingerprint`,
      {},
      this.config,
      {
        includeFee: false,
        ...options,
      }
    );
  }

  getPrivateKey(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.wallet_host}/get_private_key`,
      params,
      this.config,
      {
        includeFee: false,
        ...options,
      }
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
      {
        includeFee: false,
        ...options,
      }
    );
  }

  getCoinRecordsByName(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.wallet_host}/get_coin_records_by_names`,
      params,
      this.config,
      {
        includeFee: false,
        ...options,
      }
    );
  }

  getSpendableCoins(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.wallet_host}/get_spendable_coins`,
      params,
      this.config,
      {
        includeFee: false,
        ...options,
      }
    );
  }

  getSyncStatus(options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.wallet_host}/get_sync_status`,
      params,
      this.config,
      {
        includeFee: false,
        ...options,
      }
    );
  }

  getWalletBalance(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.wallet_host}/get_wallet_balance`,
      params,
      this.config,
      {
        includeFee: false,
        ...options,
      }
    );
  }
}

module.exports = Wallet;