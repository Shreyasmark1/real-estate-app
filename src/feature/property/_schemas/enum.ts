export enum AdvertiserType {
    OWNER = "OWNER",
    AGENT = "AGENT",
    BROKER = "BROKER",
    DEALER = "DEALER",
    BUILDER = "BUILDER",
}

export enum TransactionType {
    RESALE = "RESALE",
    NEW = "NEW_PROPERTY",
    NEW_BOOKING = "NEW_BOOKING"
}

export enum SaleType {
    SALE = "SALE",
    LEASE = "LEASE",
    RENTAL = "RENTAL",
    AUCTION = "AUCTION",
    EXCHANGE = "EXCHANGE",
}

export enum PropertyDDType {
    PROPERTY_TYPE = "PROPERTY_TYPE",
    SALE_TYPE = "SALE_TYPE",
    ADVERTISER_TYPE = "ADVERTISER_TYPE"
} 

export enum FileContextType {
    propertyBannerImg = "propertyBannerImg",
    propertyImages = "propertyImages"
}