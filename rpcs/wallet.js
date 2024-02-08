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
        ...options,
        includeFee: false,
        waitForWalletAvailability: false,
      }
    );
  }

  getPrivateKey(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.wallet_host}/get_private_key`,
      params,
      this.config,
      {
        ...options,
        includeFee: false,
        waitForWalletAvailability: false,
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

  sendTransaction(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.wallet_host}/send_transaction`,
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
        ...options,
        includeFee: false,
      }
    );
  }

  getCoinRecordsByName(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.wallet_host}/get_coin_records_by_names`,
      params,
      this.config,
      {
        ...options,
        includeFee: false,
      }
    );
  }

  getSpendableCoins(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.wallet_host}/get_spendable_coins`,
      params,
      this.config,
      {
        ...options,
        includeFee: false,
      }
    );
  }

  getSyncStatus(options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.wallet_host}/get_sync_status`,
      {},
      this.config,
      {
        ...options,
        includeFee: false,
        waitForWalletAvailability: false,
      }
    );
  }

  getWalletBalance(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.wallet_host}/get_wallet_balance`,
      params,
      this.config,
      {
        ...options,
        includeFee: false,
      }
    );
  }

  getTransactions(params, options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.wallet_host}/get_transactions`,
      params,
      this.config,
      {
        ...options,
        includeFee: false,
      }
    );
  }

  getNetworkInfo(options = {}) {
    return callAndAwaitChiaRPC(
      `${this.config.wallet_host}/get_network_info`,
      {},
      this.config,
      {
        ...options,
        includeFee: false,
        waitForWalletAvailability: false
      }
    );
  }
}

module.exports = Wallet;