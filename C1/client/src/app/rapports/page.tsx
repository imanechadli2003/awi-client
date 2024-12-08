"use client";

import { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, Tooltip, Legend, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

interface Vendor {
  id: number;
  name: string;
  email: string;
  phone: string;
  balance: number;
  salesData: { name: string; value: number }[];
  pieData: { name: string; value: number }[];
}

const VendorsPage = () => {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);

  useEffect(() => {
    const fetchVendors = async () => {
      const vendorsList: Vendor[] = [
        { id: 1, name: 'Taylor', email: 'taylor@example.com', phone: '5551234567', balance: 0, salesData: [{ name: 'Jan', value: 12 }, { name: 'Feb', value: 19 }, { name: 'Mar', value: 3 }], pieData: [{ name: 'Red', value: 300 }, { name: 'Blue', value: 50 }, { name: 'Yellow', value: 100 }] },
        { id: 2, name: 'Jordan', email: 'jordan@example.com', phone: '5559876543', balance: 0, salesData: [{ name: 'Jan', value: 15 }, { name: 'Feb', value: 10 }, { name: 'Mar', value: 5 }], pieData: [{ name: 'Red', value: 200 }, { name: 'Blue', value: 150 }, { name: 'Yellow', value: 50 }] },
        { id: 3, name: 'Alex', email: 'alex@example.com', phone: '5556543210', balance: 0, salesData: [{ name: 'Jan', value: 20 }, { name: 'Feb', value: 25 }, { name: 'Mar', value: 30 }], pieData: [{ name: 'Red', value: 100 }, { name: 'Blue', value: 200 }, { name: 'Yellow', value: 300 }] },
        { id: 4, name: 'Sam', email: 'sam@example.com', phone: '5553216540', balance: 0, salesData: [{ name: 'Jan', value: 8 }, { name: 'Feb', value: 12 }, { name: 'Mar', value: 18 }], pieData: [{ name: 'Red', value: 250 }, { name: 'Blue', value: 100 }, { name: 'Yellow', value: 150 }] },
        { id: 5, name: 'Chris', email: 'chris@example.com', phone: '5557891234', balance: 0, salesData: [{ name: 'Jan', value: 5 }, { name: 'Feb', value: 7 }, { name: 'Mar', value: 10 }], pieData: [{ name: 'Red', value: 300 }, { name: 'Blue', value: 200 }, { name: 'Yellow', value: 100 }] },
        { id: 6, name: 'Pat', email: 'pat@example.com', phone: '5554567890', balance: 0, salesData: [{ name: 'Jan', value: 10 }, { name: 'Feb', value: 15 }, { name: 'Mar', value: 20 }], pieData: [{ name: 'Red', value: 150 }, { name: 'Blue', value: 250 }, { name: 'Yellow', value: 200 }] },
      ];
      setVendors(vendorsList);
    };

    fetchVendors();
  }, []);

  const handleMoreInfo = (vendor: Vendor) => {
    setSelectedVendor(vendor);
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Page des Vendeurs</h1>
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
              onClick={() => handleMoreInfo(vendor)}
              className="bg-yellow-500 text-white p-2 ml-4 rounded"
            >
              Plus d'info
            </button>
          </li>
        ))}
      </ul>

      {selectedVendor && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md w-1/2">
            <h2 className="text-xl font-bold mb-4">Plus d'info sur {selectedVendor.name}</h2>
            <div className="grid grid-cols-2 gap-4">
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={selectedVendor.salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={selectedVendor.salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="value" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={selectedVendor.pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} fill="#8884d8">
                    {selectedVendor.pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={selectedVendor.pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={40} outerRadius={60} fill="#8884d8">
                    {selectedVendor.pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-end mt-4">
              <button onClick={() => setSelectedVendor(null)} className="bg-red-500 text-white p-2 rounded">
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorsPage;