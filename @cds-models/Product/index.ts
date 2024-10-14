// This is an automatically generated file. Please do not change its contents manually!
import cds from '@sap/cds'
import * as __ from './../_';

export class Product extends cds.Service {
}
export default Product

export function _A_ProductAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_Product extends Base {
    declare Product?: __.Key<string>
    declare ProductType?: string | null
    declare CrossPlantStatus?: string | null
    declare CrossPlantStatusValidityDate?: __.CdsDate | null
    declare CreationDate?: __.CdsDate | null
    declare CreatedByUser?: string | null
    declare LastChangeDate?: __.CdsDate | null
    declare LastChangedByUser?: string | null
    declare LastChangeDateTime?: __.CdsTimestamp | null
    declare IsMarkedForDeletion?: boolean | null
    declare ProductOldID?: string | null
    declare GrossWeight?: number | null
    declare PurchaseOrderQuantityUnit?: string | null
    declare SourceOfSupply?: string | null
    declare WeightUnit?: string | null
    declare NetWeight?: number | null
    declare CountryOfOrigin?: string | null
    declare CompetitorID?: string | null
    declare ProductGroup?: string | null
    declare BaseUnit?: string | null
    declare ItemCategoryGroup?: string | null
    declare ProductHierarchy?: string | null
    declare Division?: string | null
    declare VarblPurOrdUnitIsActive?: string | null
    declare VolumeUnit?: string | null
    declare MaterialVolume?: number | null
    declare ANPCode?: string | null
    declare Brand?: string | null
    declare ProcurementRule?: string | null
    declare ValidityStartDate?: __.CdsDate | null
    declare LowLevelCode?: string | null
    declare ProdNoInGenProdInPrepackProd?: string | null
    declare SerialIdentifierAssgmtProfile?: string | null
    declare SizeOrDimensionText?: string | null
    declare IndustryStandardName?: string | null
    declare ProductStandardID?: string | null
    declare InternationalArticleNumberCat?: string | null
    declare ProductIsConfigurable?: boolean | null
    declare IsBatchManagementRequired?: boolean | null
    declare ExternalProductGroup?: string | null
    declare CrossPlantConfigurableProduct?: string | null
    declare SerialNoExplicitnessLevel?: string | null
    declare ProductManufacturerNumber?: string | null
    declare ManufacturerNumber?: string | null
    declare ManufacturerPartProfile?: string | null
    declare QltyMgmtInProcmtIsActive?: boolean | null
    declare IndustrySector?: string | null
    declare ChangeNumber?: string | null
    declare MaterialRevisionLevel?: string | null
    declare HandlingIndicator?: string | null
    declare WarehouseProductGroup?: string | null
    declare WarehouseStorageCondition?: string | null
    declare StandardHandlingUnitType?: string | null
    declare SerialNumberProfile?: string | null
    declare AdjustmentProfile?: string | null
    declare PreferredUnitOfMeasure?: string | null
    declare IsPilferable?: boolean | null
    declare IsRelevantForHzdsSubstances?: boolean | null
    declare QuarantinePeriod?: number | null
    declare TimeUnitForQuarantinePeriod?: string | null
    declare QualityInspectionGroup?: string | null
    declare AuthorizationGroup?: string | null
    declare DocumentIsCreatedByCAD?: boolean | null
    declare HandlingUnitType?: string | null
    declare HasVariableTareWeight?: boolean | null
    declare MaximumPackagingLength?: number | null
    declare MaximumPackagingWidth?: number | null
    declare MaximumPackagingHeight?: number | null
    declare UnitForMaxPackagingDimensions?: string | null
    declare to_Description?: __.Association.to.many<A_ProductDescription_>
    declare to_Plant?: __.Association.to.many<A_ProductPlant_>
    declare to_ProductBasicText?: __.Association.to.many<A_ProductBasicText_>
    declare to_ProductInspectionText?: __.Association.to.many<A_ProductInspectionText_>
    declare to_ProductProcurement?: __.Association.to<A_ProductProcurement> | null
    declare to_ProductProcurement_Product?: __.Key<string> | null
    declare to_ProductPurchaseText?: __.Association.to.many<A_ProductPurchaseText_>
    declare to_ProductQualityMgmt?: __.Association.to<A_ProductQualityMgmt> | null
    declare to_ProductQualityMgmt_Product?: __.Key<string> | null
    declare to_ProductSales?: __.Association.to<A_ProductSale> | null
    declare to_ProductSales_Product?: __.Key<string> | null
    declare to_ProductSalesTax?: __.Association.to.many<A_ProductSalesTax_>
    declare to_ProductStorage?: __.Association.to<A_ProductStorage> | null
    declare to_ProductStorage_Product?: __.Key<string> | null
    declare to_ProductUnitsOfMeasure?: __.Association.to.many<A_ProductUnitsOfMeasure_>
    declare to_SalesDelivery?: __.Association.to.many<A_ProductSalesDelivery_>
    declare to_Valuation?: __.Association.to.many<A_ProductValuation_>
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<A_Product>
  };
}
export class A_Product extends _A_ProductAspect(__.Entity) {}
Object.defineProperty(A_Product, 'name', { value: 'Product.A_Product' })
Object.defineProperty(A_Product, 'is_singular', { value: true })
export class A_Product_ extends Array<A_Product> {$count?: number}
Object.defineProperty(A_Product_, 'name', { value: 'Product.A_Product' })

export function _A_ProductBasicTextAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_ProductBasicText extends Base {
    declare Product?: __.Key<string>
    declare Language?: __.Key<string>
    declare LongText?: string | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<A_ProductBasicText>
  };
}
export class A_ProductBasicText extends _A_ProductBasicTextAspect(__.Entity) {}
Object.defineProperty(A_ProductBasicText, 'name', { value: 'Product.A_ProductBasicText' })
Object.defineProperty(A_ProductBasicText, 'is_singular', { value: true })
export class A_ProductBasicText_ extends Array<A_ProductBasicText> {$count?: number}
Object.defineProperty(A_ProductBasicText_, 'name', { value: 'Product.A_ProductBasicText' })

export function _A_ProductDescriptionAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_ProductDescription extends Base {
    declare Product?: __.Key<string>
    declare Language?: __.Key<string>
    declare ProductDescription?: string | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<A_ProductDescription>
  };
}
export class A_ProductDescription extends _A_ProductDescriptionAspect(__.Entity) {}
Object.defineProperty(A_ProductDescription, 'name', { value: 'Product.A_ProductDescription' })
Object.defineProperty(A_ProductDescription, 'is_singular', { value: true })
export class A_ProductDescription_ extends Array<A_ProductDescription> {$count?: number}
Object.defineProperty(A_ProductDescription_, 'name', { value: 'Product.A_ProductDescription' })

export function _A_ProductInspectionTextAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_ProductInspectionText extends Base {
    declare Product?: __.Key<string>
    declare Language?: __.Key<string>
    declare LongText?: string | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<A_ProductInspectionText>
  };
}
export class A_ProductInspectionText extends _A_ProductInspectionTextAspect(__.Entity) {}
Object.defineProperty(A_ProductInspectionText, 'name', { value: 'Product.A_ProductInspectionText' })
Object.defineProperty(A_ProductInspectionText, 'is_singular', { value: true })
export class A_ProductInspectionText_ extends Array<A_ProductInspectionText> {$count?: number}
Object.defineProperty(A_ProductInspectionText_, 'name', { value: 'Product.A_ProductInspectionText' })

export function _A_ProductMLAccountAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_ProductMLAccount extends Base {
    declare Product?: __.Key<string>
    declare ValuationArea?: __.Key<string>
    declare ValuationType?: __.Key<string>
    declare CurrencyRole?: __.Key<string>
    declare Currency?: string | null
    declare ProductPriceControl?: string | null
    declare PriceUnitQty?: number | null
    declare MovingAveragePrice?: number | null
    declare StandardPrice?: number | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<A_ProductMLAccount>
  };
}
export class A_ProductMLAccount extends _A_ProductMLAccountAspect(__.Entity) {}
Object.defineProperty(A_ProductMLAccount, 'name', { value: 'Product.A_ProductMLAccount' })
Object.defineProperty(A_ProductMLAccount, 'is_singular', { value: true })
export class A_ProductMLAccount_ extends Array<A_ProductMLAccount> {$count?: number}
Object.defineProperty(A_ProductMLAccount_, 'name', { value: 'Product.A_ProductMLAccount' })

export function _A_ProductMLPriceAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_ProductMLPrice extends Base {
    declare Product?: __.Key<string>
    declare ValuationArea?: __.Key<string>
    declare ValuationType?: __.Key<string>
    declare CurrencyRole?: __.Key<string>
    declare Currency?: string | null
    declare FuturePrice?: number | null
    declare FuturePriceValidityStartDate?: __.CdsDate | null
    declare PlannedPrice?: number | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<A_ProductMLPrice>
  };
}
export class A_ProductMLPrice extends _A_ProductMLPriceAspect(__.Entity) {}
Object.defineProperty(A_ProductMLPrice, 'name', { value: 'Product.A_ProductMLPrices' })
Object.defineProperty(A_ProductMLPrice, 'is_singular', { value: true })
export class A_ProductMLPrices extends Array<A_ProductMLPrice> {$count?: number}
Object.defineProperty(A_ProductMLPrices, 'name', { value: 'Product.A_ProductMLPrices' })

export function _A_ProductPlantAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_ProductPlant extends Base {
    declare Product?: __.Key<string>
    declare Plant?: __.Key<string>
    declare PurchasingGroup?: string | null
    declare CountryOfOrigin?: string | null
    declare RegionOfOrigin?: string | null
    declare ProductionInvtryManagedLoc?: string | null
    declare ProfileCode?: string | null
    declare ProfileValidityStartDate?: __.CdsDate | null
    declare AvailabilityCheckType?: string | null
    declare FiscalYearVariant?: string | null
    declare PeriodType?: string | null
    declare ProfitCenter?: string | null
    declare Commodity?: string | null
    declare GoodsReceiptDuration?: number | null
    declare MaintenanceStatusName?: string | null
    declare IsMarkedForDeletion?: boolean | null
    declare MRPType?: string | null
    declare MRPResponsible?: string | null
    declare ABCIndicator?: string | null
    declare MinimumLotSizeQuantity?: number | null
    declare MaximumLotSizeQuantity?: number | null
    declare FixedLotSizeQuantity?: number | null
    declare ConsumptionTaxCtrlCode?: string | null
    declare IsCoProduct?: boolean | null
    declare ProductIsConfigurable?: string | null
    declare StockDeterminationGroup?: string | null
    declare StockInTransferQuantity?: number | null
    declare StockInTransitQuantity?: number | null
    declare HasPostToInspectionStock?: boolean | null
    declare IsBatchManagementRequired?: boolean | null
    declare SerialNumberProfile?: string | null
    declare IsNegativeStockAllowed?: boolean | null
    declare GoodsReceiptBlockedStockQty?: number | null
    declare HasConsignmentCtrl?: string | null
    declare FiscalYearCurrentPeriod?: string | null
    declare FiscalMonthCurrentPeriod?: string | null
    declare ProcurementType?: string | null
    declare IsInternalBatchManaged?: boolean | null
    declare ProductCFOPCategory?: string | null
    declare ProductIsExciseTaxRelevant?: boolean | null
    declare BaseUnit?: string | null
    declare ConfigurableProduct?: string | null
    declare GoodsIssueUnit?: string | null
    declare MaterialFreightGroup?: string | null
    declare OriginalBatchReferenceMaterial?: string | null
    declare OriglBatchManagementIsRequired?: string | null
    declare ProductIsCriticalPrt?: boolean | null
    declare ProductLogisticsHandlingGroup?: string | null
    declare to_PlantMRPArea?: __.Association.to.many<A_ProductPlantMRPArea_>
    declare to_PlantQualityMgmt?: __.Association.to<A_ProductPlantQualityMgmt> | null
    declare to_PlantQualityMgmt_Product?: __.Key<string> | null
    declare to_PlantQualityMgmt_Plant?: __.Key<string> | null
    declare to_PlantSales?: __.Association.to<A_ProductPlantSale> | null
    declare to_PlantSales_Product?: __.Key<string> | null
    declare to_PlantSales_Plant?: __.Key<string> | null
    declare to_PlantStorage?: __.Association.to<A_ProductPlantStorage> | null
    declare to_PlantStorage_Product?: __.Key<string> | null
    declare to_PlantStorage_Plant?: __.Key<string> | null
    declare to_PlantText?: __.Association.to<A_ProductPlantText> | null
    declare to_PlantText_Product?: __.Key<string> | null
    declare to_PlantText_Plant?: __.Key<string> | null
    declare to_ProdPlantInternationalTrade?: __.Association.to<A_ProductPlantIntlTrd> | null
    declare to_ProdPlantInternationalTrade_Product?: __.Key<string> | null
    declare to_ProdPlantInternationalTrade_Plant?: __.Key<string> | null
    declare to_ProductPlantCosting?: __.Association.to<A_ProductPlantCosting> | null
    declare to_ProductPlantCosting_Product?: __.Key<string> | null
    declare to_ProductPlantCosting_Plant?: __.Key<string> | null
    declare to_ProductPlantForecast?: __.Association.to<A_ProductPlantForecasting> | null
    declare to_ProductPlantForecast_Product?: __.Key<string> | null
    declare to_ProductPlantForecast_Plant?: __.Key<string> | null
    declare to_ProductPlantProcurement?: __.Association.to<A_ProductPlantProcurement> | null
    declare to_ProductPlantProcurement_Product?: __.Key<string> | null
    declare to_ProductPlantProcurement_Plant?: __.Key<string> | null
    declare to_ProductSupplyPlanning?: __.Association.to<A_ProductSupplyPlanning> | null
    declare to_ProductSupplyPlanning_Product?: __.Key<string> | null
    declare to_ProductSupplyPlanning_Plant?: __.Key<string> | null
    declare to_ProductWorkScheduling?: __.Association.to<A_ProductWorkScheduling> | null
    declare to_ProductWorkScheduling_Product?: __.Key<string> | null
    declare to_ProductWorkScheduling_Plant?: __.Key<string> | null
    declare to_StorageLocation?: __.Association.to.many<A_ProductStorageLocation_>
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<A_ProductPlant>
  };
}
export class A_ProductPlant extends _A_ProductPlantAspect(__.Entity) {}
Object.defineProperty(A_ProductPlant, 'name', { value: 'Product.A_ProductPlant' })
Object.defineProperty(A_ProductPlant, 'is_singular', { value: true })
export class A_ProductPlant_ extends Array<A_ProductPlant> {$count?: number}
Object.defineProperty(A_ProductPlant_, 'name', { value: 'Product.A_ProductPlant' })

export function _A_ProductPlantCostingAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_ProductPlantCosting extends Base {
    declare Product?: __.Key<string>
    declare Plant?: __.Key<string>
    declare IsCoProduct?: boolean | null
    declare CostingLotSize?: number | null
    declare VarianceKey?: string | null
    declare BaseUnit?: string | null
    declare TaskListGroupCounter?: string | null
    declare TaskListGroup?: string | null
    declare TaskListType?: string | null
    declare CostingProductionVersion?: string | null
    declare IsFixedPriceCoProduct?: boolean | null
    declare CostingSpecialProcurementType?: string | null
    declare SourceBOMAlternative?: string | null
    declare ProductBOMUsage?: string | null
    declare ProductIsCostingRelevant?: boolean | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<A_ProductPlantCosting>
  };
}
export class A_ProductPlantCosting extends _A_ProductPlantCostingAspect(__.Entity) {}
Object.defineProperty(A_ProductPlantCosting, 'name', { value: 'Product.A_ProductPlantCosting' })
Object.defineProperty(A_ProductPlantCosting, 'is_singular', { value: true })
export class A_ProductPlantCosting_ extends Array<A_ProductPlantCosting> {$count?: number}
Object.defineProperty(A_ProductPlantCosting_, 'name', { value: 'Product.A_ProductPlantCosting' })

export function _A_ProductPlantForecastingAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_ProductPlantForecasting extends Base {
    declare Product?: __.Key<string>
    declare Plant?: __.Key<string>
    declare ConsumptionRefUsageEndDate?: __.CdsDate | null
    declare ConsumptionQtyMultiplier?: number | null
    declare ConsumptionReferenceProduct?: string | null
    declare ConsumptionReferencePlant?: string | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<A_ProductPlantForecasting>
  };
}
export class A_ProductPlantForecasting extends _A_ProductPlantForecastingAspect(__.Entity) {}
Object.defineProperty(A_ProductPlantForecasting, 'name', { value: 'Product.A_ProductPlantForecasting' })
Object.defineProperty(A_ProductPlantForecasting, 'is_singular', { value: true })
export class A_ProductPlantForecasting_ extends Array<A_ProductPlantForecasting> {$count?: number}
Object.defineProperty(A_ProductPlantForecasting_, 'name', { value: 'Product.A_ProductPlantForecasting' })

export function _A_ProductPlantIntlTrdAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_ProductPlantIntlTrd extends Base {
    declare Product?: __.Key<string>
    declare Plant?: __.Key<string>
    declare CountryOfOrigin?: string | null
    declare RegionOfOrigin?: string | null
    declare ConsumptionTaxCtrlCode?: string | null
    declare ProductCASNumber?: string | null
    declare ProdIntlTradeClassification?: string | null
    declare ExportAndImportProductGroup?: string | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<A_ProductPlantIntlTrd>
  };
}
export class A_ProductPlantIntlTrd extends _A_ProductPlantIntlTrdAspect(__.Entity) {}
Object.defineProperty(A_ProductPlantIntlTrd, 'name', { value: 'Product.A_ProductPlantIntlTrd' })
Object.defineProperty(A_ProductPlantIntlTrd, 'is_singular', { value: true })
export class A_ProductPlantIntlTrd_ extends Array<A_ProductPlantIntlTrd> {$count?: number}
Object.defineProperty(A_ProductPlantIntlTrd_, 'name', { value: 'Product.A_ProductPlantIntlTrd' })

export function _A_ProductPlantMRPAreaAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_ProductPlantMRPArea extends Base {
    declare Product?: __.Key<string>
    declare Plant?: __.Key<string>
    declare MRPArea?: __.Key<string>
    declare MRPType?: string | null
    declare MRPResponsible?: string | null
    declare MRPGroup?: string | null
    declare ReorderThresholdQuantity?: number | null
    declare PlanningTimeFence?: string | null
    declare LotSizingProcedure?: string | null
    declare LotSizeRoundingQuantity?: number | null
    declare MinimumLotSizeQuantity?: number | null
    declare MaximumLotSizeQuantity?: number | null
    declare MaximumStockQuantity?: number | null
    declare AssemblyScrapPercent?: number | null
    declare ProcurementSubType?: string | null
    declare DfltStorageLocationExtProcmt?: string | null
    declare MRPPlanningCalendar?: string | null
    declare SafetyStockQuantity?: number | null
    declare RangeOfCvrgPrflCode?: string | null
    declare SafetyDuration?: string | null
    declare FixedLotSizeQuantity?: number | null
    declare LotSizeIndependentCosts?: number | null
    declare IsStorageCosts?: string | null
    declare RqmtQtyRcptTaktTmeInWrkgDays?: number | null
    declare SrvcLvl?: number | null
    declare IsMarkedForDeletion?: boolean | null
    declare PerdPrflForSftyTme?: string | null
    declare IsMRPDependentRqmt?: string | null
    declare IsSafetyTime?: string | null
    declare PlannedDeliveryDurationInDays?: number | null
    declare IsPlannedDeliveryTime?: boolean | null
    declare Currency?: string | null
    declare BaseUnit?: string | null
    declare PlanAndOrderDayDetermination?: string | null
    declare RoundingProfile?: string | null
    declare StorageLocation?: string | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<A_ProductPlantMRPArea>
  };
}
export class A_ProductPlantMRPArea extends _A_ProductPlantMRPAreaAspect(__.Entity) {}
Object.defineProperty(A_ProductPlantMRPArea, 'name', { value: 'Product.A_ProductPlantMRPArea' })
Object.defineProperty(A_ProductPlantMRPArea, 'is_singular', { value: true })
export class A_ProductPlantMRPArea_ extends Array<A_ProductPlantMRPArea> {$count?: number}
Object.defineProperty(A_ProductPlantMRPArea_, 'name', { value: 'Product.A_ProductPlantMRPArea' })

export function _A_ProductPlantProcurementAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_ProductPlantProcurement extends Base {
    declare Product?: __.Key<string>
    declare Plant?: __.Key<string>
    declare IsAutoPurOrdCreationAllowed?: boolean | null
    declare IsSourceListRequired?: boolean | null
    declare SourceOfSupplyCategory?: string | null
    declare ItmIsRlvtToJITDelivSchedules?: string | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<A_ProductPlantProcurement>
  };
}
export class A_ProductPlantProcurement extends _A_ProductPlantProcurementAspect(__.Entity) {}
Object.defineProperty(A_ProductPlantProcurement, 'name', { value: 'Product.A_ProductPlantProcurement' })
Object.defineProperty(A_ProductPlantProcurement, 'is_singular', { value: true })
export class A_ProductPlantProcurement_ extends Array<A_ProductPlantProcurement> {$count?: number}
Object.defineProperty(A_ProductPlantProcurement_, 'name', { value: 'Product.A_ProductPlantProcurement' })

export function _A_ProductPlantQualityMgmtAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_ProductPlantQualityMgmt extends Base {
    declare Product?: __.Key<string>
    declare Plant?: __.Key<string>
    declare MaximumStoragePeriod?: number | null
    declare QualityMgmtCtrlKey?: string | null
    declare MatlQualityAuthorizationGroup?: string | null
    declare HasPostToInspectionStock?: boolean | null
    declare InspLotDocumentationIsRequired?: boolean | null
    declare SuplrQualityManagementSystem?: string | null
    declare RecrrgInspIntervalTimeInDays?: number | null
    declare ProductQualityCertificateType?: string | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<A_ProductPlantQualityMgmt>
  };
}
export class A_ProductPlantQualityMgmt extends _A_ProductPlantQualityMgmtAspect(__.Entity) {}
Object.defineProperty(A_ProductPlantQualityMgmt, 'name', { value: 'Product.A_ProductPlantQualityMgmt' })
Object.defineProperty(A_ProductPlantQualityMgmt, 'is_singular', { value: true })
export class A_ProductPlantQualityMgmt_ extends Array<A_ProductPlantQualityMgmt> {$count?: number}
Object.defineProperty(A_ProductPlantQualityMgmt_, 'name', { value: 'Product.A_ProductPlantQualityMgmt' })

export function _A_ProductPlantSaleAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_ProductPlantSale extends Base {
    declare Product?: __.Key<string>
    declare Plant?: __.Key<string>
    declare LoadingGroup?: string | null
    declare ReplacementPartType?: string | null
    declare CapPlanningQuantityInBaseUoM?: number | null
    declare ProductShippingProcessingTime?: number | null
    declare WrkCentersShipgSetupTimeInDays?: number | null
    declare AvailabilityCheckType?: string | null
    declare BaseUnit?: string | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<A_ProductPlantSale>
  };
}
export class A_ProductPlantSale extends _A_ProductPlantSaleAspect(__.Entity) {}
Object.defineProperty(A_ProductPlantSale, 'name', { value: 'Product.A_ProductPlantSales' })
Object.defineProperty(A_ProductPlantSale, 'is_singular', { value: true })
export class A_ProductPlantSales extends Array<A_ProductPlantSale> {$count?: number}
Object.defineProperty(A_ProductPlantSales, 'name', { value: 'Product.A_ProductPlantSales' })

export function _A_ProductPlantStorageAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_ProductPlantStorage extends Base {
    declare Product?: __.Key<string>
    declare Plant?: __.Key<string>
    declare InventoryForCycleCountInd?: string | null
    declare ProvisioningServiceLevel?: string | null
    declare CycleCountingIndicatorIsFixed?: boolean | null
    declare ProdMaximumStoragePeriodUnit?: string | null
    declare WrhsMgmtPtwyAndStkRemovalStrgy?: string | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<A_ProductPlantStorage>
  };
}
export class A_ProductPlantStorage extends _A_ProductPlantStorageAspect(__.Entity) {}
Object.defineProperty(A_ProductPlantStorage, 'name', { value: 'Product.A_ProductPlantStorage' })
Object.defineProperty(A_ProductPlantStorage, 'is_singular', { value: true })
export class A_ProductPlantStorage_ extends Array<A_ProductPlantStorage> {$count?: number}
Object.defineProperty(A_ProductPlantStorage_, 'name', { value: 'Product.A_ProductPlantStorage' })

export function _A_ProductPlantTextAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_ProductPlantText extends Base {
    declare Product?: __.Key<string>
    declare Plant?: __.Key<string>
    declare LongText?: string | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<A_ProductPlantText>
  };
}
export class A_ProductPlantText extends _A_ProductPlantTextAspect(__.Entity) {}
Object.defineProperty(A_ProductPlantText, 'name', { value: 'Product.A_ProductPlantText' })
Object.defineProperty(A_ProductPlantText, 'is_singular', { value: true })
export class A_ProductPlantText_ extends Array<A_ProductPlantText> {$count?: number}
Object.defineProperty(A_ProductPlantText_, 'name', { value: 'Product.A_ProductPlantText' })

export function _A_ProductProcurementAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_ProductProcurement extends Base {
    declare Product?: __.Key<string>
    declare PurchaseOrderQuantityUnit?: string | null
    declare VarblPurOrdUnitStatus?: string | null
    declare PurchasingAcknProfile?: string | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<A_ProductProcurement>
  };
}
export class A_ProductProcurement extends _A_ProductProcurementAspect(__.Entity) {}
Object.defineProperty(A_ProductProcurement, 'name', { value: 'Product.A_ProductProcurement' })
Object.defineProperty(A_ProductProcurement, 'is_singular', { value: true })
export class A_ProductProcurement_ extends Array<A_ProductProcurement> {$count?: number}
Object.defineProperty(A_ProductProcurement_, 'name', { value: 'Product.A_ProductProcurement' })

export function _A_ProductPurchaseTextAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_ProductPurchaseText extends Base {
    declare Product?: __.Key<string>
    declare Language?: __.Key<string>
    declare LongText?: string | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<A_ProductPurchaseText>
  };
}
export class A_ProductPurchaseText extends _A_ProductPurchaseTextAspect(__.Entity) {}
Object.defineProperty(A_ProductPurchaseText, 'name', { value: 'Product.A_ProductPurchaseText' })
Object.defineProperty(A_ProductPurchaseText, 'is_singular', { value: true })
export class A_ProductPurchaseText_ extends Array<A_ProductPurchaseText> {$count?: number}
Object.defineProperty(A_ProductPurchaseText_, 'name', { value: 'Product.A_ProductPurchaseText' })

export function _A_ProductQualityMgmtAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_ProductQualityMgmt extends Base {
    declare Product?: __.Key<string>
    declare QltyMgmtInProcmtIsActive?: boolean | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<A_ProductQualityMgmt>
  };
}
export class A_ProductQualityMgmt extends _A_ProductQualityMgmtAspect(__.Entity) {}
Object.defineProperty(A_ProductQualityMgmt, 'name', { value: 'Product.A_ProductQualityMgmt' })
Object.defineProperty(A_ProductQualityMgmt, 'is_singular', { value: true })
export class A_ProductQualityMgmt_ extends Array<A_ProductQualityMgmt> {$count?: number}
Object.defineProperty(A_ProductQualityMgmt_, 'name', { value: 'Product.A_ProductQualityMgmt' })

export function _A_ProductSaleAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_ProductSale extends Base {
    declare Product?: __.Key<string>
    declare SalesStatus?: string | null
    declare SalesStatusValidityDate?: __.CdsDate | null
    declare TaxClassification?: string | null
    declare TransportationGroup?: string | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<A_ProductSale>
  };
}
export class A_ProductSale extends _A_ProductSaleAspect(__.Entity) {}
Object.defineProperty(A_ProductSale, 'name', { value: 'Product.A_ProductSales' })
Object.defineProperty(A_ProductSale, 'is_singular', { value: true })
export class A_ProductSales extends Array<A_ProductSale> {$count?: number}
Object.defineProperty(A_ProductSales, 'name', { value: 'Product.A_ProductSales' })

export function _A_ProductSalesDeliveryAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_ProductSalesDelivery extends Base {
    declare Product?: __.Key<string>
    declare ProductSalesOrg?: __.Key<string>
    declare ProductDistributionChnl?: __.Key<string>
    declare MinimumOrderQuantity?: number | null
    declare SupplyingPlant?: string | null
    declare PriceSpecificationProductGroup?: string | null
    declare AccountDetnProductGroup?: string | null
    declare DeliveryNoteProcMinDelivQty?: number | null
    declare ItemCategoryGroup?: string | null
    declare DeliveryQuantityUnit?: string | null
    declare DeliveryQuantity?: number | null
    declare ProductSalesStatus?: string | null
    declare ProductSalesStatusValidityDate?: __.CdsDate | null
    declare SalesMeasureUnit?: string | null
    declare IsMarkedForDeletion?: boolean | null
    declare ProductHierarchy?: string | null
    declare FirstSalesSpecProductGroup?: string | null
    declare SecondSalesSpecProductGroup?: string | null
    declare ThirdSalesSpecProductGroup?: string | null
    declare FourthSalesSpecProductGroup?: string | null
    declare FifthSalesSpecProductGroup?: string | null
    declare MinimumMakeToOrderOrderQty?: number | null
    declare BaseUnit?: string | null
    declare LogisticsStatisticsGroup?: string | null
    declare VolumeRebateGroup?: string | null
    declare ProductCommissionGroup?: string | null
    declare CashDiscountIsDeductible?: boolean | null
    declare PricingReferenceProduct?: string | null
    declare RoundingProfile?: string | null
    declare ProductUnitGroup?: string | null
    declare VariableSalesUnitIsNotAllowed?: boolean | null
    declare ProductHasAttributeID01?: boolean | null
    declare ProductHasAttributeID02?: boolean | null
    declare ProductHasAttributeID03?: boolean | null
    declare ProductHasAttributeID04?: boolean | null
    declare ProductHasAttributeID05?: boolean | null
    declare ProductHasAttributeID06?: boolean | null
    declare ProductHasAttributeID07?: boolean | null
    declare ProductHasAttributeID08?: boolean | null
    declare ProductHasAttributeID09?: boolean | null
    declare ProductHasAttributeID10?: boolean | null
    declare to_SalesTax?: __.Association.to.many<A_ProductSalesTax_>
    declare to_SalesText?: __.Association.to.many<A_ProductSalesText_>
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<A_ProductSalesDelivery>
  };
}
export class A_ProductSalesDelivery extends _A_ProductSalesDeliveryAspect(__.Entity) {}
Object.defineProperty(A_ProductSalesDelivery, 'name', { value: 'Product.A_ProductSalesDelivery' })
Object.defineProperty(A_ProductSalesDelivery, 'is_singular', { value: true })
export class A_ProductSalesDelivery_ extends Array<A_ProductSalesDelivery> {$count?: number}
Object.defineProperty(A_ProductSalesDelivery_, 'name', { value: 'Product.A_ProductSalesDelivery' })

export function _A_ProductSalesTaxAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_ProductSalesTax extends Base {
    declare Product?: __.Key<string>
    declare Country?: __.Key<string>
    declare TaxCategory?: __.Key<string>
    declare TaxClassification?: __.Key<string>
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<A_ProductSalesTax>
  };
}
export class A_ProductSalesTax extends _A_ProductSalesTaxAspect(__.Entity) {}
Object.defineProperty(A_ProductSalesTax, 'name', { value: 'Product.A_ProductSalesTax' })
Object.defineProperty(A_ProductSalesTax, 'is_singular', { value: true })
export class A_ProductSalesTax_ extends Array<A_ProductSalesTax> {$count?: number}
Object.defineProperty(A_ProductSalesTax_, 'name', { value: 'Product.A_ProductSalesTax' })

export function _A_ProductSalesTextAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_ProductSalesText extends Base {
    declare Product?: __.Key<string>
    declare ProductSalesOrg?: __.Key<string>
    declare ProductDistributionChnl?: __.Key<string>
    declare Language?: __.Key<string>
    declare LongText?: string | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<A_ProductSalesText>
  };
}
export class A_ProductSalesText extends _A_ProductSalesTextAspect(__.Entity) {}
Object.defineProperty(A_ProductSalesText, 'name', { value: 'Product.A_ProductSalesText' })
Object.defineProperty(A_ProductSalesText, 'is_singular', { value: true })
export class A_ProductSalesText_ extends Array<A_ProductSalesText> {$count?: number}
Object.defineProperty(A_ProductSalesText_, 'name', { value: 'Product.A_ProductSalesText' })

export function _A_ProductStorageAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_ProductStorage extends Base {
    declare Product?: __.Key<string>
    declare StorageConditions?: string | null
    declare TemperatureConditionInd?: string | null
    declare HazardousMaterialNumber?: string | null
    declare NmbrOfGROrGISlipsToPrintQty?: number | null
    declare LabelType?: string | null
    declare LabelForm?: string | null
    declare MinRemainingShelfLife?: number | null
    declare ExpirationDate?: string | null
    declare ShelfLifeExpirationDatePeriod?: string | null
    declare TotalShelfLife?: number | null
    declare BaseUnit?: string | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<A_ProductStorage>
  };
}
export class A_ProductStorage extends _A_ProductStorageAspect(__.Entity) {}
Object.defineProperty(A_ProductStorage, 'name', { value: 'Product.A_ProductStorage' })
Object.defineProperty(A_ProductStorage, 'is_singular', { value: true })
export class A_ProductStorage_ extends Array<A_ProductStorage> {$count?: number}
Object.defineProperty(A_ProductStorage_, 'name', { value: 'Product.A_ProductStorage' })

export function _A_ProductStorageLocationAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_ProductStorageLocation extends Base {
    declare Product?: __.Key<string>
    declare Plant?: __.Key<string>
    declare StorageLocation?: __.Key<string>
    declare WarehouseStorageBin?: string | null
    declare MaintenanceStatus?: string | null
    declare PhysicalInventoryBlockInd?: string | null
    declare CreationDate?: __.CdsDate | null
    declare IsMarkedForDeletion?: boolean | null
    declare DateOfLastPostedCntUnRstrcdStk?: __.CdsDate | null
    declare InventoryCorrectionFactor?: number | null
    declare InvtryRestrictedUseStockInd?: string | null
    declare InvtryCurrentYearStockInd?: string | null
    declare InvtryQualInspCurrentYrStkInd?: string | null
    declare InventoryBlockStockInd?: string | null
    declare InvtryRestStockPrevPeriodInd?: string | null
    declare InventoryStockPrevPeriod?: string | null
    declare InvtryStockQltyInspPrevPeriod?: string | null
    declare HasInvtryBlockStockPrevPeriod?: string | null
    declare FiscalYearCurrentPeriod?: string | null
    declare FiscalMonthCurrentPeriod?: string | null
    declare FiscalYearCurrentInvtryPeriod?: string | null
    declare LeanWrhsManagementPickingArea?: string | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<A_ProductStorageLocation>
  };
}
export class A_ProductStorageLocation extends _A_ProductStorageLocationAspect(__.Entity) {}
Object.defineProperty(A_ProductStorageLocation, 'name', { value: 'Product.A_ProductStorageLocation' })
Object.defineProperty(A_ProductStorageLocation, 'is_singular', { value: true })
export class A_ProductStorageLocation_ extends Array<A_ProductStorageLocation> {$count?: number}
Object.defineProperty(A_ProductStorageLocation_, 'name', { value: 'Product.A_ProductStorageLocation' })

export function _A_ProductSupplyPlanningAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_ProductSupplyPlanning extends Base {
    declare Product?: __.Key<string>
    declare Plant?: __.Key<string>
    declare FixedLotSizeQuantity?: number | null
    declare MaximumLotSizeQuantity?: number | null
    declare MinimumLotSizeQuantity?: number | null
    declare LotSizeRoundingQuantity?: number | null
    declare LotSizingProcedure?: string | null
    declare MRPType?: string | null
    declare MRPResponsible?: string | null
    declare SafetyStockQuantity?: number | null
    declare MinimumSafetyStockQuantity?: number | null
    declare PlanningTimeFence?: string | null
    declare ABCIndicator?: string | null
    declare MaximumStockQuantity?: number | null
    declare ReorderThresholdQuantity?: number | null
    declare PlannedDeliveryDurationInDays?: number | null
    declare SafetyDuration?: string | null
    declare PlanningStrategyGroup?: string | null
    declare TotalReplenishmentLeadTime?: number | null
    declare ProcurementType?: string | null
    declare ProcurementSubType?: string | null
    declare AssemblyScrapPercent?: number | null
    declare AvailabilityCheckType?: string | null
    declare GoodsReceiptDuration?: number | null
    declare MRPGroup?: string | null
    declare DfltStorageLocationExtProcmt?: string | null
    declare ProdRqmtsConsumptionMode?: string | null
    declare BackwardCnsmpnPeriodInWorkDays?: string | null
    declare FwdConsumptionPeriodInWorkDays?: string | null
    declare BaseUnit?: string | null
    declare PlanAndOrderDayDetermination?: string | null
    declare RoundingProfile?: string | null
    declare LotSizeIndependentCosts?: number | null
    declare MRPPlanningCalendar?: string | null
    declare RangeOfCvrgPrflCode?: string | null
    declare IsSafetyTime?: string | null
    declare PerdPrflForSftyTme?: string | null
    declare IsMRPDependentRqmt?: string | null
    declare InHouseProductionTime?: number | null
    declare ProductIsForCrossProject?: string | null
    declare StorageCostsPercentageCode?: string | null
    declare SrvcLvl?: number | null
    declare MRPAvailabilityType?: string | null
    declare FollowUpProduct?: string | null
    declare RepetitiveManufacturingIsAllwd?: boolean | null
    declare DependentRequirementsType?: string | null
    declare IsBulkMaterialComponent?: boolean | null
    declare RepetitiveManufacturingProfile?: string | null
    declare RqmtQtyRcptTaktTmeInWrkgDays?: number | null
    declare ForecastRequirementsAreSplit?: string | null
    declare EffectiveOutDate?: __.CdsDate | null
    declare MRPProfile?: string | null
    declare ComponentScrapInPercent?: number | null
    declare ProductIsToBeDiscontinued?: string | null
    declare ProdRqmtsAreConsolidated?: string | null
    declare MatlCompIsMarkedForBackflush?: string | null
    declare ProposedProductSupplyArea?: string | null
    declare Currency?: string | null
    declare PlannedOrderActionControl?: string | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<A_ProductSupplyPlanning>
  };
}
export class A_ProductSupplyPlanning extends _A_ProductSupplyPlanningAspect(__.Entity) {}
Object.defineProperty(A_ProductSupplyPlanning, 'name', { value: 'Product.A_ProductSupplyPlanning' })
Object.defineProperty(A_ProductSupplyPlanning, 'is_singular', { value: true })
export class A_ProductSupplyPlanning_ extends Array<A_ProductSupplyPlanning> {$count?: number}
Object.defineProperty(A_ProductSupplyPlanning_, 'name', { value: 'Product.A_ProductSupplyPlanning' })

export function _A_ProductUnitsOfMeasureAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_ProductUnitsOfMeasure extends Base {
    declare Product?: __.Key<string>
    declare AlternativeUnit?: __.Key<string>
    declare QuantityNumerator?: number | null
    declare QuantityDenominator?: number | null
    declare MaterialVolume?: number | null
    declare VolumeUnit?: string | null
    declare GrossWeight?: number | null
    declare WeightUnit?: string | null
    declare GlobalTradeItemNumber?: string | null
    declare GlobalTradeItemNumberCategory?: string | null
    declare UnitSpecificProductLength?: number | null
    declare UnitSpecificProductWidth?: number | null
    declare UnitSpecificProductHeight?: number | null
    declare ProductMeasurementUnit?: string | null
    declare LowerLevelPackagingUnit?: string | null
    declare RemainingVolumeAfterNesting?: number | null
    declare MaximumStackingFactor?: number | null
    declare CapacityUsage?: number | null
    declare BaseUnit?: string | null
    declare to_InternationalArticleNumber?: __.Association.to.many<A_ProductUnitsOfMeasureEAN_>
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<A_ProductUnitsOfMeasure>
  };
}
export class A_ProductUnitsOfMeasure extends _A_ProductUnitsOfMeasureAspect(__.Entity) {}
Object.defineProperty(A_ProductUnitsOfMeasure, 'name', { value: 'Product.A_ProductUnitsOfMeasure' })
Object.defineProperty(A_ProductUnitsOfMeasure, 'is_singular', { value: true })
export class A_ProductUnitsOfMeasure_ extends Array<A_ProductUnitsOfMeasure> {$count?: number}
Object.defineProperty(A_ProductUnitsOfMeasure_, 'name', { value: 'Product.A_ProductUnitsOfMeasure' })

export function _A_ProductUnitsOfMeasureEANAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_ProductUnitsOfMeasureEAN extends Base {
    declare Product?: __.Key<string>
    declare AlternativeUnit?: __.Key<string>
    declare ConsecutiveNumber?: __.Key<string>
    declare ProductStandardID?: string | null
    declare InternationalArticleNumberCat?: string | null
    declare IsMainGlobalTradeItemNumber?: boolean | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<A_ProductUnitsOfMeasureEAN>
  };
}
export class A_ProductUnitsOfMeasureEAN extends _A_ProductUnitsOfMeasureEANAspect(__.Entity) {}
Object.defineProperty(A_ProductUnitsOfMeasureEAN, 'name', { value: 'Product.A_ProductUnitsOfMeasureEAN' })
Object.defineProperty(A_ProductUnitsOfMeasureEAN, 'is_singular', { value: true })
export class A_ProductUnitsOfMeasureEAN_ extends Array<A_ProductUnitsOfMeasureEAN> {$count?: number}
Object.defineProperty(A_ProductUnitsOfMeasureEAN_, 'name', { value: 'Product.A_ProductUnitsOfMeasureEAN' })

export function _A_ProductValuationAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_ProductValuation extends Base {
    declare Product?: __.Key<string>
    declare ValuationArea?: __.Key<string>
    declare ValuationType?: __.Key<string>
    declare ValuationClass?: string | null
    declare PriceDeterminationControl?: string | null
    declare StandardPrice?: number | null
    declare PriceUnitQty?: number | null
    declare InventoryValuationProcedure?: string | null
    declare IsMarkedForDeletion?: boolean | null
    declare MovingAveragePrice?: number | null
    declare ValuationCategory?: string | null
    declare ProductUsageType?: string | null
    declare ProductOriginType?: string | null
    declare IsProducedInhouse?: boolean | null
    declare ProdCostEstNumber?: string | null
    declare ProjectStockValuationClass?: string | null
    declare ValuationClassSalesOrderStock?: string | null
    declare PlannedPrice1InCoCodeCrcy?: number | null
    declare PlannedPrice2InCoCodeCrcy?: number | null
    declare PlannedPrice3InCoCodeCrcy?: number | null
    declare FuturePlndPrice1ValdtyDate?: __.CdsDate | null
    declare FuturePlndPrice2ValdtyDate?: __.CdsDate | null
    declare FuturePlndPrice3ValdtyDate?: __.CdsDate | null
    declare TaxBasedPricesPriceUnitQty?: number | null
    declare PriceLastChangeDate?: __.CdsDate | null
    declare PlannedPrice?: number | null
    declare PrevInvtryPriceInCoCodeCrcy?: number | null
    declare Currency?: string | null
    declare BaseUnit?: string | null
    declare to_MLAccount?: __.Association.to.many<A_ProductMLAccount_>
    declare to_MLPrices?: __.Association.to.many<A_ProductMLPrices>
    declare to_ValuationAccount?: __.Association.to<A_ProductValuationAccount> | null
    declare to_ValuationAccount_Product?: __.Key<string> | null
    declare to_ValuationAccount_ValuationArea?: __.Key<string> | null
    declare to_ValuationAccount_ValuationType?: __.Key<string> | null
    declare to_ValuationCosting?: __.Association.to<A_ProductValuationCosting> | null
    declare to_ValuationCosting_Product?: __.Key<string> | null
    declare to_ValuationCosting_ValuationArea?: __.Key<string> | null
    declare to_ValuationCosting_ValuationType?: __.Key<string> | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<A_ProductValuation>
  };
}
export class A_ProductValuation extends _A_ProductValuationAspect(__.Entity) {}
Object.defineProperty(A_ProductValuation, 'name', { value: 'Product.A_ProductValuation' })
Object.defineProperty(A_ProductValuation, 'is_singular', { value: true })
export class A_ProductValuation_ extends Array<A_ProductValuation> {$count?: number}
Object.defineProperty(A_ProductValuation_, 'name', { value: 'Product.A_ProductValuation' })

export function _A_ProductValuationAccountAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_ProductValuationAccount extends Base {
    declare Product?: __.Key<string>
    declare ValuationArea?: __.Key<string>
    declare ValuationType?: __.Key<string>
    declare CommercialPrice1InCoCodeCrcy?: number | null
    declare CommercialPrice2InCoCodeCrcy?: number | null
    declare CommercialPrice3InCoCodeCrcy?: number | null
    declare DevaluationYearCount?: string | null
    declare FutureEvaluatedAmountValue?: number | null
    declare FuturePriceValidityStartDate?: __.CdsDate | null
    declare IsLIFOAndFIFORelevant?: boolean | null
    declare LIFOValuationPoolNumber?: string | null
    declare TaxPricel1InCoCodeCrcy?: number | null
    declare TaxPrice2InCoCodeCrcy?: number | null
    declare TaxPrice3InCoCodeCrcy?: number | null
    declare Currency?: string | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<A_ProductValuationAccount>
  };
}
export class A_ProductValuationAccount extends _A_ProductValuationAccountAspect(__.Entity) {}
Object.defineProperty(A_ProductValuationAccount, 'name', { value: 'Product.A_ProductValuationAccount' })
Object.defineProperty(A_ProductValuationAccount, 'is_singular', { value: true })
export class A_ProductValuationAccount_ extends Array<A_ProductValuationAccount> {$count?: number}
Object.defineProperty(A_ProductValuationAccount_, 'name', { value: 'Product.A_ProductValuationAccount' })

export function _A_ProductValuationCostingAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_ProductValuationCosting extends Base {
    declare Product?: __.Key<string>
    declare ValuationArea?: __.Key<string>
    declare ValuationType?: __.Key<string>
    declare IsMaterialCostedWithQtyStruc?: boolean | null
    declare IsMaterialRelatedOrigin?: string | null
    declare CostOriginGroup?: string | null
    declare CostingOverheadGroup?: string | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<A_ProductValuationCosting>
  };
}
export class A_ProductValuationCosting extends _A_ProductValuationCostingAspect(__.Entity) {}
Object.defineProperty(A_ProductValuationCosting, 'name', { value: 'Product.A_ProductValuationCosting' })
Object.defineProperty(A_ProductValuationCosting, 'is_singular', { value: true })
export class A_ProductValuationCosting_ extends Array<A_ProductValuationCosting> {$count?: number}
Object.defineProperty(A_ProductValuationCosting_, 'name', { value: 'Product.A_ProductValuationCosting' })

export function _A_ProductWorkSchedulingAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_ProductWorkScheduling extends Base {
    declare Product?: __.Key<string>
    declare Plant?: __.Key<string>
    declare MaterialBaseQuantity?: number | null
    declare UnlimitedOverDelivIsAllowed?: boolean | null
    declare OverDelivToleranceLimit?: number | null
    declare UnderDelivToleranceLimit?: number | null
    declare ProductionInvtryManagedLoc?: string | null
    declare BaseUnit?: string | null
    declare ProductProcessingTime?: number | null
    declare ProductionSupervisor?: string | null
    declare ProductProductionQuantityUnit?: string | null
    declare ProdnOrderIsBatchRequired?: string | null
    declare TransitionMatrixProductsGroup?: string | null
    declare OrderChangeManagementProfile?: string | null
    declare MatlCompIsMarkedForBackflush?: string | null
    declare SetupAndTeardownTime?: number | null
    declare ProductionSchedulingProfile?: string | null
    declare TransitionTime?: number | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly actions: Record<never, never>
      declare static readonly keys: __.KeysOf<A_ProductWorkScheduling>
  };
}
export class A_ProductWorkScheduling extends _A_ProductWorkSchedulingAspect(__.Entity) {}
Object.defineProperty(A_ProductWorkScheduling, 'name', { value: 'Product.A_ProductWorkScheduling' })
Object.defineProperty(A_ProductWorkScheduling, 'is_singular', { value: true })
export class A_ProductWorkScheduling_ extends Array<A_ProductWorkScheduling> {$count?: number}
Object.defineProperty(A_ProductWorkScheduling_, 'name', { value: 'Product.A_ProductWorkScheduling' })
