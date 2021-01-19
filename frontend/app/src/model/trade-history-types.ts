import { default as BigNumber } from 'bignumber.js';
import { Zero } from '@/utils/bignumbers';

export interface TradeHistory {
  readonly overview: ProfitLossOverviewData;
  readonly allEvents: ProfitLossEvent[];
}

export interface ProfitLossOverviewData {
  readonly loanProfit: BigNumber;
  readonly defiProfitLoss: BigNumber;
  readonly marginPositionsProfitLoss: BigNumber;
  readonly ledgerActionsProfitLoss: BigNumber;
  readonly settlementLosses: BigNumber;
  readonly ethereumTransactionGasCosts: BigNumber;
  readonly assetMovementFees: BigNumber;
  readonly generalTradeProfitLoss: BigNumber;
  readonly taxableTradeProfitLoss: BigNumber;
  readonly totalTaxableProfitLoss: BigNumber;
  readonly totalProfitLoss: BigNumber;
}

export interface ProfitLossEvent {
  readonly location: string;
  readonly type: string;
  readonly paidInProfitCurrency: BigNumber;
  readonly paidAsset: string;
  readonly paidInAsset: BigNumber;
  readonly taxableAmount: BigNumber;
  readonly taxableBoughtCostInProfitCurrency: BigNumber;
  readonly receivedAsset: string;
  readonly taxableReceivedInProfitCurrency: BigNumber;
  readonly receivedInAsset: BigNumber;
  readonly netProfitOrLoss: BigNumber;
  readonly time: number;
  readonly isVirtual: boolean;
}

export const tradeHistoryPlaceholder = (): ProfitLossOverviewData => ({
  loanProfit: Zero,
  defiProfitLoss: Zero,
  marginPositionsProfitLoss: Zero,
  settlementLosses: Zero,
  ethereumTransactionGasCosts: Zero,
  ledgerActionsProfitLoss: Zero,
  assetMovementFees: Zero,
  generalTradeProfitLoss: Zero,
  taxableTradeProfitLoss: Zero,
  totalTaxableProfitLoss: Zero,
  totalProfitLoss: Zero
});
