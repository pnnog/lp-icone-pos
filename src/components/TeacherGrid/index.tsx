import Teacher from 'components/Teacher';
import * as S from './styles';

const TeacherGrid = () => (
  <S.Wrapper>
    <Teacher
      img="https://source.unsplash.com/user/willianjusten/300x400"
      name="Dr. Márcio Machionni"
    />
    <Teacher
      img="https://source.unsplash.com/user/willianjusten/300x400"
      name="Dr. Sandro Bittencourt"
    />
    <Teacher
      img="https://source.unsplash.com/user/willianjusten/300x400"
      name="Dr. Luiz Gustavo Bastos"
    />
  </S.Wrapper>
);

export default TeacherGrid;
