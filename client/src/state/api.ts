import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Vendeur {
  VendeurID: number;
  Nom: string;
  Email: string;
  Telephone: string;
}
export interface Depot {
  ID_depot: number;
  VendeurID: number;  // Référence au vendeur
  date_depot: Date;
  id_session: number; // Référence à la session
  comission_depot_total: number;// Relation avec Vendeur 
}
export interface NewDepot {
  vendeurId: number;  // Référence au vendeur
jeux:{ nomJeu: number;
     prixUnitaire: number; 
     quantite_depose: number }[];// Relation avec Vendeur 
}
export interface JeuxMarque {
  JeuRef_id: number;
  Nom: string;
  Editeur: string;
  Description: string;
}
export interface Game {
  JeuID: number;
  JeuRef_id: number;
  depot_ID:number;
  prix_unitaire: number;
  mise_en_vente: boolean;
  quantite_disponible: number;
}
export interface NewGame{
  JeuRef_id: number;
  depot_ID:number;
  prix_unitaire: number;
  mise_en_vente: boolean;
  quantite_disponible: number;
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

export interface DashboardMetrics {
  popularGames: Game[];
  salesSummary: SalesSummary[];
  depositSummary: DepositSummary[];
  jeuxStockes: number;
  jeuxVendues: number;
  jeuxInvendus: number;
}

// Configuration de l'API
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  reducerPath: 'api',
  tagTypes: ['Games', 'Vendors', 'Marques', 'Depots','DashboardMetrics'],
  endpoints: (build) => ({
    // Route pour récupérer la liste des jeux
    getJeux: build.query<Game[], string | void>({
      query: (search) => ({
        url:'/stocks/jeux',
        params: search ? {search}:{} }),
      providesTags: ['Games'],
    }),
    
    getDashboardMetrics:build.query<DashboardMetrics,void>({
      query:()=>"/dashboard",
      providesTags:['DashboardMetrics']
  }),
  creerDepot: build.mutation<Depot, NewDepot>({
    query: (newdepot) => ({
      url: 'stocks/depot',
      method: 'POST',
      body: newdepot,
    }),
    invalidatesTags: ['Depots'],
  }),


    // Route pour mettre un jeu en vente
    mettreEnVente: build.mutation<Game, { id: number; miseEnVente: boolean }>({
      query: ({ id, miseEnVente }) => ({
        url: `stocks/jeux/${id}/mettre-en-vente`,
        method: 'PUT',
        body: { mise_en_vente: miseEnVente },
      }),
      invalidatesTags: ['Games'],
    }),

    // Route pour créer un dépôt
    

    // Route pour récupérer la liste des vendeurs
    getVendeurs: build.query<Vendeur[], void>({
      query: () => 'stocks/vendeurs',
      providesTags: ['Vendors'],
    }),
    getDepots: build.query<Depot[], void>({
      query: () => 'stocks/depots',
      providesTags: ['Depots'],
    }),
    // Route pour récupérer un vendeur spécifique avec ses dépôts associés
    getVendeurById: build.query<Vendeur, number>({
      query: (id) => `stocks/vendeurs/${id}`,
      providesTags: ['Vendors'],
    }),

    // Route pour récupérer toutes les marques de jeux
    getAllJeuxMarques: build.query<JeuxMarque[], void>({
      query: () => 'stocks/marques',
      providesTags: ['Marques'],
    }),

    // Route pour récupérer une marque de jeu spécifique
    getJeuxMarqueById: build.query<JeuxMarque, number>({
      query: (id) => `stocks/marques/${id}`,
      providesTags: ['Marques'],
    }),
  }),
});

// Hooks pour récupérer et manipuler les données
export const {
  useGetJeuxQuery,
  useMettreEnVenteMutation,
  useCreerDepotMutation,
  useGetVendeursQuery,
  useGetVendeurByIdQuery,
  useGetAllJeuxMarquesQuery,
  useGetJeuxMarqueByIdQuery,
  useGetDashboardMetricsQuery,
  useGetDepotsQuery,
} = api;
