using radmiDB from '../db/schema';


service CatalogService {

    @requires: 'authenticated-user'
    entity User    as projection on radmiDB.User;
    @requires: 'Admin'
    @restrict: [{
        grant: [ 'READ'],
        where: 'LANGU = ''DE'''
    }]
    entity Company as projection on radmiDB.Company;


    entity ReportData {
        key id                            : Int16;
            Product                       : String;
            ProductType                   : String;
            CrossPlantStatusValidityDate  : Date;
            CreationDate                  : String;
            LastChangeDate                : String;
            LastChangedByUser             : String;
            LastChangeDateTime            : String;
            sMarkedForDeletion            : String;
            ProductOldID                  : String;
            GrossWeight                   : String;
            PurchaseOrderQuantityUnit     : String;
            WeightUnit                    : String;
            NetWeight                     : String;
            CountryOfOrigin               : String;
            CompetitorID                  : String;
            ProductGroup                  : String;
            BaseUnit                      : String;
            ItemCategoryGroup             : String;
            ProductHierarchy              : String;
            Division                      : String;
            VarblPurOrdUnitIsActive       : String;
            VolumeUnit                    : String;
            MaterialVolume                : String;
            ANPCode                       : String;
            Brand                         : String;
            ProcurementRule               : String;
            ValidityStartDate             : String;
            LowLevelCode                  : String;
            ProdNoInGenProdInPrepackProd  : String;
            SerialIdentifierAssgmtProfile : String;
            SizeOrDimensionText           : String;
            IndustryStandardName          : String;
            ProductStandardID             : String;
            InternationalArticleNumberCat : String;
            ProductIsConfigurable         : String;
            IsBatchManagementRequired     : String;
            ExternalProductGroup          : String;
            CrossPlantConfigurableProduct : String;
            SerialNoExplicitnessLevel     : String;
            ProductManufacturerNumber     : String;
            ManufacturerNumber            : String;
            ManufacturerPartProfile       : String;
            QltyMgmtInProcmtIsActive      : Boolean;
            IndustrySector                : String;
            ChangeNumber                  : String;
            MaterialRevisionLevel         : String;
            HandlingIndicator             : String;
            WarehouseProductGroup         : String;
            WarehouseStorageCondition     : String;
            StandardHandlingUnitType      : String;
            SerialNumberProfile           : String;
            AdjustmentProfile             : String;
            PreferredUnitOfMeasure        : String;
            IsPilferable                  : String;
            IsRelevantForHzdsSubstances   : String;
            QuarantinePeriod              : String;
            TimeUnitForQuarantinePeriod   : String;
            QualityInspectionGroup        : String;
            AuthorizationGroup            : String;
            HandlingUnitType              : String;
            HasVariableTareWeightm        : String;
            MaximumPackagingLength        : String;
            MaximumPackagingWidth         : String;
            MaximumPackagingHeight        : String;
            UnitForMaxPackagingDimensions : String;
            to_Description                : String;
            uri1                          : String;
            uri2                          : String;


    }

    
}
