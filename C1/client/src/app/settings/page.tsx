'use client';

import React, { useState } from 'react';

const SettingsPage: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fraisDepot, setFraisDepot] = useState('');
    const [fraisVente, setFraisVente] = useState('');
    const [dateDebut, setDateDebut] = useState('');
    const [dateFin, setDateFin] = useState('');
    const [nomSession, setNomSession] = useState('');

    const handleLogin = () => {
        // Ajoutez votre logique de connexion ici
        setIsLoggedIn(true);
    };

    if (!isLoggedIn) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f5' }}>
                <div style={{ borderRadius: '12px', border: '1px solid #ddd', padding: '40px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', width: '300px', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}>Connexion</h2>
                    <input
                        type="text"
                        placeholder="Nom d'utilisateur"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                    />
                    <input
                        type="password"
                        placeholder="Mot de passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '8px', border: '1px solid #ccc' }}
                    />
                    <button onClick={handleLogin} style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: '#007BFF', color: 'white', border: 'none', cursor: 'pointer' }}>Connexion</button>
                </div>
            </div>
        );
    }

    return (
        <div className="settings-page" style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            <div className="frais-generaux" style={{ borderRadius: '12px', border: '1px solid #ddd', padding: '20px', marginBottom: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <h3 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: 'bold' }}>Frais Généraux</h3>
                <input
                    type="text"
                    placeholder="Frais Dépôt"
                    value={fraisDepot}
                    onChange={(e) => setFraisDepot(e.target.value)}
                    style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                />
                <input
                    type="text"
                    placeholder="Frais Vente"
                    value={fraisVente}
                    onChange={(e) => setFraisVente(e.target.value)}
                    style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                />
                <button style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: '#007BFF', color: 'white', border: 'none', cursor: 'pointer' }}>Faire Changement</button>
            </div>

            <div className="detail-session" style={{ borderRadius: '12px', border: '1px solid #ddd', padding: '20px', marginBottom: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <h3 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: 'bold' }}>Détail Session</h3>
                <input
                    type="text"
                    placeholder="Date Début"
                    value={dateDebut}
                    onChange={(e) => setDateDebut(e.target.value)}
                    style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                />
                <input
                    type="text"
                    placeholder="Date Fin"
                    value={dateFin}
                    onChange={(e) => setDateFin(e.target.value)}
                    style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                />
                <input
                    type="text"
                    placeholder="Nom Session"
                    value={nomSession}
                    onChange={(e) => setNomSession(e.target.value)}
                    style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                />
                <button style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: '#28a745', color: 'white', border: 'none', cursor: 'pointer', marginTop: '10px' }}>Créer Session</button>
            </div>

            <button style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: 'red', color: 'white', border: 'none', cursor: 'pointer' }}>Fermer Session</button>
        </div>
    );
};

export default SettingsPage;