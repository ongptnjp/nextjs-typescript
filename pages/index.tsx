import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import styles from '../styles/Home.module.css'

type User = {
  name: string;
  lastname: string;
  age: {
    year: Number;
    month: Number;
    day: Number
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      user: {
        name: "Tony",
        lastname: "Stark",
        age: {
          year: 43,
          month: 6,
          day: 20
        }
      }
    }
  }
}

const Home: NextPage = ({ user } : InferGetStaticPropsType<typeof getStaticProps>) => {
  const currentUser = user as User;
  return (
    <div className={styles.container}>
      <h1>{currentUser.name} {currentUser.lastname}</h1>
      <h2>{currentUser.age.year}</h2>
    </div>
  )
}

export default Home
