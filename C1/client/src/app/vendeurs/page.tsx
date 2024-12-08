"use client";

import { useState, useEffect } from 'react';

interface Vendor {
  id: number;
  name: string;
  email: string;
  phone: string;
  balance: number;
}

const VendorsPage = () => {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [newVendor, setNewVendor] = useState({ name: '', email: '', phone: '' });
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);

  useEffect(() => {
    // Fetch vendors from an API or use a static list
    const fetchVendors = async () => {
      // Replace with your API call
      const vendorsList = [
        { id: 1, name: 'Taylor', email: 'taylor@example.com', phone: '5551234567', balance: 0 },
        { id: 2, name: 'Jordan', email: 'jordan@example.com', phone: '5559876543', balance: 0 },
      ];
      setVendors(vendorsList);
    };

    fetchVendors();
  }, []);

  const handleAddVendor = () => {
    const newVendorEntry = { ...newVendor, id: vendors.length + 1, balance: 0 };
    setVendors([...vendors, newVendorEntry]);
    setNewVendor({ name: '', email: '', phone: '' });
  };

  const handleUpdateVendor = (vendor: Vendor) => {
    setSelectedVendor(vendor);
  };

  const handleSaveVendor = () => {
    if (selectedVendor) {
      setVendors(vendors.map(v => v.id === selectedVendor.id ? selectedVendor : v));
      setSelectedVendor(null);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Page des Vendeurs</h1>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="mb-2">
          <label className="block text-gray-700 dark:text-gray-300">Nom</label>
          <input
            type="text"
            placeholder="Nom"
            value={newVendor.name}
            onChange={(e) => setNewVendor({ ...newVendor, name: e.target.value })}
            className="border p-2 w-full bg-white dark:bg-gray-800 dark:text-white"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="text"
            placeholder="Email"
            value={newVendor.email}
            onChange={(e) => setNewVendor({ ...newVendor, email: e.target.value })}
            className="border p-2 w-full bg-white dark:bg-gray-800 dark:text-white"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 dark:text-gray-300">Téléphone</label>
          <input
            type="text"
            placeholder="Téléphone"
            value={newVendor.phone}
            onChange={(e) => setNewVendor({ ...newVendor, phone: e.target.value })}
            className="border p-2 w-full bg-white dark:bg-gray-800 dark:text-white"
          />
        </div>
      </div>
      <button onClick={handleAddVendor} className="bg-blue-500 text-white p-2 w-full mb-4">
        Ajouter Vendeur
      </button>
      <ul>
        {vendors.map((vendor) => (
          <li key={vendor.id} className="border p-4 mb-2 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <p className="font-bold">{vendor.name}</p>
              <p>Email: {vendor.email}</p>
              <p>Téléphone: {vendor.phone}</p>
            </div>
            <div className="ml-4">
              <p className="font-bold">Balance: ${vendor.balance}</p>
            </div>
            <button
              onClick={() => handleUpdateVendor(vendor)}
              className="bg-yellow-500 text-white p-2 ml-4 rounded"
            >
              Mettre à jour
            </button>
          </li>
        ))}
      </ul>

      {selectedVendor && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md w-1/2">
            <h2 className="text-xl font-bold mb-4">Mettre à jour Vendeur</h2>
            <div className="mb-2">
              <label className="block text-gray-700 dark:text-gray-300">Nom</label>
              <input
                type="text"
                placeholder="Nom"
                value={selectedVendor.name}
                onChange={(e) => setSelectedVendor({ ...selectedVendor, name: e.target.value })}
                className="border p-2 w-full bg-white dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="text"
                placeholder="Email"
                value={selectedVendor.email}
                onChange={(e) => setSelectedVendor({ ...selectedVendor, email: e.target.value })}
                className="border p-2 w-full bg-white dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 dark:text-gray-300">Téléphone</label>
              <input
                type="text"
                placeholder="Téléphone"
                value={selectedVendor.phone}
                onChange={(e) => setSelectedVendor({ ...selectedVendor, phone: e.target.value })}
                className="border p-2 w-full bg-white dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div className="flex justify-end">
              <button onClick={() => setSelectedVendor(null)} className="bg-red-500 text-white p-2 rounded mr-2">
                Annuler
              </button>
              <button onClick={handleSaveVendor} className="bg-green-500 text-white p-2 rounded">
                Sauvegarder
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorsPage;