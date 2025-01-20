import { Table } from 'antd';
import { useSelector } from 'react-redux';

const ListeCandidats = () => {
  const candidats = useSelector((state) => state.candidats.liste);

  const colonnes = [
    {
      title: 'Nom',
      dataIndex: 'nom',
      key: 'nom',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Liste des candidats</h1>
      <Table columns={colonnes} dataSource={candidats} rowKey="id" />
    </div>
  );
};

export default ListeCandidats;