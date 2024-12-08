"use client";

import { useState, useEffect } from 'react';

interface Game {
  id: number;
  name: string;
  price: number;
  amount: number;
  seller: string;
  forSale: boolean;
}

const StockPage = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [newGames, setNewGames] = useState<Game[]>([]);

  useEffect(() => {
    // Fetch games from an API or use a static list
    const fetchGames = async () => {
      // Replace with your API call
      const gamesList = [
        { id: 1, name: 'Jeu 1', price: 50, amount: 10, seller: 'Vendeur 1', forSale: false },
        { id: 2, name: 'Jeu 2', price: 60, amount: 5, seller: 'Vendeur 2', forSale: false },
      ];
      setGames(gamesList);
    };

    fetchGames();
  }, []);

  const handleAddGame = () => {
    const newGameEntry = { id: newGames.length + 1, name: '', price: 0, amount: 0, seller: '', forSale: false };
    setNewGames([...newGames, newGameEntry]);
  };

  const handleSaveGames = () => {
    setGames([...games, ...newGames]);
    setNewGames([]);
  };

  const handleChangeNewGame = (index: number, field: string, value: string | number) => {
    const updatedGames = newGames.map((game, i) => i === index ? { ...game, [field]: value } : game);
    setNewGames(updatedGames);
  };

  const calculateTotalValue = () => {
    return newGames.reduce((total, game) => total + (game.price * game.amount), 0);
  };

  const calculateFee = (totalValue: number) => {
    return totalValue * 0.03;
  };

  const toggleForSale = (id: number) => {
    setGames(games.map(game => game.id === id ? { ...game, forSale: !game.forSale } : game));
  };

  const totalValue = calculateTotalValue();
  const fee = calculateFee(totalValue);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Page de Stock</h1>
      {newGames.map((game, index) => (
        <div key={index}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="mb-2">
              <label className="block text-gray-700 dark:text-gray-300">Nom du Jeu</label>
              <input
                type="text"
                placeholder="Nom du Jeu"
                value={game.name}
                onChange={(e) => handleChangeNewGame(index, 'name', e.target.value)}
                className="border p-2 w-full bg-white dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 dark:text-gray-300">Prix</label>
              <input
                type="number"
                placeholder="Prix"
                value={game.price}
                onChange={(e) => handleChangeNewGame(index, 'price', parseFloat(e.target.value))}
                className="border p-2 w-full bg-white dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 dark:text-gray-300">Quantité</label>
              <input
                type="number"
                placeholder="Quantité"
                value={game.amount}
                onChange={(e) => handleChangeNewGame(index, 'amount', parseFloat(e.target.value))}
                className="border p-2 w-full bg-white dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 dark:text-gray-300">Vendeur</label>
              <input
                type="text"
                placeholder="Vendeur"
                value={game.seller}
                onChange={(e) => handleChangeNewGame(index, 'seller', e.target.value)}
                className="border p-2 w-full bg-white dark:bg-gray-800 dark:text-white"
              />
            </div>
          </div>
          {index < newGames.length - 1 && <hr className="my-4 border-gray-300 dark:border-gray-600" />}
        </div>
      ))}
      <button onClick={handleAddGame} className="bg-blue-500 text-white p-2 w-full mb-4">
        Ajouter Jeu
      </button>
      <div className="mb-4 p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800 dark:text-white">
        <h2 className="text-xl font-bold mb-2">Valeur Totale</h2>
        <p>Valeur Totale: €{totalValue.toFixed(2)}</p>
        <p className="text-red-500">- Frais (3%): €{fee.toFixed(2)}</p>
        <p className="text-red-500">Valeur Totale après frais: €{(totalValue - fee).toFixed(2)}</p>
      </div>
      <button onClick={handleSaveGames} className="bg-green-500 text-white p-2 w-full mb-4">
        Sauvegarder Jeux
      </button>
      <ul>
        {games.map((game) => (
          <li key={game.id} className="border p-4 mb-2 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <p className="font-bold">{game.name}</p>
              <p>Prix: €{game.price}</p>
              <p>Quantité: {game.amount}</p>
              <p>Vendeur: {game.seller}</p>
            </div>
            <button
              onClick={() => toggleForSale(game.id)}
              className={`p-2 ${game.forSale ? 'bg-green-500' : 'bg-red-500'} text-white rounded`}
            >
              {game.forSale ? 'En vente' : 'Mettre en vente'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockPage;