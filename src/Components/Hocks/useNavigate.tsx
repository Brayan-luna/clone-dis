import { useNavigate } from 'react-router-dom';

type NavigateFunction = (path: string) => void;

export  const useCustomNavigate = (): NavigateFunction => {
  const navigate = useNavigate();

  const customNavigate = (path: string): void => {
    navigate(path);
  };

  return customNavigate;
};
