// wallet.d.ts
declare module "chia-wallet" {
  interface Config {
    full_node_host: string;
    wallet_host: string;
    certificate_folder_path: string;
    default_wallet_id: number;
    default_fee: number;
    default_mirror_coin_amount: number;
    allowUnverifiedCert: boolean;
    verbose: boolean;
  }

  class Wallet {
    constructor(config?: Config);
    getConfig(): Config;
    setConfig(config: Config): void;
    getLoggedInFingerprint(params: any, options?: any): any; // Specify better types if known
  }

  export = Wallet;
}
