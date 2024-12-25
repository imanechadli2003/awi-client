import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
export interface JeuxMarque {
    JeuRef_id: number;
    Nom: string;
    Editeur: string;
    Description: string;
  }
  
  export interface Game {
    JeuID: number;
    JeuRef_id: number;
    prix_unitaire: number;
    mise_en_vente: boolean;
    quantite_disponible: number;
    jeuxMarque: JeuxMarque | null;
  }
  
  export interface SalesSummary {
    AchatID: number;
    Total_paye: number;
    DateAchat: string;
    comission_vente_total: number;
  }
  
  export interface DepositSummary {
    ID_depot: number;
    VendeurID: number;
    date_depot: string;
    comission_depot_total: number;
  }


export interface DashboardMetrics{
  popularGames: Game[];
  salesSummary: SalesSummary[];
  depositSummary: DepositSummary[];
  jeuxStockes: number;
  jeuxVendues: number;
  jeuxInvendus: number;
 
    
}



export const api = createApi({
    baseQuery:fetchBaseQuery({baseUrl:process.env.NEXT_PUBLIC_API_BASE_URL}),
    reducerPath:"api",
    tagTypes:["DashboardMetrics"],
    endpoints:(build)=>({
        getDashboardMetrics:build.query<DashboardMetrics,void>({
            query:()=>"/dashboard",
            providesTags:["DashboardMetrics"]
        })
    }),
      
});
export const {

    useGetDashboardMetricsQuery
}=api;