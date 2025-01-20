import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { Card, Button } from 'antd';

const DetailsCandidat = () => {
  const router = useRouter();
  const { id } = router.query;

  // Récupérer les détails du candidat sélectionné depuis le store Redux
  const candidat = useSelector((state) =>
    state.candidats.liste.find((cand) => cand.id === id)
  );

  // Vérifier si le candidat existe
  if (!candidat) {
    return (
      <div style={{ padding: '20px' }}>
        <h1>Candidat introuvable</h1>
        <Button type="primary" onClick={() => router.push('/recruteurs/liste')}>
          Retour à la liste
        </Button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Détails du candidat</h1>
      <Card style={{ maxWidth: '600px' }}>
        <p><strong>Nom :</strong> {candidat.nom}</p>
        <p><strong>Email :</strong> {candidat.email}</p>
        <p><strong>Autres informations :</strong> {candidat.infos || 'Non renseignées'}</p>
      </Card>
      <Button type="primary" onClick={() => router.push('/recruteurs/liste')} style={{ marginTop: '20px' }}>
        Retour à la liste des candidats
      </Button>
    </div>
  );
};

export default DetailsCandidat;