import { Form, Input, Button } from 'antd';

const FormulaireCandidat = () => {
  const onFinish = (values) => {
    console.log('Informations soumises :', values);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Formulaire de candidature</h1>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="Nom" name="nom" rules={[{ required: true, message: 'Veuillez entrer votre nom' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ type: 'email', required: true, message: 'Veuillez entrer un email valide' }]}>
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">Soumettre</Button>
      </Form>
    </div>
  );
};

export default FormulaireCandidat;