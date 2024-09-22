export interface ProjectProps {
  nome: string;
  image: string;
  description: string;
  sobre: string;
  link: string;
}

export interface SobreProjetoProps {
  fechar: React.MouseEventHandler<HTMLDivElement>;
  data: ProjectProps | null; 
}