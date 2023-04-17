import { homeData } from 'data/data';

import { GetStaticProps } from 'next';
import HomeTemplate, { HomeTemplateProps } from 'templates/Home';

export default function Index(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      banners: homeData.banners,
      courses: homeData.courses,
      pacientHighlight: homeData.highlight,
      news: homeData.news
    }
  };
};
