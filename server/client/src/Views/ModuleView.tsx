import { useParams } from 'react-router-dom';
import ModuleList from './ModuleList';

const ModuleView = () => {
  const { action, module } = useParams();
  switch (action) {
    case 'list':
      return <ModuleList />;
    case 'create':
      return <ModuleList />;
    case 'update':
      return <ModuleList />;
    default:
      return <ModuleList />;
  }
};

export default ModuleView;
