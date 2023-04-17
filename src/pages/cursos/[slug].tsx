import CourseTemplate, { CourseTemplateProps } from 'templates/Course';
import { courseData } from 'data/data';
import { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  //gera um array com as rotas possíveis
  const paths = courseData.map(({ slug }) => ({ params: { slug: slug } }));

  //manda as rotas para o getStaticProps  dentro de params
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  //busca o dado específico na api utilizando o slug dentro de parms como referência
  const course = courseData.find((item) => item.slug === params?.slug);

  return {
    //retorna o objeto com os dados para a página
    props: {
      title: course?.title,
      description: course?.description,
      card1: course?.card1,
      card2: course?.card2,
      card3: course?.card3,
      enrollment: course?.enrollment,
      courseType: course?.courseType,
      courseContent: course?.courseContent
    }
  };
};

export default function Index(props: CourseTemplateProps) {
  //Passa os dados recebidos para os components
  return <CourseTemplate {...props} />;
}
