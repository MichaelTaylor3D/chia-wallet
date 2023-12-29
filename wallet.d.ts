// wallet.d.ts
declare module "chia-wallet" {
  interface Config {
    full_node_host?: string;
    wallet_host?: string;
    certificate_folder_path?: string;
    default_wallet_id?: number;
    default_fee?: number;
    default_mirror_coin_amount?: number;
    allowUnverifiedCert?: boolean;
    verbose?: boolean;
  }

  interface PushTxRequest {
    spend_bundle: string;
  }

  interface SpendableCoinRequest {
    wallet_id: number;
    min_coin_amount?: number;
    max_coin_amount?: number;
    excluded_coins?: string[];
    excluded_coin_ids?: string[];
  }

  interface CoinRecordsByNameRequest {
    names: string[];
    start_height?: number;
    end_height?: number;
    include_spent_coins?: boolean;
  }

  interface GetPrivateKeyResponse {
    fingerprint: number;
  }

  class Wallet {
    constructor(config?: Config);
    getConfig(): Config;
    setConfig(config: Config): void;
    getLoggedInFingerprint(options?: any): any;
    getCoinRecords(options?: any): any;
    getPrivateKey(params: GetPrivateKeyResponse, options?: any): any;
    getCoinRecordsByName(params: CoinRecordsByNameRequest, options?: any): any;
    getSpendablCoins(params: SpendableCoinRequest, options?: any): any;
    pushTx(params: PushTxRequest, options?: any): any;
  }

  export = Wallet;
}
