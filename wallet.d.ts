declare module "chia-wallet" {
  export interface Config {
    full_node_host?: string;
    wallet_host?: string;
    certificate_folder_path?: string;
    default_wallet_id?: number;
    default_fee?: number;
    default_mirror_coin_amount?: number;
    allowUnverifiedCert?: boolean;
    verbose?: boolean;
  }

  export interface WalletUtils {
    walletIsSynced(config: Config): Promise<boolean>;
    walletIsAvailable(config: Config): Promise<boolean>;
    waitForAllTransactionsToConfirm(config: Config): Promise<boolean>;
    hasUnconfirmedTransactions(config: Config, options?: any): Promise<boolean>;
  }

  export interface PushTxRequest {
    spend_bundle: string;
  }

  export interface SpendableCoinRequest {
    wallet_id: number;
    min_coin_amount?: number;
    max_coin_amount?: number;
    excluded_coins?: string[];
    excluded_coin_ids?: string[];
  }

  export interface CoinRecordsByNameRequest {
    names: string[];
    start_height?: number;
    end_height?: number;
    include_spent_coins?: boolean;
  }

  export interface GetPrivateKeyRequest {
    fingerprint: number;
  }

  export interface GetWalletBalanceRequest {
    wallet_id: number;
  }

  export interface GetTransactionsRequest {
    wallet_id: number;
  }

  export interface SendTransactionRequest {
    wallet_id: number;
    address: string;
    amount: number; // The number of mojos to send
    fee?: number;
    memos?: string[];
    min_coin_amount?: number;
    max_coin_amount?: number;
    exclude_coin_amounts?: number[];
    exlude_coin_ids?: string[];
    reuse_puzhash?: boolean;
  }

  export default class Wallet {
    constructor(config?: Config);
    getConfig(): Config;
    setConfig(config: Config): void;
    getLoggedInFingerprint(options?: any): any;
    getCoinRecords(options?: any): any;
    getPrivateKey(params: GetPrivateKeyRequest, options?: any): any;
    getCoinRecordsByName(params: CoinRecordsByNameRequest, options?: any): any;
    getSpendableCoins(params: SpendableCoinRequest, options?: any): any;
    pushTx(params: PushTxRequest, options?: any): any;
    getSyncStatus(options?: any): any;
    getWalletBalance(params: GetWalletBalanceRequest, options?: any): any;
    getTransactions(params: GetTransactionsRequest, options?: any): any;
    sendTransaction(params: SendTransactionRequest, options?: any): any;
    getNetworkInfo(options?: any): any;
  }
}
