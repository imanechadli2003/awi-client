'use client';

import React, { useState } from 'react';

interface Session {
    fraisDepot: string;
    fraisVente: string;
    nomSession: string;
}

interface Gestionnaire {
    nom: string;
    prenom: string;
    email: string;
    motDePasse: string;
}

const SettingsPage: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fraisDepot, setFraisDepot] = useState('');
    const [fraisVente, setFraisVente] = useState('');
    const [nomSession, setNomSession] = useState('');
    const [activeSession, setActiveSession] = useState<Session | null>(null);
    const [sessionHistory, setSessionHistory] = useState<Session[]>([
        { fraisDepot: '10%', fraisVente: '20%', nomSession: 'Session 1' },
        { fraisDepot: '11%', fraisVente: '21%', nomSession: 'Session 2' },
        { fraisDepot: '12%', fraisVente: '22%', nomSession: 'Session 3' },
        { fraisDepot: '13%', fraisVente: '23%', nomSession: 'Session 4' },
        { fraisDepot: '14%', fraisVente: '24%', nomSession: 'Session 5' },
        { fraisDepot: '15%', fraisVente: '25%', nomSession: 'Session 6' },
        { fraisDepot: '16%', fraisVente: '26%', nomSession: 'Session 7' },
        { fraisDepot: '17%', fraisVente: '27%', nomSession: 'Session 8' },
        { fraisDepot: '18%', fraisVente: '28%', nomSession: 'Session 9' },
        { fraisDepot: '19%', fraisVente: '29%', nomSession: 'Session 10' }
    ]);
    const [gestionnaires, setGestionnaires] = useState<Gestionnaire[]>([]);
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [motDePasse, setMotDePasse] = useState('');
    const [adminPassword] = useState('admin123'); // Set the admin password here

    const handleLogin = () => {
        // Ajoutez votre logique de connexion ici
        setIsLoggedIn(true);
    };

    const handleCreateSession = () => {
        const newSession = { fraisDepot, fraisVente, nomSession };
        setSessionHistory([...sessionHistory, newSession]);
        setActiveSession(newSession);
        setFraisDepot('');
        setFraisVente('');
        setNomSession('');
    };

    const handleCloseSession = () => {
        setActiveSession(null);
    };

    const handleAddGestionnaire = () => {
        const newGestionnaire = { nom, prenom, email, motDePasse };
        setGestionnaires([...gestionnaires, newGestionnaire]);
        setNom('');
        setPrenom('');
        setEmail('');
        setMotDePasse('');
    };

    const handleShowPassword = (gestionnaire: Gestionnaire) => {
        const adminPass = prompt('Veuillez entrer le mot de passe administrateur pour voir le mot de passe du gestionnaire :');
        if (adminPass === adminPassword) {
            alert(`Mot de passe du gestionnaire ${gestionnaire.nom} : ${gestionnaire.motDePasse}`);
        } else {
            alert('Mot de passe administrateur incorrect.');
        }
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
                    <button onClick={handleCloseSession} style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: 'red', color: 'white', border: 'none', cursor: 'pointer' }}>Fermer Session</button>
                </div>
            )}

            <div className="session-history" style={{ display: 'flex', flexDirection: 'row', borderRadius: '12px', border: '1px solid #ddd', padding: '20px', marginBottom: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', height: '400px' }}>
                <div className="session-history-list" style={{ flex: 1, overflowY: 'auto', maxHeight: '100%' }}>
                    <h3 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: 'bold', position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 1 }}>Section Historique</h3>
                    {sessionHistory.map((session, index) => (
                        <div key={index} style={{ marginBottom: '20px' }}>
                            <p><strong>Nom Session:</strong> {session.nomSession}</p>
                            <p><strong>Frais Dépôt:</strong> {session.fraisDepot}</p>
                            <p><strong>Frais Vente:</strong> {session.fraisVente}</p>
                            {index < sessionHistory.length - 1 && <hr style={{ margin: '20px 0', borderColor: '#ddd' }} />}
                        </div>
                    ))}
                </div>
            </div>

            <div className="gestionnaire-section" style={{ display: 'flex', flexDirection: 'row', borderRadius: '12px', border: '1px solid #ddd', padding: '20px', marginBottom: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', height: '400px' }}>
                <div className="add-gestionnaire" style={{ flex: 1, marginRight: '20px' }}>
                    <h3 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: 'bold' }}>Ajouter Gestionnaire</h3>
                    <input
                        type="text"
                        placeholder="Nom"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                    />
                    <input
                        type="text"
                        placeholder="Prénom"
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                        style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                    />
                    <input
                        type="password"
                        placeholder="Mot de passe"
                        value={motDePasse}
                        onChange={(e) => setMotDePasse(e.target.value)}
                        style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                    />
                    <button onClick={handleAddGestionnaire} style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: '#007BFF', color: 'white', border: 'none', cursor: 'pointer', marginTop: '10px' }}>Ajouter Gestionnaire</button>
                </div>

                <div className="gestionnaire-list" style={{ flex: 1, overflowY: 'auto', maxHeight: '100%' }}>
                    <h3 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: 'bold', position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 1 }}>Liste des Gestionnaires</h3>
                    {gestionnaires.map((gestionnaire, index) => (
                        <div key={index} style={{ marginBottom: '20px' }}>
                            <p><strong>Nom:</strong> {gestionnaire.nom}</p>
                            <p><strong>Prénom:</strong> {gestionnaire.prenom}</p>
                            <p><strong>Email:</strong> {gestionnaire.email}</p>
                            <button onClick={() => handleShowPassword(gestionnaire)} style={{ padding: '5px 10px', borderRadius: '8px', backgroundColor: '#007BFF', color: 'white', border: 'none', cursor: 'pointer', marginTop: '10px' }}>Voir Mot de Passe</button>
                            {index < gestionnaires.length - 1 && <hr style={{ margin: '20px 0', borderColor: '#ddd' }} />}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;