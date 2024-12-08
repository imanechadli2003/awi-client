'use client';

import React, { useState, useEffect } from 'react';

interface Session {
    fraisDepot: string;
    fraisVente: string;
    dateDebut: string;
    dateFin: string;
    nomSession: string;
}

const SettingsPage: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fraisDepot, setFraisDepot] = useState('');
    const [fraisVente, setFraisVente] = useState('');
    const [dateDebut, setDateDebut] = useState('');
    const [dateFin, setDateFin] = useState('');
    const [nomSession, setNomSession] = useState('');
    const [activeSession, setActiveSession] = useState<Session | null>(null);
    const [sessionHistory, setSessionHistory] = useState<Session[]>([
        { fraisDepot: '10%', fraisVente: '20%', dateDebut: '2023-01-01', dateFin: '2023-01-31', nomSession: 'Session 1' },
        { fraisDepot: '11%', fraisVente: '21%', dateDebut: '2023-02-01', dateFin: '2023-02-28', nomSession: 'Session 2' },
        { fraisDepot: '12%', fraisVente: '22%', dateDebut: '2023-03-01', dateFin: '2023-03-31', nomSession: 'Session 3' },
        { fraisDepot: '13%', fraisVente: '23%', dateDebut: '2023-04-01', dateFin: '2023-04-30', nomSession: 'Session 4' },
        { fraisDepot: '14%', fraisVente: '24%', dateDebut: '2023-05-01', dateFin: '2023-05-31', nomSession: 'Session 5' },
        { fraisDepot: '15%', fraisVente: '25%', dateDebut: '2023-06-01', dateFin: '2023-06-30', nomSession: 'Session 6' },
        { fraisDepot: '16%', fraisVente: '26%', dateDebut: '2023-07-01', dateFin: '2023-07-31', nomSession: 'Session 7' },
        { fraisDepot: '17%', fraisVente: '27%', dateDebut: '2023-08-01', dateFin: '2023-08-31', nomSession: 'Session 8' },
        { fraisDepot: '18%', fraisVente: '28%', dateDebut: '2023-09-01', dateFin: '2023-09-30', nomSession: 'Session 9' },
        { fraisDepot: '19%', fraisVente: '29%', dateDebut: '2023-10-01', dateFin: '2023-10-31', nomSession: 'Session 10' }
    ]);

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        const currentSession = sessionHistory.find(session => today >= session.dateDebut && today <= session.dateFin);
        setActiveSession(currentSession || null);
    }, [sessionHistory]);

    const handleLogin = () => {
        // Ajoutez votre logique de connexion ici
        setIsLoggedIn(true);
    };

    const handleCreateSession = () => {
        const newSession = { fraisDepot, fraisVente, dateDebut, dateFin, nomSession };
        setSessionHistory([...sessionHistory, newSession]);
        setFraisDepot('');
        setFraisVente('');
        setDateDebut('');
        setDateFin('');
        setNomSession('');
    };

    const handleCloseSession = () => {
        setActiveSession(null);
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
            <div className="creation-session" style={{ borderRadius: '12px', border: '1px solid #ddd', padding: '20px', marginBottom: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <h3 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: 'bold' }}>Création Session</h3>
                <input
                    type="text"
                    placeholder="Frais Dépôt (%)"
                    value={fraisDepot}
                    onChange={(e) => setFraisDepot(e.target.value)}
                    style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                />
                <input
                    type="text"
                    placeholder="Frais Vente (%)"
                    value={fraisVente}
                    onChange={(e) => setFraisVente(e.target.value)}
                    style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                />
                <input
                    type="date"
                    placeholder="Date Début"
                    value={dateDebut}
                    onChange={(e) => setDateDebut(e.target.value)}
                    style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                />
                <input
                    type="date"
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
                <button onClick={handleCreateSession} style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: '#28a745', color: 'white', border: 'none', cursor: 'pointer', marginTop: '10px' }}>Créer Session</button>
            </div>

            {activeSession && (
                <div className="active-session" style={{ borderRadius: '12px', border: '1px solid #ddd', padding: '20px', marginBottom: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <h3 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: 'bold' }}>Session Active</h3>
                    <p><strong>Nom Session:</strong> {activeSession.nomSession}</p>
                    <p><strong>Frais Dépôt:</strong> {activeSession.fraisDepot}</p>
                    <p><strong>Frais Vente:</strong> {activeSession.fraisVente}</p>
                    <p><strong>Date Début:</strong> {activeSession.dateDebut}</p>
                    <p><strong>Date Fin:</strong> {activeSession.dateFin}</p>
                    <button onClick={handleCloseSession} style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: 'red', color: 'white', border: 'none', cursor: 'pointer' }}>Fermer Session</button>
                </div>
            )}

            <div className="session-history" style={{ borderRadius: '12px', border: '1px solid #ddd', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <h3 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: 'bold' }}>Section Historique</h3>
                {sessionHistory.map((session, index) => (
                    <div key={index} style={{ marginBottom: '20px' }}>
                        <p><strong>Nom Session:</strong> {session.nomSession}</p>
                        <p><strong>Frais Dépôt:</strong> {session.fraisDepot}</p>
                        <p><strong>Frais Vente:</strong> {session.fraisVente}</p>
                        <p><strong>Date Début:</strong> {session.dateDebut}</p>
                        <p><strong>Date Fin:</strong> {session.dateFin}</p>
                        {index < sessionHistory.length - 1 && <hr style={{ margin: '20px 0', borderColor: '#ddd' }} />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SettingsPage;