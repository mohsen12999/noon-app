export interface ICustomer {
    name: string;
    mobile: string;
    district: string;
    address: string;
}

export interface IGroup {
    id: number;
    title: string;
    persianTitle: string;
    persianSubtitle: string;
    img: string;
    enabled: boolean;
}

export interface IMarket {
    id:number;
    title: string;
    persianTitle: string;
    persianSubtitle: string | null;
    img: string;
    discount: string | null;
    freeDeliver: boolean;
    enabled: boolean;
    groups_id: number;
    address: string;
}

export interface IOpenTime {
    dayName: string;
    dayNumber: number;
    startTime: number;
    endTime: number;
    markets_id: number;
}

export interface IProducts {
    title: string;
    persianTitle: string;
    price: number;
    img: string;
    enabled: boolean;
    max: number;
    description: string;
    markets_id: number;
}